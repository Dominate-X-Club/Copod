"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DatePickerDemo from "../ui/date-picker";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const bookingFormSchema = z.object({
  name: z.string().min(1,"Name is required"),
  phone: z.string().regex(/^\+?\d{10,15}$/, "Invalid phone number"),
  email: z.string().email("Invalid email address"),
  city: z.string().min(1,"City is required"),
  recordingDate: z.date().refine((date) => date != null, {
    message: "Recording date is required"
  }),
});

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bookingFormSchema),
  });

  const recordingDate = watch("recordingDate");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Card className="w-svw mx-20">
      <CardHeader>
        <CardTitle className="text-4xl">Shoot your Podcast</CardTitle>
        <CardDescription className="text-xl">
          with <b>copod</b> anyone can record a Podcast.
          <br />
          Just invite your guests, and start talking.
          <br />
          It&apos;s that easy!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Name</Label>
          <Input
            placeholder="Abhinav Singhal"
            {...register("name")}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <Label>Phone</Label>
          <Input
            placeholder="+91 8882021243"
            {...register("phone")}
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

          <Label>Email</Label>
          <Input
            placeholder="contact@umun.in"
            {...register("email")}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <Label>City</Label>
          <Input
            placeholder="Delhi 🇮🇳"
            {...register("city")}
            className={errors.city ? "border-red-500" : ""}
          />
          {errors.city && <p className="text-red-500">{errors.city.message}</p>}

        <div className="flex flex-col mt-2">
          <Label>Recording Date</Label>
          <DatePickerDemo
              date={recordingDate}
              setDate={(date) => setValue("recordingDate", date)}
            />
          {errors.recordingDate && <p className="text-red-500">{errors.recordingDate.message}</p>}
        </div>

          <CardFooter className="flex justify-start p-0 pt-4">
            <Button type="submit" className="bg-black text-main border-white shadow-base-black">
              Book Your Slot
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
