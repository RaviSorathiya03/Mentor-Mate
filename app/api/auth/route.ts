import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(){
    try {
        const user = await currentUser();
        if(!user){
            return NextResponse.json({
                message: "Something went wrong"
            }, {status: 400})
        }
        const saveUser = await prisma.user.findFirst({
            where:{
                email: user?.emailAddresses[0].emailAddress
            }
        })

        if(saveUser){
            return NextResponse.json({
                message: "User already exists"
            }, {status: 200})
        }

        const newUser = await prisma.user.create({
            data:{
                id: user?.id,
                email: user?.emailAddresses[0].emailAddress,
                firstName: user?.firstName as string,
                lastName: user?.lastName as string,
                createdAt: new Date(),
            }
        })

        return NextResponse.json({
            newUser
        }, {status: 200})
    
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}

export async function GET(){
    try {
        const user = await currentUser();
        if(!user){
            return NextResponse.json({
                message: "Something went wrong"
            }, {status: 400})
        }
        const users = await prisma.user.findMany({
            where:{}
        });
        return NextResponse.json({
            users
        }, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}

export async function DELETE(){
    try {
        const user = await currentUser();
        if(!user){
            return NextResponse.json({
                message: "Something went wrong"
            }, {status: 400})
        }
        const deleteUser = await prisma.user.delete({
            where:{
                email: user?.emailAddresses[0].emailAddress
            }
        });
        return NextResponse.json({
            message: "User deleted successfully"
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}