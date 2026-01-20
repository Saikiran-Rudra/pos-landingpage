import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Features from './components/Features';
import ProductPreview from './components/ProductPreview';
import WhyChooseUs from './components/WhyChooseUs';
import VideoDemo from './components/VideoDemo';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Hero />
                <TrustSection />
                <Features />
                <ProductPreview />
                <WhyChooseUs />
                <VideoDemo />
                <Pricing />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}

export default App;
