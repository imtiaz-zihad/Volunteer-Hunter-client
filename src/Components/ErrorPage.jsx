import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='bg-white '>
      <div className='container min-h-screen px-6 py-12 mx-auto lg:flex flex-col lg:items-center lg:gap-12'>

      <div className='relative w-full mt-8 lg:w-1/2 lg:mt-0'>
          <img
            className=' w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover '
            src='https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x1985-6voscfd3.png'
            alt=''
          />
        </div>
        <div className='wf-ull lg:w-1/2'>
         
          <h1 className='mt-3 text-2xl font-semibold text-center text-red-800 dark:text-red-600 md:text-3xl'>
            Page not found
          </h1>
          

          <div className='flex items-center  justify-center mt-6 gap-x-3'>
           <Link>

           <button className='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5 rtl:rotate-180'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                />
              </svg>

              <span>Go back</span>
            </button>
           </Link>

            <Link
              to='/'
              className='w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-500 rounded-lg shrink-0 sm:w-auto hover:bg-gray-600'
            >
              Take me home
            </Link>
          </div>
        </div>

       
      </div>
    </section>
  )
}

export default ErrorPage