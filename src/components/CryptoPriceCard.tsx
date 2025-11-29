import { TrendingUp } from "lucide-react";

const CryptoPriceCard = () => {
  const cryptoData = [
    { name: "Bitcoin", symbol: "BTC", price: "$97,453", change: "+6.3%", icon: "₿", color: "bg-orange-500" },
    { name: "Ethereum", symbol: "ETH", price: "$3,681", change: "+2.4%", icon: "Ξ", color: "bg-blue-500" },
    { name: "Binance Coin", symbol: "BNB", price: "$654", change: "+1.6%", icon: "B", color: "bg-yellow-500" },
    { name: "Cardano", symbol: "ADA", price: "$1.04", change: "+1.4%", icon: "₳", color: "bg-blue-400" },
    { name: "Solana", symbol: "SOL", price: "$234", change: "+3.3%", icon: "◎", color: "bg-purple-500" },
  ];

  return (
    <div className="bg-foreground/95 backdrop-blur-sm rounded-2xl p-6 shadow-card border border-primary/10 w-full max-w-md">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
          <TrendingUp size={18} className="text-primary" />
        </div>
        <h3 className="font-display font-semibold text-background text-lg">Cryptocurrency</h3>
      </div>

      {/* Chart Placeholder */}
      <div className="h-24 mb-6 relative overflow-hidden">
        <svg viewBox="0 0 400 100" className="w-full h-full">
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(47 97% 60%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(47 97% 60%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,80 Q50,70 100,60 T200,40 T300,30 T400,20"
            fill="none"
            stroke="hsl(47 97% 60%)"
            strokeWidth="2"
          />
          <path
            d="M0,80 Q50,70 100,60 T200,40 T300,30 T400,20 L400,100 L0,100 Z"
            fill="url(#chartGradient)"
          />
        </svg>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-3 gap-4 pb-3 border-b border-background/10 text-xs text-background/50 font-medium">
        <span>Name</span>
        <span className="text-right">Price</span>
        <span className="text-right">24h %</span>
      </div>

      {/* Crypto List */}
      <div className="space-y-3 mt-3">
        {cryptoData.map((crypto) => (
          <div key={crypto.symbol} className="grid grid-cols-3 gap-4 items-center py-2">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full ${crypto.color} flex items-center justify-center text-foreground text-xs font-bold`}>
                {crypto.icon}
              </div>
              <span className="font-medium text-background text-sm">{crypto.name}</span>
            </div>
            <span className="text-right text-background text-sm font-medium">{crypto.price}</span>
            <span className="text-right text-green-500 text-sm font-semibold">{crypto.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoPriceCard;
