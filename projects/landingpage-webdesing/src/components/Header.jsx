import { useState } from 'react'
import { RiCheckboxBlankCircleFill, RiMenuLine, RiCloseLine } from 'react-icons/ri'

export function Header () {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <header className='flex items-center justify-between xl:justift-start py-4 px-8 w-full h-[10vh] z-50 md:px-20 xl:flex xl:py-0 xl:grid-cols-[(1fr, 2fr)]'>
      <div className='text-center -mt-4 xl:text-end xl:w-1/6 '>
        <a href='#' className='text-[24px] font-bold relative pl-1 bg-white text-terceary'>
          Power<span className='text-primary text-5xl'>.</span>{' '}
          <RiCheckboxBlankCircleFill className='absolute -left-3 -bottom-3 text-primary rounded-tr-full' />
        </a>
      </div>
      <nav className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? 'left-0' : '-left-full'} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}>
        <a href='#' className='text-terceary text-[16px]'>
          Home
        </a>
        <a href='#' className='text-terceary text-[16px]'>
          About Us
        </a>
        <a href='#' className='text-terceary text-[16px]'>
          Services
        </a>
        <a href='#' className='text-terceary text-[16px]'>
          Products
        </a>
      </nav>
      <button onClick={() => setShowMenu(!showMenu)} className=' text-3xl -m-2 xl:hidden'>
        {showMenu ? <RiCloseLine /> : <RiMenuLine />}

      </button>
    </header>
  )
}
