import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedItems from "@/components/FeaturedItems";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <FeaturedItems />
      </main>
      <Footer />
    </div>
  );
};

export default Home;