import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, ShoppingCart, Heart } from "lucide-react";
import headphonesImg from "@/assets/product-headphones.jpg";
import smartwatchImg from "@/assets/product-smartwatch.jpg";
import laptopImg from "@/assets/product-laptop.jpg";
import smartphoneImg from "@/assets/product-smartphone.jpg";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    image: headphonesImg,
    rating: 4.9,
    reviews: 234,
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 199,
    originalPrice: 249,
    image: smartwatchImg,
    rating: 4.8,
    reviews: 189,
    badge: "New"
  },
  {
    id: 3,
    name: "Ultra-Thin Laptop",
    price: 1299,
    originalPrice: 1499,
    image: laptopImg,
    rating: 4.9,
    reviews: 156,
    badge: "Featured"
  },
  {
    id: 4,
    name: "Flagship Smartphone",
    price: 899,
    originalPrice: 999,
    image: smartphoneImg,
    rating: 4.7,
    reviews: 278,
    badge: "Limited"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and highest-rated products, carefully selected for quality and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={product.id} className="product-card group cursor-pointer animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </span>
                </div>
                <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-muted-foreground hover:text-red-500 transition-colors" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-primary">${product.price}</span>
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                  <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    Save ${product.originalPrice - product.price}
                  </span>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground group-hover:shadow-lg transition-all">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;