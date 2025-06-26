"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BigLogo from "../assets/biglogo.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  TrendingUp,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Bitcoin,
  Wallet,
  BarChart3,
  Users,
  Award,
  DollarSign,
  Smartphone,
  Bot,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Play,
  ChevronRight,
  Target,
  Briefcase,
  AlertCircle,
  Loader2,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useApiPost } from "@/hooks/useApi";
import AuthModal from "@/components/AuthModal";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Home() {
  const { post } = useApiPost();
  const [authModal, setAuthModal] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const userData1 = localStorage.getItem("userData");
  const parsedUserData = JSON.parse(userData1);

  // Clear error and success messages when switching tabs

  // ... rest of your component data (investmentPlans, features, testimonials, etc.) remains the same ...

  const investmentPlans = [
    {
      name: "Starter Plan",
      minInvestment: "$3,000",
      maxInvestment: "$4,999",
      dailyReturn: "3%",
      duration: "30 days",
      totalReturn: "143%",
      popular: false,
      features: [
        "Minimum investment: $3,000",
        "Daily profit: 3%",
        "Total return: 143%",
        "Basic support",
        "Mobile app access",
        "Real-time notifications",
      ],
    },
    {
      name: "Professional Plan",
      minInvestment: "$5,000",
      maxInvestment: "$9,999",
      dailyReturn: "3%",
      duration: "45 days",
      totalReturn: "261%",
      popular: true,
      features: [
        "Minimum investment: $5,000",
        "Daily profit: 3%",
        "Total return: 261%",
        "Priority support",
        "Advanced analytics",
        "Mobile app access",
        "Personal account manager",
        "Risk management tools",
      ],
    },
    {
      name: "Enterprise Plan",
      minInvestment: "$10,000",
      maxInvestment: "$50,000",
      dailyReturn: "3%",
      duration: "60 days",
      totalReturn: "426%",
      popular: false,
      features: [
        "Minimum investment: $10,000",
        "Daily profit: 3%",
        "Total return: 426%",
        "VIP support 24/7",
        "Advanced analytics",
        "API access",
        "Dedicated account manager",
        "Custom trading strategies",
        "Institutional-grade security",
      ],
    },
  ];
  

  const features = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI-Powered Trading",
      description:
        "Advanced machine learning algorithms analyze market patterns and execute trades 24/7 to maximize your returns with minimal risk.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Bank-Level Security",
      description:
        "Military-grade encryption, cold storage wallets, and multi-signature authentication protect your investments from any threats.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Consistent High Returns",
      description:
        "Our proven track record shows consistent daily returns ranging from 2.5% to 5% depending on your chosen investment plan.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Transactions",
      description:
        "Lightning-fast deposits and withdrawals processed within minutes using our optimized blockchain infrastructure.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Accessibility",
      description:
        "Trade from anywhere in the world with support for 50+ cryptocurrencies and 24/7 market access across all time zones.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Trading App",
      description:
        "Full-featured mobile application for iOS and Android with real-time notifications and portfolio management tools.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Professional Trader",
      image: "https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "LunoVest has transformed my investment strategy. I've been earning consistent 3.5% daily returns for 6 months now. The platform is incredibly reliable and secure.",
      rating: 5,
      profit: "$47,500",
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      image: "https://plus.unsplash.com/premium_photo-1690296204289-14e517830d8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGxhZHl8ZW58MHx8MHx8fDA%3D",
      content:
        "Started with the Enterprise plan and couldn't be happier. The AI trading algorithms are impressive, and the customer support is outstanding. Highly recommended!",
      rating: 5,
      profit: "$125,000",
    },
    {
      name: "Emma Rodriguez",
      role: "Financial Advisor",
      image: "https://media.istockphoto.com/id/2162937006/photo/studio-portrait-of-decision-making-businesswoman-in-businesswear.webp?a=1&b=1&s=612x612&w=0&k=20&c=Pu-hZ3TEdx-khwkiX_ql6P0Z8JmPX7W0ghpEorhqP1E=",
      content:
        "As a financial advisor, I'm always skeptical of investment platforms. LunoVest proved me wrong with their transparency and consistent performance. My clients love it!",
      rating: 5,
      profit: "$89,200",
    },
  ];

  const stats = [
    {
      label: "Total Invested",
      value: "$127M+",
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      label: "Active Investors",
      value: "45,000+",
      icon: <Users className="h-6 w-6" />,
    },
    {
      label: "Countries Served",
      value: "120+",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      label: "Success Rate",
      value: "99.7%",
      icon: <Award className="h-6 w-6" />,
    },
  ];

  const faqData = [
    {
      question: "How does LunoVest generate such high returns?",
      answer:
        "Our advanced AI algorithms analyze thousands of market indicators, news sentiment, and trading patterns across multiple cryptocurrency exchanges. This allows us to execute profitable trades 24/7 while minimizing risk through diversification and automated stop-loss mechanisms.",
    },
    {
      question: "Is my investment safe and secure?",
      answer:
        "Absolutely. We use bank-level security measures including 256-bit SSL encryption, cold storage wallets for 95% of funds, multi-signature authentication, and regular security audits by third-party firms. Your funds are also insured against cyber attacks.",
    },
    {
      question: "How quickly can I withdraw my profits?",
      answer:
        "Withdrawals are processed within 24 hours for amounts up to $10,000. Larger withdrawals may take 2-3 business days for additional security verification. There are no withdrawal fees for profits earned through our platform.",
    },
    {
      question: "What is the minimum investment amount?",
      answer:
        "The minimum investment starts at just $100 for our Starter Plan. This makes our platform accessible to investors of all levels, from beginners to institutional investors.",
    },
    {
      question: "Can I reinvest my profits automatically?",
      answer:
        "Yes! Our platform offers automatic reinvestment options where your daily profits can be automatically added to your principal investment, allowing for compound growth over time.",
    },
    {
      question: "Do you provide customer support?",
      answer:
        "We offer 24/7 customer support through multiple channels including live chat, email, WhatsApp, and phone support. Professional and Enterprise plan members get priority support with dedicated account managers.",
    },
  ];

  // ... rest of your JSX remains the same ...
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-purple-500/20 backdrop-blur-md bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center ">
              <img src={BigLogo || "/placeholder.svg"} alt="" width={"100px"} />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                About
              </a>
              <a
                href="#features"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#plans"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Plans
              </a>
              <a
                href="#testimonials"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Reviews
              </a>
              <a
                href="#faq"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                FAQ
              </a>

              <div className="">
                {userData1 !== null ? (
                    <div className="hidden md:block">
                                 <DropdownMenu>
                                   <DropdownMenuTrigger asChild>
                                     <Button
                                       variant="ghost"
                                       className="flex items-center space-x-2 text-white hover:bg-white/10"
                                     >
                                       <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full flex items-center justify-center">
                                         <User className="h-4 w-4 text-white" />
                                       </div>
                                       <span>
                                         {parsedUserData?.firstName} {parsedUserData?.lastName}
                                       </span>
                                     </Button>
                                   </DropdownMenuTrigger>
                                   <DropdownMenuContent
                                     align="end"
                                     className="bg-slate-800 border-slate-700 w-48"
                                   >
                                     <DropdownMenuItem className="text-white hover:bg-slate-700">
                                       <Settings className="h-4 w-4 mr-2" />
                                       Settings
                                     </DropdownMenuItem>
                                     <DropdownMenuItem className="text-white hover:bg-slate-700">
                                       <User className="h-4 w-4 mr-2" />
                                       Profile
                                     </DropdownMenuItem>
                                     <DropdownMenuItem
                                       onClick={() => {
                                         localStorage.clear();
                                        window.location.reload();
                                       }}
                                       className="text-white hover:bg-slate-700"
                                     >
                                       <LogOut className="h-4 w-4 mr-2" />
                                       Logout
                                     </DropdownMenuItem>
                                   </DropdownMenuContent>
                                 </DropdownMenu>
                               </div>
                ) : (
                  <>
                    {" "}
                    <Button
                      variant="ghost"
                      className="text-purple-400 hover:text-white hover:bg-purple-500/20"
                      onClick={() => setAuthModal("login")}
                    >
                      Login
                    </Button>
                    <Button
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
                      onClick={() => setAuthModal("signup")}
                    >
                      Get Started
                    </Button>
                  </>
                )}
              </div>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-purple-500/20 mt-4">
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="#about"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  About
                </a>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#plans"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Plans
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Reviews
                </a>
                <a
                  href="#faq"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  FAQ
                </a>

                {
                  userData1 !== null ? <div className="border-t border-purple-500/20 pt-4">
                                    <div className="flex items-center space-x-2 mb-4">
                                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full flex items-center justify-center">
                                        <User className="h-4 w-4 text-white" />
                                      </div>
                                      <span className="text-white">
                                        {parsedUserData?.firstName} {parsedUserData?.lastName}
                                      </span>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                      <Button
                                        variant="ghost"
                                        className="text-gray-300 hover:text-white hover:bg-white/10 justify-start"
                                      >
                                        <Settings className="h-4 w-4 mr-2" />
                                        Settings
                                      </Button>
                                      <Button
                                        variant="ghost"
                                        className="text-gray-300 hover:text-white hover:bg-white/10 justify-start"
                                      >
                                        <User className="h-4 w-4 mr-2" />
                                        Profile
                                      </Button>
                                      <Button
                                        onClick={() => {
                                          localStorage.clear();
                                        window.location.reload();
                                        }}
                                        variant="ghost"
                                        className="text-gray-300 hover:text-white hover:bg-white/10 justify-start"
                                      >
                                        <LogOut className="h-4 w-4 mr-2" />
                                        Logout
                                      </Button>
                                    </div>
                                  </div> :  <div className="flex flex-col space-y-2 pt-4">
                  <Button
                    variant="ghost"
                    className="text-purple-400 hover:text-white hover:bg-purple-500/20 justify-start"
                    onClick={() => setAuthModal("login")}
                  >
                    Login
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white justify-start"
                    onClick={() => setAuthModal("signup")}
                  >
                    Get Started
                  </Button>
                </div>
                }
               
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-sm px-4 py-2">
                  🚀 #1 AI-Powered Crypto Investment Platform
                </Badge>
                <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Earn Up To
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    5% Daily
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Returns
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Join over 45,000 investors who trust our advanced AI
                  algorithms to generate consistent daily profits from
                  cryptocurrency trading. Start with as little as $100 and watch
                  your investment grow automatically.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg"
                  onClick={() => setAuthModal("signup")}
                >
                  Start Investing Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2 text-purple-400">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-3xl opacity-20"></div>
              <Card className="relative bg-black/40 border-purple-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-purple-400" />
                    Live Trading Dashboard
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Real-time performance of our AI trading algorithms
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-lg border border-green-500/30">
                      <div className="text-green-400 text-sm font-medium">
                        Today's Profit
                      </div>
                      <div className="text-2xl font-bold text-white">
                        +$2,847
                      </div>
                      <div className="text-green-400 text-sm">+12.4% ↗</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 rounded-lg border border-blue-500/30">
                      <div className="text-blue-400 text-sm font-medium">
                        Active Trades
                      </div>
                      <div className="text-2xl font-bold text-white">47</div>
                      <div className="text-blue-400 text-sm">Running</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-white font-medium">
                      Top Performing Assets
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">BTC/USD</span>
                        <span className="text-green-400 font-medium">
                          +2.3%
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">ETH/USD</span>
                        <span className="text-green-400 font-medium">
                          +1.8%
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">ADA/USD</span>
                        <span className="text-red-400 font-medium">-0.5%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">SOL/USD</span>
                        <span className="text-green-400 font-medium">
                          +3.1%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                    <div className="text-purple-400 text-sm font-medium">
                      Portfolio Growth
                    </div>
                    <div className="text-lg font-bold text-white">
                      +127.5% This Month
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
              About LunoVest
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              The Future of Crypto Investment
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              LunoVest is a revolutionary cryptocurrency investment platform
              that combines cutting-edge artificial intelligence with
              institutional-grade security to deliver consistent, profitable
              returns for investors worldwide. Our advanced algorithms analyze
              market data 24/7, executing thousands of micro-trades to
              capitalize on market inefficiencies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Why Choose LunoVest?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Target className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Proven Track Record
                    </h4>
                    <p className="text-gray-300">
                      Over 3 years of consistent profitability with a 99.7%
                      success rate
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Briefcase className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Professional Management
                    </h4>
                    <p className="text-gray-300">
                      Managed by experienced traders and quantitative analysts
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Regulatory Compliance
                    </h4>
                    <p className="text-gray-300">
                      Fully licensed and regulated in multiple jurisdictions
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">
                Company Highlights
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">2021</div>
                  <div className="text-gray-300 text-sm">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">$127M+</div>
                  <div className="text-gray-300 text-sm">
                    Assets Under Management
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">45K+</div>
                  <div className="text-gray-300 text-sm">Active Investors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">120+</div>
                  <div className="text-gray-300 text-sm">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
              Platform Features
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Advanced Technology Meets Simplicity
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines sophisticated trading algorithms with an
              intuitive user experience, making professional-grade crypto
              investment accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Plans */}
      <section id="plans" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
              Investment Plans
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Choose Your Investment Strategy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select from our carefully designed investment plans, each
              optimized for different risk tolerances and investment goals. All
              plans include our signature AI-powered trading algorithms and
              comprehensive support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-gradient-to-br from-slate-900/50 to-purple-900/20 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-purple-500 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-white">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Perfect for{" "}
                    {plan.name.toLowerCase().includes("starter")
                      ? "beginners and small investors"
                      : plan.name.toLowerCase().includes("professional")
                      ? "experienced traders and medium investors"
                      : "high-net-worth individuals and institutions"}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {plan.dailyReturn}
                    </div>
                    <div className="text-gray-400 text-lg">Daily Return</div>
                    <div className="text-2xl font-semibold text-green-400 mt-2">
                      {plan.totalReturn} Total
                    </div>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Min Investment:</span>
                      <span className="text-white font-semibold">
                        {plan.minInvestment}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Max Investment:</span>
                      <span className="text-white font-semibold">
                        {plan.maxInvestment}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white font-semibold">
                        {plan.duration}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Plan Features:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                        : "bg-gray-700 hover:bg-gray-600"
                    } text-white`}
                    onClick={() => setAuthModal("signup")}
                  >
                    Choose {plan.name}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
              Success Stories
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Our Investors Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied investors who have transformed their
              financial future with LunoVest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border-purple-500/30 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 object-cover rounded-full border-2 border-purple-400"
                    />
                    <div>
                      <h4 className="text-white font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                    <div className="text-green-400 text-sm font-medium">
                      Total Profit Earned
                    </div>
                    <div className="text-2xl font-bold text-green-400">
                      {testimonial.profit}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Got Questions? We Have Answers
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about investing with LunoVest.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/30 rounded-lg px-6 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-white hover:text-purple-400 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-3xl p-12 backdrop-blur-sm">
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join over 45,000 investors who are already earning consistent
              daily returns with our AI-powered platform. Start your journey to
              financial freedom today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg"
                onClick={() => setAuthModal("signup")}
              >
                Start Investing Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg"
                onClick={() => setAuthModal("login")}
              >
                Login to Account
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 bg-black/40 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <Bitcoin className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  LunoVest
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                The most trusted AI-powered cryptocurrency investment platform.
                Join thousands of investors earning consistent daily returns
                through our advanced trading algorithms.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-purple-500/30 text-purple-400 hover:bg-purple-500/20"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Support
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <div className="space-y-3 text-sm">
                <a
                  href="#about"
                  className="text-gray-400 hover:text-purple-400 block transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-purple-400 block transition-colors"
                >
                  How It Works
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 block transition-colors"
                >
                  Security
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 block transition-colors"
                >
                  Careers
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <div className="space-y-3 text-sm">
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-purple-400 block transition-colors"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 block transition-colors"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 block transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 block transition-colors"
                >
                  Live Chat
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-gray-400">
                  <Mail className="h-4 w-4 mr-2 text-purple-400" />
                  support@lunovest.com
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="h-4 w-4 mr-2 text-purple-400" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                  New York, NY 10001
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-500/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-center text-sm">
                © 2024 LunoVest. All rights reserved. | Licensed and regulated
                financial services.
              </p>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Risk Disclosure
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal type={authModal} onClose={() => setAuthModal(null)} />
    </div>
  );
}
