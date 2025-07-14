"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false)
  return (
    <div>
      <div className="grid md:grid-cols-6">
        <div className="col-span-2 py-5 px-16 min-w-fit" onClick={()=>setLoading(true)}>
          <Link href={"/convert"}>
            <div className="p-10 border-1 border-slate-300 rounded-4xl hover:bg-gray-900">
              <h1 className="text-white text-4xl">
                Krutidev to Unicode Converter
              </h1>
              <ul className="mt-5 space-y-2 text-xl mb-5">
                <li>🚩 Hassle free Conversion</li>
                <li>🎡 Retains the exact format</li>
                <li>🚀 Blazingly fast</li>
                <li>🤷‍♂️ Easy to use</li>
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

        <div className="col-span-4"></div>
      </div>
    </div>
  );
}
