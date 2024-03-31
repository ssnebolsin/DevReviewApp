
const AppButton = ({func, value}) => (

    <button onClick={()=>func()}
        type="button" 
        className="ml-3 mt-3 max-w-48 text-gray-700 bg-white border border-gray-300 
        focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full 
        text-sm px-5 py-1 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        {value}
    </button>
  );
  
  export default AppButton;