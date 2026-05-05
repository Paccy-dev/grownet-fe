import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import MyImpactDashboard from "@/components/my-impact/MyImpactDashboard";
import LoginPrompt from "@/components/my-impact/LoginPrompt";

// Simulate auth check — later this will verify the Strapi JWT
async function getUser() {
  const cookieStore = cookies();
  //   const token = cookieStore.get("jwt");
  const token = "jwt";
  return token ? { name: "Youssef", email: "youssef@grownet.ma" } : null;
}

export default async function MyImpactPage() {
  const user = await getUser();

  if (!user) {
    return <LoginPrompt />;
  }

  return <MyImpactDashboard user={user} />;
}
