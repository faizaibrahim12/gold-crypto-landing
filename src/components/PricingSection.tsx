import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "49",
      period: "month",
      description: "Perfect for crypto beginners",
      features: [
        "Basic trading signals",
        "Community access",
        "Weekly market analysis",
        "Educational resources",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      icon: Star,
      price: "149",
      period: "month",
      description: "For serious traders",
      features: [
        "Premium trading signals",
        "Priority community access",
        "Daily market analysis",
        "1-on-1 mentoring sessions",
        "Advanced trading tools",
        "24/7 priority support",
      ],
      popular: true,
    },
    {
      name: "Elite",
      icon: Crown,
      price: "499",
      period: "month",
      description: "Ultimate trading experience",
      features: [
        "VIP trading signals",
        "Exclusive elite community",
        "Real-time market alerts",
        "Personal trading coach",
        "Portfolio management tools",
        "Private networking events",
        "Dedicated account manager",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            Pricing Plans
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your <span className="text-gradient-gold">Membership</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Invest in your crypto education with our flexible membership plans. 
            All plans include access to our exclusive community.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "bg-gradient-card border-2 border-primary shadow-gold"
                  : "bg-card border border-border shadow-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-gold text-primary-foreground text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    plan.popular ? "bg-primary/20" : "bg-muted"
                  }`}
                >
                  <plan.icon
                    size={24}
                    className={plan.popular ? "text-primary" : "text-muted-foreground"}
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {plan.name}
                </h3>
              </div>

              <div className="mb-4">
                <span className="font-display text-4xl font-bold text-foreground">
                  ${plan.price}
                </span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>

              <p className="text-muted-foreground text-sm mb-6">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "gold" : "outline"}
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
