// pages/pricing.js
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Pricing = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-12 px-4 md:px-8">
      <h1 className="text-4xl font-bold mb-8">Our Pricing Plans</h1>
      <div className="grid gap-8 w-full max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Basic Plan */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Basic Plan</h2>
          <p className="text-lg mb-4">$19.99/month</p>
          <p className="mb-6">Ideal for individuals starting out.</p>
          <button
            className={`${buttonVariants} flex items-center justify-center w-full py-2 px-4 rounded-lg bg-black text-white`}
          >
            Get Started <ArrowRight className="ml-2" />
          </button>
        </div>

        {/* Standard Plan */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Standard Plan</h2>
          <p className="text-lg mb-4">$49.99/month</p>
          <p className="mb-6">Perfect for small businesses.</p>
          <button
            className={`${buttonVariants} flex items-center justify-center w-full py-2 px-4 rounded-lg bg-black text-white`}
          >
            Get Started <ArrowRight className="ml-2" />
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg md:col-span-2 lg:col-span-1">
          <h2 className="text-2xl font-bold mb-4">Premium Plan</h2>
          <p className="text-lg mb-4">$99.99/month</p>
          <p className="mb-6">Best for large enterprises.</p>
          <button
            className={`${buttonVariants} flex items-center justify-center w-full py-2 px-4 rounded-lg bg-black text-white`}
          >
            Get Started <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
