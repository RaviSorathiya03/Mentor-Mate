import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const user = await currentUser();
        if(!user){
            return NextResponse.json({
                message: "Something went wrong"
            }, {status: 400})
        }
        const userDeatils = await prisma.user.findFirst({
            where:{
                email: user?.emailAddresses[0].emailAddress
            }
        })
        return NextResponse.json({
            userDeatils
        }, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}