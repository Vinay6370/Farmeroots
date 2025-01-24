import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";

const App = () => {
  const [userType, setUserType] = useState("buyer");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 p-6">
      <Card className="max-w-6xl mx-auto shadow-xl rounded-2xl border border-green-300">
        <CardContent>
          <h1 className="text-3xl font-bold text-green-800 text-center mb-6">Farmeroots: Your Hyperlocal Agri-Marketplace</h1>
          <Tabs defaultValue="buyer" className="mb-4">
            <TabsList className="flex justify-center">
              <TabsTrigger value="buyer" onClick={() => setUserType("buyer")} className="w-1/2">Buyer</TabsTrigger>
              <TabsTrigger value="seller" onClick={() => setUserType("seller")} className="w-1/2">Seller</TabsTrigger>
            </TabsList>

            <TabsContent value="buyer">
              <BuyerInterface />
            </TabsContent>
            <TabsContent value="seller">
              <SellerInterface />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

const BuyerInterface = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-green-700">Find Fresh Products Nearby</h2>
      <div className="flex gap-4">
        <Input placeholder="Search for products (e.g., vegetables, grains)" className="flex-grow" />
        <Button variant="outline" className="bg-green-500 text-white shadow-md hover:bg-green-600">Search</Button>
      </div>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="vegetables">Vegetables</SelectItem>
          <SelectItem value="grains">Grains</SelectItem>
          <SelectItem value="dairy">Dairy</SelectItem>
        </SelectContent>
      </Select>
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-green-800">Recommended Sellers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SellerCard name="Farmer A" location="2 km away" rating={4.5} />
          <SellerCard name="Farmer B" location="3 km away" rating={4.0} />
          <SellerCard name="Farmer C" location="1.5 km away" rating={5.0} />
        </div>
      </div>
    </div>
  );
};

const SellerInterface = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-green-700">List Your Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Input placeholder="Product Name (e.g., tomatoes, rice)" />
        <Input placeholder="Price per unit (e.g., per kg, per liter)" />
        <Input placeholder="Quantity available" />
      </div>
      <Button variant="outline" className="bg-green-500 text-white shadow-md hover:bg-green-600">List Product</Button>
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-green-800">Your Listed Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard name="Tomatoes" price="₹50/kg" quantity="100 kg" />
          <ProductCard name="Milk" price="₹40/liter" quantity="200 liters" />
        </div>
      </div>
    </div>
  );
};

const SellerCard = ({ name, location, rating }) => (
  <Card className="p-4 border border-green-300 shadow-sm hover:shadow-md transition">
    <CardContent>
      <h4 className="text-lg font-bold text-green-800">{name}</h4>
      <p className="text-sm text-gray-600">{location}</p>
      <p className="text-yellow-600 flex items-center">
        {Array.from({ length: Math.floor(rating) }, (_, i) => (
          <Star key={i} size={16} />
        ))}
        {rating % 1 !== 0 && <Star size={16} className="opacity-50" />}
      </p>
    </CardContent>
  </Card>
);

const ProductCard = ({ name, price, quantity }) => (
  <Card className="p-4 border border-green-300 shadow-sm hover:shadow-md transition">
    <CardContent>
      <h4 className="text-lg font-bold text-green-800">{name}</h4>
      <p className="text-gray-700">Price: {price}</p>
      <p className="text-gray-700">Quantity: {quantity}</p>
      <Button variant="outline" className="mt-4 w-full bg-green-500 text-white shadow-md hover:bg-green-600">
        <ShoppingCart size={16} className="mr-2" /> Buy Now
      </Button>
    </CardContent>
  </Card>
);

export default App;
