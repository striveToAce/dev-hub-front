import { createClient } from "@/utils/supabase/server";
const Feeds = async () => {
  const supabase = createClient();
  const data = await supabase.from("users").select();
  console.log(data,"_console. data__")

  return <div>hello</div>;
};
export default Feeds;
