import Scene3D from './components/3d/Scene3D';
import Hero from './components/sections/Hero';
import BentoGrid from './components/sections/BentoGrid';
import TechStack from './components/sections/TechStack';
import Footer from './components/ui/Footer';

// Navbar simple (componente inline para simplificar ejemplo)


function App() {
  return (
    <main className="bg-obsidian min-h-screen text-white selection:bg-neonPurple selection:text-white overflow-x-hidden">
      <Scene3D />
      <Hero />
      <BentoGrid />
      <TechStack />
      <Footer />
      
    </main>
  );
}

export default App;