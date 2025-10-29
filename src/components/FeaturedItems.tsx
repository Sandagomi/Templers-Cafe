import coffeeImage from "@/assets/coffee-collection.jpg";
import bakeryImage from "@/assets/bakery-display.jpg";
import productsImage from "@/assets/products.jpeg";

const FeaturedItems = () => {
  const items = [
    {
      image: coffeeImage,
      title: "Artisan Coffee",
      description: "From classic espresso to creative lattes, every cup is perfection",
      category: "Coffee",
    },
    {
      image: bakeryImage,
      title: "Fresh Bakery",
      description: "Daily fresh pastries, croissants, and artisan breads",
      category: "Bakery",
    },
    {
      image: productsImage,
      title: "Gourmet Selection",
      description: "Premium ingredients for the finest taste experience",
      category: "Specials",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured <span className="text-gradient">Selections</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most beloved offerings, crafted with passion and served with pride
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 bg-card"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-inter font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="font-playfair text-2xl font-bold mb-2">{item.title}</h3>
                <p className="font-inter text-primary-foreground/90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;