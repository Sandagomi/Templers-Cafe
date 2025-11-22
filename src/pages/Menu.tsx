import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import menuPdf from "@/assets/Menu.pdf";

const Menu = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = menuPdf;
    link.download = 'Templers-Cafe-Menu.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24">
        <section className="py-12 cafe-gradient text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Our Menu</h1>
            <p className="font-inter text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Explore our carefully curated selection of international delights
            </p>
          </div>
        </section>

        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-4">
              <Button
                onClick={handleDownload}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-inter font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Menu
              </Button>
            </div>
            
            <div className="w-full bg-card rounded-lg shadow-elegant overflow-auto" style={{ maxHeight: "calc(100vh - 280px)" }}>
              <iframe
                src={menuPdf}
                className="w-full"
                title="Menu PDF"
                style={{ 
                  border: "none", 
                  height: "800px",
                  minHeight: "600px",
                  display: "block"
                }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;