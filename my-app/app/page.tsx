import Image from "next/image";
import bg from "@/app/assets/websitebg.png";

export default function Home() {
  return (
    <div>
      <h1> DRUGS ARE BAD </h1>
      <Image src={bg} alt="Graph Illustration" width={500} height={300} />
      <h3> this is your lungs on drugs </h3>
    </div>
  );
}
