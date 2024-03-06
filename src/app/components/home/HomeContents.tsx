const Heading = () => {
  return (
    <div className="m-4 flex flex-col">
      <h1 className="mb-4 text-3xl font-semibold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
        DevHub:{" "}
        <span className="text-gray-600">
          Your Gateway to Development Excellence
        </span>
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Discover the Latest Development Feeds and Connect with Like-minded Dev
        Fellows
      </p>
    </div>
  );
};

const WhatWeOfferCard = ({ content }: any) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <h5 className="text-base font-semibold tracking-tight text-slate-500 dark:text-white">
          <span className="text-rose-400">
            {content.offering}{" "}
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </span>
          {content.description}
        </h5>
      </div>
    </div>
  );
};
export { Heading, WhatWeOfferCard };
