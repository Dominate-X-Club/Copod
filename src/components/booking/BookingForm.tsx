"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DatePickerDemo from "../ui/date-picker";

export default function BookingForm() {
    return (
        <Card className="w-svw mx-20">
            <CardHeader>
                <CardTitle className="text-4xl">Shoot your Podcast</CardTitle>
                <CardDescription className="text-xl">with <b>copod</b> anyone can record a Podcast.<br/>Just invite your guests, and start talking.<br/>It&apos;s that easy!</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <Label>Name</Label>
                    <Input placeholder="Abhinav Singhal" className=""></Input>
                    <Label>Phone</Label>
                    <Input placeholder="+91 8882021243" className=""></Input>
                    <Label>Email</Label>
                    <Input placeholder="contact@umun.in" className=""></Input>
                    <Label>City</Label>
                    <Input placeholder="Delhi 🇮🇳" className=""></Input>

                    <Label>Recording Date</Label> <br/>
                    <DatePickerDemo></DatePickerDemo>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button className="bg-black text-main border-white shadow-base-black">Book Your Slot</Button>
            </CardFooter>
        </Card>
    )
}