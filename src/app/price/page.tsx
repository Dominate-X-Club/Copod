import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, X } from "lucide-react";

const Pricing = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-12 px-4 md:px-8">
      <h1 className="text-4xl font-bold mb-8">Our Pricing Plans</h1>
      <div className="flex flex-wrap gap-8 w-full justify-center">
        {/* Basic Plan */}
        <Card className="lg:w-96 w-80 bg-white text-black p-6 transform transition-transform duration-300 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none">
          <CardHeader>
            <CardTitle className="text-2xl text-center font-bold underline">
              Basic Plan
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center p-0 lg:p-6">
            <p className="text-lg mb-4 font-extrabold">$19.99/month</p>
            <p className="mb-6 font-semibold">Suitable for solo use</p>
            <p className="mb-6 flex items-center justify-center">
              <Check className="mr-2" />
              Ideal for individuals starting out.
            </p>
            <p className="mb-6 flex items-center justify-center">
              <Check className="mr-2" />
              Ideal for individuals starting out.
            </p>
            <p className="mb-6 flex items-center justify-center">
              <X className="mr-2" />
              Ideal for individuals starting out.
            </p>
            <p className="mb-6 flex items-center justify-center">
              <X className="mr-2" />
              Ideal for individuals starting out.
            </p>
            {/* <p className="mb-6 flex items-center justify-center">
              <Check className="mr-2" />
              Ideal for individuals starting out.
            </p>
            <p className="mb-6 flex items-center justify-center">
              <X className="mr-2" />
              Ideal for individuals starting out.
            </p> */}
            <Button className="bg-black text-main border-white w-full shadow-base-black duration-300">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Standard Plan */}
        <Card className="lg:w-96 w-80 bg-white text-black p-6 transform transition-transform duration-300 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none relative">
          <CardHeader className="flex justify-center">
            <CardTitle className="text-2xl text-center font-bold underline">
              Standard Plan
            </CardTitle>
            <Badge className="absolute bg-black text-white top-3 left-1/2 transform -translate-x-1/2">
              Recommended
            </Badge>
          </CardHeader>
          <CardContent className="text-center p-0 lg:p-6">
            <p className="text-lg mb-4 font-extrabold">$49.99/month</p>
            <p className="mb-6 font-semibold">Perfect for small businesses.</p>
            <p className="mb-6 flex items-center justify-center">
              <Check className="mr-2" />
              Ideal for individuals starting out.
            </p>
            <p className="mb-6 flex items-center justify-center">
              <Check className="mr-2" />
              Ideal for individuals starting out.
            </p>
            <p className="mb-6 flex items-center justify-center">
              <Check className="mr-2" />
              Ideal for individuals starting out.
            </p>
            <p className="mb-6 flex items-center justify-center">
              <X className="mr-2" />
              Ideal for individuals starting out.
            </p>
            {/* <p className="mb-6 flex items-center justify-center">
              <Check className="mr-2" />
              Ideal for individuals starting out.
            </p>
            <p className="mb-6 flex items-center justify-center">
              <X className="mr-2" />
              Ideal for individuals starting out.
            </p> */}
            <Button className="bg-black text-main border-white w-full shadow-base-black duration-300">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Premium Plan */}
        <Card className="lg:w-96 w-80 bg-white text-black p-6 transform transition-transform duration-300 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none">
          <CardHeader>
            <CardTitle className="text-2xl text-center font-bold underline">
              Premium Plan
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center p-0 lg:p-6">
            <p className="text-lg mb-4 font-extrabold">$99.99/month</p>
            <p className="mb-6 font-semibold">Best for large enterprises.</p>
            <p className="mb-6 flex items-center justify-center">
              <Check className="mr-2" />
              Ideal for individuals starting out.
            </p>
            <p className="mb-6 flex items-center justify-center">
              <Check className="mr-2" />
              Ideal for individuals starting out.
            </p>
            <p className="mb-6 flex items-center justify-center">
              <Check className="mr-2" />
              Ideal for individuals starting out.
            </p>
            <p className="mb-6 flex items-center justify-center">
              <Check className="mr-2" />
              Ideal for individuals starting out.
            </p>
            {/* <p className="mb-6 flex items-center justify-center">
              <Check className="mr-2" />
              Ideal for individuals starting out.
            </p>
            <p className="mb-6 flex items-center justify-center">
              <Check className="mr-2" />
              Ideal for individuals starting out.
            </p> */}
            <Button className="bg-black text-main border-white w-full shadow-base-black duration-300">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
