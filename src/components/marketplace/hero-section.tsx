import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "@/components/ui/search-bar";
import { TrendingUp, Users, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-marketplace.jpg";

export function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
      
      {/* Hero image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Marketplace community" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            <TrendingUp className="mr-2 h-4 w-4" />
            #1 Trusted Marketplace
          </Badge>

          {/* Main headline */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Buy & Sell
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Anything
            </span>
            Locally
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of trusted buyers and sellers in your community. 
            Find great deals on electronics, furniture, cars, and more.
          </p>

          {/* Search bar */}
          <div className="mb-12">
            <SearchBar placeholder="What are you looking for today?" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-strong px-8 py-6 text-lg font-semibold rounded-full"
              onClick={() => navigate('/search')}
            >
              Start Shopping
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
              onClick={() => navigate('/profile')}
            >
              Sell Your Items
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-white/20 rounded-full">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">500K+</div>
              <div className="text-white/80">Active Users</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-white/20 rounded-full">
                  <Shield className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">99.9%</div>
              <div className="text-white/80">Secure Transactions</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-white/20 rounded-full">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">24hrs</div>
              <div className="text-white/80">Average Response</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="hsl(var(--background))" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}