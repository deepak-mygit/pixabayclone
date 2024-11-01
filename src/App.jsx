import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageGrid from "./components/ImageGrid";

function App() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <ImageGrid />
      </main>
      <Footer />
    </>
  );
}

export default App;
