"use server";
import { getAccessToken } from "@/utils/supabase/server";

/*get feeds*/
const getFeeds = async (page, pagesize) => {
  const accessT = await getAccessToken();
  const feedResponse = await fetch("http://localhost:3000/api/feed/list", {
    method: "POST",
    body: JSON.stringify({
      page,
      pagesize,
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

/*feed details*/
const getFeedDetails = async (id) => {
  const accessT = await getAccessToken();
  const feedResponse = await fetch("http://localhost:3000/api/feed/detail", {
    method: "POST",
    body: JSON.stringify({
      id,
      token: accessT,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 0 },
  });
  const resData = await feedResponse.json();
  if (resData.status) return Promise.resolve(resData?.data || null);
  else return Promise.resolve(null);
};

export { getFeeds, getFeedDetails };
