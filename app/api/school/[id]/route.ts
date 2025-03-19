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
            }, {status: 400})
        }
        const school = await prisma.school.create({
            data:{
                name: body.name,
                location: body.location,
                createdAt: new Date(),
                userId: user?.id,
                from: body.from,
                to: body.to,
                description: body.description

            }
        })

        return NextResponse.json({
            school
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
        const schools = await prisma.school.findMany({
            where:{
                userId: user?.id
            }
        })
        return NextResponse.json({
            schools
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}

export async function PUT(req: NextRequest, {params}:{params: {id: string}}){
    try {
        const user = await currentUser();
        const body = await req.json();
        if(!user){
            return NextResponse.json({
                message: "Something went wrong"
            }, {status: 400})
        }
        const updateSchool = await prisma.school.update({
            where:{
                id: params.id as string
            }, data:{
                name: body.name,
                location: body.location,
                from: body.from,
                to: body.to,
                description: body.description
            }
        })

        return NextResponse.json({
            updateSchool
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "something went wrong"
        }, {status: 500})
    }
}

export async function DELETE({params}:{params: {id: string}}){
    try {
        const user = await currentUser();
        if(!user){
            return NextResponse.json({
                message: "Something went wrong"
            }, {status: 400})
        }
        const deleteSchool = await prisma.school.delete({
            where:{
                id: params.id as string
            }
        })

        return NextResponse.json({
            deleteSchool
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}