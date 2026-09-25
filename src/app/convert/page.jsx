"use client"
import { headers } from "next/headers";
import { notFound } from "next/navigation";


import { useSession } from "next-auth/react";
// import { motion } from "motion/react"
import { redirect } from "next/navigation";
import TiptapEditor from "../components/TiptapEditor";



export default async function Page() {

  //new code
  const headerList = await headers();
  const host = headerList.get("host") || "";

  if (host === "easywizz.vercel.app" || host.endsWith(".vercel.app") || host.endsWith(".vercel.app/convert")) {
    notFound();
  }


  const {data: session} = useSession()
  if(!session){
    redirect("/api/auth/signin")
  }
  return (
    <TiptapEditor />
  );

}


