import React from 'react'

export const Avatar = ({name,onClick}) => {
    const avatarLogo =  name.toString().split(" ")[0].slice(0,1) + name.toString().split(" ")[1].slice(0,1)
    return (
    <div className='select-none text-2xl text-center flex flex-col justify-center h-14 w-14 rounded-full bg-blue-500 text-white cursor-pointer' onClick={onClick}>{avatarLogo}</div>
  )
}
