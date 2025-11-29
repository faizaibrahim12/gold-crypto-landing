import { CheckCircle, Award, Lock, Globe } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Swiss Quality Standards",
      description: "We adhere to the highest standards of excellence and precision.",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your data and investments are protected with enterprise-grade security.",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with traders and investors from around the world.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-dark">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square max-w-md mx-auto lg:max-w-none relative">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-card rounded-3xl border border-border" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-2xl blur-xl" />
              
              {/* Placeholder Content */}
              <div className="relative h-full flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold animate-float">
                    <span className="text-4xl font-display font-bold text-primary-foreground">SC</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Swiss Crypto Club Est. 2020
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              About Us
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The <span className="text-gradient-gold">International Swiss</span>{" "}
              Crypto Club
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              Founded in the heart of Switzerland, ISCC brings together passionate 
              crypto enthusiasts and seasoned investors. Our mission is to provide 
              world-class education, reliable trading signals, and a supportive 
              community that helps members navigate the dynamic world of cryptocurrency.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <CheckCircle size={20} className="text-primary" />
              <span>Trusted by 5,000+ members worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
