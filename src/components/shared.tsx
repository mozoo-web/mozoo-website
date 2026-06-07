"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  Globe,
  Store,
  Users,
  CreditCard,
  type LucideIcon,
} from "lucide-react";

/* ───── Maharashtra State / City / Taluka Data ───── */
const MAHARASHTRA_DATA: Record<string, Record<string, string[]>> = {
  "Pune": { "Pune City": ["Haveli", "Mulshi", "Baramati", "Indapur", "Daund", "Shirur", "Purandar", "Velha", "Maval", "Junnar", "Ambegaon", "Khed"], "Pimpri-Chinchwad": ["Haveli", "Mulshi", "Maval"] },
  "Mumbai": { "Mumbai City": ["Mumbai City"], "Mumbai Suburban": ["Mumbai Suburban"] },
  "Nagpur": { "Nagpur City": ["Nagpur", "Hingna", "Kamptee", "Parseoni", "Ramtek", "Savner", "Kalmeshwar", "Mouda", "Kuhi", "Bhiwapur", "Umred"], "Nagpur Rural": ["Katol", "Narkhed", "Sausar", "Pandhurna", "Brahmapuri"] },
  "Nashik": { "Nashik City": ["Nashik", "Dindori", "Igatpuri", "Sinnar", "Niphad", "Yeola", "Chandwad", "Surgana", "Kalwan", "Baglan", "Deola", "Malegaon", "Satana"], "Malegaon": ["Malegaon", "Satana", "Kalwan", "Baglan", "Deola", "Chandwad"] },
  "Thane": { "Thane City": ["Thane", "Kalyan", "Bhiwandi", "Shahapur", "Murbad", "Ambernath", "Ulhasnagar"], "Kalyan-Dombivli": ["Kalyan", "Ulhasnagar", "Ambernath"] },
  "Aurangabad": { "Aurangabad City": ["Aurangabad", "Paithan", "Gangapur", "Kannad", "Khuldabad", "Sillod", "Phulambri", "Vaijapur"] },
  "Solapur": { "Solapur City": ["Solapur", "Barshi", "Akkalkot", "Pandharpur", "Mohol", "Madha", "Karmala", "Mangalwedha", "Malshiras", "Sangole", "Vairag"] },
  "Kolhapur": { "Kolhapur City": ["Kolhapur", "Ichalkaranji", "Panhala", "Shahuwadi", "Kagal", "Gadhinglaj", "Chandgad", "Ajra", "Radhanagari", "Bhudargad", "Shirol", "Hatkanangle"] },
  "Sangli": { "Sangli City": ["Miraj", "Sangli", "Tasgaon", "Khanapur", "Atpadi", "Jat", "Kavathe-Mahankal", "Tasgaon", "Walwa", "Palus", "Kadegaon", "Shirala"] },
  "Satara": { "Satara City": ["Satara", "Karad", "Wai", "Mahabaleshwar", "Patan", "Koregaon", "Phaltan", "Maan", "Khatav", "Jawali", "Wai", "Khandala"] },
  "Ratnagiri": { "Ratnagiri City": ["Ratnagiri", "Chiplun", "Dapoli", "Guhagar", "Khed", "Lanja", "Mandangad", "Rajapur", "Sangameshwar"] },
  "Sindhudurg": { "Sindhudurg City": ["Kudal", "Sawantwadi", "Malvan", "Kankavli", "Devgad", "Vaibhavwadi", "Dodamarg", "Vengurla", "Sindhudurg"] },
  "Raigad": { "Raigad City": ["Alibag", "Pen", "Panvel", "Uran", "Karjat", "Khalapur", "Roha", "Mahad", "Poladpur", "Shrivardhan", "Mhasla", "Tala", "Sudhagad", "Pali"] },
  "Palghar": { "Palghar City": ["Palghar", "Dahanu", "Talasari", "Vasai", "Nalasopara", "Boisar", "Jawhar", "Mokhada", "Wada", "Vikramgad"] },
  "Dhule": { "Dhule City": ["Dhule", "Shirpur", "Shindkheda", "Sakri", "Dondaicha"] },
  "Jalgaon": { "Jalgaon City": ["Jalgaon", "Bhusawal", "Chopda", "Erandol", "Amalner", "Chalisgaon", "Bodvad", "Yaval", "Raver", "Muktainagar", "Pachora", "Jamner", "Parola", "Dharangaon"] },
  "Nandurbar": { "Nandurbar City": ["Nandurbar", "Shahada", "Taloda", "Akkalkuwa", "Navapur", "Toranmal"] },
  "Ahmednagar": { "Ahmednagar City": ["Ahmednagar", "Shrirampur", "Newasa", "Shevgaon", "Pathardi", "Rahuri", "Sangamner", "Akole", "Karjat", "Jamkhed", "Parner", "Shrigonda"] },
  "Jalna": { "Jalna City": ["Jalna", "Ambad", "Partur", "Ghansawangi", "Badnapur", "Mantha", "Jafrabad", "Bhokardan"] },
  "Beed": { "Beed City": ["Beed", "Georai", "Majalgaon", "Ashti", "Patoda", "Shirur", "Dharur", "Wadwani", "Kej", "Ambajogai", "Parli", "Ambejogai"] },
  "Latur": { "Latur City": ["Latur", "Udgir", "Ahmedpur", "Ausa", "Nilanga", "Renapur", "Chakur", "Shirur Anantpal", "Deoni"] },
  "Osmanabad": { "Osmanabad City": ["Osmanabad", "Tuljapur", "Lohara", "Omerga", "Kalamb", "Bhum", "Paranda", "Vashim", "Washi"] },
  "Parbhani": { "Parbhani City": ["Parbhani", "Jintur", "Gangakhed", "Sonpeth", "Purna", "Manwath", "Pathri", "Selu", "Palam", "Sailu"] },
  "Hingoli": { "Hingoli City": ["Hingoli", "Kalamnuri", "Sengaon", "Aundha", "Vasmat", "Wasmath", "Basmath"] },
  "Nanded": { "Nanded City": ["Nanded", "Kinwat", "Mahur", "Hadgaon", "Mudkhed", "Bhokar", "Loha", "Kandhar", "Mukhed", "Deglur", "Naigaon", "Biloli", "Ardhapur", "Kinvat"] },
  "Amravati": { "Amravati City": ["Amravati", "Bhatkuli", "Nandgaon Khandeshwar", "Chandur", "Dhamangaon", "Achalpur", "Morshi", "Warud", "Daryapur", "Anjangaon Surji", "Chikhaldara", "Dharni"] },
  "Akola": { "Akola City": ["Akola", "Murtizapur", "Akot", "Telhara", "Balapur", "Patur", "Barshi Takli", "Murtizapur"] },
  "Wardha": { "Wardha City": ["Wardha", "Hinganghat", "Deoli", "Seloo", "Arvi", "Karanja", "Ashti", "Samudrapur"] },
  "Yavatmal": { "Yavatmal City": ["Yavatmal", "Pusad", "Digras", "Wani", "Umarkhed", "Darwha", "Pandharkaoda", "Ghatanji", "Arni", "Kelapur", "Ralegaon", "Maregaon", "Zari-Jamani"] },
  "Washim": { "Washim City": ["Washim", "Malegaon", "Risod", "Mangrulpir", "Karanja", "Manora", "Akola"] },
  "Buldhana": { "Buldhana City": ["Buldhana", "Chikhli", "Mehkar", "Khamgaon", "Shegaon", "Malkapur", "Nandura", "Jalgaon Jamod", "Sindkhed Raja", "Lonar", "Deulgaon Raja", "Sangrampur", "Sultanpur"] },
  "Chandrapur": { "Chandrapur City": ["Chandrapur", "Ballarpur", "Warora", "Brahmapuri", "Gadchiroli", "Mul", "Sindewahi", "Nagbhid", "Bhadravati", "Chimur", "Pombhurna", "Sindewahi", "Rajura", "Korpana", "Gondpipri"] },
  "Gadchiroli": { "Gadchiroli City": ["Gadchiroli", "Chamorshi", "Aheri", "Sironcha", "Dhanora", "Etapalli", "Bhamragad", "Kurkheda", "Korchi", "Armori", "Desaiganj", "Mulchera"] },
  "Bhandara": { "Bhandara City": ["Bhandara", "Tumsar", "Pauni", "Sakoli", "Lakhni", "Lakhandur", "Mohadi", "Pavni"] },
  "Gondia": { "Gondia City": ["Gondia", "Tiroda", "Goregaon", "Salekasa", "Arjuni Morgaon", "Sadak Arjuni", "Deori"] },
};
const STATES = ["Maharashtra"];

/* ───── Google Spreadsheet URL ───── */
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbz2tZ4o1J20Zpl9eB9gCDAZnNqq-82OOvZc-VWLadwrvk7fBrCc4Km-B_eRGPvVtdsoKw/exec";

/* ───── Reusable Franchise Form Component ───── */
export function FranchiseForm({ onSuccess }: { onSuccess?: () => void }) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedInterest, setSelectedInterest] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedTaluka, setSelectedTaluka] = useState("");

  const cityOptions = selectedState ? Object.keys(MAHARASHTRA_DATA) : [];
  const talukaOptions = selectedCity && MAHARASHTRA_DATA[selectedCity]
    ? [...new Set(Object.values(MAHARASHTRA_DATA[selectedCity]).flat())]
    : [];

  const resetForm = () => {
    setFullName(""); setPhone(""); setEmail(""); setMessage(""); setSelectedInterest("");
    setSelectedState(""); setSelectedCity(""); setSelectedTaluka(""); setSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const data = { fullName, phone, email, interest: selectedInterest, state: selectedState, city: selectedCity, taluka: selectedTaluka, message };
      await fetch(GOOGLE_SHEET_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitted(true);
    } finally { setSubmitting(false); }
  };

  const handleOk = () => { resetForm(); if (onSuccess) onSuccess(); };

  if (submitted) {
    return (
      <div className="p-10 text-center space-y-4">
        <div className="w-20 h-20 rounded-full bg-[#EAB308]/10 flex items-center justify-center mx-auto">
          <CheckCircle2 className="h-10 w-10 text-[#EAB308]" />
        </div>
        <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)]">Thank You!</h3>
        <p className="text-gray-600">We&apos;ll get back to you within 2 hours or Reach us on WhatsApp <a href="https://wa.me/919823166155?text=Hello%2C%20I%20am%20interested%20in%20your%20Mozoo%20Services.%20Please%20provide%20me%20more%20details." target="_blank" rel="noopener noreferrer" className="text-[#059669] hover:underline font-semibold">+91 9823166155</a></p>
        <button onClick={handleOk} className="mt-4 px-8 py-3 bg-[#059669] hover:bg-[#047857] text-white font-bold rounded-xl transition-colors text-lg">OK</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1.5 block">Full Name</label>
          <Input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Your name" required className="rounded-xl h-12" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1.5 block">Phone Number</label>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 XXXXX XXXXX" type="tel" required className="rounded-xl h-12" />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email Address</label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" type="email" required className="rounded-xl h-12" />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1.5 block">State</label>
          <Select value={selectedState} onValueChange={(val) => { setSelectedState(val); setSelectedCity(""); setSelectedTaluka(""); }} required>
            <SelectTrigger className="w-full rounded-xl h-12"><SelectValue placeholder="Select State" /></SelectTrigger>
            <SelectContent>{STATES.map((state) => (<SelectItem key={state} value={state}>{state}</SelectItem>))}</SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1.5 block">City</label>
          <Select value={selectedCity} onValueChange={(val) => { setSelectedCity(val); setSelectedTaluka(""); }} disabled={!selectedState} required>
            <SelectTrigger className="w-full rounded-xl h-12"><SelectValue placeholder="Select City" /></SelectTrigger>
            <SelectContent>{cityOptions.map((city) => (<SelectItem key={city} value={city}>{city}</SelectItem>))}</SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1.5 block">Taluka</label>
          <Select value={selectedTaluka} onValueChange={setSelectedTaluka} disabled={!selectedCity} required>
            <SelectTrigger className="w-full rounded-xl h-12"><SelectValue placeholder="Select Taluka" /></SelectTrigger>
            <SelectContent>{talukaOptions.map((taluka) => (<SelectItem key={taluka} value={taluka}>{taluka}</SelectItem>))}</SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1.5 block">I&apos;m Interested In</label>
        <div className="flex flex-wrap gap-2">
          {["Franchise", "Merchant", "Delivery Partner", "Other"].map((option) => (
            <button key={option} type="button" onClick={() => setSelectedInterest(option)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                selectedInterest === option ? "bg-[#059669] text-white border-[#059669] shadow-md" : "bg-white text-gray-600 border-gray-200 hover:border-[#059669] hover:text-[#059669]"
              }`}>
              {option}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1.5 block">Message</label>
        <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your interest..." rows={4} required className="rounded-xl" />
      </div>
      <Button type="submit" size="lg" disabled={submitting} className="w-full bg-gradient-to-r from-[#059669] to-[#10B981] hover:from-[#047857] hover:to-[#059669] text-white font-bold rounded-full text-lg py-6">
        {submitting ? "Sending..." : <>Send Message <ArrowRight className="ml-2 h-5 w-5" /></>}
      </Button>
    </form>
  );
}

/* ───── Franchise Popup Modal ───── */
export function FranchiseModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto p-0 rounded-3xl border-0 shadow-2xl" showCloseButton={false}>
        <DialogTitle className="sr-only">Get Franchise - Send Us a Message</DialogTitle>
        <div className="p-5 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold font-[family-name:var(--font-poppins)]">Send Us a Message</h3>
            <button onClick={onClose} className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
              <X className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <FranchiseForm onSuccess={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* ───── Shared Navbar - Consistent across ALL pages ───── */
const NAV_LINKS = [
  { label: "Home", href: "/", id: "home" },
  { label: "About", href: "/", id: "about" },
  { label: "Services", href: "/", id: "services" },
  { label: "Franchise", href: "/", id: "franchise" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/", id: "contact" },
];

export function Navbar({ onFranchiseClick }: { onFranchiseClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home with hash
    if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `/${sectionId !== "home" ? sectionId : ""}`);
    }
  };

  const handleNavClick = (link: { href: string; id?: string; label: string }) => {
    setMobileOpen(false);
    if (link.id) {
      scrollToSection(link.id);
    } else {
      window.location.href = link.href;
    }
  };

  const isLinkActive = (link: { href: string; id?: string }) => {
    const path = window.location.pathname;
    if (link.href !== "/") return path === link.href;
    if (link.id && path === "/") return true;
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="flex items-center group">
            <img src="/mozoo-logo.png" alt="Mozoo" className="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform" />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="text-sm font-medium text-gray-700 hover:text-[#059669] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#059669] transition-all group-hover:w-full" />
              </button>
            ))}
            <Button onClick={onFranchiseClick} className="bg-gradient-to-r from-[#059669] to-[#10B981] hover:from-[#047857] hover:to-[#059669] text-white font-semibold px-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              Get Franchise
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#059669] hover:bg-emerald-50 rounded-xl transition-all font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button onClick={() => { setMobileOpen(false); onFranchiseClick(); }} className="w-full mt-2 bg-gradient-to-r from-[#059669] to-[#10B981] text-white font-semibold rounded-full">
              Get Franchise <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ───── Shared Footer - Consistent across ALL pages ───── */
export function Footer() {
  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `/${sectionId !== "home" ? sectionId : ""}`);
    }
  };

  const footerLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Services", id: "services" },
    { label: "Franchise", id: "franchise" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-[#047857] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/mozoo-logo.png" alt="Mozoo" className="h-14 sm:h-16 w-auto object-contain" />
            </div>
            <p className="text-emerald-100/80 text-sm leading-relaxed">India&apos;s first 100% cashless food and grocery delivery platform. Serving urban and rural India with fast, reliable, and secure delivery services.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 font-[family-name:var(--font-poppins)]">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>{
                  link.href ? (
                    <a href={link.href} className="text-emerald-100/70 hover:text-[#FBBF24] transition-colors text-sm">{link.label}</a>
                  ) : (
                    <button onClick={() => scrollToSection(link.id!)} className="text-emerald-100/70 hover:text-[#FBBF24] transition-colors text-sm">{link.label}</button>
                  )
                }</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 font-[family-name:var(--font-poppins)]">Services</h4>
            <ul className="space-y-2">
              {["Food Delivery", "Grocery Delivery", "Franchise Program", "Merchant Partnerships", "Delivery Partner"].map((item) => (
                <li key={item}><span className="text-emerald-100/70 text-sm">{item}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 font-[family-name:var(--font-poppins)]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-emerald-100/70 text-sm"><Phone className="h-4 w-4 text-[#FBBF24] flex-shrink-0" /><a href="https://wa.me/919823166155?text=Hello%2C%20I%20am%20interested%20in%20your%20Mozoo%20Services.%20Please%20provide%20me%20more%20details." target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">+91 9823166155</a></li>
              <li className="flex items-center gap-2 text-emerald-100/70 text-sm"><Mail className="h-4 w-4 text-[#FBBF24] flex-shrink-0" /><a href="mailto:support@mozoo.in" className="hover:text-white hover:underline transition-colors">support@mozoo.in</a></li>
              <li className="flex items-center gap-2 text-emerald-100/70 text-sm"><Globe className="h-4 w-4 text-[#FBBF24] flex-shrink-0" /><a href="https://mozoo.in" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">mozoo.in</a></li>
            </ul>
            <div className="flex gap-3 mt-6">
              {["Facebook", "Instagram", "Twitter"].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#EAB308] hover:text-gray-900 flex items-center justify-center transition-colors" aria-label={social}>
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-emerald-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-emerald-200/60 text-sm">&copy; 2026 Mozoo. All rights reserved.</p>
          <div className="flex gap-6 text-emerald-200/60 text-sm">
            <a href="#" className="hover:text-[#FBBF24] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FBBF24] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ───── Shared useInView hook ───── */
export function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observerRef.current) observerRef.current.disconnect();
      if (!node) return;
      observerRef.current = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
        { threshold }
      );
      observerRef.current.observe(node);
    },
    [threshold]
  );
  return { ref: elementRef, isInView };
}

/* ───── Shared Animated Counter ───── */
export function CounterStat({
  end, suffix, label, icon: Icon, color,
}: {
  end: number; suffix: string; label: string; icon: LucideIcon; color: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          const duration = 2000;
          const step = end / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= end) { setCount(end); clearInterval(timer); }
            else { setCount(Math.floor(current)); }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center space-y-2">
      <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-amber-50 mb-1 sm:mb-2">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color }} />
      </div>
      <div className="text-2xl sm:text-4xl font-bold font-[family-name:var(--font-poppins)]" style={{ color }}>
        {count}{suffix}
      </div>
      <p className="text-xs sm:text-sm text-gray-500 font-medium">{label}</p>
    </div>
  );
}

/* ───── Shared Market Counter ───── */
export function MarketCounter({
  end, suffix, color, barWidth, isInView,
}: {
  end: number; suffix: string; color: string; barWidth: string; isInView: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;
    const duration = 2000;
    const step = end / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else { setCount(Math.floor(current)); }
    }, 16);
    return () => clearInterval(timer);
  }, [end, isInView]);

  return (
    <>
      <span className="text-lg sm:text-2xl font-bold" style={{ color }}>${count}{suffix}</span>
      <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
        <div className="h-3 rounded-full transition-all duration-1000" style={{ width: isInView ? barWidth : "0%", backgroundColor: color }} />
      </div>
    </>
  );
}
