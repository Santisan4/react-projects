import { RiCheckboxBlankCircleFill, RiPlayFill, RiStarFill } from 'react-icons/ri'

export function Hero () {
  return (
    <section className='min-h-[90vh] grid grid-cols-1 gap-8 p-[30px] md:grid-cols-1 md:p-0 md:gap-0 xl:grid-cols-2 xl:py-0 xl:my-0 '>
      {/* Information */}
      <div className='flex flex-col gap-8 md:px-20 md:gap-12 md:py-8 xl:flex xl:pl-40 xl:p-0 xl:justify-center xl:pb-20'>
        <h1 className='text-[60px] font-bold leading-[90px] xl:leading-[110px] text-terceary md:text-center'>
          We Design Impactful <br />
          Digital{' '}
          <span className='text-primary px-4 border-8 border-primary relative -z-10 '>
            Products
            <RiCheckboxBlankCircleFill className='text-white text-base absolute -left-5 -top-5  p-2 bg-primary rounded-full box-content' />
            <RiCheckboxBlankCircleFill className='text-white text-base absolute -right-5 -top-5  p-2 bg-primary rounded-full box-content' />
            <RiCheckboxBlankCircleFill className='text-white text-base absolute -right-5 -bottom-5  p-2 bg-primary rounded-full box-content' />
            <RiCheckboxBlankCircleFill className='text-white text-base absolute -left-5 -bottom-5  p-2 bg-primary rounded-full box-content' />
          </span>
        </h1>
        <p className='text-fourth font-normal leading-[30px] xl:leading-[36px] opacity-[.8] md:text-[22px] md:text-center'>
          Help find solutions with intuitive and in accordance <br className='hidden xl:visible' />
          with client business goals. we provide a high-quality <br className='hidden' />
          services
        </p>
        <div className='flex flex-col xl:flex-row xl:justify-center items-center gap-5 md:gap-10'>
          <button className='xl:w-[auto] w-full bg-primary text-white font-bold py-2 px-6 rounded-xl text-md md:w-[350px]'>
            Contact Us
          </button>
          <button className='xl:w-[auto] w-full flex items-center text-fourth justify-start text-left gap-4 py-2 px-8 rounded-xl text-[16px] md:justify-center'>
            <RiPlayFill className='bg-secondary text-primary p-4 box-content rounded-full' /> Watch our <br /> introduction video
          </button>
        </div>
      </div>
      {/* Image */}
      <div className='flex items-center justify-center relative p-8 md:px-20 xl:p-0'>
        {/* Content image */}
        <div>
          <img
            src='hero.png'
            className='w-[300px] h-[300px] object-cover xl:w-[400px] xl:h-[400px] xl:-mt-28'
          />
          <div className='relative bg-white flex flex-col shadow-xl rounded-lg p-4 flex justify-center items-center gap-2 max-w-[250px] mx-auto -mt-12'>
            <div className='flex pl-[2rem]'>
              <img
                src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg'
                className='w-10 h-10 ml-[-1rem] object-cover rounded-[100%] border-[2px] border-solid border-[#E9E8FA] bg-white'
              />
              <img
                src='https://img.freepik.com/free-photo/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-standing-isolated-against-grey-wall-people-success-youth-happiness-concept_273609-1246.jpg'
                className='w-10 h-110 ml-[-1rem] object-cover rounded-[100%] border-[2px] border-solid border-[#E9E8FA]'
              />
              <img
                src='https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg'
                className='w-10 h-10 ml-[-1rem] object-cover rounded-[100%] border-[2px] border-solid border-[#E9E8FA]'
              />
              <img
                src='https://img.freepik.com/free-photo/beautiful-woman-wearing-casual-denim-jacket-isolated-wall-hands-together-fingers-crossed-smiling-relaxed-cheerful-success-optimistic_231208-1256.jpg'
                className='w-10 h-10 ml-[-1rem] object-cover rounded-[100%] border-[2px] border-solid border-[#E9E8FA]'
              />
              <img
                src='https://img.freepik.com/free-photo/portrait-smiling-young-man-eyewear_171337-4842.jpg'
                className='w-10 h-10 ml-[-1rem] object-cover rounded-[100%] border-[2px] border-solid border-[#E9E8FA]'
              />
            </div>

            <h2 className='text-xl font-semibold'>120+ Employees</h2>
            <div className='flex items-center gap-2 text-lg text-gray-500 opacity-[.8]'>
              <RiStarFill className='text-primary' /> 5.0 (3.1K Reviews)
            </div>
            <div className='absolute -right-12 -bottom-12 -z-10'>
              <div className='relative'>
                <div className='w-[83px] h-[83px] bg-primary rounded-[100%]' />
                <div className='absolute left-0 top-0 bg-white w-[2.7rem] h-[2.7rem]' />
              </div>
            </div>

          </div>
        </div>
        {/* Circle */}
        <div className='absolute h-[297px] w-[297px] md:w-[397px] md:h-[397px] bg-[rgba(112,111,229,0.15)] rounded-full -z-10 border-[10px] border-primary ' />
        {/* Logos */}
        <img
          src='figma.png'
          className='w-10 h-10 top-[10%] right-[15%] absolute md:w-[70px] md:h-[70px] border-l-3 border-grey rounded-full object-cover rotate-[-17.81deg] xl:top-[140px] xl:left-[570px]'
        />
        <img
          src='adobe.png'
          className='w-10 h-10 absolute top-[10%] left-[15%] rounded-full object-cover md:w-[68.37px] md:h-[68.37px] border-l-3 border-grey rotate-[-17.81deg] md:-left-[-170px] xl:top-[140px]'
        />
        <img
          src='sketch.png'
          className='h-10 w-10 absolute top-[10px] left-[1px] rounded-full object-cover rotate-[-17.81deg] md:left-[100px] md:top-[25px] xl:w-[47px] xl:h-[47px] xl:top-[80px] xl:left-[50px] '
        />
      </div>
    </section>
  )
}
