import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24">
        <section className="py-12 cafe-gradient text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="font-inter text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              We'd love to hear from you. Visit us or get in touch today
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
                  Get in <span className="text-gradient">Touch</span>
                </h2>
                <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
                  Whether you have a question about our menu, want to book a table, or are interested in joining our team, we're here to help
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border hover:shadow-gold transition-all duration-300 hover:-translate-y-2">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-gold w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-soft">
                      <MapPin className="h-10 w-10 text-secondary-foreground" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-primary mb-3">
                      Visit Us
                    </h3>
                    <p className="font-inter text-muted-foreground text-lg">
                      123 Coffee Street, City Center<br />
                      Downtown District, 12345
                    </p>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border hover:shadow-gold transition-all duration-300 hover:-translate-y-2">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-gold w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-soft">
                      <Phone className="h-10 w-10 text-secondary-foreground" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-primary mb-3">
                      Call Us
                    </h3>
                    <p className="font-inter text-muted-foreground text-lg">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border hover:shadow-gold transition-all duration-300 hover:-translate-y-2">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-gold w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-soft">
                      <Mail className="h-10 w-10 text-secondary-foreground" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-primary mb-3">
                      Email Us
                    </h3>
                    <p className="font-inter text-muted-foreground text-lg">
                      hello@templerscafe.com
                    </p>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border hover:shadow-gold transition-all duration-300 hover:-translate-y-2">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-gold w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-soft">
                      <Clock className="h-10 w-10 text-secondary-foreground" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-primary mb-3">
                      Opening Hours
                    </h3>
                    <p className="font-inter text-muted-foreground text-lg">
                      Monday - Friday: 7:00 AM - 8:00 PM<br />
                      Saturday - Sunday: 8:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-12 shadow-elegant border-2 border-secondary/20 text-center">
                <h3 className="font-playfair text-3xl font-bold text-primary mb-4">
                  Come Visit Us
                </h3>
                <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
                  Experience our warm hospitality, exceptional coffee, and exquisite cuisine. 
                  We look forward to welcoming you to The Templers Cafe!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;