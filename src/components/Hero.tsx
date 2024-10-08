import { useStyleCustomizerContext } from '../hooks/useStyleCustomizer';

const Hero = () => {
  const context = useStyleCustomizerContext();

  return (
    <div className='bg-white'>
      <header className='bg-[#FCF8F1] bg-opacity-30'>
        <div className='px-4 mx-auto sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16 lg:h-20'>
            <div className='flex-shrink-0'>
              <a href='#' title='' className='flex'>
                <img
                  className='w-auto h-8'
                  src='https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg'
                  alt=''
                />
              </a>
            </div>

            <button
              type='button'
              className='inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100'
            >
              <svg
                className='block w-6 h-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 8h16M4 16h16'
                ></path>
              </svg>

              <svg
                className='hidden w-6 h-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </button>

            <div className='hidden lg:flex lg:items-center lg:justify-center lg:space-x-10'>
              <a
                href='#'
                title=''
                className='text-base text-black transition-all duration-200 hover:text-opacity-80'
              >
                {' '}
                Features{' '}
              </a>

              <a
                href='#'
                title=''
                className='text-base text-black transition-all duration-200 hover:text-opacity-80'
              >
                {' '}
                Solutions{' '}
              </a>

              <a
                href='#'
                title=''
                className='text-base text-black transition-all duration-200 hover:text-opacity-80'
              >
                {' '}
                Resources{' '}
              </a>

              <a
                href='#'
                title=''
                className='text-base text-black transition-all duration-200 hover:text-opacity-80'
              >
                {' '}
                Pricing{' '}
              </a>
            </div>

            <a
              href='#'
              title=''
              className={` hidden lg:inline-flex items-center justify-center  text-base transition-all duration-200 
              font-semibold  hover:opacity-90
                 ${context.button.paddingX}  ${context.button.paddingY} ${context.button.radius}
                `}
              style={{
                backgroundColor: context.colors.primaryColor,
                color: context.button.btnTextColor,
              }}
              role='button'
            >
              {' '}
              Join Now{' '}
            </a>
          </div>
        </div>
      </header>

      <section className='bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24'>
        <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='grid items-center grid-cols-1 gap-12 lg:grid-cols-2'>
            <div>
              <p
                className='text-base font-semibold tracking-wider  uppercase'
                style={{ color: context?.colors.paragraphColor }}
              >
                A social media for learners
              </p>
              <h1
                className={` mt-4  font-bold text-3xl ${context?.mainTitle.fontSize} `}
                style={{ color: context?.colors.primaryColor }}
              >
                Connect & learn from the experts
              </h1>
              <p
                className='mt-4 text-base  lg:mt-8 sm:text-xl'
                style={{ color: context?.colors.paragraphColor }}
              >
                Grow your career fast with right mentor.
              </p>

              <a
                href='#'
                title=''
                className={`
                inline-flex items-center mt-8 font-semibold text-black transition-all duration-200 
                 lg:mt-16 hover:opacity-90 
                 ${context.button.paddingX}  ${context.button.paddingY} ${context.button.radius}
                `}
                style={{
                  backgroundColor: context.colors.primaryColor,
                  color: context.button.btnTextColor,
                }}
                role='button'
              >
                Join for free
                <svg
                  className='w-6 h-6 ml-8 -mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1.5'
                    d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </a>

              <p
                className='mt-5'
                style={{ color: context?.colors.paragraphColor }}
              >
                Already joined us?{' '}
                <a
                  href='#'
                  title=''
                  className=' transition-all duration-200 hover:underline'
                >
                  Log in
                </a>
              </p>
            </div>

            <div>
              <img
                className='w-full'
                src='https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png'
                alt='a'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
