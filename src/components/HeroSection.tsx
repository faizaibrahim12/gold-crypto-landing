import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
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
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in">
            <Shield size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">
              Switzerland's Premier Crypto Community
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Elevate Your{" "}
            <span className="text-gradient-gold">Crypto Journey</span>{" "}
            with Swiss Precision
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join an exclusive network of traders and investors. Access premium signals, 
            expert education, and a community built on trust and excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
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

          {/* Search Bar */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <SearchBar />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
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
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
