import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-neutral-light py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Your Productive <span className="text-primary">Workspace</span> Away
            From Home
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Anacortes Co-Work offers modern, fully-equipped workspaces for
            professionals, entrepreneurs, and remote workers. Join our community
            and elevate your workday.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#pricing"
              className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-md text-center transition duration-300"
            >
              View Pricing
            </a>
            <a
              href="#contact"
              className="border border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-md text-center transition duration-300"
            >
              Book a Tour
            </a>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
            alt="Modern co-working space with natural light"
            className="rounded-lg shadow-2xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
