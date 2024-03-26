"use client";
import { useEffect, useState } from "react";
import { MotionDiv } from "../common/MotionDiv";
import { userImages } from "@/utils/constants";
import { usePathname } from "next/navigation";
import { getFeedDetails } from "@/app/actions/feeds";
import LineLoader from "../common/loader/LineLoader";

const FeedDetail = () => {
  /*component states*/
  const [feed, setFeed] = useState(null);
  const pathname = usePathname();
  const feedId = pathname.split("/")[pathname.split("/").length - 1];

  /*component variables*/
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  /*component renders*/
  useEffect(() => {
    if (feedId) getFeedDetails(feedId).then((data) => setFeed(data));
  }, [feedId]);

  if (!feed) return <LineLoader />;
  return (
    <div>
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        transition={{
          delay: 0.3,
          ease: "easeInOut",
          duration: 0.5,
        }}
        viewport={{
          amount: 0,
        }}
        animate="visible"
        className="block m-2 p-6 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <MotionDiv
          variants={itemVariants}
          initial="hidden"
          transition={{
            delay: 0.3,
            ease: "easeInOut",
            duration: 0.5,
          }}
          viewport={{
            amount: 0,
          }}
          animate="visible"
        >
          <div className="text-2xl font-semibold line-clamp-2">feed title</div>
          <div className="text-base text-gray-400 line-clamp-3">
            feed description
          </div>
          <div className="text-blue-600 text-xs font-semibold cursor-pointer">
            view in detail
          </div>
        </MotionDiv>
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
      </MotionDiv>
    </div>
  );
};
export default FeedDetail;
