"use client"
import { signIn } from "next-auth/react";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl text-gray-700 font-semibold mb-6">Sign in</h1>
        <div>
          <button
            onClick={() => signIn("google",{callbackUrl:'/'})}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-2">
            Sign in with Google
          </button>
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
