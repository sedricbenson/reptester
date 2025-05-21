import { Wifi, Coffee, Printer, Users, Sofa, Lock, BatteryCharging } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "High-Speed Internet",
      description: "Gigabit fiber internet with redundant backup connection ensures you're always connected."
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Complimentary Refreshments",
      description: "Enjoy unlimited coffee, tea, and filtered water throughout your workday."
    },
    {
      icon: <Printer className="h-8 w-8" />,
      title: "Print & Scan Services",
      description: "Access to professional-grade printers, scanners, and copiers in a nearby business solutions center."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Meeting Rooms",
      description: "Two fully equipped meeting rooms with video conferencing capabilities, one featuring a fully equipped kitchen. Bookings available through the building host."
    },
    {
      icon: <Sofa className="h-8 w-8" />,
      title: "Break Areas",
      description: "Comfortable lounges and break areas to relax or have informal meetings."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Secure Access",
      description: "Keycard entry system and 24/7 security for your safety and peace of mind."
    },
    {
      icon: <BatteryCharging className="h-8 w-8" />,
      title: "EV Charging",
      description: "Electric vehicle charging stations available on-site for eco-conscious commuters."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Workspace Features & Amenities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for a productive and comfortable workday
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
