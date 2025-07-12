"use client"

import { redirect } from 'next/navigation'
import React from 'react'

export const LogoSection = () => {
  return (
    <div>
        <div className="flex items-center space-x-6 px-2 cursor-pointer select-none" onClick={()=>redirect('/')} >
                      <img
                        src="logo_easywizz.svg"
                        alt="logo"
                        className="h-14 w-14 rounded-2xl"
                      />
                      <span className="text-3xl">EasyWizz</span>
                    </div>
    </div>
  )
}
