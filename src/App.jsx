import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import NavbarBanner from "./components/Navbar/NavbarBanner"
import NumberCounter from "./components/NumberCounter/NumberCounter"


const App = () => {
  return (
    <main className="overflow-x-hidden max-w-6xl mx-auto">
      <Navbar></Navbar>,
      <NavbarBanner></NavbarBanner>,
      <Hero></Hero>,
      <NumberCounter></NumberCounter>
    </main>
  )
}

export default App