"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  ShieldCheck,
  Smartphone,
  Truck,
  Store,
  Users,
  TrendingUp,
  CreditCard,
  Wallet,
  CheckCircle2,
  ArrowRight,
  X,
  Phone,
  Mail,
  Globe,
  Star,
  Zap,
  Award,
  Target,
  Eye,
  ShoppingBag,
  UtensilsCrossed,
  Bike,
  HeadphonesIcon,
  BarChart3,
  Percent,
  IndianRupee,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { FranchiseForm, useInView, CounterStat, MarketCounter } from "@/components/shared";

const openFranchiseModal = () => window.dispatchEvent(new Event("openFranchiseModal"));

/* ───── Hero Section ───── */
function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `/${sectionId !== "home" ? sectionId : ""}`);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-amber-50" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#059669]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#EAB308]/10 rounded-full blur-3xl" />
      <div className="absolute top-32 left-12 w-3 h-3 bg-[#059669]/30 rounded-full animate-bounce-subtle" />
      <div className="absolute top-48 right-24 w-2 h-2 bg-[#EAB308]/40 rounded-full animate-float" />
      <div className="absolute bottom-40 left-24 w-4 h-4 bg-[#059669]/20 rounded-full animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#059669]/10 text-[#059669] px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles className="h-4 w-4" />
              India&apos;s First 100% Cashless Delivery Platform
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-[family-name:var(--font-poppins)] leading-tight">
              Fast Delivery,{" "}
              <span className="gradient-text">Cashless</span> Payments,{" "}
              <span className="gradient-text-green">Everywhere</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed">
              Mozoo brings food and grocery delivery to every corner of India — urban cities and rural towns alike. 100% online payments, zero cash handling, instant settlements for merchants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={openFranchiseModal} size="lg" className="flex-1 bg-gradient-to-r from-[#059669] to-[#10B981] hover:from-[#047857] hover:to-[#059669] text-white font-bold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all animate-pulse-glow">
                  Start Your Franchise
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("services")} className="flex-1 border-2 border-[#EAB308] text-[#EAB308] hover:bg-[#EAB308] hover:text-white font-bold px-8 py-6 text-lg rounded-full transition-all">
                Explore Services
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <ShieldCheck className="h-5 w-5 text-[#EAB308]" />
                <span className="text-sm font-medium">100% Cashless</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-5 w-5 text-[#059669]" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-5 w-5 text-[#EAB308]" />
                <span className="text-sm font-medium">Urban & Rural Areas</span>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <picture>
                <source srcSet="/hero-banner.webp" type="image/webp" />
                <img src="/hero-banner.png" alt="Mozoo Delivery" className="rounded-3xl shadow-2xl w-full object-cover max-h-[400px] lg:max-h-none" loading="eager" />
              </picture>
            </div>
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-white rounded-2xl shadow-xl p-3 sm:p-4 animate-float z-20">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#EAB308]/10 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-[#EAB308]" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500">Payment</p>
                  <p className="text-xs sm:text-sm font-bold text-gray-800">100% Online</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white rounded-2xl shadow-xl p-3 sm:p-4 animate-float z-20" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#059669]/10 flex items-center justify-center">
                  <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-[#059669]" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500">Delivery</p>
                  <p className="text-xs sm:text-sm font-bold text-gray-800">25 Min Avg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Stats Bar ───── */
function StatsBar() {
  return (
    <section className="relative -mt-4 sm:-mt-8 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 p-4 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <CounterStat end={55} suffix="B+" label="Market Size by 2026" icon={BarChart3} color="#059669" />
            <CounterStat end={18} suffix="%" label="Annual Growth Rate" icon={TrendingUp} color="#EAB308" />
            <CounterStat end={100} suffix="%" label="Cashless Transactions" icon={CreditCard} color="#059669" />
            <CounterStat end={500} suffix="+" label="Cities Targeted" icon={MapPin} color="#EAB308" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── About Section ───── */
function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`relative transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative mx-auto max-w-sm">
              <img src="/app-mockup.png" alt="Mozoo App" className="rounded-3xl shadow-2xl w-full" />
              <div className="absolute -z-10 -top-6 -left-6 w-full h-full bg-gradient-to-br from-[#059669]/20 to-[#EAB308]/20 rounded-3xl" />
            </div>
          </div>
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <Badge variant="secondary" className="bg-[#059669]/10 text-[#059669] hover:bg-[#059669]/20 px-4 py-1.5 text-sm font-semibold">
              About Mozoo
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)]">
              Transforming Delivery Across <span className="gradient-text">India</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Mozoo is an Indian startup that is revolutionizing the food and grocery delivery landscape. For the first time in the country, a single app provides rapid cashless delivery services for both urban and rural areas, bridging the gap that has long existed in India&apos;s delivery ecosystem.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Through our innovative franchise business model, we are creating employment opportunities in cities and rural areas alike. Starting from Maharashtra, Mozoo is set to expand across the entire nation, bringing fast, reliable, and 100% cashless delivery to every doorstep.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: UtensilsCrossed, label: "Food Delivery", color: "#059669" },
                { icon: ShoppingBag, label: "Grocery Delivery", color: "#EAB308" },
                { icon: CreditCard, label: "100% Cashless", color: "#059669" },
                { icon: Users, label: "Franchise Network", color: "#EAB308" },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${color}15` }}>
                    <Icon className="h-5 w-5" style={{ color }} />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Mission & Vision ───── */
function MissionVision() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#059669]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EAB308]/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-white/10 text-white hover:bg-white/20 px-4 py-1.5 text-sm font-semibold border-0">Our Purpose</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] text-white mt-4">
            Mission & <span className="text-[#059669]">Vision</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`bg-gradient-to-br from-[#059669]/20 to-[#059669]/5 border border-[#059669]/20 rounded-3xl p-8 sm:p-10 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="w-16 h-16 rounded-2xl bg-[#059669] flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)]">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To provide 100% cashless food and grocery delivery services across every city and rural area in India. We are committed to making digital payments the standard for all delivery transactions, eliminating the risks and inefficiencies of cash handling while ensuring seamless, transparent, and secure payment experiences for customers, merchants, and delivery partners alike.
            </p>
          </div>
          <div className={`bg-gradient-to-br from-[#EAB308]/20 to-[#EAB308]/5 border border-[#EAB308]/20 rounded-3xl p-8 sm:p-10 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="w-16 h-16 rounded-2xl bg-[#EAB308] flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)]">Our Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To build India&apos;s largest rural-urban delivery franchise network, creating lakhs of employment opportunities and empowering small businesses, hotels, and grocery stores to grow their digital presence. We envision a future where every merchant, regardless of location, has access to instant settlements, new customer bases, and the fastest cashless delivery service in the country.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Services Section ───── */
function ServicesSection() {
  const { ref, isInView } = useInView();
  const services: { icon: LucideIcon; title: string; description: string; color: string; bg: string; features: string[] }[] = [
    { icon: UtensilsCrossed, title: "Food Delivery", description: "Order from your favourite local restaurants and get hot, fresh meals delivered fast to your doorstep. From street food to fine dining, Mozoo connects you with the best eateries in your area.", color: "#059669", bg: "bg-emerald-50", features: ["30 Min Delivery", "Live Tracking", "100% Cashless"] },
    { icon: ShoppingBag, title: "Grocery Delivery", description: "Get daily essentials, fresh produce, and groceries delivered from trusted local stores. No more waiting in long queues — shop from home and receive your groceries at your convenience.", color: "#EAB308", bg: "bg-amber-50", features: ["Fresh Produce", "Daily Essentials", "Instant Delivery"] },
    { icon: Smartphone, title: "Easy App Access", description: "Our user-friendly app makes ordering effortless. Browse menus, track deliveries in real time, and make secure digital payments — all in a few taps. Available on Android and iOS.", color: "#059669", bg: "bg-emerald-50", features: ["Android & iOS", "Real-time Tracking", "Secure Payments"] },
    { icon: Store, title: "Merchant Partnerships", description: "Restaurants and grocery stores can join Mozoo to reach more customers. Enjoy instant settlements, zero inventory costs, and powerful marketing tools to grow your business digitally.", color: "#EAB308", bg: "bg-amber-50", features: ["Instant Settlement", "Zero Inventory", "Marketing Support"] },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-[#EAB308]/10 text-[#EAB308] hover:bg-[#EAB308]/20 px-4 py-1.5 text-sm font-semibold">Our Services</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mt-4">What We <span className="gradient-text">Offer</span></h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">From food to groceries, we deliver everything cashless, fast, and reliably — to cities and villages alike.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={i} className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${i * 150}ms` }}>
              <Card className="h-full card-hover-effect border-0 shadow-lg hover:shadow-xl bg-white rounded-2xl overflow-hidden group">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-7 w-7" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-poppins)]">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.features.map((f) => (
                      <span key={f} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ backgroundColor: `${service.color}15`, color: service.color }}>{f}</span>
                    ))}
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

/* ───── How It Works ───── */
function HowItWorks() {
  const { ref, isInView } = useInView();
  const steps = [
    { step: "01", title: "Download App", description: "Download the Mozoo app from Google Play Store or Apple App Store. Create your account in seconds with your phone number.", icon: Smartphone, color: "#059669" },
    { step: "02", title: "Browse & Order", description: "Browse restaurants and grocery stores near you. Add items to your cart and place your order with just a few taps.", icon: ShoppingBag, color: "#EAB308" },
    { step: "03", title: "Pay Online", description: "Complete your payment securely using UPI, card, or wallet. 100% cashless — no cash handling at any point.", icon: CreditCard, color: "#059669" },
    { step: "04", title: "Fast Delivery", description: "Track your order in real time as our delivery partner brings it to your doorstep. Average delivery in 30 minutes.", icon: Truck, color: "#EAB308" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-[#EAB308]/10 text-[#EAB308] px-4 py-1.5 text-sm font-semibold">Simple Process</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mt-4">How <span className="gradient-text-green">It Works</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className={`relative transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${i * 150}ms` }}>
              {i < steps.length - 1 && <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gray-200 z-0" />}
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 rounded-3xl bg-white shadow-lg mx-auto flex items-center justify-center mb-6 border border-gray-100 group hover:shadow-xl transition-shadow">
                  <s.icon className="h-10 w-10 group-hover:scale-110 transition-transform" style={{ color: s.color }} />
                </div>
                <div className="text-5xl font-bold font-[family-name:var(--font-poppins)] text-gray-300 mb-2">{s.step}</div>
                <h4 className="text-lg font-bold font-[family-name:var(--font-poppins)] mb-2">{s.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── USP Section ───── */
function USPSection() {
  const { ref, isInView } = useInView();
  const usps = [
    { icon: CreditCard, title: "NO CASH — Only Online Payment", description: "Every transaction on Mozoo is 100% digital. No cash exchanges hands at any point, eliminating fraud, mismatch, and cash handling issues entirely. Customers pay online after delivery is confirmed." },
    { icon: Wallet, title: "UPI / Card / Wallet Accepted", description: "We support all major payment methods including UPI, debit and credit cards, and digital wallets. Customers choose their preferred payment method, and delivery partners never handle any cash." },
    { icon: ShieldCheck, title: "Zero Fraud & Cash Mismatch", description: "Since there is no cash handling, the common problems of fraud, cash mismatch, and settlement disputes are completely eliminated, ensuring trust and transparency for all stakeholders." },
    { icon: Store, title: "No Warehouse, No Dark Store", description: "Mozoo operates with zero inventory costs. We do not maintain warehouses or dark stores. Orders are fulfilled directly from partner restaurants and grocery stores, keeping overhead minimal." },
    { icon: Zap, title: "Instant Merchant Settlements", description: "Hotels and grocery shops receive instant settlements for their orders. No waiting for weekly or monthly payouts — merchants get their money as soon as the order is delivered and paid for." },
    { icon: Award, title: "Unique Franchise Business Model", description: "Our innovative franchise model creates business opportunities in every taluka and city. Franchise partners earn from commissions, delivery fees, subscriptions, and local advertising revenue." },
  ];

  return (
    <section id="usp" className="py-20 sm:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-[#059669]/10 text-[#059669] hover:bg-[#059669]/20 px-4 py-1.5 text-sm font-semibold">Why Mozoo</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mt-4">Unique Selling <span className="gradient-text">Points</span></h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">What makes Mozoo different from every other delivery platform in India</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp, i) => (
            <div key={i} className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <Card className="h-full card-hover-effect border border-gray-100 shadow-md hover:shadow-xl rounded-2xl bg-white group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#059669]/10 to-[#EAB308]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <usp.icon className="h-7 w-7 text-[#059669]" />
                  </div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-poppins)]">{usp.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{usp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Problem / Solution Section ───── */
function ProblemSolution() {
  const { ref, isInView } = useInView();
  const problems = [
    "Big delivery companies charge very high commissions from small merchants",
    "Food & grocery delivery is not available in rural and small urban areas",
    "Cash on Delivery orders lead to payment settlement delays for merchants",
    "Other platforms don't offer both employment and business opportunities",
  ];
  const solutions = [
    "Mozoo provides delivery services in both rural and urban areas at fair commission rates",
    "Since orders are 100% cashless, small hotels and shops receive instant settlements",
    "Our franchise model creates business opportunities in every taluka and city",
    "Small hotels and shops get new market access through our digital platform",
  ];

  return (
    <section className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-red-100 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center"><X className="h-6 w-6 text-red-500" /></div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)] text-red-600">Current Problems</h3>
              </div>
              <div className="space-y-4">
                {problems.map((p, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-500 text-xs font-bold">{i + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-amber-100 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center"><CheckCircle2 className="h-6 w-6 text-amber-600" /></div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)] text-amber-600">Mozoo Solutions</h3>
              </div>
              <div className="space-y-4">
                {solutions.map((s, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Market Size Section ───── */
function MarketSize() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 sm:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-[#059669]/10 text-[#059669] px-4 py-1.5 text-sm font-semibold">Market Opportunity</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mt-4">Massive <span className="gradient-text">Market</span> Ahead</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl sm:rounded-3xl p-5 sm:p-10 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <UtensilsCrossed className="h-6 w-6 sm:h-8 sm:w-8 text-[#059669]" />
              <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-poppins)]">Food Delivery Market</h3>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-gray-600 font-medium">2026</span>
                  <MarketCounter end={60} suffix="B" color="#059669" barWidth="46%" isInView={isInView} />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-gray-600 font-medium">2030</span>
                  <MarketCounter end={130} suffix="B" color="#059669" barWidth="100%" isInView={isInView} />
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <TrendingUp className="h-5 w-5 text-[#059669]" />
                <span className="text-gray-700 font-semibold">CAGR: 18% – 20% annually</span>
              </div>
            </div>
          </div>
          <div className={`bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl sm:rounded-3xl p-5 sm:p-10 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-0"}`}>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <ShoppingBag className="h-6 w-6 sm:h-8 sm:w-8 text-[#EAB308]" />
              <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-poppins)]">Grocery Delivery Market</h3>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-gray-600 font-medium">2026</span>
                  <MarketCounter end={40} suffix="B" color="#EAB308" barWidth="40%" isInView={isInView} />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-gray-600 font-medium">2030</span>
                  <MarketCounter end={100} suffix="B" color="#EAB308" barWidth="100%" isInView={isInView} />
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <TrendingUp className="h-5 w-5 text-[#EAB308]" />
                <span className="text-gray-700 font-semibold">CAGR: 20% – 22% annually</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-gradient-to-r from-[#059669] to-[#EAB308] rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)]">Combined Market Size (Food + Grocery)</h3>
              <p className="text-white/80 mt-1">2026: $55-60B → 2030: $120-130B with 18-20% CAGR</p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-3xl sm:text-5xl font-bold font-[family-name:var(--font-poppins)]">$130B+</p>
              <p className="text-white/80">By 2030</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Business Model ───── */
function BusinessModel() {
  const { ref, isInView } = useInView();
  const items = [
    { icon: Percent, title: "Commission per Order", value: "10%", detail: "From hotels and grocery marts on each order", color: "#059669" },
    { icon: Bike, title: "Delivery Fee per Order", value: "₹39", detail: "Charged per delivery order", color: "#EAB308" },
    { icon: Smartphone, title: "Platform Fee per Order", value: "₹5", detail: "Platform convenience fee per order", color: "#059669" },
    { icon: IndianRupee, title: "Annual Subscription", value: "₹1,200", detail: "Annual fee from hotels and marts", color: "#EAB308" },
    { icon: Star, title: "Local Ads Revenue", value: "₹10,000", detail: "Per local advertisement & promotion", color: "#059669" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-[#EAB308]/10 text-[#EAB308] px-4 py-1.5 text-sm font-semibold">Revenue Streams</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mt-4">Business <span className="gradient-text">Model</span></h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">Multiple revenue channels ensuring sustainable and scalable income for the company and franchise partners</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <div key={i} className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <Card className="h-full card-hover-effect border-0 shadow-lg rounded-2xl overflow-hidden group text-center">
                <div className="h-2 w-full" style={{ backgroundColor: item.color }} />
                <CardContent className="p-6 space-y-3">
                  <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                    <item.icon className="h-7 w-7" style={{ color: item.color }} />
                  </div>
                  <h4 className="font-bold text-sm font-[family-name:var(--font-poppins)]">{item.title}</h4>
                  <p className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-poppins)]" style={{ color: item.color }}>{item.value}</p>
                  <p className="text-gray-500 text-xs">{item.detail}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Franchise Section ───── */
function FranchiseSection() {
  const { ref, isInView } = useInView();
  const franchiseRoles = [
    { icon: Store, text: "Onboard Hotels & Grocery Shops" },
    { icon: Bike, text: "Recruit Delivery Partners" },
    { icon: TrendingUp, text: "Grow Business in Your Area" },
    { icon: HeadphonesIcon, text: "Support Hotel & Grocery Vendors" },
    { icon: Target, text: "Local Digital Marketing" },
    { icon: Smartphone, text: "Promote Mozoo App" },
  ];
  const incomeBreakdown = [
    { title: "Order Commission Income", detail: "5% commission per order from hotels & marts", amount: "₹1,50,000", icon: Percent, color: "#059669", calculation: "6,000 orders × ₹25/order" },
    { title: "Delivery Fee Income", detail: "₹4 per order delivery share", amount: "₹24,000", icon: Truck, color: "#EAB308", calculation: "6,000 orders × ₹4/order" },
    { title: "Subscription Income", detail: "50% share of ₹1,200 annual merchant fee", amount: "₹1,000", icon: CreditCard, color: "#059669", calculation: "20 merchants × ₹600 ÷ 12 months" },
    { title: "Local Ads Income", detail: "50% share of local advertising revenue", amount: "₹25,000", icon: Star, color: "#EAB308", calculation: "5 ads × ₹5,000 each" },
  ];

  return (
    <section id="franchise" className="py-20 sm:py-28 bg-gradient-to-b from-white to-emerald-50/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-[#059669]/10 text-[#059669] px-4 py-1.5 text-sm font-semibold">Partner With Us</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mt-4">Franchise <span className="gradient-text">Opportunity</span></h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">Become a Mozoo franchise partner and build your own delivery business in your city or taluka</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-poppins)] mb-6">Franchise <span className="text-[#EAB308]">Model</span></h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">To create employment through Food & Grocery Delivery in every urban and rural area of India, Mozoo has established a unique franchise model. Every taluka and every city can have its own Mozoo franchise, enabling local entrepreneurs to run a full-fledged delivery business.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {franchiseRoles.map((role, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-[#059669]/10 flex items-center justify-center flex-shrink-0">
                    <role.icon className="h-5 w-5 text-[#059669]" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{role.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <picture>
              <source srcSet="/franchise-image.webp" type="image/webp" />
              <img src="/franchise-image.png" alt="Mozoo Franchise" className="rounded-3xl shadow-2xl w-full" loading="lazy" />
            </picture>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-poppins)] text-center mb-10">Monthly Franchise <span className="gradient-text">Income Breakdown</span></h3>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 mb-8 max-w-2xl mx-auto">
            <h4 className="font-bold text-gray-800 mb-4 font-[family-name:var(--font-poppins)]">Example Scenario:</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {["10 Hotels Registered", "10 Grocery Marts Registered", "200 Daily Orders", "₹500 Avg Order Value"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#EAB308]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {incomeBreakdown.map((item, i) => (
              <div key={i} className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${i * 150}ms` }}>
                <Card className="h-full card-hover-effect border-0 shadow-lg rounded-2xl overflow-hidden">
                  <div className="h-1.5 w-full" style={{ backgroundColor: item.color }} />
                  <CardContent className="p-5 space-y-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                      <item.icon className="h-6 w-6" style={{ color: item.color }} />
                    </div>
                    <h4 className="font-bold text-sm font-[family-name:var(--font-poppins)]">{item.title}</h4>
                    <p className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-poppins)]" style={{ color: item.color }}>{item.amount}</p>
                    <p className="text-gray-500 text-xs">{item.detail}</p>
                    <p className="text-gray-400 text-xs font-mono">{item.calculation}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gradient-to-r from-[#059669] to-[#10B981] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white text-center">
            <p className="text-lg font-medium opacity-90">Total Monthly Franchise Income</p>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-poppins)] mt-2">₹2,00,000+</p>
            <p className="text-white/80 mt-2">With just 20 merchants and 200 daily orders</p>
          </div>
        </div>

        {/* Franchise Offer */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-6 sm:p-12 text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#059669]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EAB308]/20 rounded-full blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="bg-[#059669] text-white border-0 px-4 py-1.5 text-sm font-semibold mb-4">Limited Time Offer</Badge>
              <h3 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-poppins)] mb-4">Golden Franchise Offer</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">Start your own delivery business with Mozoo at an unbeatable price. This limited-time golden offer gives you everything you need to launch and succeed.</p>
              <div className="space-y-3">
                {["Business Franchise Kit", "Digital Marketing Banner & Business Kit", "Business Support & Sale Promotion Video"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#EAB308]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20">
                <p className="text-gray-400 text-sm mb-2">Regular Price</p>
                <p className="text-2xl line-through text-gray-500">₹51,000</p>
                <div className="my-4">
                  <p className="text-gray-300 text-sm">Today&apos;s Offer</p>
                  <p className="text-5xl sm:text-6xl md:text-7xl font-bold font-[family-name:var(--font-poppins)] text-[#059669]">₹12,000</p>
                </div>
                <p className="text-gray-400 text-sm mb-6">Just ₹1,000/month for a complete business setup</p>
                <Button onClick={openFranchiseModal} size="lg" className="w-full bg-gradient-to-r from-[#059669] to-[#10B981] hover:from-[#047857] hover:to-[#059669] text-white font-bold rounded-full text-lg py-6 animate-pulse-glow">
                    Grab This Offer Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Contact Section ───── */
function ContactSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="py-16 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <Badge variant="secondary" className="bg-[#059669]/10 text-[#059669] px-4 py-1.5 text-sm font-semibold">Get In Touch</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mt-4 mb-6">Start Your <span className="gradient-text">Mozoo</span> Journey</h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">Whether you want to become a franchise partner, register your restaurant or grocery store, or join as a delivery partner — we would love to hear from you. Reach out to us today!</p>
            <div className="space-y-6">
              {[
                { icon: Phone, label: "WhatsApp Us", value: "+91 9823166155", color: "#059669", href: "https://wa.me/919823166155?text=Hello%2C%20I%20am%20interested%20in%20your%20Mozoo%20Services.%20Please%20provide%20me%20more%20details." },
                { icon: Mail, label: "Email Us", value: "support@mozoo.in", color: "#EAB308", href: "mailto:support@mozoo.in" },
                { icon: Globe, label: "Website", value: "mozoo.in", color: "#059669", href: "https://mozoo.in" },
              ].map(({ icon: Icon, label, value, color, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${color}10` }}>
                    <Icon className="h-6 w-6" style={{ color }} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{label}</p>
                    <p className="text-lg font-semibold group-hover:underline">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <Card className="shadow-xl border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-5 sm:p-8">
                <h3 className="text-xl font-bold font-[family-name:var(--font-poppins)] mb-2">Send Us a Message</h3>
                <FranchiseForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Main Page ───── */
export default function MozooHome() {

  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden">
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <MissionVision />
      <ServicesSection />
      <HowItWorks />
      <USPSection />
      <ProblemSolution />
      <MarketSize />
      <BusinessModel />
      <FranchiseSection />
      <ContactSection />
    </main>
  );
}
