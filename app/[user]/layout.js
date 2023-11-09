"use client"

import { useParams } from "next/navigation";
import Navbar from "@/Components/Navbar";

export default function RootLayout({children}){
    
    const params = useParams()
    const home = `/${params.user}/home`
    const contest = `/${params.user}/contest`
    const profile = `/${params.user}/profile`
    const problems = `/${params.user}/problems`

    console.log(params);
  return (
      <div>
      <Navbar home={home} contest={contest} profile={profile} problems={problems}/>
      {children}
      </div>
  )
}