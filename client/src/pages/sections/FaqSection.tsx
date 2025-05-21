import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const faqs: FaqItem[] = [
    {
      question: "What are your operating hours?",
      answer: "Members with dedicated desks or private offices have 24/7 access to the workspace using their electronic card-key. The front desk is staffed Monday to Friday, 8am to 4pm."
    },
    {
      question: "Can I bring guests to the workspace?",
      answer: "Yes, members can bring guests. There is no limit to the number of guest hours, but guests must be accompanied by members at all times. Guests need to enter through the main reception area and sign in with the building host."
    },
    {
      question: "How do I book meeting rooms?",
      answer: "Meeting rooms can be booked through the building host. Each membership plan includes a specific number of meeting room credits per month as noted in the pricing plans."
    },
    {
      question: "Is there a minimum commitment period?",
      answer: "Dedicated desk and private office memberships have a 3-month minimum term, with discounts available for multiple bookings."
    },
    {
      question: "Can I use the workspace address for my business?",
      answer: "Yes, dedicated desk and private office members can use our address for their business registration and mail handling."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our workspace
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-medium text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
