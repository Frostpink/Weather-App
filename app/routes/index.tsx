/** @format */

// primary background color: gray-700
// primary text color: gray-200
// secondary background color: gray-600

function WeatherCard() {
    // TODO: change the text-[9px] to something better
    return (
        <div className='rounded-lg bg-gray-600 p-2 text-center text-xs font-semibold text-gray-200 shadow-md'>
            <p>12 AM</p>
            <p className='py-3'>ICON</p>
            <p>26 dC</p>
        </div>
    )
}

export default function Index() {
    return (
        <>
            <div className='flex h-screen w-screen flex-col bg-gray-700'>
                <div className='flex justify-center px-10'>
                    <div className='delay-0 flex w-full flex-row items-center rounded-lg bg-gray-600 px-4 transition-all duration-500 focus-within:ring-2'>
                        <p className=''>S</p>
                        <input
                            placeholder='Search city'
                            className='my-2 w-full border-none bg-transparent text-sm outline-none focus:outline-none'
                        />
                    </div>
                </div>
                <div className='flex flex-col items-center text-gray-200'>
                    <div className='flex flex-row items-center'>
                        <p>ICON</p>
                        <div className='text-center'>
                            <p className='text-3xl font-bold'>Today</p>
                            <p className='text-xs font-semibold'>Wed, 23 Feb</p>
                        </div>
                    </div>
                    <p className='text-6xl font-semibold'>-32</p>
                    <p className='text-xs font-semibold'>Ottawa, Ontario</p>
                </div>
                <div>
                    <div className='flex flex-row justify-center'>
                        <p className='after:content-[" "] font-bold text-gray-200 after:mx-auto after:block after:h-2 after:w-2 after:rounded-full after:bg-pink-500'>
                            Today
                        </p>
                        <p className='after:content-[" "] font-bold text-gray-200 after:mx-auto after:block after:h-2 after:w-2 after:rounded-full after:bg-pink-500'>
                            Tomorrow
                        </p>
                    </div>
                    <div className='flex flex-col  gap-y-6'>
                        <div className='mx-auto flex gap-x-3'>
                            {[...Array(6)].map((_, i) => (
                                <div className='' key={i}>
                                    <WeatherCard />
                                </div>
                            ))}
                        </div>
                        <div className='mx-auto flex gap-x-3'>
                            {[...Array(6)].map((_, i) => (
                                <div className='' key={i}>
                                    <WeatherCard />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
