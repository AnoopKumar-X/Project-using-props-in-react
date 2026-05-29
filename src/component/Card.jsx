import React, { useState } from 'react'
import { Bookmark } from "lucide-react";

export default function Card(props) {
    const [saved, setSaved] = useState(false)
    return (
        <div className="w-64 rounded-3xl bg-gray-200 p-5 shadow-lg border border-gray-100 m-4 ">
            <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50">
                    <img
                        src={props.logo}
                        alt={props.company}
                        className="h-6 w-6 object-contain"
                    />
                </div>

                {/* Saved Badge */}
                <span onClick={() => setSaved(!saved)} className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-900  flex justify-center items-center p-2 gap-1 cursor-pointer ">
                    Saved<Bookmark size={18}
                        className={`cursor-pointer transition ${saved ? "fill-black text-black" : "text-gray-400"
                            }`} />
                </span>
            </div>

            {/* Job Info */}
            <div className="mt-4">
                <p >
                    <span className='text-sm text-gray-950 m-1 font-semibold'>{props.company}</span>
                    <span className="text-xs text-gray-400">10 days ago</span>
                </p>

                <h2 className="mt-1 text-2xl font-semibold leading-tight text-gray-900">
                    {props.role}
                </h2>


                <div className="mt-3 flex gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                        {props.job}
                    </span>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                        Flexible Schedule
                    </span>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 flex items-end justify-between">
                <div>
                    <p className="text-lg font-semibold text-gray-900">${props.salary}k</p>
                    <p className="text-sm text-gray-400"> {props.address}</p>
                </div>

                <button className="rounded-xl cursor-pointer bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
                    Apply now
                </button>
            </div>
        </div>
    );
}