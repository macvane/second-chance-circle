import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/marketplace/header";
import { ProductCard } from "@/components/marketplace/product-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Filter, 
  Grid, 
  List, 
  SlidersHorizontal,
  ChevronDown,
  Search
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  
  // Mock search results - in real app, this would come from API
  const searchResults = [
    {
      id: "sr1",
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
      id: "sr2",
      title: "iPad Pro 11' 2022 - 128GB WiFi", 
      price: 650,
      originalPrice: 899,
      condition: "Like New" as const,
      location: "Manhattan, NYC",
      seller: { name: "Sarah Johnson", rating: 4.8, reviewCount: 127 },
      images: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400"],
      category: "Electronics"
    },
    {
      id: "sr3", 
      title: "MacBook Air M2 13-inch 512GB",
      price: 1299,
      originalPrice: 1599,
      condition: "New" as const,
      location: "Brooklyn, NYC",
      seller: { name: "AppleStore Pro", rating: 4.8, reviewCount: 445 },
      images: ["https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400"],
      category: "Electronics"
    },
    {
      id: "sr4",
      title: "Vintage Leather Sofa - Mid Century Modern",
      price: 650,
      originalPrice: 1200,
      condition: "Good" as const,
      location: "Queens, NYC",
      seller: { name: "VintageFinds", rating: 4.7, reviewCount: 89 },
      images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400"],
      category: "Furniture"
    }
  ];

  const filteredResults = query 
    ? searchResults.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : searchResults;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Search Info */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Search className="h-4 w-4" />
          <span>Search results for:</span>
          <span className="text-foreground font-medium">"{query}"</span>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Search Results</h1>
            <p className="text-muted-foreground">
              {filteredResults.length} items found
              {query && ` for "${query}"`}
            </p>
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
                <DropdownMenuItem onClick={() => setSortBy('relevance')}>
                  Most Relevant
                </DropdownMenuItem>
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
                  Refine Results
                </h3>
                
                <div className="space-y-6">
                  {/* Category */}
                  <div>
                    <h4 className="font-medium mb-3">Category</h4>
                    <div className="space-y-2">
                      {['Electronics', 'Furniture', 'Vehicles', 'Clothing'].map(category => (
                        <label key={category} className="flex items-center space-x-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>

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

                  <Button className="w-full">Apply Filters</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Grid */}
          <div className="lg:col-span-3">
            {filteredResults.length > 0 ? (
              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" 
                : "space-y-4"
              }>
                {filteredResults.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-lg mb-4">
                  No results found for "{query}"
                </p>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or browse our categories
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

export default SearchResults;