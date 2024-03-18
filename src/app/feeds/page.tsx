import FeedCard from "../components/feeds/FeedCard";

const Feeds = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 m-2">
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </div>
  );
};
export default Feeds;
