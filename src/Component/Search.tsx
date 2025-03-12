import React from 'react'

const Search = () => {
  return (
    <> 
   
<div className=" bg-white">
  
<div className="flex  w-full mx-7 lg:max-w-[500px] rounded-full border-gray-400 border-opacity-65   border bg-gray-100 px-2">
    

    <input type="text" className="flex w-full  bg-transparent px-3 text-gray-700 rtl:text-right outline-0" placeholder="Search name movie or select options" />

    <div className="border-gray-400 border-opacity-70 my-1 border-l "></div>

    <button type="submit" className="relative rounded-full bg-transparent px-2 py-3">
      <svg className="fill-none size-6"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0" />

        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

        <g id="SVGRepo_iconCarrier"><path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></g>
      </svg>
    </button>
  </div>
</div>
    </>
  )
}

export default Search