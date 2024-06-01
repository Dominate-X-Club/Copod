"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { authZodSchema } from "../zod";
import {authFormInputs} from "@/types/types"
import { zodResolver } from "@hookform/resolvers/zod";
import { loginWithGoogle, loginWithSportify, signup } from "../action";
import { useToast } from "@/components/ui/use-toast"
import { FaGoogle,FaSpotify } from "react-icons/fa";
import Spinner from "@/components/Spinner";

interface SignUpFormProps {}



const SignUpForm: FC<SignUpFormProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<authFormInputs>({
    resolver: zodResolver(authZodSchema),
  });

  const onSubmit = async(data: authFormInputs) => {
    setIsLoading(true);
    // Handle form submission
    const res=await signup(data.email,data.password);
    if(res)
    {
      toast({
        variant: "destructive",
        title: "Something Went Wrong",
        description: "There was a problem Signing up. Try again or refresh the page",
      })
    }
    setIsLoading(false);
  };

  const handleGoogleLogin=async()=>{
    setIsLoading(true);
    // Handle form submission
    const res=await loginWithGoogle();
    if(res)
    {
      toast({
        variant: "destructive",
        title: "Something Went Wrong",
        description: "There was a problem Signing up. Try again or refresh the page",
      })
    }
    setIsLoading(false);
  }
  const handleSpotifyLogin=async()=>{
    setIsLoading(true);
    // Handle form submission
    const res=await loginWithSportify();
    if(res)
    {
      toast({
        variant: "destructive",
        title: "Something Went Wrong",
        description: "There was a problem Signing up. Try again or refresh the page",
      })
    }
    setIsLoading(false);
  }

  return (
    <div className="grid grid-cols-1">
      <div className="">
        <div className="mx-auto flex w-full flex-col justify-center sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight dark:text-white">
              Get Started
            </h1>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Create a new account
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 md:p-8">
            <div className="grid gap-6 w-full">
              <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      disabled={isLoading}
                      className="dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                      {...register("email")}
                    />
                    {errors.email?.message && typeof errors.email.message === 'string' && (
                      <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="password">
                      Password
                    </Label>
                    <Input
                      id="password"
                      placeholder="••••••••"
                      type="password"
                      autoCapitalize="none"
                      autoComplete="password"
                      autoCorrect="off"
                      disabled={isLoading}
                      className="dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                      {...register("password")}
                    />
                    {errors.password?.message && typeof errors.password.message === 'string' && (
                      <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                  </div>
                  <Button
                    disabled={isLoading}
                    className="bg-black text-main border-white shadow-base-black dark:bg-gray-700 dark:text-white dark:border-gray-500"
                  >
                    {isLoading ? "Loading" : "Sign Up"}
                  </Button>
                </div>
              </form>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t dark:border-gray-600" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground dark:bg-gray-900 dark:text-gray-400">
                    Or
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <Button onClick={handleGoogleLogin} variant="noShadow" type="button" disabled={isLoading} className="dark:bg-gray-700 dark:text-white">
                  {isLoading ? <Spinner/> : <FaGoogle className="w-4 h-4 mx-2" />}{" "}
                  Continue with Google
                </Button>
                <Button onClick={handleSpotifyLogin} variant="noShadow" type="button" disabled={isLoading} className="dark:bg-gray-700 dark:text-white">
                  {isLoading ? <Spinner/> : <FaSpotify className="w-4 h-4 mx-2" />}{" "}
                  Continue with Spotify
                </Button>
              </div>
              <p className="text-center dark:text-gray-400">
                Have an account?{" "}
                <Link href="/auth/login" className="underline dark:text-white">
                  Login
                </Link>{" "}
                Now
              </p>
            </div>
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground dark:text-gray-400">
        By clicking continue, you agree to our{" "}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-primary dark:hover:text-primary-light"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-primary dark:hover:text-primary-light"
        >
          Privacy Policy
        </Link>
        .
      </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
