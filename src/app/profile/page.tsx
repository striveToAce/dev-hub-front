"use client";
//import { createClient } from "@/utils/supabase/server";
import axios from "axios";
import ProfileCard from "../components/profile/ProfileCard";
import { useEffect, useState } from "react";

const Profile = async () => {
  const [profileDetails, setProfileDetails] = useState(null);
  const getProfileDetails = async () => {
    try {
      // Fetch profile details from the API route
      const { data } = ({} = await axios.get("/api/auth/profileInfo"));
      if (data.status) setProfileDetails(() => data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfileDetails();
  }, []);

  return <ProfileCard />;
};
export default Profile;
