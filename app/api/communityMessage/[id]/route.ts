import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, {params}:{
    params:{id: string}
}){
    try {
        const user = await currentUser();
        const body = await req.json();
        if(!user){
            return NextResponse.json({
                message: "Something went wrong"
            }, {status: 400})
        }

        const communityMessage = await prisma.communityMessage.create({
            data:{
                message: body.message,
                userId: user?.id,
                communityId: params.id
            }
        })

        return NextResponse.json({
            communityMessage
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
                message: "Something went wrong"
            }, {status: 400})
        }

        const messages = await prisma.communityMessage.findMany({
            where:{
                communityId: params.id
            }
        })

        return NextResponse.json({
            messages
        }, {status: 400})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "something went wrong"
        }, {status: 500})
    }
}