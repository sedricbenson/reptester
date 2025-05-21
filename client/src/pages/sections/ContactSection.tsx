import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, Clock, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type FormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: undefined,
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      return apiRequest("POST", "/api/inquiries", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your inquiry. We'll be in touch soon!",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description:
          error.message ||
          "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    mutation.mutate(data);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-b from-neutral-light/50 to-neutral-light"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our workspace? We're here to help!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 bg-white/80 translate-y-2">
            <CardContent className="p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div className="flex items-start group">
                    <div className="text-primary mr-4 p-3 rounded-lg bg-primary/10 transition-colors flex items-center justify-center w-12 h-12">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Email</h4>
                      <a
                        href="mailto:heather@schussboomer.net"
                        className="text-gray-600 hover:text-primary"
                      >
                        heather@schussboomer.net
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-primary mr-4 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center w-12 h-12">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phone</h4>
                      <a
                        href="tel:+13602991839"
                        className="text-gray-600 hover:text-primary"
                      >
                        360.299.1839
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="text-primary mr-4 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center w-12 h-12">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Office Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 8am - 4pm
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-primary mr-4 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center w-12 h-12">
                      <Info className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Tours</h4>
                      <p className="text-gray-600">
                        Available during office hours.
                        <br />
                        Contact us to schedule.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
