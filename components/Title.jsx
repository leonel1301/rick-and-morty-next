import React from 'react'

export const Title = ({children}) => {
  return (
    <div>
        <h1 className='font-semibold'>{children}</h1>
        <div className='w-[90px] h-1 bg-white mb-2 rounded-lg'></div>
    </div>
  )
}
