"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Smartphone,
  Truck,
  Store,
  Users,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  Globe,
  ShieldCheck,
  CreditCard,
  MapPin,
  BarChart3,
  HeadphonesIcon,
  Package,
  Navigation,
  ClipboardList,
  Eye,
  Settings,
  Bell,
  Wallet,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

/* ───── Maharashtra Data (shared with home page) ───── */
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

/* ───── Intersection Observer Hook ───── */
function useInView(threshold = 0.1) {
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

/* ───── Franchise Form Component ───── */
function FranchiseForm({ onSuccess }: { onSuccess?: () => void }) {
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
function FranchiseModal({ open, onClose }: { open: boolean; onClose: () => void }) {
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

/* ───── Navbar ───── */
function Navbar({ onFranchiseClick }: { onFranchiseClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "How It Works", id: "hero" },
    { label: "Your Apps", id: "apps" },
    { label: "Order Flow", id: "order-flow" },
    { label: "Franchise Control", id: "control" },
    { label: "Get Started", id: "cta" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="flex items-center group">
            <img src="/mozoo-logo.png" alt="Mozoo" className="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform" />
          </a>
          <div className="hidden lg:flex items-center gap-8">
            <a href="/" className="text-sm font-medium text-gray-700 hover:text-[#059669] transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#059669] transition-all group-hover:w-full" />
            </a>
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-gray-700 hover:text-[#059669] transition-colors relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#059669] transition-all group-hover:w-full" />
              </button>
            ))}
            <Button onClick={onFranchiseClick} className="bg-gradient-to-r from-[#059669] to-[#10B981] hover:from-[#047857] hover:to-[#059669] text-white font-semibold px-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              Get Franchise <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-2">
            <a href="/" className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#059669] hover:bg-emerald-50 rounded-xl transition-all font-medium">Home</a>
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => { setMobileOpen(false); scrollToSection(link.id); }}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#059669] hover:bg-emerald-50 rounded-xl transition-all font-medium">
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

/* ───── Hero Section ───── */
function HeroSection({ onFranchiseClick }: { onFranchiseClick: () => void }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-amber-50" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#059669]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#EAB308]/10 rounded-full blur-3xl" />
      <div className="absolute top-32 left-12 w-3 h-3 bg-[#059669]/30 rounded-full animate-bounce-subtle" />
      <div className="absolute top-48 right-24 w-2 h-2 bg-[#EAB308]/40 rounded-full animate-float" />
      <div className="absolute bottom-40 left-24 w-4 h-4 bg-[#059669]/20 rounded-full animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#059669]/10 text-[#059669] px-4 py-2 rounded-full text-sm font-semibold">
            <Eye className="h-4 w-4" />
            See How Mozoo Franchise Works
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-[family-name:var(--font-poppins)] leading-tight">
            Your Complete <span className="gradient-text">Delivery Business</span>,{" "}
            <span className="gradient-text-green">Powered by Mozoo</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            When you take a Mozoo franchise, you get a complete ecosystem of apps — for managing hotels and shops, 
            for delivery partners with navigation, and for customers to place orders. Everything is recorded and 
            controlled from your Franchise App.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={onFranchiseClick} size="lg" className="bg-gradient-to-r from-[#059669] to-[#10B981] hover:from-[#047857] hover:to-[#059669] text-white font-bold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all animate-pulse-glow">
              Start Your Franchise <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => { const el = document.getElementById("apps"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
              className="border-2 border-[#EAB308] text-[#EAB308] hover:bg-[#EAB308] hover:text-white font-bold px-8 py-6 text-lg rounded-full transition-all">
              Explore Your Apps
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Smartphone className="h-5 w-5 text-[#059669]" />
              <span className="text-sm font-medium">3 Dedicated Apps</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <ShieldCheck className="h-5 w-5 text-[#EAB308]" />
              <span className="text-sm font-medium">Full Control Dashboard</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-5 w-5 text-[#059669]" />
              <span className="text-sm font-medium">Live Navigation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── What You Get - 3 Apps Section ───── */
function AppsSection() {
  const { ref, isInView } = useInView();

  const apps: {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    description: string;
    color: string;
    features: { icon: LucideIcon; text: string }[];
    mockupColor: string;
  }[] = [
    {
      icon: LayoutDashboard,
      title: "Franchise App",
      subtitle: "Your Command Center",
      description: "The Franchise App is your complete business control panel. Manage every hotel, restaurant, grocery shop, and delivery partner in your territory. View real-time order tracking, monitor all transactions, and control every aspect of your delivery business from one powerful dashboard.",
      color: "#059669",
      mockupColor: "from-[#059669] to-[#10B981]",
      features: [
        { icon: Store, text: "Manage Hotels & Shops" },
        { icon: Users, text: "Manage Delivery Partners" },
        { icon: BarChart3, text: "Real-time Order Tracking" },
        { icon: Wallet, text: "Transaction Control" },
        { icon: Bell, text: "Instant Notifications" },
        { icon: Settings, text: "Full Business Settings" },
      ],
    },
    {
      icon: Truck,
      title: "Delivery Person App",
      subtitle: "With Smart Navigation",
      description: "Delivery partners get a dedicated app with built-in GPS navigation, real-time order assignments, and route optimization. They receive instant order notifications, navigate to restaurants for pickup, and then navigate to customer delivery locations — all with turn-by-turn directions and live tracking.",
      color: "#EAB308",
      mockupColor: "from-[#EAB308] to-[#FBBF24]",
      features: [
        { icon: Navigation, text: "GPS Navigation Built-in" },
        { icon: Bell, text: "Instant Order Alerts" },
        { icon: ClipboardList, text: "Order Management" },
        { icon: MapPin, text: "Route Optimization" },
        { icon: CreditCard, text: "Payment Tracking" },
        { icon: HeadphonesIcon, text: "Support Access" },
      ],
    },
    {
      icon: Smartphone,
      title: "Customer App",
      subtitle: "For End Customers",
      description: "End customers use the Mozoo Customer App to browse restaurants and grocery stores, place orders, make 100% cashless payments via UPI, card, or wallet, and track their deliveries in real time. The app provides a smooth, seamless ordering experience that keeps customers coming back.",
      color: "#059669",
      mockupColor: "from-[#059669] to-[#10B981]",
      features: [
        { icon: Store, text: "Browse Restaurants & Shops" },
        { icon: CreditCard, text: "100% Cashless Payment" },
        { icon: MapPin, text: "Live Order Tracking" },
        { icon: Package, text: "Order History" },
        { icon: Bell, text: "Order Status Updates" },
        { icon: HeadphonesIcon, text: "Customer Support" },
      ],
    },
  ];

  return (
    <section id="apps" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-[#059669]/10 text-[#059669] hover:bg-[#059669]/20 px-4 py-1.5 text-sm font-semibold">
            What You Get
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mt-4">
            3 Powerful <span className="gradient-text">Apps</span> for Your <span className="gradient-text-green">Business</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Every franchise partner receives a complete ecosystem of 3 dedicated apps — one for you, one for your delivery team, and one for your customers.
          </p>
        </div>

        <div className="space-y-12">
          {apps.map((app, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    {/* App Info */}
                    <div className={`p-8 sm:p-10 lg:p-12 space-y-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ backgroundColor: app.color }}>
                          <app.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-poppins)]">
                            {app.title}
                          </h3>
                          <p className="text-sm font-medium" style={{ color: app.color }}>
                            {app.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">{app.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {app.features.map((feature, fi) => (
                          <div key={fi} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${app.color}15` }}>
                              <feature.icon className="h-5 w-5" style={{ color: app.color }} />
                            </div>
                            <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* App Mockup Visual */}
                    <div className={`relative p-8 sm:p-10 lg:p-12 flex items-center justify-center min-h-[350px] ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${app.mockupColor} opacity-5`} />
                      <div className="relative w-full max-w-xs">
                        {/* Phone mockup */}
                        <div className="relative bg-white rounded-3xl shadow-2xl border-4 border-gray-800 overflow-hidden">
                          {/* Notch */}
                          <div className="bg-gray-800 h-6 flex items-center justify-center">
                            <div className="w-16 h-2 bg-gray-700 rounded-full" />
                          </div>
                          {/* Screen content */}
                          <div className="p-4 space-y-3 min-h-[280px]">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: app.color }}>
                                <app.icon className="h-4 w-4 text-white" />
                              </div>
                              <span className="font-bold text-sm font-[family-name:var(--font-poppins)]">{app.title}</span>
                            </div>
                            <div className="space-y-2">
                              <div className="h-3 rounded-full bg-gray-200 w-3/4" />
                              <div className="h-3 rounded-full bg-gray-200 w-1/2" />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              {app.features.slice(0, 4).map((f, fi) => (
                                <div key={fi} className="bg-gray-50 rounded-lg p-2 flex items-center gap-1.5">
                                  <f.icon className="h-3 w-3 flex-shrink-0" style={{ color: app.color }} />
                                  <span className="text-[10px] font-medium text-gray-600 truncate">{f.text}</span>
                                </div>
                              ))}
                            </div>
                            <div className="space-y-1.5 pt-2">
                              {[1, 2, 3].map((n) => (
                                <div key={n} className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
                                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: `${app.color}20` }} />
                                  <div className="flex-1 space-y-1">
                                    <div className="h-2 rounded-full bg-gray-200 w-3/4" />
                                    <div className="h-1.5 rounded-full bg-gray-100 w-1/2" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          {/* Bottom bar */}
                          <div className="bg-gray-800 h-4 flex items-center justify-center">
                            <div className="w-10 h-1 bg-gray-600 rounded-full" />
                          </div>
                        </div>
                        {/* Floating notification */}
                        <div className="absolute -top-2 -right-2 bg-white rounded-xl shadow-lg p-2 animate-float border border-gray-100">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: `${app.color}20` }}>
                              <Bell className="h-3 w-3" style={{ color: app.color }} />
                            </div>
                            <span className="text-[10px] font-bold text-gray-700">New Order!</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Order Flow Section ───── */
function OrderFlowSection() {
  const { ref, isInView } = useInView();

  const steps = [
    {
      step: "01",
      title: "Customer Places Order",
      description: "End customer browses restaurants or grocery stores on the Customer App, adds items to cart, and places an order with 100% cashless payment via UPI, card, or wallet.",
      icon: Smartphone,
      color: "#059669",
      actor: "Customer App",
    },
    {
      step: "02",
      title: "Order Received by Hotel & Delivery Partner",
      description: "The order notification instantly reaches both the hotel/restaurant and the nearest available delivery partner. The hotel sees the order details and the delivery partner sees the pickup location.",
      icon: Bell,
      color: "#EAB308",
      actor: "Hotel + Delivery App",
    },
    {
      step: "03",
      title: "Hotel Accepts & Starts Preparing",
      description: "The hotel accepts the order and begins food preparation. The customer receives a notification that their order is being prepared. The delivery partner is informed of the estimated preparation time.",
      icon: ClipboardList,
      color: "#059669",
      actor: "Hotel/Restaurant",
    },
    {
      step: "04",
      title: "Delivery Partner Reaches Hotel",
      description: "The delivery partner uses the built-in GPS navigation in the Delivery App to reach the hotel. Turn-by-turn directions guide them to the exact pickup location for seamless order collection.",
      icon: Navigation,
      color: "#EAB308",
      actor: "Delivery App",
    },
    {
      step: "05",
      title: "Order Delivered to Customer",
      description: "After collecting the order from the hotel, the delivery partner navigates to the customer's delivery address. The customer can track the delivery in real time on their app with live location updates.",
      icon: Package,
      color: "#059669",
      actor: "Delivery App + Customer App",
    },
    {
      step: "06",
      title: "Everything Recorded in Franchise App",
      description: "Every detail — order, payment, delivery time, delivery partner, customer, hotel — is automatically recorded in your Franchise App. You have full control and visibility over every transaction in your territory.",
      icon: LayoutDashboard,
      color: "#EAB308",
      actor: "Franchise App",
    },
  ];

  return (
    <section id="order-flow" className="py-20 sm:py-28 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#059669]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EAB308]/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-white/10 text-white hover:bg-white/20 px-4 py-1.5 text-sm font-semibold border-0">
            Complete Order Flow
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] text-white mt-4">
            How an Order <span className="text-[#059669]">Flows</span> Through the <span className="text-[#EAB308]">System</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            From the moment a customer places an order to the final delivery — every step is tracked, recorded, and managed through your franchise ecosystem.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-30px]"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`flex flex-col sm:flex-row items-start gap-4 sm:gap-6 ${
                i % 2 === 1 ? "sm:flex-row-reverse" : ""
              }`}>
                {/* Step number + line */}
                <div className="flex sm:flex-col items-center gap-2 sm:gap-0 flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ backgroundColor: s.color }}>
                    <span className="text-white font-bold text-lg sm:text-xl font-[family-name:var(--font-poppins)]">{s.step}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden sm:block w-0.5 h-12 bg-white/10 mx-auto" />
                  )}
                </div>

                {/* Step card */}
                <div className={`flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 hover:bg-white/10 transition-all ${
                  i % 2 === 1 ? "sm:text-right" : ""
                }`}>
                  <div className={`flex items-center gap-3 mb-4 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${s.color}30` }}>
                      <s.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-white font-[family-name:var(--font-poppins)]">{s.title}</h4>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: `${s.color}30`, color: s.color === "#EAB308" ? "#FBBF24" : "#10B981" }}>
                        {s.actor}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom summary bar */}
        <div className="mt-12 bg-gradient-to-r from-[#059669] to-[#EAB308] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-poppins)] mb-2">
            100% Tracked. 100% Cashless. 100% Controlled.
          </h3>
          <p className="text-white/80 text-lg">
            Every order, every payment, every delivery — recorded in your Franchise App with full transparency and control.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───── Franchise Control Section ───── */
function FranchiseControlSection() {
  const { ref, isInView } = useInView();

  const controls = [
    {
      icon: BarChart3,
      title: "Real-time Dashboard",
      description: "View live order counts, revenue, delivery status, and business performance metrics in real time. Your franchise dashboard updates every second with the latest data from your territory.",
      color: "#059669",
    },
    {
      icon: Wallet,
      title: "Complete Transaction Control",
      description: "Every payment — from customer to merchant, delivery fees, commissions — is tracked and recorded. View complete transaction histories, settlement reports, and earning breakdowns at any time.",
      color: "#EAB308",
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Add, manage, and monitor all delivery partners in your area. Track their performance, delivery times, ratings, and earnings. Assign zones and manage shift schedules efficiently.",
      color: "#059669",
    },
    {
      icon: Store,
      title: "Merchant Management",
      description: "Onboard new hotels, restaurants, and grocery shops. Manage their menus, pricing, subscriptions, and commission structures. Provide support and resolve issues directly from your app.",
      color: "#EAB308",
    },
    {
      icon: ShieldCheck,
      title: "Full Data Security",
      description: "All data is encrypted and securely stored. Customer details, payment information, and business data are protected with enterprise-grade security. You control who accesses what.",
      color: "#059669",
    },
    {
      icon: Bell,
      title: "Instant Notifications & Alerts",
      description: "Receive instant alerts for new orders, delivery completions, payment settlements, and any issues. Stay on top of your business with push notifications, SMS, and email alerts.",
      color: "#EAB308",
    },
  ];

  return (
    <section id="control" className="py-20 sm:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-[#059669]/10 text-[#059669] hover:bg-[#059669]/20 px-4 py-1.5 text-sm font-semibold">
            Franchise App Power
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mt-4">
            Full <span className="gradient-text">Control</span> Over Every <span className="gradient-text-green">Transaction</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Your Franchise App gives you complete visibility and control over every aspect of your delivery business — from orders and payments to team and merchant management.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {controls.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Card className="h-full card-hover-effect border-0 shadow-lg hover:shadow-xl bg-white rounded-2xl overflow-hidden group">
                <div className="h-1.5 w-full" style={{ backgroundColor: item.color }} />
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: `${item.color}15` }}>
                    <item.icon className="h-7 w-7" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-poppins)]">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── CTA Section ───── */
function CTASection({ onFranchiseClick }: { onFranchiseClick: () => void }) {
  const { ref, isInView } = useInView();

  return (
    <section id="cta" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#059669] to-[#10B981] p-8 sm:p-12 lg:p-16 text-white text-center transition-all duration-700 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EAB308]/20 rounded-full blur-3xl" />
          <div className="relative space-y-8">
            <Badge className="bg-white/20 text-white border-0 px-4 py-1.5 text-sm font-semibold">
              Ready to Start?
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)]">
              Get Your Mozoo Franchise Today
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
              Join the Mozoo family and start your own delivery business. Get all 3 apps, complete training, 
              and full support to run a successful franchise in your city or taluka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={onFranchiseClick} size="lg" className="bg-white text-[#059669] hover:bg-gray-100 font-bold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all">
                Get Franchise Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a href="https://wa.me/919823166155?text=Hello%2C%20I%20am%20interested%20in%20Mozoo%20Franchise.%20Please%20provide%20me%20more%20details." target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-lg rounded-full transition-all">
                  <Phone className="mr-2 h-5 w-5" /> WhatsApp Us
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 pt-4 text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#FBBF24]" />
                <span className="text-sm font-medium">3 Dedicated Apps</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#FBBF24]" />
                <span className="text-sm font-medium">Full Training & Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#FBBF24]" />
                <span className="text-sm font-medium">Low Investment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Footer ───── */
function Footer() {
  return (
    <footer className="bg-[#047857] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/mozoo-logo.png" alt="Mozoo" className="h-14 sm:h-16 w-auto object-contain" />
            </div>
            <p className="text-emerald-100/80 text-sm leading-relaxed">
              India&apos;s first 100% cashless food and grocery delivery platform. Serving urban and rural India with fast, reliable, and secure delivery services.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 font-[family-name:var(--font-poppins)]">Quick Links</h4>
            <ul className="space-y-2">
              {[{ label: "Home", href: "/" }, { label: "How It Works", href: "/how-it-works" }].map((link) => (
                <li key={link.label}><a href={link.href} className="text-emerald-100/70 hover:text-[#FBBF24] transition-colors text-sm">{link.label}</a></li>
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
              <li className="flex items-center gap-2 text-emerald-100/70 text-sm">
                <Phone className="h-4 w-4 text-[#FBBF24] flex-shrink-0" />
                <a href="https://wa.me/919823166155?text=Hello%2C%20I%20am%20interested%20in%20your%20Mozoo%20Services.%20Please%20provide%20me%20more%20details." target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">+91 9823166155</a>
              </li>
              <li className="flex items-center gap-2 text-emerald-100/70 text-sm">
                <Mail className="h-4 w-4 text-[#FBBF24] flex-shrink-0" />
                <a href="mailto:support@mozoo.in" className="hover:text-white hover:underline transition-colors">support@mozoo.in</a>
              </li>
              <li className="flex items-center gap-2 text-emerald-100/70 text-sm">
                <Globe className="h-4 w-4 text-[#FBBF24] flex-shrink-0" />
                <a href="https://mozoo.in" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">mozoo.in</a>
              </li>
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

/* ───── Main Page ───── */
export default function HowItWorksPage() {
  const [franchiseOpen, setFranchiseOpen] = useState(false);

  return (
    <main className="overflow-x-hidden">
      <Navbar onFranchiseClick={() => setFranchiseOpen(true)} />
      <HeroSection onFranchiseClick={() => setFranchiseOpen(true)} />
      <AppsSection />
      <OrderFlowSection />
      <FranchiseControlSection />
      <CTASection onFranchiseClick={() => setFranchiseOpen(true)} />
      <Footer />
      <FranchiseModal open={franchiseOpen} onClose={() => setFranchiseOpen(false)} />
    </main>
  );
}
