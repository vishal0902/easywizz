import { signOut } from "next-auth/react"
import Image from "next/image"

const Profile = ({ username, onClick }) => {

  return (
    <div className="border border-gray-300 rounded-2xl bg-gray-600 p-5 flex items-center flex-col space-y-3 opacity-95 ">
      <div className="flex space-x-2 items-center">
        <div className="rounded-full  p-2">
          {/* <Image alt="profile_image" src={"/user.png"} height={10} width={30}  /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            width="1.2em"
            height="1.2em"
          >
            <g fill="#2b7fff">
              <circle cx="6" cy="3" r="3"></circle>
              <path d="M6 7a5 5 0 0 0-5 4.42a.51.51 0 0 0 .5.58h8.94a.51.51 0 0 0 .5-.58A5 5 0 0 0 6 7"></path>
            </g>
          </svg>

        </div>
        <span className="text-xl text-white" >{username}</span>
      </div>
      <button className=" bg-blue-500 text-white  border px-5  py-1 text-base rounded-full hover:bg-blue-200 hover:text-blue-600 hover:border-black cursor-pointer" onClick={onClick}>Sign out</button>
    </div>
  )
}

export default Profile