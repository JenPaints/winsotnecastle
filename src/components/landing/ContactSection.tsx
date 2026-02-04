"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, MapPin, Phone } from "lucide-react";
import { submitLead } from "@/lib/supabase";
import { toast } from "sonner";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    configuration: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    console.log('ContactSection form data:', formData);

    try {
      const result = await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `Occupation: ${formData.occupation}, Configuration: ${formData.configuration}`,
      });
      
      console.log('ContactSection submission successful:', result);
      setStatus("success");
      toast.success("Request submitted successfully!");
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          occupation: "",
          configuration: "",
        });
      }, 3000);
    } catch (error: any) {
      console.error("Error submitting from ContactSection:", error);
      setStatus("idle");
      
      const errorMessage = error?.message || "Failed to submit request. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-background overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: `radial-gradient(var(--primary) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-12 bg-primary/40" />
                  <span className="text-[9px] uppercase tracking-[0.5em] text-primary/80 font-semibold">
                    Private Inquiry
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.1]">
                  Request Your{" "}
                  <span className="italic font-light text-primary/90">Private View</span>
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground/90 font-light leading-relaxed">
                  Allow us to curate your introduction to Winstone Castle. Leave your details for a bespoke presentation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-colors duration-300">
                    <MapPin size={20} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-muted-foreground/60 mb-1 font-semibold">Location</p>
                    <p className="text-sm text-white font-light">Hebbal, Bengaluru</p>
                  </div>
                </div>
                <a 
                  href="tel:+919535774179"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300">
                    <Phone size={20} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-muted-foreground/60 mb-1 font-semibold">Inquiries</p>
                    <p className="text-sm text-white font-light group-hover:text-primary transition-colors">+91 95357 74179</p>
                  </div>
                </a>
              </div>

              {/* Instagram Link */}
              <motion.a
                href="https://www.instagram.com/winstoneprojects/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 mt-8 group"
              >
                <div className="w-12 h-12 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300">
                  <svg 
                    className="w-5 h-5 text-primary" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-muted-foreground/60 mb-1 font-semibold">Follow Us</p>
                  <p className="text-sm text-white font-light group-hover:text-primary transition-colors">@winstoneprojects</p>
                </div>
              </motion.a>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 md:p-10 border border-primary/10 bg-card/30"
            >
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Send className="text-primary" size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-3">Request Sent</h3>
                  <p className="text-sm text-muted-foreground/80 font-light mb-8">
                    We will contact you shortly to arrange your presentation.
                  </p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="text-[10px] uppercase tracking-wider text-primary hover:text-primary/80 transition-colors font-semibold"
                  >
                    New Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-wider text-muted-foreground/60 font-semibold">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-primary/20 py-3 text-white focus:outline-none focus:border-primary transition-colors text-sm" 
                        placeholder="Your Name" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-wider text-muted-foreground/60 font-semibold">Phone Number</label>
                      <input 
                        required 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-primary/20 py-3 text-white focus:outline-none focus:border-primary transition-colors text-sm" 
                        placeholder="+91" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-wider text-muted-foreground/60 font-semibold">Email Address</label>
                      <input 
                        required 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-primary/20 py-3 text-white focus:outline-none focus:border-primary transition-colors text-sm" 
                        placeholder="email@example.com" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-wider text-muted-foreground/60 font-semibold">Occupation</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.occupation}
                        onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                        className="w-full bg-transparent border-b border-primary/20 py-3 text-white focus:outline-none focus:border-primary transition-colors text-sm" 
                        placeholder="e.g. Business Owner" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-wider text-muted-foreground/60 font-semibold">Preferred Configuration</label>
                    <select 
                      required 
                      value={formData.configuration}
                      onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
                      className="w-full bg-transparent border-b border-primary/20 py-3 text-white focus:outline-none focus:border-primary transition-colors text-sm appearance-none cursor-pointer"
                    >
                      <option className="bg-background text-white" value="">Select Configuration</option>
                      <option className="bg-background text-white" value="3bhk">3 BHK Residence</option>
                      <option className="bg-background text-white" value="4bhk">4 BHK Residence</option>
                      <option className="bg-background text-white" value="penthouse">Sky Penthouse</option>
                    </select>
                  </div>
                  <button 
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-5 mt-6 bg-primary hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary-foreground">
                      {status === "submitting" ? "Processing..." : "Request Access"}
                    </span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          {/* Footer */}
          <footer className="pt-16 border-t border-primary/10 text-center">
            <div className="flex flex-col items-center mb-8">
              <div className="text-xl font-serif text-white mb-1 tracking-[0.3em]">WINSTONE</div>
              <div className="text-[8px] uppercase tracking-[0.6em] text-primary/80 font-semibold">Projects</div>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[9px] uppercase tracking-wider text-muted-foreground/50">
              <p>© 2026 Winstone Projects LLP</p>
              <p>Hebbal, Bengaluru</p>
              <p>info@winstoneprojects.in</p>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
