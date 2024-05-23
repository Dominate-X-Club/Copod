"use client"
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";

export default function HeroFirst() {
    return <>
        <div className="flex flex-col h-full items-start space-y-2 justify-center">
            <Label className="text-white text-5xl">go from</Label>
            <Label className="text-white text-7xl">zero to 1st <b>&nbsp;podcast</b></Label>
            <Label className="text-white text-3xl">& beyond 🚀</Label>
            <Label className="text-white text-xl pt-[40px]">with copod's Ready to Shoot, Hospitality Centric</Label>
            <Label className="text-white text-xl ">Managed Podcast Studio.</Label>
            <div className="pt-[40px]">
                <Button>Start Podcasting, Instantly!</Button>
            </div>
        </div>
    </>
}