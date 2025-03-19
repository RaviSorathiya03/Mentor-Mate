import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try {
        const user = await currentUser();
        const body = await req.json();
        if(!user){
            return NextResponse.json({
                message:"Something went wrong"
            }, {status: 200})
        }
        const experience = await prisma.experience.create({
            data:{
                name: body.name,
                role: body.role,
                gitLink: body.gitLink,
                startDate: body.startDate,
                endDate: body.endDate,
                userId: user?.id
            }
        })

        return NextResponse.json({
            experience
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
            }, {status: 400})
        }
        const experience = await prisma.experience.findMany({
            where:{
                userId: user?.id
            }
        })

        return NextResponse.json({
            experience
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Someting went wrong"
        }, {status: 500})
    }
}

export async function PUT(req: NextRequest, {params}: {params:{id: string}}){
    try {
        const user = await currentUser();
        const body = await req.json();
        if(!user){
            return NextResponse.json({
                message: "Something went wrong"
            }, {status: 400})
        }
        const experience = await prisma.experience.update({
            where:{
                id: params.id
            }, data:{
                name: body.name,
                role: body.role,
                gitLink: body.gitLink,
                startDate: body.startDate,
                endDate: body.endDate
            }
        })
        return NextResponse.json({
            experience
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}

export async function DELETE({params}:{params:{id: string}}){
    try {
        const user = await currentUser();
        if(!user){
            return NextResponse.json({
                message: "Something went wrong"
            }, {status: 400})
        }

        const experience = await prisma.experience.delete({
            where:{
                id: params.id
            }
        });

        return NextResponse.json({
            experience
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}