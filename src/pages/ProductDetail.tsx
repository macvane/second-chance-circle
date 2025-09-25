import { useState } from "react";
import { Header } from "@/components/marketplace/header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Heart, 
  Share2, 
  MapPin, 
  Star, 
  MessageCircle, 
  Shield, 
  Truck,
  ArrowLeft,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const ProductDetail = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  
  const product = {
    id: "1",
    title: "iPhone 14 Pro Max 256GB - Space Black",
    price: 899,
    originalPrice: 1199,
    condition: "Like New",
    description: "iPhone 14 Pro Max in excellent condition. Always kept in a case with screen protector. Battery health is 98%. Includes original box, charger, and unused EarPods. No scratches or damage. Selling because I upgraded to iPhone 15.",
    location: "Downtown, NYC",
    category: "Electronics",
    seller: {
      name: "TechStore NYC",
      rating: 4.9,
      reviewCount: 234,
      memberSince: "2019",
      responseTime: "Usually responds within 1 hour",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
    },
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600"
    ],
    specifications: [
      { label: "Brand", value: "Apple" },
      { label: "Model", value: "iPhone 14 Pro Max" },
      { label: "Storage", value: "256GB" },
      { label: "Color", value: "Space Black" },
      { label: "Battery Health", value: "98%" },
      { label: "Unlocked", value: "Yes" }
    ]
  };

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

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Button variant="ghost" size="sm" className="p-0 h-auto">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to results
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
              <img 
                src={product.images[currentImage]} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
              
              {product.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-medium transition-smooth"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-medium transition-smooth"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              <button
                className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full shadow-medium transition-smooth"
                onClick={() => setIsFavorited(!isFavorited)}
              >
                <Heart className={`h-5 w-5 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
              </button>
            </div>
            
            {/* Thumbnail Navigation */}
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-smooth ${
                      index === currentImage ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-3">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <Badge className={`${getConditionColor(product.condition)} border-0`}>
                  {product.condition}
                </Badge>
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{product.location}</span>
                </div>
              </div>

              <div className="flex items-baseline space-x-3 mb-6">
                <span className="text-4xl font-bold bg-price-gradient bg-clip-text text-transparent">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.originalPrice && (
                  <Badge className="bg-accent text-accent-foreground">
                    Save ${(product.originalPrice - product.price).toLocaleString()}
                  </Badge>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <Button size="lg" className="flex-1 bg-hero-gradient hover:opacity-90">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Seller
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Safety Info */}
            <Card className="bg-muted/50 border-0">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Safe Trading Tips</h4>
                    <p className="text-sm text-muted-foreground">
                      Meet in public places, inspect items before payment, and use secure payment methods.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Seller Info */}
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <img 
                    src={product.seller.avatar} 
                    alt={product.seller.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-lg">{product.seller.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{product.seller.rating}</span>
                        <span className="text-muted-foreground">({product.seller.reviewCount} reviews)</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Member since {product.seller.memberSince}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.seller.responseTime}
                    </p>
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Description and Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                <div className="space-y-3">
                  {product.specifications.map((spec, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">{spec.label}:</span>
                        <span className="font-medium">{spec.value}</span>
                      </div>
                      {index < product.specifications.length - 1 && (
                        <Separator className="mt-3" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Delivery Options</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Truck className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Local Delivery</h4>
                      <p className="text-sm text-muted-foreground">Available in NYC area</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <h4 className="font-medium">Pickup</h4>
                      <p className="text-sm text-muted-foreground">Meet at safe public location</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;