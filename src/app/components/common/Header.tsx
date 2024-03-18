import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex-col items-center p-4">
        <div className="flex gap-x-2 items-center mb-3">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
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
              d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
            />
          </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          <Link href="/home">DevHub</Link>
          </span>
        </div>
        <div className="flex gap-x-2 items-center text-rose-500 font-medium gap-x-4 flex-wrap">
          <div className="cursor-pointer">About</div>
          <div className="cursor-pointer">Feeds</div>
          <div className="cursor-pointer">Followers</div>
          <div className="cursor-pointer">
            <Link href="/auth/login">Login</Link>
          </div>
          <div className="cursor-pointer"><Link href="/profile">My Profile</Link></div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
