export default function CtaSection() {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your workday?</h2>
        <p className="text-white text-xl mb-8 max-w-3xl mx-auto">
          Join our workspace community and experience the perfect blend of productivity, flexibility, and comfort.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#pricing" 
            className="bg-white hover:bg-gray-100 text-primary font-medium py-3 px-8 rounded-md transition duration-300"
          >
            View Membership Options
          </a>
          <a 
            href="#contact" 
            className="border-2 border-white text-white hover:bg-white hover:text-primary font-medium py-3 px-8 rounded-md transition duration-300"
          >
            Schedule a Tour
          </a>
        </div>
      </div>
    </section>
  );
}
