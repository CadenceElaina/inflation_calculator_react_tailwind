import React, { useEffect, useState } from "react";
import dataList from "./Data";
const Home = () => {

    const [year1CPI, setYear1CPI] = useState('')
    const [year2CPI, setYear2CPI] = useState('')

    const [dollarResult, setDollarResult] = useState(100)
    const [rateResult, setRateResult] = useState(2938.46)
    /*   const dollarRef = useRef() */
    let [input, setInput] = useState({
        year1: 1913,
        dollars: 1.00,
        year2: 2022

    });

    const handleChange = (e) => {
        setInput({
            ...input, [e.target.name]: Number(e.target.value)
        })
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        let temp = input.year1
        let temp2 = input.year2
        let temp3 = input.dollars
        if (temp3 <= 0 || temp3 > 1000000000000000) {
            alert('Please enter a positive number that does not exceed 1,000,000,000,000,000')
        }
        if (temp < 1913 || temp > 2022) {
            alert('Please enter a year from 1913 to 2022')
            return
        }
        if (temp2 < 1913 || temp2 > 2022) {
            alert('Please enter a year from 1913 to 2022')
            return
        }
        setYear1CPI(dataList.filter(item => { return item.year === temp }).map(item => item.CPI))
        setYear2CPI(dataList.filter(item => { return item.year === temp2 }).map(item => item.CPI))

        setRateResult(((year2CPI / year1CPI) * 100).toFixed(2))
        setDollarResult((temp3 * (year2CPI / year1CPI)).toFixed(2))
        /*      console.log(rateResult)
             console.log(dollarResult) */


        /*   setDollarResult(Number(input.dollars));
          setRateResult(Number(input.year2));
          console.log(input)
   */


        //Formula to calculate rate and dollar change

        /*  let CPI1 = search(year1);
        let CPI2 = search(year2);
         console.log(CPI1, CPI2); 
        let result = amount * (CPI2 / CPI1); 
        
        seperate every 3 digits before decimal by comma after first 5 digits

        render result with $ before and toFixed(2)
        */

        //console.log(input)
        //console.log(input.dollars);
        /* console.log(dollarResult); */
    };

    if (isNaN(dollarResult) || isNaN(rateResult)) {
        setRateResult(((year2CPI / year1CPI) * 100).toFixed(2))
        setDollarResult((input.dollars * (year2CPI / year1CPI)).toFixed(2))
    }
    useEffect(() => {

    }, [])

    return (
        <div className="calc grid h-screen place-items-center">
            <div className="border-solid border-2 border-slate-500 shadow-2xl block p-6 rounded-lg shadow-lg bg-white max-w-md">
                <form className="" onSubmit={handleSubmit} >
                    <br></br>

                    <div className="grid grid-cols-2 gap-4 ">
                        <div className="form-group mb-6">
                            <label
                                htmlFor="year1"
                                className="form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            transition
                            ease-in-out
                            m-0
                            ">If in</label>
                            <label
                                htmlFor="dollars"
                                className="form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            transition
                            ease-in-out
                            m-0
                            ">I had:</label>
                            <label
                                htmlFor="year2"
                                className="form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            transition
                            ease-in-out
                            m-0
                            ">Then in </label>
                        </div>
                        <div className="form-group mb-6">
                            <input
                                /* value={year1} */
                                name="year1"
                                /* onChange={(e) => setYear1(e.target.value)} */
                                onChange={handleChange}
                                id="year1"
                                aria-describedby="year1"
                                placeholder="1913"
                                type="number" className="form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            />
                            <input
                                /* value={dollars} */
                                name="dollars"
                                /*  onChange={(e) => dollars(e.target.value)} */
                                onChange={handleChange}
                                type="number"
                                className="form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id=""
                                aria-describedby="dollars" placeholder="1.00" />
                            <input
                                /* value={year2} */
                                name="year2"
                                /*   onChange={(e) => setYear2(e.target.value)} */
                                onChange={handleChange}
                                type="number"
                                className="form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id=""
                                aria-describedby="year2" placeholder="2022" />
                        </div>
                    </div>
                    <br></br>


                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-group mb-6">
                            <label
                                htmlFor="dollarResult"
                                className="form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            transition
                            ease-in-out
                            m-0
                            ">I would have:</label>
                            <label
                                htmlFor="rateResult"
                                className="form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            transition
                            ease-in-out
                            m-0
                            ">Cumulative rate of inflation over that period:</label>
                        </div>
                        <div className="form-group mb-6">
                            <label
                                /*  ref={dollarRef} */
                                id="dollarResult"
                                type="text"
                                className="form-control
                                block
                                w-2/4
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                transition
                                ease-in-out
                                m-0
                                "
                                aria-describedby="dollars" >${dollarResult}{/* $29.38 */}</label>
                            <label
                                id="rateResult"
                                type="text"
                                className="form-control
                                block
                                w-2/4
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                aria-describedby="rate">{rateResult}%{/* 2938.46% */}</label>
                        </div>
                    </div>
                    <div className="form-group form-check text-center mb-6">
                    </div>
                    <button
                        type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Calculate</button>
                </form>

            </div>
        </div>
    )
}

export default Home