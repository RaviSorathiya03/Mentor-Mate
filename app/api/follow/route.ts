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

        const follow = await prisma.follow.create({
            data:{
                followId: user?.id,
                followingId: body.id as string
            }
        })

        return NextResponse.json({
            follow
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const user = await currentUser();
        const body = await req.json();

        if (!user) {
            return NextResponse.json({
                message: "Something went wrong"
            }, { status: 400 });
        }

        // Ensure the ID of the user to unfollow is provided
        if (!body.id) {
            return NextResponse.json({
                message: "User ID is required"
            }, { status: 400 });
        }

        // Delete the follow relationship using composite key
        await prisma.follow.delete({
            where: {
                followId_followingId: {
                    followId: user.id,      // Logged-in user
                    followingId: body.id    // Target user to unfollow
                }
            }
        });

        return NextResponse.json({
            message: "Unfollowed successfully"
        }, { status: 200 });

    } catch (error) {
        console.error("Error unfollowing user:", error);
        return NextResponse.json({
            message: "Internal Server Error"
        }, { status: 500 });
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

        const follow = await prisma.follow.findMany({
            where:{
                followingId: user?.id
            }
        })

        return NextResponse.json({
            follow
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {status: 500})
    }
}