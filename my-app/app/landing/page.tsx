"use client"

import Image from "next/image";
import img from "@/public/casette.png";

export default function landing() {
    return (
        <div className="w-full h-full center-images mt-[-32px]">
            <Image src={img} alt="casette"/>
        </div>
    )
}