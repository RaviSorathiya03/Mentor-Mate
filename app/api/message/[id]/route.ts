import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, {params}:{
    params: {id: string}
}){
    try {
        const user = await currentUser();
        const body = await req.json();
        if(!user){
            return NextResponse.json({
                message: "Something went wrong"
            }, {status: 400})
        }

        const message = await prisma.message.create({
            data:{
                message: body.message,
                senderId: user?.id,
                receiverId: params.id
            }
        })

        return NextResponse.json({
            message
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}

export async function GET({params}:{
    params: {id: string}
}){
    try {
        const user = await currentUser();
        if(!user){
            return NextResponse.json({
                message:"something went wrong"
            }, {status: 400})
        }
        const messages = await prisma.message.findMany({
            where:{
                senderId: user?.id,
                receiverId: params.id
            }
        })

        return NextResponse.json({
            messages
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}

export async function DELETE(req: NextRequest){
    try {
        const user = await currentUser();
        const body = await req.json();
        if(!user){
            return NextResponse.json({
                message: "Something went wrong"
            })
        }
        const messages = await prisma.message.delete({
            where:{
                id: body.id as string
            }
        })

        return NextResponse.json({
            messages
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}