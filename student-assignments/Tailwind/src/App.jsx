import { Button } from "@/components/ui/button";
import Header from "./components/Header";
import Slide from "./components/Slide";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Slide />
      <Cards />
      <Footer />
      {/* <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
      </div> */}
    </>
  );
}

export default App;
