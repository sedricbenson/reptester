import { MapPin, Navigation, Clock } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Location</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conveniently located in the heart of downtown Anacortes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2652.582344535989!2d-122.61427662380673!3d48.31906234104312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548572f5e76d409f%3A0xc27b17ba09a25d2d!2s319%20Commercial%20Ave%2C%20Anacortes%2C%20WA%2098221!5e0!3m2!1sen!2sus!4v1651955833252!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Anacortes Co-Work Location Map"
              ></iframe>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Find Us</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-primary mt-1 mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Address</h4>
                  <p className="text-gray-600">
                    319 Commercial Avenue<br />
                    Downtown District<br />
                    Anacortes, WA 98221
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary mt-1 mr-4">
                  <Navigation className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Getting Here</h4>
                  <p className="text-gray-600">
                    Located in the heart of downtown Anacortes, we're a short walk from the Post Office and City Hall. Ample parking is available on adjacent streets, and we're within easy walking distance of local shops, restaurants, and the waterfront.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary mt-1 mr-4">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Hours</h4>
                  <p className="text-gray-600">
                    24/7 access for members<br />
                    Visitor hours: 8am - 4pm, Monday to Friday
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
