/** @format */

import { useState } from 'react'

export default function Index() {
    const [darkTheme, setDarkTheme] = useState(false)

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme)
    }

    const getTheme = () => localStorage.getItem('theme')

    return (
        <>
            {/* <div className='form-control'>
                <div className='input-group'>
                    <button className='btn btn-square border-none bg-base-300'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                            />
                        </svg>
                    </button>
                    <input type='text' className='input bg-base-300' />
                </div>
            </div> */}

            {/* <div className='container relative mx-auto flex py-6'>
                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                        />
                    </svg>
                </div>
                <input
                    placeholder='Search city'
                    type='text'
                    className='input input-md w-full sm:rounded-xl rounded-none border-none border-slate-700 bg-base-300 pl-10 text-lg font-semibold outline-none focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-2'
                />
            </div>

            <div className='relative mt-1'>
                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                    <svg
                        className='h-5 w-5 text-gray-500 dark:text-gray-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                        <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
                    </svg>
                </div>
                <input
                    type='text'
                    id='email-adress-icon'
                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                    placeholder='name@flowbite.com'
                />
            </div> */}

            {/* city input with search icon */}
            <div
                data-theme={darkTheme ? 'dark' : 'light'}
                className='relative mx-auto flex h-screen w-full flex-col space-y-4 bg-base-100 px-7 pt-4'
            >
                <div className='flex items-center justify-between px-8'>
                    <p className='text-3xl font-semibold text-base-content'>Weather</p>
                    <input
                        checked={darkTheme}
                        onChange={handleChangeTheme}
                        type='checkbox'
                        className='toggle-primary toggle toggle-md'
                    />
                </div>
                <input
                    type='text'
                    id='city'
                    className='placeholder-content input w-full bg-base-300 focus:outline-none focus:ring'
                    placeholder='City'
                />

                {/* card for today's weather */}
                <div className='card w-96 bg-base-200 shadow-xl'>
                    <div className='card-body text-base-content'>
                        <h2 className='card-title'>Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className='card-actions justify-end'>
                            <button className='btn btn-primary'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
