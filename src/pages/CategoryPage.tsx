import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/marketplace/header";
import { ProductCard } from "@/components/marketplace/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Filter, 
  Grid, 
  List, 
  SlidersHorizontal,
  ChevronDown 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Expanded dummy data for different categories
const categoryProducts = {
  electronics: [
    {
      id: "1",
      title: "iPhone 14 Pro Max 256GB - Space Black",
      price: 899,
      originalPrice: 1199,
      condition: "Like New" as const,
      location: "Downtown, NYC",
      seller: { name: "TechStore NYC", rating: 4.9, reviewCount: 234 },
      images: ["https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400"],
      category: "Electronics"
    },
    {
      id: "e1",
      title: "MacBook Air M2 13-inch 512GB",
      price: 1299,
      originalPrice: 1599,
      condition: "New" as const,
      location: "Manhattan, NYC",
      seller: { name: "AppleStore Pro", rating: 4.8, reviewCount: 445 },
      images: ["https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400"],
      category: "Electronics"
    },
    {
      id: "e2", 
      title: "Samsung 65' 4K Smart TV",
      price: 650,
      originalPrice: 900,
      condition: "Good" as const,
      location: "Brooklyn, NYC",
      seller: { name: "ElectronicsHub", rating: 4.7, reviewCount: 189 },
      images: ["https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400"],
      category: "Electronics"
    },
    {
      id: "e3",
      title: "PlayStation 5 Console + 2 Controllers", 
      price: 450,
      originalPrice: 599,
      condition: "Like New" as const,
      location: "Queens, NYC",
      seller: { name: "GameMaster", rating: 4.9, reviewCount: 312 },
      images: ["https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400"],
      category: "Electronics"
    }
  ],
  furniture: [
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
      id: "f1",
      title: "Scandinavian Oak Dining Table",
      price: 450,
      originalPrice: 800,
      condition: "Like New" as const,
      location: "Manhattan, NYC",
      seller: { name: "Nordic Home", rating: 4.8, reviewCount: 156 },
      images: ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=400"],
      category: "Furniture"
    },
    {
      id: "f2",
      title: "Vintage Bookshelf - Industrial Style",
      price: 280,
      originalPrice: 450,
      condition: "Good" as const,
      location: "Williamsburg, NYC",
      seller: { name: "IndustrialDecor", rating: 4.6, reviewCount: 98 },
      images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"],
      category: "Furniture"
    }
  ],
  vehicles: [
    {
      id: "v1",
      title: "2018 Honda Civic EX - Low Mileage",
      price: 18500,
      originalPrice: 22000,
      condition: "Good" as const,
      location: "Staten Island, NYC",
      seller: { name: "AutoDeals NYC", rating: 4.5, reviewCount: 67 },
      images: ["https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400"],
      category: "Vehicles"
    },
    {
      id: "v2", 
      title: "Mountain Bike - Trek X-Caliber 8",
      price: 680,
      originalPrice: 900,
      condition: "Like New" as const,
      location: "Central Park, NYC",
      seller: { name: "BikeShop Pro", rating: 4.9, reviewCount: 234 },
      images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"],
      category: "Vehicles"
    }
  ]
};

const CategoryPage = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');
  
  const products = categoryProducts[category as keyof typeof categoryProducts] || [];
  const categoryName = category?.charAt(0).toUpperCase() + category?.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <span>Home</span>
          <span>/</span>
          <span>Categories</span>
          <span>/</span>
          <span className="text-foreground font-medium">{categoryName}</span>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">{categoryName}</h1>
            <p className="text-muted-foreground">{products.length} items available</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Sort dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-48">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Sort by: {sortBy}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setSortBy('newest')}>
                  Newest First
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('price-low')}>
                  Price: Low to High
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('price-high')}>
                  Price: High to Low  
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('rating')}>
                  Highest Rated
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* View mode toggle */}
            <div className="flex border rounded-md">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </h3>
                
                <div className="space-y-6">
                  {/* Condition */}
                  <div>
                    <h4 className="font-medium mb-3">Condition</h4>
                    <div className="space-y-2">
                      {['New', 'Like New', 'Good', 'Fair'].map(condition => (
                        <label key={condition} className="flex items-center space-x-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{condition}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="font-medium mb-3">Price Range</h4>
                    <div className="space-y-2">
                      {['Under $100', '$100 - $500', '$500 - $1000', 'Over $1000'].map(range => (
                        <label key={range} className="flex items-center space-x-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{range}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <h4 className="font-medium mb-3">Location</h4>
                    <div className="space-y-2">
                      {['Manhattan', 'Brooklyn', 'Queens', 'Bronx'].map(location => (
                        <label key={location} className="flex items-center space-x-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{location}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" 
              : "space-y-4"
            }>
              {products.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {products.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg mb-4">
                  No items found in this category yet.
                </p>
                <Button>Browse All Categories</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;