const Button = ({ onClick, children }) => {

    const ArrowIcon = () => (
        <svg
            className="flex-0 ml-4 h-6 w-6 transition-all group-hover:ml-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
        </svg>
    );

    return (

        <button
            className="group flex cursor-pointer items-center justify-center  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition" onClick={onClick}>
            <span className="group">
                {children}
            </span>
            {/* <ArrowIcon /> */}
        </button>
    );
};


export default Button;
