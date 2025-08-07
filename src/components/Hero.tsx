import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, TrendingUp, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="section-container py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>Trending Now</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Premium Tech
                <br />
                <span className="text-white/90">That Inspires</span>
              </h1>
              <p className="text-xl text-white/80 max-w-lg">
                Discover cutting-edge technology and premium products that enhance your digital lifestyle. Quality guaranteed.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                <ShoppingBag className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Shop Now
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg">
                View Collection
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white/80">4.9 from 1,200+ reviews</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-3xl transform rotate-6"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Today's Deals</h3>
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span>Premium Headphones</span>
                    <span className="text-2xl font-bold">$299</span>
                  </div>
                  <div className="text-sm text-white/70">Save 30% today</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span>Smart Watch Pro</span>
                    <span className="text-2xl font-bold">$199</span>
                  </div>
                  <div className="text-sm text-white/70">Limited time offer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;