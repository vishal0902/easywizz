"use client"
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-screen flex flex-col  items-center bg-black">
      <div className="bg-gray-200 p-8 rounded-lg shadow-md text-center mt-20 border-2 border-blue-400">
        <h1 className="text-4xl text-gray-900 font-bold mb-6">Login to continue</h1>
        <div className="flex justify-center">
          {loading ? <Image src={"/loader.svg"} height={30} width={30} alt="loader_img" /> :
          <button
            onClick={() => {setLoading(true);signIn("google",{callbackUrl:'/convert'})}}
            className="shadow-md space-x-2 px-4 py-2 flex justify-center text-xl font-bold  bg-white border border-black text-gray-800  rounded-md hover:bg-gray-200 mb-2 focus:border-0 ">
            <span>Sign in with</span> <Image src={"/google.png"} alt="google_icon" height={20} width={30} />
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
