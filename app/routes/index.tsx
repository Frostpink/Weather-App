/** @format */

// primary background color: gray-700
// primary text color: gray-200
// secondary background color: gray-600

function WeatherCard({ text, temperature }: { text: string; temperature: number }) {
    // TODO: change the text-[9px] to something better
    return (
        <div className='rounded-lg bg-gray-600 p-2 text-center text-xs font-semibold text-gray-200 shadow-md'>
            <p>{text}</p>
            <p className='py-3'>ICON</p>
            <p>{temperature} dC</p>
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
                    <div className='flex flex-col  gap-y-6'>
                        <div className='mx-auto flex gap-x-3'>
                            {[...Array(5)].map((_, i) => (
                                <div className='' key={i}>
                                    <WeatherCard text='12 AM' temperature={26} />
                                </div>
                            ))}
                        </div>
                        <div className='mx-auto flex gap-x-3'>
                            {[...Array(4)].map((_, i) => (
                                <div className='' key={i}>
                                    <WeatherCard text='Tomorrow' temperature={26} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
