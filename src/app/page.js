import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
// import { useState } from "react";

export default async function Home() {
  
  // const [loading, setLoading] = useState(false)
  
  //new code

  const headerList = await headers();
  const host = headerList.get("host") || "";

  if (host === "easywizz.vercel.app" || host.endsWith(".vercel.app") || host.endsWith(".vercel.app/convert")) {
    notFound();
  }

  return (
    <div>
      <div className="flex justify-between">
        <div className="py-5 px-5 min-w-fit">
          <Link href={"/convert"}>
            <div className="p-8 border-1 border-slate-300 rounded-4xl hover:bg-gray-900">
              <h1 className="text-white text-2xl md:text-3xl font-semibold">
                Krutidev to Unicode Converter
              </h1>
              <ul className="mt-5 space-y-2 text-sm mb-2 min-w-fit w-full">
                <li>🎡 &nbsp; Retains the format (bold, italic, underline, table etc.) </li>
                <li>🚀 &nbsp; 100% Accurate and fast</li>
                <li>🚩 &nbsp; Hassle free Conversion</li>
                <li>🤷‍♂️ &nbsp; Easy to use</li>
              </ul>

              
              {/* <span className="flex justify-between">
                <span className="mt-6 text-xl md:text-2xl text-green-600">Click to go...</span>
                {loading ? <Image
                  src={"/loader.svg"}
                  alt="click_img"
                  height={60}
                  width={60}
                />:                
                <Image
                  src={"/click.png"}
                  alt="click_img"
                  height={60}
                  width={60}
                />}{" "}
              </span> */}

              //new code
              <span className="flex justify-between">
                <span className="mt-6 text-xl md:text-2xl text-green-600">Click to go...</span>
                <Image
                  src={"/click.png"}
                  alt="click_img"
                  height={60}
                  width={60}
                />
              </span>
            </div>
          </Link>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
}
