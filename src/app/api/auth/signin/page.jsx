"use client"
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

// export default function Page() {
//   const [loading, setLoading] = useState(false);
//   return (
//     <div className="min-h-screen flex flex-col  items-center bg-black">
//       <div className="bg-gray-200 p-8 rounded-lg shadow-md text-center mt-20 border-2 border-blue-400">
//         <h1 className="text-4xl text-gray-900 font-bold mb-6">Login to continue</h1>
//         <div className="flex justify-center">
//           {loading ? <Image src={"/loader.svg"} height={30} width={30} alt="loader_img" /> :
//           <button
//             onClick={() => {setLoading(true);signIn("google",{callbackUrl:'/convert'})}}
//             className="shadow-md space-x-2 px-4 py-2 flex justify-center text-xl font-bold  bg-white border border-black text-gray-800  rounded-md hover:bg-gray-200 mb-2 focus:border-0 ">
//             <span>Sign in with</span> <Image src={"/google.png"} alt="google_icon" height={20} width={30} />
//           </button>
//           }
//         </div>
//       </div>
//     </div>
//   );
// }

// pages/auth/signin.tsx

export default function Page() {
  const [loading, setLoading] = useState(false);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-950 to-zinc-700 ">
      <div className="flex flex-col justify-center bg-gray-900 rounded-3xl shadow-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Login with Google</h1>
        <p className="text-gray-400 mb-8">Access the converter by signing in below</p>
        <div>
        {
          loading ? <div className="flex justify-self-center"> <Image src={"/loader.svg"} height={30} width={30} alt="loader_img" /></div> :
          <button
            onClick={() => {setLoading(true);signIn("google",{callbackUrl:'/convert'})}}
            className="cursor-pointer bg-white text-black font-semibold py-3 px-6 rounded-4xl shadow-lg hover:bg-gray-100 transition duration-300 flex items-center justify-center gap-3 mx-auto"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 533.5 544.3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#4285f4"
                d="M533.5 278.4c0-17.7-1.6-35.2-4.6-52H272v98.5h147.4c-6.4 34.6-25.5 63.8-54.4 83.3v68h87.8c51.5-47.5 80.7-117.5 80.7-197.8z"
              />
              <path
                fill="#34a853"
                d="M272 544.3c73.9 0 135.9-24.5 181.2-66.5l-87.8-68c-24.4 16.5-55.5 26.2-93.3 26.2-71.7 0-132.3-48.4-154-113.4H27.4v71.3c45.6 90.6 139.1 150.4 244.6 150.4z"
              />
              <path
                fill="#fbbc04"
                d="M118 322.6c-10.6-31.5-10.6-65.7 0-97.2V154h-90.6C-14.5 203.8-14.5 340.5 27.4 393.9L118 322.6z"
              />
              <path
                fill="#ea4335"
                d="M272 107.7c39.9 0 75.9 13.8 104.2 40.7l78.1-78.1C408 24.5 346 0 272 0 166.5 0 73 59.8 27.4 150.4l90.6 71.3c21.7-65 82.3-113.4 154-113.4z"
              />
            </svg>
            Sign in with Google
          </button>
        }
        </div>
      </div>
    </div>
  );
}

// SSR to fetch providers
// export async function getServerSideProps() {
//   const providers = await getProviders();
//   return {
//     props: { providers },
//   };
// }
