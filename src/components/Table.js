//import { Link } from "react-router-dom";
import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';
import '../index.css'
import dataList from './Data'
import { useState } from 'react';

function Table() {
    const [search, setSearch] = useState('');
    const [ascendingCPI, setAscendingCPI] = useState(false);
    const [ascendingChange, setAscendingChange] = useState(false);
    const [ascendingPercentChange, setAscendingPercentChange] = useState(false);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    let filtered = dataList.filter(data => {
        return data.year == search
    });
    let ascendingCPIList = [...dataList].sort((a, b) => a.CPI - b.CPI);
    let ascendingChangeList = [...dataList].sort((a, b) => a.Change - b.Change);
    let ascendingPercentChangeList = [...dataList].sort((a, b) => a.YOYpercentage - b.YOYpercentage);
    return (
        <>
            <main>
                <div>
                    <div class="flex justify-center">
                        <div class="text-center m-8 overflow-x-auto relative shadow-md sm:rounded-lg">
                            <div class="h-full input-group relative flex flex-wrap items-stretch w-full mb-4">
                                <label htmlFor="search" className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    Search by year:
                                    <input onChange={handleSearch} type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg flex justify-center">
                        <table className="w-5/6 text-sm text-left text-gray-500 dark:text-gray-400 m-0">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">Year</th>
                                    <th scope="col" className="py-3 px-6">CPI     <button onClick={() => setAscendingCPI(!ascendingCPI)}>
                                        {!ascendingCPI && <AiOutlineArrowUp className='icon' />}
                                        {ascendingCPI && <AiOutlineArrowDown className='icon' />}
                                    </button></th>
                                    <th scope="col" className="py-3 px-6">Change YOY  <button onClick={() => setAscendingChange(!ascendingChange)}>
                                        {!ascendingChange && <AiOutlineArrowUp className='icon' />}
                                        {ascendingChange && <AiOutlineArrowDown className='icon' />}</button></th>
                                    <th scope="col" className="py-3 px-6">Percent Change YOY <button onClick={() => setAscendingPercentChange(!ascendingPercentChange)}>
                                        {!ascendingPercentChange && <AiOutlineArrowUp className='icon' />}
                                        {ascendingPercentChange && <AiOutlineArrowDown className='icon' />}</button></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ascendingPercentChange && ascendingPercentChangeList.map((value, key) => {
                                        return (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-blue-600" key={key}>
                                                <td className="py-4 px-6">{value.year}</td>
                                                <td className="py-4 px-6">{value.CPI}</td>
                                                <td className="py-4 px-6">{value.Change}</td>
                                                <td className="py-4 px-6">{value.YOYpercentage}</td>
                                            </tr>
                                        )
                                    })
                                }
                                {
                                    ascendingChange && ascendingChangeList.map((value, key) => {
                                        return (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-blue-600" key={key}>
                                                <td className="py-4 px-6">{value.year}</td>
                                                <td className="py-4 px-6">{value.CPI}</td>
                                                <td className="py-4 px-6">{value.Change}</td>
                                                <td className="py-4 px-6">{value.YOYpercentage}</td>
                                            </tr>
                                        )
                                    })
                                }
                                {
                                    ascendingCPI && ascendingCPIList.map((value, key) => {
                                        return (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-blue-600" key={key}>
                                                <td className="py-4 px-6">{value.year}</td>
                                                <td className="py-4 px-6">{value.CPI}</td>
                                                <td className="py-4 px-6">{value.Change}</td>
                                                <td className="py-4 px-6">{value.YOYpercentage}</td>
                                            </tr>
                                        )
                                    })
                                }
                                {
                                    search !== '' && ascendingCPI == false &&
                                    filtered.map((value, key) => {
                                        return (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-blue-600" key={key}>
                                                <td className="py-4 px-6">{value.year}</td>
                                                <td className="py-4 px-6">{value.CPI}</td>
                                                <td className="py-4 px-6">{value.Change}</td>
                                                <td className="py-4 px-6">{value.YOYpercentage}</td>
                                            </tr>
                                        )
                                    })

                                }
                                {
                                    search == '' && ascendingCPI == false &&
                                    dataList.map((value, key) => {
                                        return (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-blue-600" key={key}>
                                                <td className="py-4 px-6">{value.year}</td>
                                                <td className="py-4 px-6">{value.CPI}</td>
                                                <td className="py-4 px-6">{value.Change}</td>
                                                <td className="py-4 px-6">{value.YOYpercentage}</td>
                                            </tr>
                                        )

                                    })

                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </main>
            {/*  <nav>
                <Link to="/">Home</Link>
            </nav> */}
        </>
    );
}
export default Table