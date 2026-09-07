import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "Flowboard — трекер задач" };

export default function FlowboardPage() {
  redirect("https://flowboard-blagone.vercel.app");
}
