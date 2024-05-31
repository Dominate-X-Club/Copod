"use client";
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';


export default function Auth() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSignup = async () => {
    setMessage("");
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        data: {
          confirmation_sent_at: Date.now(),
        },
        options: {
          emailRedirectTo: 'http://localhost:3000/auth/confirm'
        }
      });

      if (error) {
        setMessage(error.message);
      }
      else {
        setMessage('Successful, please check your email for instructions.');
      }

    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setMessage("");
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setMessage(error.message);
      }
      else {
        router.push("/");
      }
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) { router.push("/"); }
    }
    getUser();

  }, [router])

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Authentication</CardTitle>
          <CardDescription>
            Enter your credentials for Login/Signup
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        {message && <p className='text-xs pl-6 bottom-[235px] absolute'>{message}</p>}
        {loading && <p className='text-xs pl-6 bottom-[235px] absolute'>Loading...</p>}
        <CardFooter className="flex justify-between">
          <Button variant="default" onClick={handleSignup}>
            Sign Up
          </Button>
          <Button onClick={handleLogin}>Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
