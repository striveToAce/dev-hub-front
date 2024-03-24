import { getAccessToken } from "@/utils/supabase/server";
import ProfileCard from "../components/profile/ProfileCard";
const getProfileDetails = async () => {
  const accessT = await getAccessToken();
  // console.log(accessT)
  try {
    /*fetch profile details*/
    let profileResponse = await fetch(
      "http://localhost:3000/api/auth/profileInfo",
      {
        method: "POST",
        next: { revalidate: 0 },
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: accessT,
        }),
      }
    );
    profileResponse = await profileResponse.json();
    const data = profileResponse?.data || {};

    return {
      ...data,
      createdAt: data?.created_at,
      fullName: data?.full_name,
      currentPosition: data?.current_position,
    };
  } catch (err) {
    return null;
  }
};
const Profile = async () => {
  const profile = await getProfileDetails();
  return <ProfileCard profile={profile ?? {}} />;
};
export default Profile;
