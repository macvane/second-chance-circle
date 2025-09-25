import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Smartphone, 
  Laptop, 
  Car, 
  Home, 
  Shirt, 
  Book, 
  Gamepad2, 
  Watch,
  Baby,
  Dumbbell,
  Music,
  Camera
} from "lucide-react";

const categories = [
  { icon: Smartphone, name: "Electronics", count: "2,340 items", color: "text-primary" },
  { icon: Car, name: "Vehicles", count: "856 items", color: "text-accent" },
  { icon: Shirt, name: "Clothing", count: "1,892 items", color: "text-secondary" },
  { icon: Home, name: "Home & Garden", count: "1,234 items", color: "text-primary-light" },
  { icon: Book, name: "Books & Media", count: "987 items", color: "text-accent-light" },
  { icon: Gamepad2, name: "Games & Toys", count: "654 items", color: "text-secondary-light" },
  { icon: Watch, name: "Accessories", count: "1,456 items", color: "text-primary" },
  { icon: Baby, name: "Baby & Kids", count: "543 items", color: "text-accent" },
  { icon: Dumbbell, name: "Sports", count: "789 items", color: "text-secondary" },
  { icon: Music, name: "Music", count: "432 items", color: "text-primary-light" },
  { icon: Camera, name: "Photography", count: "321 items", color: "text-accent-light" },
  { icon: Laptop, name: "Computers", count: "876 items", color: "text-secondary-light" }
];

export function CategoryGrid() {
  const navigate = useNavigate();
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Browse by Category</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you're looking for in our organized marketplace
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="group cursor-pointer transition-smooth hover:shadow-medium hover:-translate-y-1 bg-card-gradient border-0"
                onClick={() => navigate(`/category/${category.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`)}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 rounded-full bg-muted group-hover:bg-primary/10 transition-smooth">
                      <IconComponent className={`h-8 w-8 ${category.color} group-hover:scale-110 transition-smooth`} />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}