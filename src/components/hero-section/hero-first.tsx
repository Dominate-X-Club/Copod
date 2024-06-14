"use client"
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";

export default function HeroFirst() {
    return (
        <>
            <div className="flex flex-col h-full items-start space-y-2 justify-center">
                <Label className="text-white text-3xl lg:text-5xl self-center lg:self-auto">go from</Label>
                <Label className="text-white text-5xl lg:text-7xl self-center lg:self-auto text-center lg:text-auto">zero to 1st <b>&nbsp;podcast</b></Label>
                <Label className="text-white text-2xl lg:text-3xl self-center lg:self-auto">& beyond 🚀</Label>
                <Label className="text-white text-l lg:text-xl pt-[40px] self-center lg:self-auto text-center lg:text-auto ml-px mr-px lg:m-0">with copod&apos;s Ready to Shoot, Hospitality Centric</Label>
                <Label className="text-white text-l lg:text-xl self-center lg:self-auto">Managed Podcast Studio.</Label>
                <div className="pt-[40px] pb-[40px] lg:pb-0 self-center lg:self-auto">
                    <Button>Start Podcasting, Instantly!</Button>
                </div>
            </div>
        </>
    );
}
