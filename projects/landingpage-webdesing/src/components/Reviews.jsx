import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

export function Reviews () {
  return (
    <section className='flex flex-col gap-8 justify-center items-center bg-[#700be505] xl:p-8 xl:gap-10'>
      <h1 className='font-extrabold text-[40px] leading-[60px] text-center text-[#03014C] xl:w-[334px] xl:h-[132px]'>
        Let’s hear <br />
        What they says
      </h1>
      <div className='flex justify-center p-4'>
        <span className='font-extrabold text-[40px] xl:text-[80px] text-primary leading-[121.9px]'><RiDoubleQuotesL /></span>
        <p className='max-w-2xl leading-[30px] font-normal text-[16px]  opacity-[0.5] xl:leading-[45px] text-[#03014C] text-center xl:w-[669px] xl:w-[171px] xl:pt-10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt
          fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
        </p>
        <span className='font-extrabold text-[40px] xl:text-[80px] text-primary leading-[121.9px]'><RiDoubleQuotesR /></span>
      </div>
      <div className='flex flex-col items-center justify-center gap-8 p-2'>
        <div className='flex items-center gap-8 xl:flex xl:gap-16 justify-center '>
          <img
            src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg'
            className='w-8 h-8 xl:w-[50px] xl:h-[50px] object-cover rounded-[100%] bg-white'
          />
          <img
            src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg'
            className='w-10 h-10 xl:w-[67px] xl:h-[67px] object-cover rounded-[100%]  bg-white'
          />
          <img
            src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg'
            className='w-12 h-12 xl:w-[86px] xl:h-[86px] object-cover rounded-[100%] border-[5px] border-solid border-primary bg-white'
          />
          <img
            src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg'
            className='w-10 h-10 xl:w-[67px] xl:h-[67px] object-cover rounded-[100%]  bg-white'
          />
          <img
            src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg'
            className='w-8 h-8 xl:w-[50px] xl:h-[50px] object-cover rounded-[100%]  bg-white'
          />
        </div>
        <div className=''>
          <h3 className='font-bold text-[24px] text-terceary text-center leading-[36px]'>Ricky Aprilia</h3>
          <h5 className='font-normal text-[20px] leading-[30px] text-center text-fourth opacity-[0.8]'>Founder of Varibo</h5>
        </div>
      </div>
    </section>
  )
}
