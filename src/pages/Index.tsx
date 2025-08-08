import Layout from '@/components/Layout';
import BookCarousel from '@/components/BookCarousel';
import { Button } from '@/components/ui/button';
import Partners from '@/components/Partners';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with Book Carousel - Matching PDF Page 1 */}
      <section className="bg-redhot-red min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="container mx-auto max-w-7xl">
          {/* READ REDHOT AFRICA */}
          <div className="text-center mb-8">
            <p className="text-white/80 text-sm tracking-wider uppercase">READ REDHOT AFRICA</p>
          </div>

          {/* Hot Reads Carousel */}
          <BookCarousel />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12 mb-20">
            <Button className="bg-bright-yellow text-redhot-red hover:bg-bright-yellow/90 px-8 py-4 text-lg font-semibold rounded-full">
              <div className="text-center">
                <div className="font-bold">REDHOT SIGNATURE SERIES</div>
                <div className="text-xs opacity-80">PREVIOUSLY PUBLISHED</div>
              </div>
            </Button>
            <Button className="bg-bright-yellow text-redhot-red hover:bg-bright-yellow/90 px-8 py-4 text-lg font-semibold rounded-full">
              <div className="text-center">
                <div className="font-bold">REDHOT LIVE</div>
                <div className="text-xs opacity-80">PREVIOUSLY PUBLISHED</div>
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Second Section - Smart Stories */}
      <section className="bg-redhot-red py-20">
        <div className="container mx-auto text-center max-w-6xl px-6">
          <div className="mb-8">
            <p className="text-white/80 text-sm tracking-wider uppercase">READ REDHOT AFRICA</p>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-bright-yellow mb-6 font-child-friendly">
            SMART STORIES FOR SHARP KIDS
          </h2>

          <p className="text-white text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Fuel for curious minds. Books with a Redhot Africa spine because bland stories are for boring kids
          </p>

          {/* Second Set of CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-bright-yellow text-redhot-red hover:bg-bright-yellow/90 px-8 py-4 text-lg font-semibold rounded-full">
              <div className="text-center">
                <div className="font-bold">REDHOT SIGNATURE SERIES</div>
                <div className="text-xs opacity-80">PREVIOUSLY PUBLISHED</div>
              </div>
            </Button>
            <Button className="bg-bright-yellow text-redhot-red hover:bg-bright-yellow/90 px-8 py-4 text-lg font-semibold rounded-full">
              <div className="text-center">
                <div className="font-bold">REDHOT LIVE</div>
                <div className="text-xs opacity-80">PREVIOUSLY PUBLISHED</div>
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section - Matching PDF */}
      <section className="bg-redhot-red py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-bold text-bright-yellow mb-8 font-child-friendly">
            OUR PARTNERS
          </h2>
          <p className="text-white text-xl mb-12">
            Maintain Partner Slide scroll
          </p>
          <Partners />
        </div>
      </section>

      {/* Footer Section - Matching PDF */}
      <section className="bg-redhot-red py-16 border-t border-red-800/30">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-bright-yellow mb-8 font-child-friendly">
            Redhot Africa
          </h3>
          
          <div className="max-w-4xl mx-auto text-white/90 text-sm leading-relaxed mb-8">
            <p className="mb-4">
              Books that burn bright by the ground. We publish only and we are a publisher. We believe more than textbooks and big books.
            </p>
            <p className="mb-4">
              Our books change through and we get to breathe. Shizu, Sudef, Juba and Ms. They lean between accomplishments and finished. Whether it's wildlife, detective, campus spaces or multi-lingual stories.
            </p>
            <p className="mb-4">
              Bilingual 1984 built for Dreamers.
            </p>
            <p>
              From fiction, books to adventures, every title we create is made with love, fire, and a lot of blood, heart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Left Column */}
            <div className="text-left">
              <h4 className="text-bright-yellow font-semibold mb-4">FAQS</h4>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>Terms & Condition</li>
                <li>Safeguarding Policy</li>
                <li>Children's Policy</li>
                <li>Legal Frameworks</li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="text-left">
              <h4 className="text-bright-yellow font-semibold mb-4">Contact Us</h4>
              <div className="text-white/80 space-y-2 text-sm">
                <p>📧 hello@redhotafrica.com</p>
                <p>📞 +254 712 345 678</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

