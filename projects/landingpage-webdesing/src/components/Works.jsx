export function Works () {
  return (
    <section className='xl:p-20 xl:pl-[180px] p-8'>
      <div className='flex flex-col mb-8 gap-4'>
        <h1 className='text-[40px] font-bold text-terceary'>
          We Create World-Class Digital Products
        </h1>
        <p className='font-normal text-[20px] text-fourth opacity-[0.8] mix-blend-normal leading-[36px]'>
          By information about design the world to the best instructors, heatc helping by information
        </p>
      </div>
      {/* Works */}
      <article className='grid grid-cols-1 xl:grid-cols-2 gap-6 md:grid-cols-1 xl:gap-[15px]'>
        <div className='flex flex-col gap-2'>
          <img src='work1.png' className='xl:w-[596px] xl:h-[448px] md:w-auto md:h-[400px] rounded-[30px]' />
          <p className='font-normal text-[14px] text-fourth opacity-[0.8] leading-[26px]'>App Design - June 20, 2022</p>
          <h3 className='font-bold text-[24px] text-terceary'>App Redesign</h3>
          <p className='font-normal text-[14px] text-fourth opacity-[0.8] xl:w-[552px] xl:h-[52px]'>
            By information about design the world to the best instructors, heatc
            helping By information about design the world to the best
            instructors, heatc helping
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6'>
          <div className='flex flex-col gap-1'>
            <img src='work2.png' className='xl:w-[263px] xl:h-[188px] md:w-[400px] md:h-[300px] rounded-3xl' />
            <p className='font-normal text-[14px] text-fourth opacity-[0.8] leading-[26px]'>App Design - June 20, 2022</p>
            <h3 className='font-bold text-[18px] text-terceary leading-[28px] xl:w-[263px] xl:h-[56px]'>
              Redesign channel website landng page
            </h3>
          </div>
          <div className='flex flex-col gap-1'>
            <img src='work3.png' className='xl:w-[263px] xl:h-[188px] md:w-[400px] md:h-[300px] rounded-3xl' />
            <p className='font-normal text-[14px] text-fourth opacity-[0.8] leading-[26px]'>App Design - June 20, 2022</p>
            <h3 className='font-bold text-[18px] text-terceary leading-[28px] xl:w-[263px] xl:h-[84px]'>
              New Locator App For a New Company
            </h3>
          </div>
          <div className='flex flex-col gap-1'>
            <img src='work4.png' className='xl:w-[263px] xl:h-[188px] md:w-[400px] md:h-[300px] rounded-3xl' />
            <p className='font-normal text-[14px] text-fourth opacity-[0.8] leading-[26px]'>App Design - June 20, 2022</p>
            <h3 className='font-bold text-[18px] text-terceary leading-[28px] xl:w-[263px] xl:h-[56px]'>
              Rental Rooms Web App Platform
            </h3>
          </div>
          <div className='flex flex-col gap-1'>
            <img src='work5.png' className='xl:w-[263px] xl:h-[188px] md:w-[400px] md:h-[300px] rounded-3xl' />
            <p className='font-normal text-[14px] text-fourth opacity-[0.8] leading-[26px]'>App Design - June 20, 2022</p>
            <h3 className='font-bold text-[18px] text-terceary leading-[28px] xl:w-[263px] xl:h-[56px]'>
              Calendar App for Big SASS Company
            </h3>
          </div>
        </div>
      </article>
    </section>
  )
}
