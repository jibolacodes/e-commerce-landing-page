import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-primary text-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-8">
            <Mail className="w-8 h-8" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Stay in the Loop
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Get exclusive deals, product launches, and tech insights delivered straight to your inbox. 
            Join over 50,000 tech enthusiasts!
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
              />
              <Button className="bg-white text-primary hover:bg-white/90 px-8 font-semibold whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm text-white/60 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-8 mt-12 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-sm">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">99%</div>
              <div className="text-sm">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;