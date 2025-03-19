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

        const skillAdd = await prisma.skills.create({
            data:{
                name: body.name,
                userId: user?.id,
                experience: body.experience,
                foundation: body.foundation,
            }
        })

        return NextResponse.json({
            skillAdd
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
        const skills = await prisma.skills.findMany({
            where:{
                userId: user?.id
            }
        });

        return NextResponse.json({
            skills
        }, {status: 200});
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}

export async function PUT(req: NextRequest, {params}:{params: {id: string}}){
    try {
        const user = await currentUser();
        const skillId = params.id;
        const body = await req.json();
        if(!user){
            return NextResponse.json({
                message: "Something went wrong"
            })
        }
        const updateSkills = await prisma.skills.update({
            where:{
                id: skillId
            }, data:{
                name: body.name,
                experience: body.experience,
                foundation: body.foundation
            }
        })

        return NextResponse.json({
            updateSkills
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}

export async function DELETE({params}:{params: {id: string}}){
    try {
        const user = await currentUser();
        const skillId = params.id;
        if(!user){
            return NextResponse.json({
                message: "Something went wrong"
            }, {status: 400})
        }
        const deleteSkills = await prisma.skills.delete({
            where:{
                id: skillId
            }
        })
        return NextResponse.json({
            deleteSkills
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}