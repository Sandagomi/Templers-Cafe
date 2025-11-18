import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const positions = [
    {
      title: "Barista",
      type: "Full-time",
      location: "Main Location",
      description: "We're looking for passionate baristas who love crafting exceptional coffee experiences. Previous experience preferred but not required.",
    },
    {
      title: "Pastry Chef",
      type: "Full-time",
      location: "Main Location",
      description: "Join our culinary team to create stunning pastries and baked goods. Experience with French and Italian techniques preferred.",
    },
    {
      title: "Kitchen Staff",
      type: "Part-time",
      location: "Main Location",
      description: "Support our kitchen operations with food preparation and maintaining quality standards. Flexible hours available.",
    },
    {
      title: "Server",
      type: "Part-time",
      location: "Main Location",
      description: "Provide outstanding service to our guests. Friendly personality and team player attitude essential.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24">
        <section className="py-12 cafe-gradient text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Join Our Team</h1>
            <p className="font-inter text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Be part of a passionate team dedicated to creating exceptional experiences
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <h2 className="font-playfair text-3xl font-bold text-primary mb-4">
                Why Work With <span className="text-gradient">Us?</span>
              </h2>
              <p className="font-inter text-lg text-muted-foreground">
                At The Templers Cafe, we believe in nurturing talent and creating a positive work environment. We offer competitive compensation, flexible schedules, and opportunities for growth.
              </p>
            </div>

            <div className="space-y-6">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 border border-border group hover:-translate-y-1"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-playfair text-2xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mb-3">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4 text-secondary" />
                          <span className="font-inter text-sm">{position.type}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4 text-secondary" />
                          <span className="font-inter text-sm">{position.location}</span>
                        </div>
                      </div>
                      <p className="font-inter text-muted-foreground">
                        {position.description}
                      </p>
                    </div>
                    <Link to="/contact">
                      <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-inter font-semibold whitespace-nowrap">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-subtle rounded-2xl p-8 text-center">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                Don't see the right position?
              </h3>
              <p className="font-inter text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our team.
              </p>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-semibold">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;