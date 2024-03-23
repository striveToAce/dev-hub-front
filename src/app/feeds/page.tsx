import Link from "next/link";
import FeedCard from "../components/feeds/FeedCard";

const Feeds = () => {
  return (
    <div>
      <Link href="feeds/create">
        <button
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 m-2"
        >
          Add feed
        </button>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 m-2">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
    </div>
  );
};
export default Feeds;
