import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Star, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  condition: "New" | "Like New" | "Good" | "Fair" | "Poor";
  location: string;
  seller: {
    name: string;
    rating: number;
    reviewCount: number;
  };
  images: string[];
  category: string;
  isFeatured?: boolean;
}

export function ProductCard({
  id,
  title,
  price,
  originalPrice,
  condition,
  location,
  seller,
  images,
  category,
  isFeatured = false
}: ProductCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "New": return "bg-success-gradient text-white";
      case "Like New": return "bg-secondary text-secondary-foreground";
      case "Good": return "bg-primary/10 text-primary";
      case "Fair": return "bg-accent/20 text-accent";
      case "Poor": return "bg-destructive/10 text-destructive";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="group cursor-pointer transition-smooth hover:shadow-medium hover:-translate-y-1 bg-card-gradient border-0 overflow-hidden">
      {isFeatured && (
        <div className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 text-center">
          FEATURED
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <img 
          src={images[currentImageIndex]} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
        />
        
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
              />
            ))}
          </div>
        )}
        
        <button
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-smooth"
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorited(!isFavorited);
          }}
        >
          <Heart className={`h-4 w-4 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
        </button>
        
        <Badge 
          className={`absolute top-3 left-3 ${getConditionColor(condition)} border-0`}
        >
          {condition}
        </Badge>
      </div>

      <CardContent className="p-4">
        <div className="mb-3">
          <Badge variant="outline" className="mb-2 text-xs">
            {category}
          </Badge>
          <h3 className="font-semibold text-lg mb-1 line-clamp-2 group-hover:text-primary transition-smooth">
            {title}
          </h3>
        </div>

        <div className="flex items-baseline space-x-2 mb-3">
          <span className="text-2xl font-bold bg-price-gradient bg-clip-text text-transparent">
            ${price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1">
            <span className="text-muted-foreground">Sold by</span>
            <span className="font-medium">{seller.name}</span>
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs">{seller.rating}</span>
              <span className="text-xs text-muted-foreground">({seller.reviewCount})</span>
            </div>
          </div>
        </div>

        <div className="flex space-x-2 mt-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Message
          </Button>
          <Button 
            size="sm" 
            className="flex-1 bg-hero-gradient hover:opacity-90"
            onClick={(e) => e.stopPropagation()}
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}