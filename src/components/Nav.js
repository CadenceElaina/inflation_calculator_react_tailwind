import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header>

            <nav className="bg-white shadow dark:bg-blue-600
">
                <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                    <Link to='/' className="active:bg-blue-700 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Home</Link>

                    <Link to='/table' className="active:bg-blue-700 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">CPI Data Table</Link>


                </div>
            </nav>

        </header>
    )
}
export default Nav