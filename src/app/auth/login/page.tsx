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
import { login, signup } from './action';

export default function AuthForm() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form>
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
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="default" formAction={signup}>
              Sign Up
            </Button>
            <Button formAction={login}>Login</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
