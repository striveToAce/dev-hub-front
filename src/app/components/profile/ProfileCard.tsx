"use client";
import { userImages } from "@/utils/constants";
import { useState } from "react";

const ProfileCard = () => {
  const [selectedLimit, setSelectedLimit] = useState(0);
  const limitLabels = ["Read feeds", "Write feeds", "Write feeds (ad)"];
  const limits = [
    "You have 50 reading feeds limit",
    "You have 40 writing feeds (non advertised) limit",
    "You have 30 writing feeds (advertised) limit",
  ];

  return (
    <div className="flex justify-center">
      <div className="w-11/12 sm:w-5/12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
        <div className="flex gap-4">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={userImages[0]}
            alt="Bonnie image"
          />
          <div className="flex flex-col gap-1">
            <div className="text-xl font-medium text-gray-900 dark:text-white">
              Bonnie Green
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Visual Designer
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 mb-4">
          <div>
            <div className="flex justify-between mb-2">
              <div>
                <span>Credits</span>:{" "}
                <span className="font-semibold text-rose-500">250</span>
              </div>

              <div>
                <button
                  type="button"
                  className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8H5m12 0c.6 0 1 .4 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1Z"
                    />
                  </svg>
                  <span className="ml-1">Add Credits</span>
                </button>
              </div>
            </div>
            <div>
              <span>Plan</span>:{" "}
              <span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                Red
              </span>
            </div>
            {/* content limit remaining */}
            <div className="flex gap-4 border-slate-300 py-2 my-2">
              {limitLabels.map((label, idx) => (
                <div
                  className={`text-sm text-slate-500 font-semibold cursor-pointer ${
                    idx === selectedLimit ? "border-b-2 border-blue-300" : ""
                  }`}
                  key={idx}
                  onClick={() => setSelectedLimit(idx)}
                >
                  {label}
                </div>
              ))}
            </div>
            <div className="text-lg font-semibold text-purple-500">
              {limits[selectedLimit]}
            </div>
          </div>
        </div>
        <button
          type="button"
          className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};
export default ProfileCard;

/*

profile  logo
<img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar">


firstLett lastLeter

<div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
</div>




online
<div className="relative">
    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="">
    <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
</div>
*/
