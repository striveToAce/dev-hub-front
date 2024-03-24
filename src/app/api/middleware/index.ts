import { createClient } from "@/utils/supabase/server";
async function getUser(req) {
  const supabase = createClient();
  const token = req?.headers?.token;
  if(token){
    console.log(token,"tkn")
  }
  const getUserResponse = await supabase.auth.getUser();
  if (getUserResponse?.error)
    return Promise.reject({
      unauth: true,
    });
  const currentUser = getUserResponse?.data?.user;
  if (!currentUser) return Promise.resolve(0);
  const findUserResponse = await supabase
    .from("users")
    .select()
    .eq("email", currentUser?.email);
  if (findUserResponse?.error)
    return Promise.reject({
      unauth: true,
    });
  let loggedInUser = findUserResponse?.data[0];
  return Promise.resolve(loggedInUser);
}

export { getUser };
