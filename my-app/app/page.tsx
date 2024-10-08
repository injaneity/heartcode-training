import Image from "next/image";
import bg from "@/app/assets/websitebg.png";

export default function Home() {
  return (
    <div className="flex flex-row justify-center h-dvh p-5">
      <h1> DRUGS ARE BAD </h1>
      <div className=""><Image src={bg} alt="Graph Illustration" width={500} height={300} /></div>
  
      <h3> this is your lungs on drugs </h3>
    </div>
  );
}
