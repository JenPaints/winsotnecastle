"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ChevronDown } from "lucide-react";
import { useState } from "react";
import { submitLead } from "@/lib/supabase";
import { toast } from "sonner";

export function LeadForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
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

    console.log('Form data being submitted:', formData);

    try {
      const result = await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `Occupation: ${formData.occupation}, Configuration: ${formData.configuration}`,
      });
      
      console.log('Submission successful:', result);
      setStatus("success");
      toast.success("Request submitted successfully!");
      
      // Reset form
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          occupation: "",
          configuration: "",
        });
        setStatus("idle");
      }, 2000);
    } catch (error: any) {
      console.error("Error submitting lead:", error);
      setStatus("error");
      
      // Show detailed error message
      const errorMessage = error?.message || "Failed to submit request. Please try again.";
      toast.error(errorMessage);
      
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-card border border-primary/20 shadow-2xl overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            {/* Close button */}
            <motion.button 
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute top-6 right-6 z-10 text-muted-foreground/60 hover:text-primary transition-colors"
            >
              <X size={20} strokeWidth={1.5} />
            </motion.button>

            <div className="relative p-8 md:p-12">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-12"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.1, damping: 15, stiffness: 200 }}
                      className="w-20 h-20 bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8"
                    >
                      <Send className="text-primary" size={32} strokeWidth={1.5} />
                    </motion.div>
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-3xl font-serif text-white mb-4"
                    >
                      Request Received
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-muted-foreground/80 font-light leading-relaxed max-w-sm mx-auto mb-8"
                    >
                      An exclusive representative will reach out shortly to coordinate your private viewing.
                    </motion.p>
                    <motion.button 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={onClose}
                      className="px-10 py-4 border border-primary/30 text-[10px] uppercase tracking-[0.4em] text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold"
                    >
                      Close
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="mb-10"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-[1px] w-8 bg-primary/40" />
                        <span className="text-[9px] uppercase tracking-[0.4em] text-primary/80 font-semibold">
                          Winstone Castle
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-tight">
                        Request{" "}
                        <span className="italic font-light text-primary/90">Private Access</span>
                      </h2>
                      <p className="text-muted-foreground/80 font-light text-sm leading-relaxed max-w-md">
                        Enter your details to receive the digital portfolio and arrange a personalized tour of the estate.
                      </p>
                    </motion.div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="space-y-2"
                        >
                          <label className="text-[9px] uppercase tracking-wider text-primary/60 font-semibold">Full Name</label>
                          <input 
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-transparent border-b border-primary/20 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/10 text-sm"
                            placeholder="Your Name"
                          />
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25 }}
                          className="space-y-2"
                        >
                          <label className="text-[9px] uppercase tracking-wider text-primary/60 font-semibold">Phone Number</label>
                          <input 
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-transparent border-b border-primary/20 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/10 text-sm"
                            placeholder="+91"
                          />
                        </motion.div>
                      </div>

                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-2"
                      >
                        <label className="text-[9px] uppercase tracking-wider text-primary/60 font-semibold">Email Address</label>
                        <input 
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-transparent border-b border-primary/20 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/10 text-sm"
                          placeholder="email@example.com"
                        />
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="space-y-2"
                      >
                        <label className="text-[9px] uppercase tracking-wider text-primary/60 font-semibold">Occupation</label>
                        <input 
                          required
                          type="text"
                          value={formData.occupation}
                          onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                          className="w-full bg-transparent border-b border-primary/20 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/10 text-sm"
                          placeholder="e.g. Business Owner"
                        />
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-2 relative"
                      >
                        <label className="text-[9px] uppercase tracking-wider text-primary/60 font-semibold">Preferred Configuration</label>
                        <div className="relative">
                          <select 
                            required 
                            value={formData.configuration}
                            onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
                            className="w-full bg-transparent border-b border-primary/20 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none text-sm cursor-pointer pr-8"
                          >
                            <option className="bg-card text-white" value="">Select Configuration</option>
                            <option className="bg-card text-white" value="3bhk">3 BHK Residence</option>
                            <option className="bg-card text-white" value="4bhk">4 BHK Residence</option>
                            <option className="bg-card text-white" value="penthouse">Sky Penthouse</option>
                          </select>
                          <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-primary/40 pointer-events-none" size={16} />
                        </div>
                      </motion.div>

                      <motion.button 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={status === "submitting"}
                        className="w-full py-5 mt-8 bg-primary hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary-foreground">
                          {status === "submitting" ? "Processing..." : "Request Access"}
                        </span>
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
