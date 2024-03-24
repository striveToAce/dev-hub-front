import Link from "next/link";
import FeedCard from "../components/feeds/FeedCard";
import { getAccessToken } from "@/utils/supabase/server";

const getFeeds = async () => {
  const accessT = await getAccessToken();
  const feedResponse = await fetch("http://localhost:3000/api/feed/list", {
    method: "POST",
    body: JSON.stringify({
      page: 1,
      pagesize: 10,
      token: accessT,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 0 },
  });
  const resData = await feedResponse.json();
  if (resData.status) return resData?.data || [];
  else return [];
};
const Feeds = async () => {
  /* get feeds */
  const feeds = await getFeeds();

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
        {feeds.map((fd: any) => (
          <FeedCard key={fd.id} feed={fd} />
        ))}
      </div>
    </div>
  );
};
export default Feeds;
