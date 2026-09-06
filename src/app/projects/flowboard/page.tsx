import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Flowboard — трекер задач" };
export default function FlowboardPage() {
 return <main style={{position:"fixed",inset:0,zIndex:100,background:"#f0f1ec",display:"flex",flexDirection:"column"}}>
 <Link href="/" style={{padding:"10px 20px",background:"#171711",color:"#fbf7ec",fontSize:14}}>← Вернуться в портфолио</Link>
 <iframe src="/flowboard-app/index.html" title="Flowboard — задачи, календарь и аналитика" style={{width:"100%",flex:1,border:0}} />
 </main>;
}

