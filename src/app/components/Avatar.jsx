import React from 'react'

export const Avatar = ({name,onClick}) => {
  let avatarLogo="A";
  const nameArr = name.toString().split(" ");

  if(nameArr.length > 1)
    avatarLogo =  nameArr[0].slice(0,1) + nameArr[1].slice(0,1)
  else
    avatarLogo =  nameArr[0].slice(0,1)

    return (
    <div className='select-none text-2xl text-center flex flex-col justify-center h-14 w-14 rounded-full bg-blue-500 text-white cursor-pointer hover:bg-blue-600 ' onClick={onClick}>{avatarLogo}</div>
  )
}
