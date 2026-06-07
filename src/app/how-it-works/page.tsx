"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Truck,
  Store,
  Users,
  CheckCircle2,
  ArrowRight,
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
import { useInView } from "@/components/shared";

const openFranchiseModal = () => window.dispatchEvent(new Event("openFranchiseModal"));

/* ───── Hero Section ───── */
function HeroSection() {
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
            <Button onClick={openFranchiseModal} size="lg" className="bg-gradient-to-r from-[#059669] to-[#10B981] hover:from-[#047857] hover:to-[#059669] text-white font-bold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all animate-pulse-glow">
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
function CTASection() {
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
              <Button onClick={openFranchiseModal} size="lg" className="bg-white text-[#047857] hover:bg-gray-100 font-bold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all border-2 border-white">
                Get Franchise Now
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

/* ───── Main Page ───── */
export default function HowItWorksPage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AppsSection />
      <OrderFlowSection />
      <FranchiseControlSection />
      <CTASection />
    </main>
  );
}
