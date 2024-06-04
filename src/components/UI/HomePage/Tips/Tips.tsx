import Image from "next/image";
import buildingImage from '../../../../assets/building.png'
import checkIcon from '../../../../assets/check-mark.png'


import React from 'react';

const Tips = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row  bg-[#6db784] text-black p-6 rounded-lg shadow-lg">
                <div className="relative md:w-1/2">
                    <Image width={400} height={400} src={buildingImage} alt="Ice Cream" className="rounded-lg bg-white shadow-lg" />
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                        <div className="bg-pink-500 opacity-50 w-20 h-20 rounded-full"></div>
                        <div className="bg-yellow-500 opacity-50 w-16 h-16 rounded-full"></div>
                        <div className="bg-red-500 opacity-50 w-12 h-12 rounded-full"></div>
                    </div>
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-black">Advice for finding and <span className="text-white">sharing flats.</span></h2>
                    <p className="text-black  mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center text-black ">
                            <Image width={20} height={20} alt="check" src={checkIcon} />
                            1. Set your budget.
                        </li>
                        <li className="flex items-center text-black ">
                            <Image width={20} height={20} alt="check" src={checkIcon} />
                            2. Choose an area you’d like to live in.
                        </li>
                        <li className="flex items-center text-black ">
                            <Image width={20} height={20} alt="check" src={checkIcon} />
                            3. Advertise yourself.
                        </li>
                        <li className="flex items-center text-black ">
                            <Image width={20} height={20} alt="check" src={checkIcon} />
                            4. Get messaging.
                        </li>
                        <li className="flex items-center text-black ">
                            <Image width={20} height={20} alt="check" src={checkIcon} />
                            5. Take your time and ask the right questions.

                        </li>
                        <li className="flex items-center text-black ">
                            <Image width={20} height={20} alt="check" src={checkIcon} />
                            6. Got the place? Great! Put it in writing.
                        </li>
                    </ul>
                </div>
            </div >
        </div>
    );
};

export default Tips;