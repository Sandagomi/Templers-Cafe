import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Menu = () => {
  const menuCategories = [
    {
      id: "coffee",
      name: "Coffee",
      items: [
        { name: "Espresso", price: "$3.50", description: "Rich and bold single shot" },
        { name: "Cappuccino", price: "$4.50", description: "Espresso with steamed milk and foam" },
        { name: "Latte", price: "$4.75", description: "Smooth espresso with steamed milk" },
        { name: "Americano", price: "$3.75", description: "Espresso with hot water" },
        { name: "Flat White", price: "$4.50", description: "Velvety microfoam with espresso" },
        { name: "Mocha", price: "$5.00", description: "Espresso with chocolate and steamed milk" },
      ],
    },
    {
      id: "bakery",
      name: "Bakery",
      items: [
        { name: "Croissant", price: "$3.50", description: "Buttery, flaky French pastry" },
        { name: "Pain au Chocolat", price: "$4.00", description: "Chocolate-filled croissant" },
        { name: "Almond Croissant", price: "$4.50", description: "With almond cream filling" },
        { name: "Blueberry Muffin", price: "$3.75", description: "Fresh baked with real blueberries" },
        { name: "Scone", price: "$3.50", description: "Traditional English scone with jam" },
        { name: "Cinnamon Roll", price: "$4.25", description: "Warm with cream cheese frosting" },
      ],
    },
    {
      id: "italian",
      name: "Italian",
      items: [
        { name: "Tiramisu", price: "$6.50", description: "Classic Italian dessert with mascarpone" },
        { name: "Panini", price: "$8.50", description: "Grilled sandwich with Italian ingredients" },
        { name: "Bruschetta", price: "$7.00", description: "Toasted bread with tomatoes and basil" },
        { name: "Panna Cotta", price: "$6.00", description: "Silky Italian custard with berry sauce" },
        { name: "Focaccia", price: "$5.50", description: "Fresh baked with olive oil and herbs" },
        { name: "Biscotti", price: "$3.50", description: "Twice-baked almond cookies" },
      ],
    },
    {
      id: "french",
      name: "French",
      items: [
        { name: "Croque Monsieur", price: "$9.50", description: "Classic French grilled cheese" },
        { name: "Quiche Lorraine", price: "$8.50", description: "Savory tart with bacon and cheese" },
        { name: "Macaron", price: "$2.50", description: "Delicate French meringue cookie" },
        { name: "Eclair", price: "$5.00", description: "Pastry filled with cream and topped with icing" },
        { name: "Crème Brûlée", price: "$7.00", description: "Vanilla custard with caramelized sugar" },
        { name: "Madeleines", price: "$4.00", description: "Small sponge cakes with a distinctive shell shape" },
      ],
    },
    {
      id: "english",
      name: "English",
      items: [
        { name: "Full English Breakfast", price: "$12.00", description: "Eggs, bacon, sausage, beans, toast" },
        { name: "Afternoon Tea Set", price: "$15.00", description: "Assorted sandwiches, scones, and pastries" },
        { name: "Shepherd's Pie", price: "$11.50", description: "Ground meat with mashed potato topping" },
        { name: "Fish & Chips", price: "$13.50", description: "Battered fish with crispy chips" },
        { name: "Bangers & Mash", price: "$10.50", description: "Sausages with mashed potatoes and gravy" },
        { name: "Victoria Sponge", price: "$5.50", description: "Classic British cake with jam and cream" },
      ],
    },
  ];

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

        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="coffee" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 h-auto gap-2 bg-muted/50 p-2">
                {menuCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="font-inter font-semibold data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground py-3"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {menuCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((item, index) => (
                      <div
                        key={index}
                        className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 border border-border group hover:-translate-y-1"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-playfair text-2xl font-semibold text-primary group-hover:text-secondary transition-colors">
                            {item.name}
                          </h3>
                          <span className="font-inter text-xl font-bold text-secondary">
                            {item.price}
                          </span>
                        </div>
                        <p className="font-inter text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;