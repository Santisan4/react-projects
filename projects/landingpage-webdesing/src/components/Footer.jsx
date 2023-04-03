import { RiCheckboxBlankCircleFill, RiInstagramFill, RiFacebookCircleFill, RiTwitterFill, RiGithubFill, RiGoogleFill } from 'react-icons/ri'

export function Footer () {
  return (
    <footer className='p-8 bg-footer xl:px-40 xl:py-20  '>
      <article className='flex flex-col gap-6 xl:gap-0 xl:flex xl:flex-row xl:justify-between md:flex-row md:justify-between'>
        {/* logo */}
        <a href='#' className='text-[24px] font-bold relative pl-1 bg-footer text-white mb-4'>
          Power<span className='text-primary text-5xl'>.</span>{' '}
          <RiCheckboxBlankCircleFill className='absolute -left-3 -bottom-3 text-primary rounded-tr-full' />
        </a>
        {/* Social media */}
        <nav className='flex items-center gap-4'>
          <a href='#'>
            <RiInstagramFill className='text-white p-2 bg-primary rounded-full text-4xl' />
          </a>

          <a href='#'>
            <RiFacebookCircleFill className='text-white p-2 bg-primary rounded-full text-4xl' />
          </a>

          <a href='#'>
            <RiTwitterFill className='text-white p-2 bg-primary rounded-full text-4xl' />
          </a>

          <a href='#'>
            <RiGithubFill className='text-white p-2 bg-primary rounded-full text-4xl' />
          </a>

          <a href='#'>
            <RiGoogleFill className='text-white p-2 bg-primary rounded-full text-4xl' />
          </a>
        </nav>
      </article>
      <hr className='my-12 opacity-[0.15]' />

      <article className='flex flex-col gap-6 xl:flex'>
        <h1 className='font-bold text-center text-[18px] leading-[18px] text-white'>Company</h1>
        <nav className='flex flex-col items-center gap-6 md:flex-row md:justify-around xl:flex xl:flex-row  xl:justify-between'>
          <a href='#' className='font-normal text-[14px] opacity-[0.75] text-white'>
            About Us
          </a>
          <a href='#' className='font-normal text-[14px] opacity-[0.75] text-white'>
            Press
          </a>
          <a href='#' className='font-normal text-[14px] opacity-[0.75] text-white'>
            Invertors
          </a>
          <a href='#' className='font-normal text-[14px] opacity-[0.75] text-white'>
            Events
          </a>
          <a href='#' className='font-normal text-[14px] opacity-[0.75] text-white'>
            Terms of use
          </a>
          <a href='#' className='font-normal text-[14px] opacity-[0.75] text-white'>
            Privacy policy
          </a>
          <button className='font-semibold text-[18px] rounded-[12px] bg-primary py-4 px-10 text-white'>Contact Us</button>
        </nav>
        <p className='font-normal text-[14px] text-center mt-20 text-[#FFFFFF] mix-blend-normal md:mt-6'> ©santidev 2023 - All Rigths Reserved</p>

      </article>
    </footer>
  )
}
