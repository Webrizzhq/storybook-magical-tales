import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-reading.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-storybook relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-storytelling-orange rounded-full opacity-60 float-gentle"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-accent rounded-full opacity-40 float-gentle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-secondary rounded-full opacity-50 float-gentle" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className=" grid grid-cols-2">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-primary">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-medium tracking-wide uppercase">Welcome to Our Story World</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                Where African
                <span className="text-sunset block">Stories Come Alive</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Discover magical tales of brave children traveling through time, wildlife adventures, 
                and powerful stories that celebrate African heritage and imagination.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <Button className="btn-storytelling bg-gradient-magic text-lg px-8 py-4 h-auto" asChild>
                <a href="#books">
                  Explore Stories
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button variant="outline" className="text-lg px-8 py-4 h-auto border-2 hover:bg-muted" asChild>
                <a href="#events">
                  <Heart className="mr-2 h-5 w-5" />
                  Meet Our Authors
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-muted-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4</div>
                <div>Age Groups</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div>Amazing Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">∞</div>
                <div>Adventures</div>
              </div>
            </div>
          </div>

          {/* Right side - Hero image */}
          <div className="relative animate-fade-in-up-delay">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Children reading under an acacia tree with magical story elements floating around"
                className="w-full h-auto rounded-3xl shadow-2xl story-card"
              />
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-sunset opacity-20 rounded-3xl blur-3xl transform rotate-6 scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;