import {Link} from 'react-router-dom'

const ErrorPage = () => (
  <>
    <h1 className='my-20 text-center text-3xl'>Page Not Found</h1>
    <p className='my-5 text-8xl font-medium text-center text-3l'>¯\_(ツ)_/¯</p>
    <h1 className='my-10 text-8xl font-medium text-center text-5xl'>404</h1>
    <p className='my-5 font-medium text-center text-1xl'>
      We can't seem to find the page that you were looking for.
    </p>
    

    <Link to={'/'} className='block ml-auto mr-auto text-center text-nowrap my-20 max-w-28 text-white bg-gray-800 
                hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 
                font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 
                dark:focus:ring-gray-700 dark:border-gray-700'>
      Back Home
    </Link>
  </>
);

export default ErrorPage;