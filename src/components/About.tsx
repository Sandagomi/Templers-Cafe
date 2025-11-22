import { Award, Coffee, Heart, Mic, Users } from "lucide-react";
import cafeInterior from "@/assets/templersin.png";

const About = () => {
  const features = [
    {
      icon: Coffee,
      title: "Premium Coffee",
      description: "Sourced from the finest beans around the world",
    },
    {
      icon: Mic,
      title: "Open Mic Nights",
      description: "Showcasing local talent every week",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish crafted with passion and care",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "A welcoming space for everyone",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              About <span className="text-gradient">The Templers Cafe</span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
              Welcome to The Templers Cafe, where tradition meets innovation. Our passion for exceptional coffee, artisan baking, and international cuisine comes together to create an unforgettable dining experience.
            </p>
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              From expertly crafted Italian espressos to delicate French pastries and classic English breakfast favorites, we bring the world's finest culinary traditions to your table. Every cup, every dish tells a story of quality, craftsmanship, and dedication.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={cafeInterior}
              alt="Cafe Interior"
              className="rounded-2xl shadow-elegant w-full h-[500px] object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="bg-secondary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="font-inter text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;