import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Pricing = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-12 px-4 md:px-8">
      <h1 className="text-4xl font-bold mb-8">Our Pricing Plans</h1>
      <div className="grid gap-8 w-full max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Basic Plan */}
        <Card className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-bold mb-4">
              Basic Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">$19.99/month</p>
            <p className="mb-6">Suitable for solo use</p>
            <p className="mb-6"> ✅ Ideal for individuals starting out.</p>
            <p className="mb-6"> ✅ Ideal for individuals starting out.</p>
            <p className="mb-6"> ❌ Ideal for individuals starting out.</p>
            <p className="mb-6"> ❌ Ideal for individuals starting out.</p>
            <p className="mb-6"> ✅ Ideal for individuals starting out.</p>
            <p className="mb-6"> ❌ Ideal for individuals starting out.</p>
            <Button className="bg-black text-main border-white shadow-base-black hover:bg-gray-800 transition-colors duration-300">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Standard Plan */}
        <Card className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-bold mb-4">
              Standard Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">$49.99/month</p>
            <p className="mb-6">Perfect for small businesses.</p>
            <p className="mb-6"> ✅ Ideal for individuals starting out.</p>
            <p className="mb-6"> ✅ Ideal for individuals starting out.</p>
            <p className="mb-6"> ❌ Ideal for individuals starting out.</p>
            <p className="mb-6"> ❌ Ideal for individuals starting out.</p>
            <p className="mb-6"> ✅ Ideal for individuals starting out.</p>
            <p className="mb-6"> ✅ Ideal for individuals starting out.</p>
            <Button className="bg-black text-main border-white shadow-base-black hover:bg-gray-800 transition-colors duration-300">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Premium Plan */}
        <Card className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-2xl font-bold mb-4">
              Premium Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">$99.99/month</p>
            <p className="mb-6">Best for large enterprises.</p>
            <p className="mb-6"> ✅ Ideal for individuals starting out.</p>
            <p className="mb-6"> ✅ Ideal for individuals starting out.</p>
            <p className="mb-6"> ✅ Ideal for individuals starting out.</p>
            <p className="mb-6"> ✅ Ideal for individuals starting out.</p>
            <p className="mb-6"> ✅ Ideal for individuals starting out.</p>
            <p className="mb-6"> ✅ Ideal for individuals starting out.</p>
            <Button className="bg-black text-main border-white shadow-base-black hover:bg-gray-800 transition-colors duration-300">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
