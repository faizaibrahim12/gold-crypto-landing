import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
import CryptoPriceCard from "./CryptoPriceCard";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in">
              <Shield size={16} className="text-primary" />
              <span className="text-sm text-primary font-medium">
                Switzerland's Premier Crypto Community
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              International{" "}
              <span className="text-gradient-gold">Swiss Crypto</span>{" "}
              Club
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Join our exclusive community to access the world of cryptocurrency 
              with premium signals and expert guidance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Get Started
                <ArrowRight size={20} />
              </Button>
              <a href="#about">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </a>
            </div>
          </div>

          {/* Right Side - Crypto Price Card */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CryptoPriceCard />
          </div>
        </div>

        {/* Search Bar */}
        <div className="animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.5s' }}>
          <SearchBar />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users size={20} className="text-primary mr-2" />
              <span className="font-display text-2xl md:text-3xl font-bold text-foreground">5K+</span>
            </div>
            <span className="text-xs md:text-sm text-muted-foreground">Active Members</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp size={20} className="text-primary mr-2" />
              <span className="font-display text-2xl md:text-3xl font-bold text-foreground">87%</span>
            </div>
            <span className="text-xs md:text-sm text-muted-foreground">Success Rate</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Shield size={20} className="text-primary mr-2" />
              <span className="font-display text-2xl md:text-3xl font-bold text-foreground">4+</span>
            </div>
            <span className="text-xs md:text-sm text-muted-foreground">Years Trusted</span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
