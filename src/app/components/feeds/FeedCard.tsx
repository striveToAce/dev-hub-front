import { userImages } from "@/utils/constants";

const FeedCard = ({ feed }:any) => {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div>
        <div className="text-2xl font-semibold line-clamp-2">{feed.title}</div>
        <div className="text-base text-gray-400 line-clamp-3">{feed.description}</div>
        <div className="text-blue-600 text-xs font-semibold cursor-pointer">
          view in detail
        </div>
      </div>
      {/* author details */}
      <div className="mt-4">
        <div className="flex flex-row gap-2 items-center p-1">
          <div>
            <img
              className="w-10 h-10 rounded-full"
              src={userImages[0]}
              alt="Rounded avatar"
            />
          </div>
          <div className="text-purple-400 cursor-pointer">Mike Johnson</div>
        </div>
      </div>

      {/* like comment report */}
      <div className="flex flex-row gap-2 border-t p-1 mt-4">
        <div>like</div>
        <div>comment</div>
        <div>report</div>
      </div>
    </div>
  );
};
export default FeedCard;
