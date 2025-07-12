"use client"

import { useSession } from "next-auth/react";
// import { motion } from "motion/react"
import { redirect } from "next/navigation";
import TiptapEditor from "../components/TiptapEditor";



export default function Page() {
  const {data: session} = useSession()
  if(!session){
    redirect("/api/auth/signin")
  }
  return (
    <TiptapEditor />
  );

}


