"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false)
  return (
    <div>
      <div className="grid md:grid-cols-10">
        <div className="col-span-2 py-5 px-5 min-w-fit" onClick={()=>setLoading(true)}>
          <Link href={"/convert"}>
            <div className="p-8 border-1 border-slate-300 rounded-4xl hover:bg-gray-900">
              <h1 className="text-white text-3xl font-semibold">
                Krutidev to Unicode Converter
              </h1>
              <ul className="mt-5 space-y-2 text-base mb-2 min-w-fit w-full">
                <li>🎡 &nbsp; Retains the format including table. </li>
                <li>🚩 &nbsp; Hassle free Conversion</li>
                <li>🚀 &nbsp; 100% Accurate and fast</li>
                <li>🤷‍♂️ &nbsp; Easy to use</li>
              </ul>
              
              <span className="flex justify-end">
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
              </span>
            </div>
          </Link>
        </div>

        <div className="col-span-8"></div>
      </div>
    </div>
  );
}
