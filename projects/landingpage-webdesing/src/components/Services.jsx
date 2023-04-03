import { RiMailFill, RiSmartphoneFill, RiMacFill, RiGalleryFill, RiAncientPavilionLine } from 'react-icons/ri'

export function Services () {
  return (
    <section className='grid grid-cols-1 p-8 xl:grid-cols-2 xl:p-40 gap-10'>
      <article className='flex flex-col gap-4 justify-center my-8'>
        <h1 className='font-bold text-[40px] text-terceary leading-[52px]'>
          How we can help you
        </h1>
        <p className='font-normal text-[20px] leading-[36px] text-[#1B1D21] opacity-[0.75] xl:w-[490px]'>
          Follow our newsletter. We will regulary update
          our latest project and availability.
        </p>
        <form className='flex items-center justify-between xl:gap-4 p-2 px-4 border-[1px] rounded-[12px] xl:w-[490px] bg-[#DCDCDC]'>
          <RiMailFill className='text-xl xl:text-2xl' />
          <input type='text' className='text-[#2E3E5C] bg-[#DCDCDC] font-normal text-[15px] xl:px-2' placeholder='Enter your mail address' />
          <button className='px-[10px] py-[2px] text-[14px] xl:px-[30px] xl:py-[10px] rounded-[12px] bg-primary shadow-[rgba(112, 111, 229, 0.5)] text-white font-medium xl:font-semibold xl:text-[18px]'>Suscribe</button>
        </form>
      </article>
      {/* Services */}
      <article className='grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8'>
        <div className='flex flex-col gap-2'>
          <RiGalleryFill className='text-primary box-content p-2 text-4xl rounded-xl bg-secondary' />
          <h3 className='font-semibold text-[20px] text-terceary leading-[28px]'>UI/UX Design</h3>
          <p className='font-normal text-[16px] text-fourth leading-[28px] opacity-[0.8]'>
            Sometimes features require a short description
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <RiAncientPavilionLine className='text-primary box-content p-2 text-4xl rounded-xl bg-secondary' />
          <h3 className='font-semibold text-[20px] text-terceary leading-[28px]'>Logo Branding</h3>
          <p className='font-normal text-[16px] text-fourth leading-[28px opacity-[0.8]'>
            Sometimes features require a short description
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <RiSmartphoneFill className='text-primary box-content p-2 text-4xl rounded-xl bg-secondary' />
          <h3 className='font-semibold text-[20px] text-terceary leading-[28px]'>App Design</h3>
          <p className='font-normal text-[16px] text-fourth leading-[28px opacity-[0.8]'>
            Sometimes features require
            a short description
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <RiMacFill className='text-primary box-content p-2 text-4xl rounded-xl bg-secondary' />
          <h3 className='font-semibold text-[20px] text-terceary leading-[28px]'>Webiste Design</h3>
          <p className='font-normal text-[16px] text-fourth leading-[28px opacity-[0.8]'>
            Sometimes features require a short description
          </p>
        </div>
      </article>
    </section>
  )
}
