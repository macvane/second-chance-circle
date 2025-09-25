import { Header } from "@/components/marketplace/header";
import { HeroSection } from "@/components/marketplace/hero-section";
import { CategoryGrid } from "@/components/marketplace/category-grid";
import { ProductCard } from "@/components/marketplace/product-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, MessageCircle, Star } from "lucide-react";

// Mock product data
const featuredProducts = [
  {
    id: "1",
    title: "iPhone 14 Pro Max 256GB - Space Black",
    price: 899,
    originalPrice: 1199,
    condition: "Like New" as const,
    location: "Downtown, NYC",
    seller: { name: "TechStore NYC", rating: 4.9, reviewCount: 234 },
    images: ["https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400", "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"],
    category: "Electronics",
    isFeatured: true
  },
  {
    id: "2", 
    title: "Vintage Leather Sofa - Mid Century Modern",
    price: 650,
    originalPrice: 1200,
    condition: "Good" as const,
    location: "Brooklyn, NYC",
    seller: { name: "VintageFinds", rating: 4.7, reviewCount: 89 },
    images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400"],
    category: "Furniture"
  },
  {
    id: "3",
    title: "Road Bike - Trek Domane AL 2",
    price: 450,
    originalPrice: 600,
    condition: "Good" as const, 
    location: "Queens, NYC",
    seller: { name: "BikeShop", rating: 4.8, reviewCount: 156 },
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"],
    category: "Sports"
  },
  {
    id: "4",
    title: "Canon EOS R6 Mark II Camera Body", 
    price: 1899,
    originalPrice: 2499,
    condition: "New" as const,
    location: "Manhattan, NYC", 
    seller: { name: "PhotoPro", rating: 4.9, reviewCount: 312 },
    images: ["https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400"],
    category: "Photography"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoryGrid />
      
      {/* Featured Products */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Featured Items</h2>
              <p className="text-xl text-muted-foreground">
                Hand-picked deals from trusted sellers
              </p>
            </div>
            <Button variant="outline" className="hidden sm:flex">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose SecondMarket?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make buying and selling second-hand items safe, easy, and rewarding
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Transactions</h3>
              <p className="text-muted-foreground">
                Every transaction is protected with our secure payment system and buyer protection
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-secondary/10 rounded-full">
                  <Star className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Sellers</h3>
              <p className="text-muted-foreground">
                All sellers are verified and rated by our community for your peace of mind
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Truck className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Quick local delivery or convenient pickup options available
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-primary-light/10 rounded-full">
                  <MessageCircle className="h-8 w-8 text-primary-light" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our dedicated support team is always here to help with any questions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-hero-gradient text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our community of buyers and sellers today. List your first item for free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8">
              Start Selling Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8">
              Browse Items
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold">SecondMarket</span>
              </div>
              <p className="text-muted mb-4">
                The most trusted marketplace for buying and selling quality second-hand items.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Browse</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="#" className="hover:text-background transition-smooth">Electronics</a></li>
                <li><a href="#" className="hover:text-background transition-smooth">Furniture</a></li>
                <li><a href="#" className="hover:text-background transition-smooth">Vehicles</a></li>
                <li><a href="#" className="hover:text-background transition-smooth">Clothing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="#" className="hover:text-background transition-smooth">Help Center</a></li>
                <li><a href="#" className="hover:text-background transition-smooth">Safety Tips</a></li>
                <li><a href="#" className="hover:text-background transition-smooth">Contact Us</a></li>
                <li><a href="#" className="hover:text-background transition-smooth">Report Item</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="#" className="hover:text-background transition-smooth">About Us</a></li>
                <li><a href="#" className="hover:text-background transition-smooth">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-background transition-smooth">Terms of Service</a></li>
                <li><a href="#" className="hover:text-background transition-smooth">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-muted/20 mt-8 pt-8 text-center text-sm text-muted">
            <p>&copy; 2024 SecondMarket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;