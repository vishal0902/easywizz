import { signOut } from "next-auth/react"
import Image from "next/image"

const Profile = ({username, onClick}) => {
  
  return (
    <div className="border border-gray-300 rounded-2xl bg-gray-400 p-5 flex items-center flex-col space-y-3 opacity-95 ">
        <div className="flex space-x-2 items-center">
            <div className="rounded-full bg-white border border-gray-700 p-2">
                <Image alt="profile_image" src={"/user.png"} height={10} width={30}  />

            </div>
            <span className="text-xl text-white" >{username}</span>
        </div>
        <button className=" bg-blue-500 text-white  border px-5  py-1 text-base rounded-full hover:bg-blue-200 hover:text-blue-600 hover:border-black  " onClick={onClick}>Sign out</button>
    </div>
  )
}

export default Profile