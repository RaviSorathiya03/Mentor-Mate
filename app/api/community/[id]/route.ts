import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server";

export async function GET({params}: {
    params:{id: string}
}){
    try {
        const user = await currentUser();
        if(!user){
            return NextResponse.json({
                message: "something went wrong"
            })
        }

        const community = await prisma.community.findFirst({
            where:{
                id: params.id
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


export async function DELETE({params}: {
    params: {id: string}
}){
    try {
        const user = await currentUser();
        if(!currentUser){
            return NextResponse.json({
                message: "Something went wrong"
            }, {status: 400})
        }

        const community = await prisma.community.delete({
            where:{
                id: params.id
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

//community member managmenet

export async function POST({params}:{
    params:{id: string}
}){
    try {
       const user = await currentUser();
       if(!user){
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 400})
       }

       const community = await prisma.communityOnUser.create({
            data:{
                userId: user?.id,
                communityId: params.id
             }
       })

       return NextResponse.json({
            community
       }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:" Something went wrong"
        }, {status: 200})
    }
}

