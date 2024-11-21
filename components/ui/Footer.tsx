import Link from 'next/link';
import AnimationContainer from '../utils/AnimationContainer';
import ExternalLink from './ExternalLink';

const Footer = () => {
  return (
    <footer className='w-full lg:max-w-screen-md flex flex-col justify-center items-center mx-auto'>

      <hr className='w-full border-1 border-gray-800 mb-8' />

      <AnimationContainer customClassName='w-full grid place-items-center grid-cols-3 gap-1 lg:gap-4 pb-8 sm:grid-cols-3 mx-3'>

        <div className='flex flex-col space-y-4'>

          <Link
            href='/'
            className='flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease'
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
              <path fillRule='evenodd' d='M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z' clipRule='evenodd' />
            </svg>
            Home
          </Link>

          <Link
            href='#'
            className='flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease'
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
              <path d='M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z' />
            </svg>
            About
          </Link>
        </div>

        <div className='flex flex-col space-y-4'>
          <ExternalLink href='https://github.com/'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
              <path fillRule='evenodd' d='M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z' clipRule='evenodd' />
            </svg>
            GitHub
          </ExternalLink>

        </div>

        <div className='flex flex-col space-y-4'>

        <ExternalLink href='https://linkedin.com/in/jeanrondon'>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
           fill='currentColor'
           className='w-5 h-5' 
            viewBox="0 0 1024 1024">
              <path 
              fill="currentColor" 
              d="M684.4 158.688c52.88 0 100.621 21.636 134.253 56.372c41.84-8.096 81.28-22.848 116.721-43.28c-13.712 41.633-42.88 76.56-80.815 98.656c37.12-4.368 72.656-13.904 105.632-28.16c-24.72 35.744-55.84 67.216-91.776 92.368c.336 7.632.529 15.344.529 23.023c0 235.728-185.008 507.615-523.312 507.615c-103.84 0-200.56-29.631-281.903-80.223a378 378 0 0 0 43.84 2.527c86.16 0 165.503-28.496 228.463-76.4c-80.528-1.376-148.496-53.008-171.808-123.84a188 188 0 0 0 34.624 3.216c16.72 0 33.008-2.16 48.4-6.256c-84.128-16.336-147.536-88.448-147.536-174.93v-2.287c24.816 13.376 53.152 21.408 83.344 22.336c-49.376-32.033-81.84-86.56-81.84-148.465c0-32.72 9.089-63.376 24.913-89.632C216.817 299.2 352.337 370.24 505.217 377.712c-3.153-13.025-4.784-26.784-4.784-40.624c0-98.544 82.351-178.4 183.967-178.4m275.789 83.621h.16zM684.397 94.692c-125.664 0-229.773 91.809-245.806 210.433c-102.816-20.656-196.32-75.088-263.504-154.944a64 64 0 0 0-48.977-22.815a66 66 0 0 0-5.023.192a64.11 64.11 0 0 0-49.776 30.784a237.6 237.6 0 0 0-34.097 122.656c0 28.848 5.183 56.944 15.008 83.216c-10.464 11.632-16.496 26.848-16.496 42.912v2.288c0 62.689 24.784 120.864 65.936 164.464c-2.368 10.976-1.84 22.464 1.776 33.472c14.193 43.183 40.033 80.4 73.537 108.75c-22.497 5.009-45.712 7.537-69.409 7.537c-12.528 0-24.72-.688-36.256-2.097c-2.56-.32-5.088-.432-7.632-.432c-26.88 0-51.28 16.944-60.336 42.784c-9.936 28.32 1.089 59.712 26.56 75.568c94.529 58.817 203.712 89.872 315.712 89.872c364.032 0 583.008-284.976 587.264-563.344a429.6 429.6 0 0 0 78.448-85.152a63.4 63.4 0 0 0 12.96-38.496c0-21.776-10.895-41.024-27.487-52.593c7.184-24.624-1.009-51.28-21.009-67.568c-11.68-9.504-26-14.336-40.4-14.336a63.75 63.75 0 0 0-31.968 8.56c-21.152 12.193-43.776 21.841-67.6 28.786c-43.105-32.432-96.545-50.496-151.425-50.497"/></svg>
            Twiiter
          </ExternalLink>
         

          <Link
            href='#'
            className='flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease'
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
              <path fillRule='evenodd' d='M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zm3.068-5.852A1.25 1.25 0 015.273 4.5h9.454a1.25 1.25 0 011.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 00-.86.49l-.606 1.02a1 1 0 01-.86.49H8.236a1 1 0 01-.894-.553l-.448-.894A1 1 0 006 11H2.53l.015-.062 1.523-5.52z' clipRule='evenodd' />
            </svg>
            Contact
          </Link>

        </div>
      </AnimationContainer>

    </footer>
  )
}

export default Footer;
