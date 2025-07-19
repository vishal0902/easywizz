"use client"

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { useRef, useState } from "react";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";
import Table from "@tiptap/extension-table";
import TextAlign from "@tiptap/extension-text-align";
import Text from "@tiptap/extension-text";
import Image from "@tiptap/extension-image";
import convetToUncodeFullMarkup from "@/app/utils/convert";
import { motion } from 'motion/react'
import toast from "react-hot-toast";
// import { Indent } from "./IndentExtension";



const TiptapEditor = () => {
  const contentRef = useRef(null);
  // State for title and content
  const [krutidevText, setKrutidevText] = useState("");
  const [unicodeText, setUnicodeText] = useState("");
  // const [loading, setLoading] = useState(false)
  const [copyStatus, setCopyStatus] = useState(false);
  const [isFirstFocus, setIsFirstFocus] = useState(true)








  const CustomText = Text.extend({
    addKeyboardShortcuts() {
      return {
        Tab: () => this.editor.commands.insertContent('\t'),
      }
    }
  })



  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      // Indent,
      Image.configure({
        inline: true,

        allowBase64: true,
        HTMLAttributes: {
          className: 'img-class'
        }
      }),
      // Image,
      CustomText,
      StarterKit.configure({
        text: false,
        code: false
      }),
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph', 'table', 'TableCell', 'TableHeader', 'TableRow'], // Enable alignment for these elements
      }),
      Table.configure({
        resizable: true,
        // HTMLAttributes: { style: "border:1px solid black; border-collapse:collapse;"}

      }),
      TableRow,
      TableHeader,
      TableCell,
    ],

    // injectCSS: {},
    content: ";gk¡ Øqrhnso VsDLV isLV@Vkbi djsa---",
    onFocus: ({ editor }) => {

      if (isFirstFocus || editor.getHTML().toString() === "<p>;gk¡ Øqrhnso VsDLV isLV@Vkbi djsa---</p>") {
        console.log(editor.getHTML())
        editor.commands.clearContent(true) // Clears content on first focus
        setIsFirstFocus(false)

      }
    },
    onBlur: ({ editor }) => {
      const msg = editor.getHTML().toString();
      console.log(msg)
      if (msg === "<p></p>") {
        editor.commands.setContent(";gk¡ Øqrhnso VsDLV isLV@Vkbi djsa---")
      }
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setKrutidevText(html);
    },

  });





  const handleCopy = () => {
    if(unicodeText == "") {
      toast.error("Nothing to copy.",{
        icon: "🚫",        
      })
      return;
   }
    const div = document.getElementById('outputDiv')
    const range = document.createRange()
    range?.selectNode(div)
    window?.getSelection()?.removeAllRanges()
    window?.getSelection()?.addRange(range)
    document?.execCommand('copy')
    window?.getSelection()?.removeAllRanges();
    setCopyStatus(true)
    toast.success("Copied...😇😍")
  }


  const handleConvert = () => {
    // handleConvertDiv()
    if(krutidevText == "")
    {
      toast.error("Nothing to convert.",{
        icon: "🚫",        
      }

      )
      return;
    }
    setUnicodeText(convetToUncodeFullMarkup(krutidevText));
    console.log(convetToUncodeFullMarkup(krutidevText));
    // console.log(krutidevText);
    // await navigator.clipboard.writeText(convetToUncodeFullMarkup(krutidevText));
    setCopyStatus(false)
    toast.success("Converted Successfully...😎🤩")

  };

  if (!editor) {
    return null;
  }






  return (


    <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>

      <div className="px-5 grid min-h-[25vh] md:min-h-[90vh-100px] items-center ">

        {/* Title */}


        {/* conversion window */}
        <div className="grid md:grid-cols-12">
          {/* textarea for krutidev */}

          <div className="md:col-span-5">
            <pre>
              <div className="" onClick={() => editor?.commands.focus()}>
                <EditorContent
                  spellCheck="false"
                  className="tiptap-editor"
                  editor={editor}

                />
              </div>
            </pre>

            <div className="md:flex hidden justify-center p-2 mt-2">
              <button className="px-8 py-1  border-1 rounded-2xl
                    hover:bg-blue-500 hover:text-white cursor-pointer"
                onClick={() => {
                  setCopyStatus(false);
                  setKrutidevText("");
                  setUnicodeText("");
                  editor.commands.setContent(";gk¡ Øqrhnso VsDLV isLV@Vkbi djsa---");
                  toast.success("Cleared...🤗🤗")
                }}>
                <span>Clear</span>
              </button>
            </div>
          </div>

          {/* Button & loader for conversion action */}

          
            <div className="md:col-span-2  grid justify-center items-center mt-4 ">
              {/* <button   className="px-8 py-1  border-1 rounded-r-2xl hover:bg-white hover:text-black hover:outline-double" onClick={handleConvert}>Convert</button> */}
              <div className="md:flex hidden">
                  <svg className="cursor-pointer" onClick={handleConvert} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    width="100"
                    height="100">
                    <g fill="#2b7fff" className="hover:fill-blue-300 hover:size-12">
                      {/* <circle cx="6" cy="3" r="3"></circle> */}
                      <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z"></path>
                    </g>
                  </svg>
              </div>

              
              <div className="flex md:hidden">
                  <svg className="cursor-pointer" onClick={handleConvert} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    width="100"
                    height="100">
                    <g fill="#2b7fff" className="hover:fill-blue-300 hover:size-12">
                      {/* <circle cx="6" cy="3" r="3"></circle> */}
                      <path d="M0 10A10 10 0 1 0 10 0 10 10 0 0 0 0 10zm14.021-1.943-2.008 2.484L10 13.024l-2.01-2.483-2-2.484h8.033z"></path>
                    </g>
                  </svg>
              </div>
              
            </div>

            
          

          


          {/* Unicode window */}
          <div className="md:col-span-5">
            <pre>
              <div id="outputDiv" ref={contentRef}
                className="div-editor"
                dangerouslySetInnerHTML={{ __html: unicodeText }}>
              </div>
            </pre>

            <div className="flex justify-center p-2 mt-2">
              <button className="px-8 py-1  border-1 rounded-2xl hover:bg-blue-500 hover:text-white cursor-pointer" onClick={handleCopy}>
                {copyStatus ? <span>Copied &#10004;</span> : <span>Copy</span>}
              </button>
            </div>
          </div>
        </div>

        {/* End of conversion window  */}

        {/* Footer starts here */}
        {/* <div className="rounded-b-md text-center text-gray-300 text-sm md:text-base p-4 font-cursive ">
        Copyright &copy; 2025. All rights reserved.
      </div> */}
      </div>

    </motion.div>
  );
};


export default TiptapEditor;
