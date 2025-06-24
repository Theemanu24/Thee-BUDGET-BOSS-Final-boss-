
import React, { useState } from 'react';
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Star, Zap, Shield, Crown, Sparkles } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const shopItems = [
  {
    id: 1,
    name: "XP Booster",
    description: "Double XP for 24 hours",
    price: 500,
    currency: "coins",
    icon: Zap,
    rarity: "Common",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    name: "Budget Shield",
    description: "Protection from overspending penalties for 1 week",
    price: 1200,
    currency: "coins",
    icon: Shield,
    rarity: "Rare",
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    name: "Golden Crown",
    description: "Premium avatar customization",
    price: 2500,
    currency: "coins",
    icon: Crown,
    rarity: "Epic",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    id: 4,
    name: "Savings Multiplier",
    description: "Increase savings rewards by 50% for 1 month",
    price: 3000,
    currency: "coins",
    icon: Star,
    rarity: "Legendary",
    color: "from-purple-500 to-pink-500"
  }
];

const backgrounds = [
  { id: 1, name: "Neon City", price: 800, preview: "bg-gradient-to-br from-cyan-900 to-purple-900" },
  { id: 2, name: "Forest Green", price: 600, preview: "bg-gradient-to-br from-green-900 to-emerald-800" },
  { id: 3, name: "Golden Sunset", price: 1000, preview: "bg-gradient-to-br from-orange-900 to-red-900" },
  { id: 4, name: "Ocean Depths", price: 1200, preview: "bg-gradient-to-br from-blue-900 to-indigo-900" }
];

const ShopPage = () => {
  const [coins, setCoins] = useState(2547);
  const [purchasedItems, setPurchasedItems] = useState<number[]>([]);
  const { toast } = useToast();

  const handlePurchase = (item: any, type: 'item' | 'background') => {
    if (coins < item.price) {
      toast({
        title: "Insufficient Coins",
        description: `You need ${item.price - coins} more coins to purchase this item.`,
        variant: "destructive"
      });
      return;
    }

    if (purchasedItems.includes(item.id)) {
      toast({
        title: "Already Owned",
        description: "You already own this item!",
        variant: "destructive"
      });
      return;
    }

    setCoins(prev => prev - item.price);
    setPurchasedItems(prev => [...prev, item.id]);
    
    toast({
      title: "Purchase Successful!",
      description: `You bought ${item.name} for ${item.price} coins!`,
    });
  };

  const handleBundlePurchase = () => {
    const bundlePrice = 999;
    if (coins < bundlePrice) {
      toast({
        title: "Insufficient Coins",
        description: `You need ${bundlePrice - coins} more coins for this bundle.`,
        variant: "destructive"
      });
      return;
    }

    setCoins(prev => prev - bundlePrice);
    toast({
      title: "Bundle Purchased!",
      description: "You got 3x XP Boosters + 200 bonus coins!",
    });
    
    // Add bonus coins
    setTimeout(() => {
      setCoins(prev => prev + 200);
    }, 1000);
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-5xl font-bold neon-text mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              BUDGET SHOP
            </span>
          </h1>
          <p className="text-xl text-purple-300">Spend your hard-earned coins!</p>
          <div className="mt-4 flex justify-center">
            <Card className="gaming-card">
              <CardContent className="flex items-center gap-3 p-4">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <span className="text-2xl font-bold text-yellow-400">{coins.toLocaleString()}</span>
                <span className="text-purple-300">Coins</span>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Power-ups */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Power-ups & Boosters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {shopItems.map((item) => (
                <Card key={item.id} className="gaming-card hover:scale-105 transition-transform">
                  <CardHeader className="text-center pb-3">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mb-3`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-white">{item.name}</CardTitle>
                    <Badge variant={item.rarity === "Legendary" ? "default" : "secondary"}>
                      {item.rarity}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-purple-300 mb-4">{item.description}</p>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-yellow-400">{item.price}</span>
                      <span className="text-purple-300 ml-1">coins</span>
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500"
                      onClick={() => handlePurchase(item, 'item')}
                      disabled={purchasedItems.includes(item.id)}
                    >
                      {purchasedItems.includes(item.id) ? "Owned" : "Buy Now"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Themes & Customization */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="text-purple-300">Themes & Backgrounds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {backgrounds.map((bg) => (
                <Card key={bg.id} className="gaming-card hover:scale-105 transition-transform">
                  <CardHeader className="text-center pb-3">
                    <div className={`w-full h-24 rounded-lg ${bg.preview} mb-3`}></div>
                    <CardTitle className="text-lg text-white">{bg.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-4">
                      <span className="text-xl font-bold text-yellow-400">{bg.price}</span>
                      <span className="text-purple-300 ml-1">coins</span>
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500"
                      onClick={() => handlePurchase(bg, 'background')}
                      disabled={purchasedItems.includes(bg.id)}
                    >
                      {purchasedItems.includes(bg.id) ? "Owned" : "Purchase"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Daily Deals */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="text-purple-300">Daily Deals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-6 bg-gradient-to-r from-purple-800/50 to-pink-800/50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">XP Booster Bundle</h3>
                  <p className="text-purple-300">3x XP Boosters + Bonus coins</p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-gray-400 line-through">1,500 coins</span>
                    <span className="text-2xl font-bold text-yellow-400">999 coins</span>
                    <Badge className="bg-red-600">33% OFF</Badge>
                  </div>
                </div>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-green-600"
                  onClick={handleBundlePurchase}
                >
                  Buy Deal
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ShopPage;
