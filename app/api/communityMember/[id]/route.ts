import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server";

export async function GET({params}: {
    params: {id: string}
}){
    try {
        const user = await currentUser();
        if(!user){
            return NextResponse.json({
                message: "Something went wrong"
            }, {status: 400})
        }

        const community = await prisma.communityOnUser.findMany({
            where:{
                communityId: params.id
            }
        })

        return NextResponse.json({
            community
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}

export async function DELETE({params}:{
    params: {id: string}
}){
    try {
        const user = await currentUser();
        if(!user){
            return NextResponse.json({
                message: "Something went wrong"
            }, {status: 400})
        }

        const community = await prisma.communityOnUser.delete({
           where:{
            userId_communityId:{
                userId: user?.id,
                communityId: params.id
            }
           }
        })

        return NextResponse.json({
            community
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        })
    }
}