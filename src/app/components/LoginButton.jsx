"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import { useState } from "react"
import { Avatar } from "./Avatar"
import Profile from "./Profile"

export default function LoginButton() {
  const {data:session} = useSession()
  const [showBtn, setShowBtn] = useState(false)
  
  if (session) {
    return (
      
      <div className="">
        {(session.user?.name) && <Avatar name={session.user?.name} onClick={()=>setShowBtn(!showBtn)}  />}
        
        {/* {session.user?.image && <img alt="user"  src={session.user.image} className="rounded-full h-14 w-14"/> } */}
        
        {showBtn && <div className="absolute mt-4 right-2 top-16 "> <Profile username={session.user.name} onClick={() => signOut({callbackUrl:'/'})}/> </div>   }
      </div>
    )
  }
  return (
    <>
      {/* <button className="border px-5 py-1 text-base rounded-full hover:bg-white hover:text-black " onClick={() => signIn("google",{callbackUrl:"/convert"})}>Sign in</button> */}
    </>
  )
}


{/* <button onMouseLeave={()=>setShowBtn(false)} className=" bg-blue-500 text-white border px-5  py-1 text-base rounded-full hover:bg-blue-200 hover:text-blue-600 hover:border-black  " onClick={() => signOut({callbackUrl:'/'})}>Sign out</button> */}