import React from 'react'

const Button = () => {
  return (
    <>
      <button className="relative px-4 py-2 text-lg font-medium text-gray-800 group">
  Hover Me
  <span className="absolute bottom-0 left-1/2 h-[3px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
</button>

    </>
  )
}

export default Button