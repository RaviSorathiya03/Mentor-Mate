import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try {
        const user = await currentUser();
        const body = await req.json();
        if(!user){
            return NextResponse.json({
                message: "Something went wrong"
            })
        }
        const achievement = await prisma.achievement.create({
            data:{
                name: body.name,
                description: body.description,
                pdfLink: body.pdfLink,
                userId: user?.id
            }
        })

        return NextResponse.json({
            achievement
        }, {status: 200})
    } catch (error) {
        console.log(error);
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
            },{status: 400})
        }

        const achievement = await prisma.achievement.findMany({
            where:{
                userId: user?.id
            }
        })

        return NextResponse.json({
            achievement
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}

export async function PUT(req: NextRequest, {params}: {params: {id: string}}){
    try {
        const user = await currentUser();
        const body = await req.json();
        if(!user){
            return NextResponse.json({
                message: "Something went wrong"
            }, {status: 400})
        }
        const achievement = await prisma.achievement.update({
            where:{
                id: params.id
            }, data:{
                name: body.name,
                description: body.description,
            }
        })

        return NextResponse.json({
            achievement
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}

export async function DELETE({params}: {params: {id: string}}){
    try {
        const user = await currentUser();
        if(!user){
            return NextResponse.json({
                message: "Something went wrong"
            }, {status: 400})
        }
        const achievement = await prisma.achievement.delete({
            where:{
                id: params.id
            }
        })

        return NextResponse.json({
            message :"Something went wrong"
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}