-- CreateEnum
CREATE TYPE "Foundation" AS ENUM ('Beginner', 'Intermediate', 'Advanced');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skills" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "foundation" "Foundation" NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "School" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "College" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "College_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "gitLink" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pdfLink" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Follow" (
    "id" TEXT NOT NULL,
    "followId" TEXT NOT NULL,
    "followingId" TEXT NOT NULL,

    CONSTRAINT "Follow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Community" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Community_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunityOnUser" (
    "userId" TEXT NOT NULL,
    "communityId" TEXT NOT NULL,

    CONSTRAINT "CommunityOnUser_pkey" PRIMARY KEY ("userId","communityId")
);

-- CreateTable
CREATE TABLE "CommunityMessage" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "communityId" TEXT NOT NULL,

    CONSTRAINT "CommunityMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Referral" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "referralId" TEXT NOT NULL,

    CONSTRAINT "Referral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Follow_followId_followingId_key" ON "Follow"("followId", "followingId");

-- AddForeignKey
ALTER TABLE "Skills" ADD CONSTRAINT "Skills_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "School" ADD CONSTRAINT "School_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "College" ADD CONSTRAINT "College_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followId_fkey" FOREIGN KEY ("followId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityOnUser" ADD CONSTRAINT "CommunityOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityOnUser" ADD CONSTRAINT "CommunityOnUser_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityMessage" ADD CONSTRAINT "CommunityMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityMessage" ADD CONSTRAINT "CommunityMessage_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_referralId_fkey" FOREIGN KEY ("referralId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
