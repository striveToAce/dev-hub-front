import ProfileCard from "../components/profile/ProfileCard";

const getProfileDetails = async () => {
  try {
    /*fetch profile details*/
    let profileResponse = await fetch(
      "http://localhost:3000/api/auth/profileInfo",
      {
        next: { revalidate: 0 },
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
