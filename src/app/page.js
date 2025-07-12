import Image from "next/image";
import Link from "next/link";
// import { redirect } from "next/navigation";

export default function Home () {
  
  return (

   
      <div>
      <div className="grid md:grid-cols-3 p-5 ">
        <Link href={"/convert"} >
        <div className="p-10 col-span-1 border-1 border-slate-300 rounded-4xl hover:bg-gray-900">
          <h1 className="text-white text-6xl">
            Krutidev to Unicode Converter
          </h1>
          <ul className="mt-5 space-y-2 text-xl mb-8">
            <li>🚩 Hassle free Conversion</li>
            <li>🎡 Retains the exact format</li>
            <li>🚀 Blazingly fast</li>
            <li>🤷‍♂️ Easy to use</li>
          </ul>
          
          {/* <button onClick={()=>redirect('/convert')} className="px-8 py-3 text-2xl bg-white text-black font-semibold rounded-3xl mt-10 hover:bg-gray-900 hover:text-white hover:inset-ring-2 hover:bg-blend-overlay">Convert</button> */}
           {/* className="border bg-gray-800 text-white text-xl rounded-full px-8 py-2 hover:bg-white hover:text-black">Convert */}
           
        </div>
        </Link>
        <div className="p-10 col-span-2">
          <div className="">
            {/* <img src="/ss.webp" className="rounded-2xl" /> */}
            {/* <Image alt="Krutidev to Unicode Image" width={500}  height={500} src={"/ss.webp"} className="rounded-2xl" /> */}
          </div>
        </div>
      </div>
    </div>
    
    
  );
}