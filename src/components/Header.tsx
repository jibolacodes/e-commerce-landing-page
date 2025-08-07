import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, User, Menu, Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold gradient-text">
              TechStore
            </a>
            
            {/* Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Products
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Categories
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Deals
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
            </nav>
          </div>
          
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="w-5 h-5" />
            </Button>
            
            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="relative hidden sm:flex">
              <Heart className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 bg-primary text-primary-foreground text-xs">
                3
              </Badge>
            </Button>
            
            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 bg-primary text-primary-foreground text-xs">
                2
              </Badge>
            </Button>
            
            {/* User Account */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="w-5 h-5" />
            </Button>
            
            {/* Sign In Button */}
            <Button className="hidden sm:flex bg-primary hover:bg-primary-dark text-primary-foreground">
              Sign In
            </Button>
            
            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;