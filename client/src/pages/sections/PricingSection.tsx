import { Check } from "lucide-react";

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  priceNote?: string;
  features: string[];
  popular?: boolean;
}

export default function PricingSection() {
  const plans: PricingPlan[] = [
    {
      name: "Dedicated Desk",
      description: "Your own desk in a shared space with storage and full amenities.",
      price: "$375",
      period: "/month",
      priceNote: "$300 security deposit required. 3-month minimum contract.",
      features: [
        "Sit/stand adjustable desk",
        "Side table",
        "Mini white board",
        "Ergonomic chair",
        "Side chair",
        "Locking 2-drawer file cabinet",
        "Electronic card-key access",
        "24/7 access",
        "4 hrs meeting room credits per month", 
        "Business address & mail"
      ],
      popular: true
    },
    {
      name: "Private Office",
      description: "A dedicated private office space with all the premium amenities.",
      price: "$750",
      period: "/month+",
      priceNote: "$500 security deposit required. 3-month minimum contract.",
      features: [
        "Private lockable office",
        "Sit/stand adjustable desk",
        "Side table",
        "Mini white board",
        "Ergonomic chair",
        "Side chair",
        "Locking 2-drawer file cabinet",
        "Electronic card-key access",
        "24/7 access",
        "8 hrs meeting room credits per month",
        "Business address & mail"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that works best for you with no hidden fees
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`
                bg-white rounded-lg shadow-lg overflow-hidden 
                hover:shadow-xl transition-shadow duration-300
                ${plan.popular ? 'transform scale-105 z-10 border-2 border-primary' : ''}
              `}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center py-2">
                  <span className="font-medium">Most Popular</span>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 h-[32px]">{plan.name}</h3>
                <p className="text-gray-600 mb-6 h-[48px]">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                  {plan.priceNote && (
                    <p className="text-sm text-gray-500 mt-2 h-[40px]">{plan.priceNote}</p>
                  )}
                </div>
                <ul className="mb-8 space-y-3 min-h-[400px]">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-gray-50 border-t border-gray-100">
                <a 
                  href="#contact" 
                  className={`
                    block text-center font-medium py-3 rounded-md transition duration-300
                    ${plan.popular 
                      ? 'bg-primary hover:bg-primary-dark text-white' 
                      : 'bg-white hover:bg-gray-100 text-primary border border-primary'}
                  `}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
