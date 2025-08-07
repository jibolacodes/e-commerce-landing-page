import { Shield, Truck, Headphones, CreditCard, RotateCcw, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Shopping",
    description: "Your data is protected with industry-leading encryption and security measures."
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Enjoy free worldwide shipping on all orders above $99. Fast and reliable delivery."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated customer support team is available around the clock to help you."
  },
  {
    icon: CreditCard,
    title: "Easy Payments",
    description: "Multiple payment options including credit cards, PayPal, and digital wallets."
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day hassle-free return policy. Not satisfied? Get your money back."
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "All products come with manufacturer warranty and quality assurance."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">TechStore</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience and premium products.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="text-center p-8 rounded-xl hover:shadow-medium transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;