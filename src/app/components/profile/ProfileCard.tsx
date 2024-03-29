"use client";
import { userImages } from "@/utils/constants";
import { useMemo, useState } from "react";

const ProfileCard = ({ profile }: any) => {
  const plan = profile?.plan;
  const [selectedLimit, setSelectedLimit] = useState(0);
  const planColor = useMemo(() => {
    return plan == 0 ? "red" : plan == 1 ? "orange" : "green";
  }, [plan]);
  const limitLabels = ["Read feeds", "Write feeds", "Write feeds (ad)"];
  const limits = [
    `You have ${profile.rfc} reading feeds limit`,
    `You have ${profile.wfc} writing feeds (non advertised) limit`,
    `You have ${profile.wfac} writing feeds (advertised) limit`,
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
              {profile.fullName}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {profile.currentPosition}
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 mb-4">
          <div>
            <div className="flex justify-between mb-2">
              <div>
                <span>Credits</span>:{" "}
                <span className="font-semibold text-rose-500">
                  {profile.credits}
                </span>
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
                      strokeLinecap="round"
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
              <span
                className={`bg-${planColor}-100 text-${planColor}-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-${planColor}-900 dark:text-${planColor}-300`}
              >
                {planColor.toUpperCase()}
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
