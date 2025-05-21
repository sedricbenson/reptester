import { Star, User } from "lucide-react";

interface Testimonial {
  text: string;
  author: string;
  role: string;
  rating: number;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      text: "Anacortes Co-Work has completely transformed my remote work life. The environment is professional, the amenities are great, and the community is fantastic!",
      author: "Jordan Hay",
      role: "Downtown Anacortes",
      rating: 5
    },
    {
      text: "As a startup founder, Anacortes Co-Work provides exactly what we need: professional meeting rooms for clients, dedicated workspace, and networking opportunities.",
      author: "David Chen",
      role: "Startup Founder",
      rating: 5
    },
    {
      text: "I've tried several co-working spaces, and Anacortes Co-Work stands out. The high-speed internet, quiet environment, and comfortable workstations make it perfect.",
      author: "Alexis Taylor",
      role: "Software Developer",
      rating: 4.5
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-current" />);
    }

    if (hasHalfStar) {
      stars.push(
        <svg 
          key="half-star" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="h-4 w-4"
        >
          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
          <path fill="currentColor" d="M12 17.75l0 -11.5" />
          <path fill="currentColor" d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Members Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community of satisfied professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="text-[#f59e0b] flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                  <User className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
