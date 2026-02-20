import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurBusiness from './components/OurBusiness';
import Foundation from './components/Foundation';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <OurBusiness />
        <Foundation />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
