import { Coffee, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="cafe-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-6 w-6 text-secondary" />
              <h3 className="font-playfair text-xl font-bold">The Templers Cafe</h3>
            </div>
            <p className="text-primary-foreground/80 font-inter">
              Indulge in goodness with our exceptional coffee, artisan bakery, and exquisite international cuisine.
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-inter">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 font-inter">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">37 A Templers Rd, Dehiwala-Mount Lavinia, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">+94 71 722 2444</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">thetemplerscafe@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/70 font-inter text-sm">
            © {new Date().getFullYear()} The Templers Cafe. All rights reserved.
          </p>
          <p className="text-primary-foreground/70 font-inter text-sm">Development by <a href="https://www.zencuit.com/" target="_blank" rel="noopener noreferrer">Zencuit</a> Pvt Ltd</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;