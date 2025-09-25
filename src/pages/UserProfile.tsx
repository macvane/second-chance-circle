import { useState } from "react";
import { Header } from "@/components/marketplace/header";
import { ProductCard } from "@/components/marketplace/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Star, 
  MessageCircle, 
  Settings,
  Package,
  Heart,
  ShoppingBag,
  Calendar,
  MapPin,
  Mail,
  Phone
} from "lucide-react";

const UserProfile = () => {
  const [isOwnProfile] = useState(true); // In real app, check if viewing own profile
  
  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567", 
    location: "Manhattan, NYC",
    memberSince: "March 2022",
    rating: 4.8,
    reviewCount: 127,
    totalSales: 45,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
    bio: "Passionate collector of vintage items and electronics enthusiast. I take great care of my belongings and provide detailed descriptions for all my listings."
  };

  const userListings = [
    {
      id: "ul1",
      title: "iPad Pro 11' 2022 - 128GB WiFi",
      price: 650,
      originalPrice: 899,
      condition: "Like New" as const,
      location: "Manhattan, NYC", 
      seller: { name: user.name, rating: user.rating, reviewCount: user.reviewCount },
      images: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400"],
      category: "Electronics"
    },
    {
      id: "ul2",
      title: "Vintage Danish Chair - Teak Wood",
      price: 380,
      originalPrice: 600,
      condition: "Good" as const,
      location: "Manhattan, NYC",
      seller: { name: user.name, rating: user.rating, reviewCount: user.reviewCount },
      images: ["https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400"],
      category: "Furniture"
    }
  ];

  const favoriteItems = [
    {
      id: "fav1",
      title: "Canon EOS R6 Mark II Camera Body",
      price: 1899,
      originalPrice: 2499,
      condition: "New" as const,
      location: "Brooklyn, NYC",
      seller: { name: "PhotoPro", rating: 4.9, reviewCount: 312 },
      images: ["https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400"],
      category: "Photography"
    }
  ];

  const recentReviews = [
    {
      id: 1,
      reviewer: "Mike Chen",
      rating: 5,
      comment: "Great seller! Item exactly as described and fast shipping.",
      date: "2 days ago",
      item: "iPad Pro 11'"
    },
    {
      id: 2,
      reviewer: "Emily Davis", 
      rating: 4,
      comment: "Nice vintage chair, very well maintained. Smooth transaction.",
      date: "1 week ago",
      item: "Danish Teak Chair"
    },
    {
      id: 3,
      reviewer: "John Smith",
      rating: 5,
      comment: "Excellent communication and quick delivery. Highly recommend!",
      date: "2 weeks ago", 
      item: "MacBook Air"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="border-0 shadow-soft mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <h1 className="text-3xl font-bold">{user.name}</h1>
                  <Badge className="bg-success-gradient text-white">
                    Verified Seller
                  </Badge>
                </div>
                
                <div className="flex items-center space-x-6 mb-4 text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{user.rating}</span>
                    <span>({user.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Package className="h-4 w-4" />
                    <span>{user.totalSales} sales</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Member since {user.memberSince}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 max-w-2xl">{user.bio}</p>
                
                <div className="flex space-x-3">
                  {isOwnProfile ? (
                    <>
                      <Button>
                        <Settings className="mr-2 h-4 w-4" />
                        Edit Profile
                      </Button>
                      <Button variant="outline">
                        <Package className="mr-2 h-4 w-4" />
                        Add New Listing
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button>
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                      <Button variant="outline">
                        View All Items
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-soft mb-6">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{user.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{user.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{user.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Recent Reviews</h3>
                <div className="space-y-4">
                  {recentReviews.slice(0, 3).map(review => (
                    <div key={review.id} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{review.reviewer}</span>
                        <div className="flex items-center">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{review.comment}</p>
                      <p className="text-xs text-muted-foreground">{review.date} • {review.item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Tabs defaultValue="listings" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="listings" className="flex items-center space-x-2">
                  <ShoppingBag className="h-4 w-4" />
                  <span>My Listings ({userListings.length})</span>
                </TabsTrigger>
                <TabsTrigger value="favorites" className="flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>Favorites ({favoriteItems.length})</span>
                </TabsTrigger>
                <TabsTrigger value="reviews" className="flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span>Reviews ({recentReviews.length})</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="listings" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {userListings.map(product => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
                {userListings.length === 0 && (
                  <div className="text-center py-16">
                    <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground text-lg mb-4">No listings yet</p>
                    <Button>Create Your First Listing</Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="favorites" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {favoriteItems.map(product => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
                {favoriteItems.length === 0 && (
                  <div className="text-center py-16">
                    <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground text-lg mb-4">No favorites yet</p>
                    <Button>Start Browsing Items</Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="reviews" className="mt-8">
                <div className="space-y-6">
                  {recentReviews.map(review => (
                    <Card key={review.id} className="border-0 shadow-soft">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="font-semibold">{review.reviewer}</h4>
                            <p className="text-sm text-muted-foreground">{review.date}</p>
                          </div>
                          <div className="flex items-center">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-2">{review.comment}</p>
                        <Badge variant="outline">
                          Purchase: {review.item}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;