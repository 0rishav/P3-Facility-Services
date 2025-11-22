import { Link } from "react-router-dom";
import { Shield, CheckCircle, Target, Users, Clock, Award, Home, Building, Factory, Hotel, Car, Calendar, User, Lock, ArrowRight, Star, Zap, Globe } from "lucide-react";

// Feature icons mapping
const featureIcons = {
  quality: <CheckCircle className="h-8 w-8" />,
  strategy: <Target className="h-8 w-8" />,
  support: <Users className="h-8 w-8" />,
  monitoring: <Clock className="h-8 w-8" />,
  team: <Award className="h-8 w-8" />,
};

// Service icons mapping
const serviceIcons = {
  residential: <Home className="h-12 w-12" />,
  hospital: <Building className="h-12 w-12" />,
  industrial: <Factory className="h-12 w-12" />,
  hotel: <Hotel className="h-12 w-12" />,
  parking: <Car className="h-12 w-12" />,
  event: <Calendar className="h-12 w-12" />,
  gatekeeper: <User className="h-12 w-12" />,
  private: <Lock className="h-12 w-12" />,
};

// Features data
const features = [
  {
    title: "Quality Assured Service",
    description: "We maintain the highest standards in all our security operations to ensure complete client satisfaction.",
    icon: featureIcons.quality,
  },
  {
    title: "Strategic Focus",
    description: "Our strategic approach to security planning ensures comprehensive protection for your assets.",
    icon: featureIcons.strategy,
  },
  {
    title: "Continuous Support",
    description: "24/7 support and monitoring to ensure your security needs are always met.",
    icon: featureIcons.support,
  },
  {
    title: "Efficient Monitoring",
    description: "Advanced monitoring systems and regular patrols to maintain optimal security.",
    icon: featureIcons.monitoring,
  },
  {
    title: "Trained Team",
    description: "Professional and well-trained security personnel committed to excellence.",
    icon: featureIcons.team,
  },
];

// Services data
const services = [
  {
    title: "Residential Security Services in Bangalore",
    subtitle: "Residential Services",
    icon: serviceIcons.residential,
  },
  {
    title: "Hospital Security Services in Bangalore",
    subtitle: "Hospital Security",
    icon: serviceIcons.hospital,
  },
  {
    title: "Industrial Security Services in Bangalore",
    subtitle: "Industrial Security Services",
    icon: serviceIcons.industrial,
  },
  {
    title: "Hotel Security Services in Bangalore",
    subtitle: "Hotel Security",
    icon: serviceIcons.hotel,
  },
  {
    title: "Parking Lot Maintenance Services in Bangalore",
    subtitle: "Parking Lot Maintenance",
    icon: serviceIcons.parking,
  },
  {
    title: "Event Security Services in Bangalore",
    subtitle: "Event Security Services",
    icon: serviceIcons.event,
  },
  {
    title: "Gatekeeper Security Services in Bangalore",
    subtitle: "Gate Keeping Services",
    icon: serviceIcons.gatekeeper,
  },
  {
    title: "Private Security Agency in Bangalore",
    subtitle: "Private Security Services",
    icon: serviceIcons.private,
  },
];

// Stats data
const stats = [
  { value: "110", label: "Happy Clients" },
  { value: "11", label: "Year Experience" },
  { value: "1150", label: "Our Employees" },
];

// Client logos (placeholders)
const clients = [
  { name: "Client 1", logo: "C1" },
  { name: "Client 2", logo: "C2" },
  { name: "Client 3", logo: "C3" },
  { name: "Client 4", logo: "C4" },
  { name: "Client 5", logo: "C5" },
  { name: "Client 6", logo: "C6" },
];

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced animated background with theme support */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-indigo-300 to-gray-500 dark:from-gray-950 dark:via-slate-900 dark:to-indigo-950 ">
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.01] bg-grid-16"></div>
        {/* Animated particles/patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 dark:bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-purple-400 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-[400px] h-[400px] bg-pink-400 dark:bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent dark:from-black/70"></div>
      </div>
      
      {/* Navigation hint */}
     
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-16">
        {/* Pre-heading */}
        <div className="mb-8 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-indigo-500/20 dark:bg-indigo-500/30 backdrop-blur-sm rounded-full border border-indigo-400/30 dark:border-indigo-400/40 text-indigo-300 dark:text-indigo-200 text-sm font-medium">
            🛡️ Licensed & Certified Security Agency
          </span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white dark:text-gray-100 mb-8 leading-[0.9] tracking-tight animate-fade-in-up animation-delay-200">
          <span className="block mb-2">Your Safety,</span>
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 dark:from-yellow-300 dark:via-orange-300 dark:to-red-300 bg-clip-text text-transparent">Our Priority</span>
        </h1>
        
        {/* Subheading */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/90 dark:text-gray-100 mb-6 animate-fade-in-up animation-delay-400">
          Global Security Services
        </h2>
        
        {/* Enhanced description */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 dark:text-gray-200 mb-16 max-w-5xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
          Premier security solutions in Bangalore with <span className="text-yellow-400 dark:text-yellow-300 font-semibold">11+ years</span> of excellence. 
          Professional security personnel, cutting-edge technology, and unwavering commitment to protect what matters most.
        </p>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up animation-delay-800">
          <Link
            to="/contact"
            className="group px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-yellow-500 dark:to-orange-600 text-gray-900 dark:text-gray-900 font-bold text-lg rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 flex items-center justify-center relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Get Protected Today
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link
            to="/about"
            className="px-10 py-5 bg-transparent border-2 border-white dark:border-gray-100 text-white dark:text-gray-100 font-bold text-lg rounded-xl hover:bg-white dark:hover:bg-gray-100 hover:text-gray-900 dark:hover:text-gray-900 transition-all duration-500 flex items-center justify-center backdrop-blur-sm"
          >
            <Globe className="mr-3 w-6 h-6" />
            Explore Our Services
          </Link>
        </div>
        
        {/* Enhanced stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-1000 ">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 dark:text-yellow-300 mb-2">110+</div>
            <div className="text-sm md:text-base text-gray-400 dark:text-gray-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 dark:text-green-300 mb-2">11+</div>
            <div className="text-sm md:text-base text-gray-400 dark:text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 dark:text-blue-300 mb-2">1150+</div>
            <div className="text-sm md:text-base text-gray-400 dark:text-gray-300">Security Personnel</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 dark:text-purple-300 mb-2">24/7</div>
            <div className="text-sm md:text-base text-gray-400 dark:text-gray-300">Emergency Response</div>
          </div>
        </div>
        
        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-16 animate-fade-in-up animation-delay-1200 mb-12">
          <div className="flex items-center text-white/80 dark:text-gray-200">
            <Star className="w-5 h-5 text-yellow-400 dark:text-yellow-300 mr-2" />
            <span className="font-medium">4.9/5 Customer Rating</span>
          </div>
          <div className="flex items-center text-white/80 dark:text-gray-200">
            <CheckCircle className="w-5 h-5 text-green-400 dark:text-green-300 mr-2" />
            <span className="font-medium">ISO 9001:2015 Certified</span>
          </div>
          <div className="flex items-center text-white/80 dark:text-gray-200">
            <Shield className="w-5 h-5 text-blue-400 dark:text-blue-300 mr-2" />
            <span className="font-medium">Government Approved</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
  
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4">
              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Excellence in Security Services
            </h2>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              Global Security Services Adopts Unique Approach For The Client Requirements, Which Is Proven To Be Effective. Our Sole Responsibility Towards Professional Service And Expertise Has Let Us Sustain In The Record Of Top Security Services. We Have Maintained A Consistent Service Delivery To All Our Clients From Various Sectors And Industries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl">
                <Target className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Mission Driven</h4>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
                <Award className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Award Winning</h4>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Client Focused</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Choose Section Component
const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-full mb-6">
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            Why Choose Global
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Global Security Services Incorporates Efficient Methodologies To Bring A Flawless Security Solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-6 flex items-center text-indigo-600 dark:text-indigo-400 font-medium group-hover:text-indigo-700 dark:group-hover:text-indigo-300">
                <span className="text-sm">Learn more</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900 rounded-full mb-6">
            <span className="text-sm font-semibold text-orange-600 dark:text-orange-300">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-indigo-900 dark:from-white dark:to-indigo-300 bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive security solutions tailored to your specific needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                {service.title}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {service.subtitle}
                </p>
                <ArrowRight className="w-4 h-4 text-orange-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section Component
const StatsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Theme-aware background: lighter gradient in light mode, deep subtle gradient in dark mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 via-gray-300 to-blue-400 dark:from-gray-900 dark:via-indigo-900 dark:to-black">
        {/* Semi-opaque overlay to ensure text contrast in both themes */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/60"></div>
        {/* Animated background elements (use subtle whites in light, very muted in dark) */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 dark:bg-white/5 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 dark:bg-white/5 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Many
          </h2>
          <p className="text-xl text-indigo-200 dark:text-indigo-300">
            Our numbers speak for themselves
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300">
                <div className="text-5xl md:text-7xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}+
                </div>
                <div className="text-xl text-indigo-200 dark:text-indigo-300 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Clients Section Component
const ClientsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 rounded-full mb-6">
            <span className="text-sm font-semibold text-green-600 dark:text-green-300">Partners</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            Our Trusted Clients
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Proud to serve industry leaders across various sectors
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-400 bg-clip-text text-transparent group-hover:from-green-500 group-hover:to-emerald-600 dark:group-hover:from-green-400 dark:group-hover:to-emerald-500 transition-all duration-300">
                {client.logo}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Become Our Client
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <ServicesSection />
      <StatsSection />
      <ClientsSection />
    </div>
  );
};

export default LandingPage;
