// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Badge } from "@/components/ui/badge"
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// import BigLogo from "../assets/biglogo.png"

// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// import {
//   TrendingUp,
//   Shield,
//   Zap,
//   Globe,
//   ArrowRight,
//   CheckCircle,
//   Star,
//   Bitcoin,
//   Wallet,
//   BarChart3,
//   Users,
//   Award,
//   DollarSign,
//   Smartphone,
//   Bot,
//   MessageCircle,
//   Mail,
//   Phone,
//   MapPin,
//   Menu,
//   X,
//   Play,
//   ChevronRight,
//   Target,
//   Briefcase,
// } from "lucide-react"
// import { useNavigate } from "react-router-dom"

// export default function Home() {
//   const [authModal, setAuthModal] = useState(null)
//   const [isMenuOpen, setIsMenuOpen] = useState(false) 
//    const [loading, setLoading] = useState(false)











//   const handleLogin = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         "https://lunovest-api.onrender.com/api/auth/login",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email, password }),
//         }
//       );

//       const data = await response.json();

//       console.log(data);

//       // Save user data (and token if available) to localStorage
//       localStorage.setItem("user", JSON.stringify(data));

//       // Navigate to dashboard
//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSignup = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         "https://lunovest-api.onrender.com/api/auth/signup",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             firstName,
//             lastName,
//             email,
//             phoneNumber,
//             password,
//             confirmPassword,
//           }),
//         }
//       );

//       const data = await response.json();

//       console.log(data);
//       setAuthModal("login");
//     } catch (err) {
//       alert(err.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };





// const navigate = useNavigate()
//   const investmentPlans = [
//     {
//       name: "Starter Plan",
//       minInvestment: "$100",
//       maxInvestment: "$999",
//       dailyReturn: "2.5%",
//       duration: "30 days",
//       totalReturn: "75%",
//       popular: false,
//       features: [
//         "Minimum investment: $100",
//         "Daily profit: 2.5%",
//         "Total return: 75%",
//         "Basic support",
//         "Mobile app access",
//         "Real-time notifications",
//       ],
//     },
//     {
//       name: "Professional Plan",
//       minInvestment: "$1,000",
//       maxInvestment: "$9,999",
//       dailyReturn: "3.5%",
//       duration: "45 days",
//       totalReturn: "157.5%",
//       popular: true,
//       features: [
//         "Minimum investment: $1,000",
//         "Daily profit: 3.5%",
//         "Total return: 157.5%",
//         "Priority support",
//         "Advanced analytics",
//         "Mobile app access",
//         "Personal account manager",
//         "Risk management tools",
//       ],
//     },
//     {
//       name: "Enterprise Plan",
//       minInvestment: "$10,000",
//       maxInvestment: "$50,000",
//       dailyReturn: "5%",
//       duration: "60 days",
//       totalReturn: "300%",
//       popular: false,
//       features: [
//         "Minimum investment: $10,000",
//         "Daily profit: 5%",
//         "Total return: 300%",
//         "VIP support 24/7",
//         "Advanced analytics",
//         "API access",
//         "Dedicated account manager",
//         "Custom trading strategies",
//         "Institutional-grade security",
//       ],
//     },
//   ]

//   const features = [
//     {
//       icon: <Bot className="h-8 w-8" />,
//       title: "AI-Powered Trading",
//       description:
//         "Advanced machine learning algorithms analyze market patterns and execute trades 24/7 to maximize your returns with minimal risk.",
//     },
//     {
//       icon: <Shield className="h-8 w-8" />,
//       title: "Bank-Level Security",
//       description:
//         "Military-grade encryption, cold storage wallets, and multi-signature authentication protect your investments from any threats.",
//     },
//     {
//       icon: <TrendingUp className="h-8 w-8" />,
//       title: "Consistent High Returns",
//       description:
//         "Our proven track record shows consistent daily returns ranging from 2.5% to 5% depending on your chosen investment plan.",
//     },
//     {
//       icon: <Zap className="h-8 w-8" />,
//       title: "Instant Transactions",
//       description:
//         "Lightning-fast deposits and withdrawals processed within minutes using our optimized blockchain infrastructure.",
//     },
//     {
//       icon: <Globe className="h-8 w-8" />,
//       title: "Global Accessibility",
//       description:
//         "Trade from anywhere in the world with support for 50+ cryptocurrencies and 24/7 market access across all time zones.",
//     },
//     {
//       icon: <Smartphone className="h-8 w-8" />,
//       title: "Mobile Trading App",
//       description:
//         "Full-featured mobile application for iOS and Android with real-time notifications and portfolio management tools.",
//     },
//   ]

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "Professional Trader",
//       image: "/placeholder.svg?height=60&width=60",
//       content:
//         "CryptoVault has transformed my investment strategy. I've been earning consistent 3.5% daily returns for 6 months now. The platform is incredibly reliable and secure.",
//       rating: 5,
//       profit: "$47,500",
//     },
//     {
//       name: "Michael Chen",
//       role: "Business Owner",
//       image: "/placeholder.svg?height=60&width=60",
//       content:
//         "Started with the Enterprise plan and couldn't be happier. The AI trading algorithms are impressive, and the customer support is outstanding. Highly recommended!",
//       rating: 5,
//       profit: "$125,000",
//     },
//     {
//       name: "Emma Rodriguez",
//       role: "Financial Advisor",
//       image: "/placeholder.svg?height=60&width=60",
//       content:
//         "As a financial advisor, I'm always skeptical of investment platforms. CryptoVault proved me wrong with their transparency and consistent performance. My clients love it!",
//       rating: 5,
//       profit: "$89,200",
//     },
//   ]

//   const stats = [
//     { label: "Total Invested", value: "$127M+", icon: <DollarSign className="h-6 w-6" /> },
//     { label: "Active Investors", value: "45,000+", icon: <Users className="h-6 w-6" /> },
//     { label: "Countries Served", value: "120+", icon: <Globe className="h-6 w-6" /> },
//     { label: "Success Rate", value: "99.7%", icon: <Award className="h-6 w-6" /> },
//   ]

//   const faqData = [
//     {
//       question: "How does CryptoVault generate such high returns?",
//       answer:
//         "Our advanced AI algorithms analyze thousands of market indicators, news sentiment, and trading patterns across multiple cryptocurrency exchanges. This allows us to execute profitable trades 24/7 while minimizing risk through diversification and automated stop-loss mechanisms.",
//     },
//     {
//       question: "Is my investment safe and secure?",
//       answer:
//         "Absolutely. We use bank-level security measures including 256-bit SSL encryption, cold storage wallets for 95% of funds, multi-signature authentication, and regular security audits by third-party firms. Your funds are also insured against cyber attacks.",
//     },
//     {
//       question: "How quickly can I withdraw my profits?",
//       answer:
//         "Withdrawals are processed within 24 hours for amounts up to $10,000. Larger withdrawals may take 2-3 business days for additional security verification. There are no withdrawal fees for profits earned through our platform.",
//     },
//     {
//       question: "What is the minimum investment amount?",
//       answer:
//         "The minimum investment starts at just $100 for our Starter Plan. This makes our platform accessible to investors of all levels, from beginners to institutional investors.",
//     },
//     {
//       question: "Can I reinvest my profits automatically?",
//       answer:
//         "Yes! Our platform offers automatic reinvestment options where your daily profits can be automatically added to your principal investment, allowing for compound growth over time.",
//     },
//     {
//       question: "Do you provide customer support?",
//       answer:
//         "We offer 24/7 customer support through multiple channels including live chat, email, WhatsApp, and phone support. Professional and Enterprise plan members get priority support with dedicated account managers.",
//     },
//   ]

//   const AuthModal = ({ type, onClose }) => {
//     if (!type) return null

//     return (
//       <Dialog open={!!type} onOpenChange={onClose}>
//         <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-900 to-purple-900/50 border-purple-500/30 backdrop-blur-sm">
//           <DialogHeader>
//             <DialogTitle className="text-white text-center text-2xl flex items-center justify-center gap-2">
//               <Wallet className="h-6 w-6 text-purple-400" />
//               Welcome to CryptoVault
//             </DialogTitle>
//           </DialogHeader>

//           <Tabs defaultValue={type} className="w-full">
//             <TabsList className="grid w-full grid-cols-2 bg-gray-800/50">
//               <TabsTrigger value="login" className="data-[state=active]:bg-purple-600 text-white">
//                 Login
//               </TabsTrigger>
//               <TabsTrigger value="signup" className="data-[state=active]:bg-purple-600 text-white">
//                 Sign Up
//               </TabsTrigger>
//             </TabsList>

//             <TabsContent value="login" className="space-y-4 mt-6">
//               <div className="space-y-2">
//                 <Label htmlFor="email" className="text-gray-300">
//                   Email
//                 </Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="password" className="text-gray-300">
//                   Password
//                 </Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="Enter your password"
//                   className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
//                 />
//               </div>
//               <Button onClick={()=>navigate("/dashboard")} className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white">
//                 Login to Dashboard
//               </Button>
//               <p className="text-center text-sm text-gray-400">
//                 Don't have an account?{" "}
//                 <button className="text-purple-400 hover:text-purple-300" onClick={() => setAuthModal("signup")}>
//                   Sign up here
//                 </button>
//               </p>
//             </TabsContent>

//             <TabsContent value="signup" className="space-y-4 mt-6">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="firstName" className="text-gray-300">
//                     First Name
//                   </Label>
//                   <Input
//                     id="firstName"
//                     placeholder="John"
//                     className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="lastName" className="text-gray-300">
//                     Last Name
//                   </Label>
//                   <Input
//                     id="lastName"
//                     placeholder="Doe"
//                     className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="signupEmail" className="text-gray-300">
//                   Email
//                 </Label>
//                 <Input
//                   id="signupEmail"
//                   type="email"
//                   placeholder="Enter your email"
//                   className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="signupPassword" className="text-gray-300">
//                   Password
//                 </Label>
//                 <Input
//                   id="signupPassword"
//                   type="password"
//                   placeholder="Create a strong password"
//                   className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="confirmPassword" className="text-gray-300">
//                   Confirm Password
//                 </Label>
//                 <Input
//                   id="confirmPassword"
//                   type="password"
//                   placeholder="Confirm your password"
//                   className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
//                 />
//               </div>
//               <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white">
//                 Create Account & Start Investing
//               </Button>
//               <p className="text-center text-sm text-gray-400">
//                 Already have an account?{" "}
//                 <button className="text-purple-400 hover:text-purple-300" onClick={() => setAuthModal("login")}>
//                   Login here
//                 </button>
//               </p>
//             </TabsContent>
//           </Tabs>
//         </DialogContent>
//       </Dialog>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full z-50 border-b border-purple-500/20 backdrop-blur-md bg-black/20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center ">
//             <img src={BigLogo} alt=""  width={"100px"}  />
//             </div>

//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">
//                 About
//               </a>
//               <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">
//                 Features
//               </a>
//               <a href="#plans" className="text-gray-300 hover:text-purple-400 transition-colors">
//                 Plans
//               </a>
//               <a href="#testimonials" className="text-gray-300 hover:text-purple-400 transition-colors">
//                 Reviews
//               </a>
//               <a href="#faq" className="text-gray-300 hover:text-purple-400 transition-colors">
//                 FAQ
//               </a>
//               <Button
//                 variant="ghost"
//                 className="text-purple-400 hover:text-white hover:bg-purple-500/20"
//                 onClick={() => setAuthModal("login")}
//               >
//                 Login
//               </Button>
//               <Button
//                 className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
//                 onClick={() => setAuthModal("signup")}
//               >
//                 Get Started
//               </Button>
//             </div>

//             <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <div className="md:hidden pb-4 border-t border-purple-500/20 mt-4">
//               <div className="flex flex-col space-y-4 pt-4">
//                 <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">
//                   About
//                 </a>
//                 <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">
//                   Features
//                 </a>
//                 <a href="#plans" className="text-gray-300 hover:text-purple-400 transition-colors">
//                   Plans
//                 </a>
//                 <a href="#testimonials" className="text-gray-300 hover:text-purple-400 transition-colors">
//                   Reviews
//                 </a>
//                 <a href="#faq" className="text-gray-300 hover:text-purple-400 transition-colors">
//                   FAQ
//                 </a>
//                 <div className="flex flex-col space-y-2 pt-4">
//                   <Button
//                     variant="ghost"
//                     className="text-purple-400 hover:text-white hover:bg-purple-500/20 justify-start"
//                     onClick={() => setAuthModal("login")}
//                   >
//                     Login
//                   </Button>
//                   <Button
//                     className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white justify-start"
//                     onClick={() => setAuthModal("signup")}
//                   >
//                     Get Started
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-32">
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="space-y-6">
//                 <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-sm px-4 py-2">
//                   🚀 #1 AI-Powered Crypto Investment Platform
//                 </Badge>
//                 <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
//                   <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                     Earn Up To
//                   </span>
//                   <br />
//                   <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
//                     5% Daily
//                   </span>
//                   <br />
//                   <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Returns</span>
//                 </h1>
//                 <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
//                   Join over 45,000 investors who trust our advanced AI algorithms to generate consistent daily profits
//                   from cryptocurrency trading. Start with as little as $100 and watch your investment grow
//                   automatically.
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button
//                   size="lg"
//                   className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg"
//                   onClick={() => setAuthModal("signup")}
//                 >
//                   Start Investing Now
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Button>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg"
//                 >
//                   <Play className="mr-2 h-5 w-5" />
//                   Watch Demo
//                 </Button>
//               </div>

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="text-center">
//                     <div className="flex justify-center mb-2 text-purple-400">{stat.icon}</div>
//                     <div className="text-2xl font-bold text-white">{stat.value}</div>
//                     <div className="text-sm text-gray-400">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-3xl opacity-20"></div>
//               <Card className="relative bg-black/40 border-purple-500/30 backdrop-blur-sm">
//                 <CardHeader>
//                   <CardTitle className="text-white flex items-center gap-2">
//                     <BarChart3 className="h-6 w-6 text-purple-400" />
//                     Live Trading Dashboard
//                   </CardTitle>
//                   <CardDescription className="text-gray-300">
//                     Real-time performance of our AI trading algorithms
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-6">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-lg border border-green-500/30">
//                       <div className="text-green-400 text-sm font-medium">Today's Profit</div>
//                       <div className="text-2xl font-bold text-white">+$2,847</div>
//                       <div className="text-green-400 text-sm">+12.4% ↗</div>
//                     </div>
//                     <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 rounded-lg border border-blue-500/30">
//                       <div className="text-blue-400 text-sm font-medium">Active Trades</div>
//                       <div className="text-2xl font-bold text-white">47</div>
//                       <div className="text-blue-400 text-sm">Running</div>
//                     </div>
//                   </div>

//                   <div className="space-y-3">
//                     <h4 className="text-white font-medium">Top Performing Assets</h4>
//                     <div className="space-y-2">
//                       <div className="flex justify-between items-center text-sm">
//                         <span className="text-gray-400">BTC/USD</span>
//                         <span className="text-green-400 font-medium">+2.3%</span>
//                       </div>
//                       <div className="flex justify-between items-center text-sm">
//                         <span className="text-gray-400">ETH/USD</span>
//                         <span className="text-green-400 font-medium">+1.8%</span>
//                       </div>
//                       <div className="flex justify-between items-center text-sm">
//                         <span className="text-gray-400">ADA/USD</span>
//                         <span className="text-red-400 font-medium">-0.5%</span>
//                       </div>
//                       <div className="flex justify-between items-center text-sm">
//                         <span className="text-gray-400">SOL/USD</span>
//                         <span className="text-green-400 font-medium">+3.1%</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
//                     <div className="text-purple-400 text-sm font-medium">Portfolio Growth</div>
//                     <div className="text-lg font-bold text-white">+127.5% This Month</div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 bg-black/20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-4 mb-16">
//             <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">About CryptoVault</Badge>
//             <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//               The Future of Crypto Investment
//             </h2>
//             <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
//               CryptoVault is a revolutionary cryptocurrency investment platform that combines cutting-edge artificial
//               intelligence with institutional-grade security to deliver consistent, profitable returns for investors
//               worldwide. Our advanced algorithms analyze market data 24/7, executing thousands of micro-trades to
//               capitalize on market inefficiencies.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//             <div className="space-y-6">
//               <h3 className="text-2xl font-bold text-white">Why Choose CryptoVault?</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-purple-500/20 p-2 rounded-lg">
//                     <Target className="h-6 w-6 text-purple-400" />
//                   </div>
//                   <div>
//                     <h4 className="text-white font-semibold">Proven Track Record</h4>
//                     <p className="text-gray-300">Over 3 years of consistent profitability with a 99.7% success rate</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-purple-500/20 p-2 rounded-lg">
//                     <Briefcase className="h-6 w-6 text-purple-400" />
//                   </div>
//                   <div>
//                     <h4 className="text-white font-semibold">Professional Management</h4>
//                     <p className="text-gray-300">Managed by experienced traders and quantitative analysts</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-purple-500/20 p-2 rounded-lg">
//                     <Shield className="h-6 w-6 text-purple-400" />
//                   </div>
//                   <div>
//                     <h4 className="text-white font-semibold">Regulatory Compliance</h4>
//                     <p className="text-gray-300">Fully licensed and regulated in multiple jurisdictions</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm">
//               <h3 className="text-xl font-bold text-white mb-6">Company Highlights</h3>
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-purple-400">2021</div>
//                   <div className="text-gray-300 text-sm">Founded</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-cyan-400">$127M+</div>
//                   <div className="text-gray-300 text-sm">Assets Under Management</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-green-400">45K+</div>
//                   <div className="text-gray-300 text-sm">Active Investors</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-yellow-400">120+</div>
//                   <div className="text-gray-300 text-sm">Countries</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-4 mb-16">
//             <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Platform Features</Badge>
//             <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//               Advanced Technology Meets Simplicity
//             </h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Our platform combines sophisticated trading algorithms with an intuitive user experience, making
//               professional-grade crypto investment accessible to everyone.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <Card
//                 key={index}
//                 className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 group"
//               >
//                 <CardHeader>
//                   <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
//                     {feature.icon}
//                   </div>
//                   <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-300 leading-relaxed">{feature.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Investment Plans */}
//       <section id="plans" className="py-20 bg-black/20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-4 mb-16">
//             <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Investment Plans</Badge>
//             <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//               Choose Your Investment Strategy
//             </h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Select from our carefully designed investment plans, each optimized for different risk tolerances and
//               investment goals. All plans include our signature AI-powered trading algorithms and comprehensive support.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {investmentPlans.map((plan, index) => (
//               <Card
//                 key={index}
//                 className={`relative bg-gradient-to-br from-slate-900/50 to-purple-900/20 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 ${plan.popular ? "ring-2 ring-purple-500 scale-105" : ""}`}
//               >
//                 {plan.popular && (
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                     <Badge className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2">
//                       <Star className="h-4 w-4 mr-1" />
//                       Most Popular
//                     </Badge>
//                   </div>
//                 )}

//                 <CardHeader className="text-center pb-4">
//                   <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
//                   <CardDescription className="text-gray-300">
//                     Perfect for{" "}
//                     {plan.name.toLowerCase().includes("starter")
//                       ? "beginners and small investors"
//                       : plan.name.toLowerCase().includes("professional")
//                         ? "experienced traders and medium investors"
//                         : "high-net-worth individuals and institutions"}
//                   </CardDescription>
//                 </CardHeader>

//                 <CardContent className="space-y-6">
//                   <div className="text-center">
//                     <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
//                       {plan.dailyReturn}
//                     </div>
//                     <div className="text-gray-400 text-lg">Daily Return</div>
//                     <div className="text-2xl font-semibold text-green-400 mt-2">{plan.totalReturn} Total</div>
//                   </div>

//                   <div className="bg-gray-800/30 rounded-lg p-4 space-y-3">
//                     <div className="flex justify-between">
//                       <span className="text-gray-400">Min Investment:</span>
//                       <span className="text-white font-semibold">{plan.minInvestment}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-400">Max Investment:</span>
//                       <span className="text-white font-semibold">{plan.maxInvestment}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-400">Duration:</span>
//                       <span className="text-white font-semibold">{plan.duration}</span>
//                     </div>
//                   </div>

//                   <div className="space-y-3">
//                     <h4 className="text-white font-semibold">Plan Features:</h4>
//                     {plan.features.map((feature, featureIndex) => (
//                       <div key={featureIndex} className="flex items-center text-sm text-gray-300">
//                         <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
//                         {feature}
//                       </div>
//                     ))}
//                   </div>

//                   <Button
//                     className={`w-full ${plan.popular ? "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700" : "bg-gray-700 hover:bg-gray-600"} text-white`}
//                     onClick={() => setAuthModal("signup")}
//                   >
//                     Choose {plan.name}
//                     <ChevronRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section id="testimonials" className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-4 mb-16">
//             <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Success Stories</Badge>
//             <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//               What Our Investors Say
//             </h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Join thousands of satisfied investors who have transformed their financial future with CryptoVault.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <Card
//                 key={index}
//                 className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border-purple-500/30 backdrop-blur-sm"
//               >
//                 <CardHeader>
//                   <div className="flex items-center space-x-4">
//                     <img
//                       src={testimonial.image || "/placeholder.svg"}
//                       alt={testimonial.name}
//                       className="w-12 h-12 rounded-full border-2 border-purple-400"
//                     />
//                     <div>
//                       <h4 className="text-white font-semibold">{testimonial.name}</h4>
//                       <p className="text-gray-400 text-sm">{testimonial.role}</p>
//                     </div>
//                   </div>
//                   <div className="flex space-x-1">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
//                     ))}
//                   </div>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <p className="text-gray-300 italic">"{testimonial.content}"</p>
//                   <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
//                     <div className="text-green-400 text-sm font-medium">Total Profit Earned</div>
//                     <div className="text-2xl font-bold text-green-400">{testimonial.profit}</div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section id="faq" className="py-20 bg-black/20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-4 mb-16">
//             <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Frequently Asked Questions</Badge>
//             <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//               Got Questions? We Have Answers
//             </h2>
//             <p className="text-xl text-gray-300">Everything you need to know about investing with CryptoVault.</p>
//           </div>

//           <Accordion type="single" collapsible className="space-y-4">
//             {faqData.map((faq, index) => (
//               <AccordionItem
//                 key={index}
//                 value={`item-${index}`}
//                 className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/30 rounded-lg px-6 backdrop-blur-sm"
//               >
//                 <AccordionTrigger className="text-white hover:text-purple-400 text-left">
//                   {faq.question}
//                 </AccordionTrigger>
//                 <AccordionContent className="text-gray-300 leading-relaxed">{faq.answer}</AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-3xl p-12 backdrop-blur-sm">
//             <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
//               Ready to Start Earning?
//             </h2>
//             <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//               Join over 45,000 investors who are already earning consistent daily returns with our AI-powered platform.
//               Start your journey to financial freedom today.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg"
//                 onClick={() => setAuthModal("signup")}
//               >
//                 Start Investing Now
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg"
//                 onClick={() => setAuthModal("login")}
//               >
//                 Login to Account
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-purple-500/20 bg-black/40 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-5 gap-8">
//             <div className="md:col-span-2 space-y-4">
//               <div className="flex items-center space-x-2">
//                 <Bitcoin className="h-8 w-8 text-purple-400" />
//                 <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
//                   CryptoVault
//                 </span>
//               </div>
//               <p className="text-gray-400 text-sm leading-relaxed max-w-md">
//                 The most trusted AI-powered cryptocurrency investment platform. Join thousands of investors earning
//                 consistent daily returns through our advanced trading algorithms.
//               </p>
//               <div className="flex space-x-4">
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="border-purple-500/30 text-purple-400 hover:bg-purple-500/20"
//                 >
//                   <MessageCircle className="h-4 w-4 mr-2" />
//                   WhatsApp Support
//                 </Button>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-white font-semibold mb-4">Company</h3>
//               <div className="space-y-3 text-sm">
//                 <a href="#about" className="text-gray-400 hover:text-purple-400 block transition-colors">
//                   About Us
//                 </a>
//                 <a href="#features" className="text-gray-400 hover:text-purple-400 block transition-colors">
//                   How It Works
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-purple-400 block transition-colors">
//                   Security
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-purple-400 block transition-colors">
//                   Careers
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-white font-semibold mb-4">Support</h3>
//               <div className="space-y-3 text-sm">
//                 <a href="#faq" className="text-gray-400 hover:text-purple-400 block transition-colors">
//                   FAQ
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-purple-400 block transition-colors">
//                   Help Center
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-purple-400 block transition-colors">
//                   Contact Us
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-purple-400 block transition-colors">
//                   Live Chat
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-white font-semibold mb-4">Contact</h3>
//               <div className="space-y-3 text-sm">
//                 <div className="flex items-center text-gray-400">
//                   <Mail className="h-4 w-4 mr-2 text-purple-400" />
//                   support@cryptovault.com
//                 </div>
//                 <div className="flex items-center text-gray-400">
//                   <Phone className="h-4 w-4 mr-2 text-purple-400" />
//                   +1 (555) 123-4567
//                 </div>
//                 <div className="flex items-center text-gray-400">
//                   <MapPin className="h-4 w-4 mr-2 text-purple-400" />
//                   New York, NY 10001
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-purple-500/20 mt-12 pt-8">
//             <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//               <p className="text-gray-400 text-center text-sm">
//                 © 2024 CryptoVault. All rights reserved. | Licensed and regulated financial services.
//               </p>
//               <div className="flex space-x-6 text-sm">
//                 <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
//                   Terms of Service
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
//                   Privacy Policy
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
//                   Risk Disclosure
//                 </a>
//               </div>
//             </div>
           
//           </div>
//         </div>
//       </footer>

//       {/* Auth Modal */}
//       <AuthModal type={authModal} onClose={() => setAuthModal(null)} />
//     </div>
//   )
// }





















"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import BigLogo from "../assets/biglogo.png"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const API_BASE_URL = "https://lunovest-api.onrender.com"

export default function Home() {
  const [authModal, setAuthModal] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  // Login form state
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  // Signup form state
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  })

  const navigate = useNavigate()

  // Handle login form input changes
  const handleLoginChange = (e) => {
    const { name, value } = e.target
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle signup form input changes
  const handleSignupChange = (e) => {
    const { name, value } = e.target
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Login function
  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    // Basic validation
    if (!loginData.email || !loginData.password) {
      setError("Please fill in all fields")
      setLoading(false)
      return
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        // Save user data to localStorage
        localStorage.setItem("user", JSON.stringify(data.data))
        localStorage.setItem("isLoggedIn", "true")

        setSuccess("Login successful! Redirecting to dashboard...")

        // Clear form
        setLoginData({ email: "", password: "" })

        // Close modal and navigate after a short delay
        setTimeout(() => {
          setAuthModal(null)
          navigate("/dashboard")
        }, 1500)
      } else {
        setError(data.message || "Login failed. Please check your credentials.")
      }
    } catch (err) {
      console.error("Login error:", err)
      setError("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  // Signup function
  const handleSignup = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    // Basic validation
    const { firstName, lastName, email, phoneNumber, password, confirmPassword } = signupData

    if (!firstName || !lastName || !email || !phoneNumber || !password || !confirmPassword) {
      setError("Please fill in all fields")
      setLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long")
      setLoading(false)
      return
    }

    // Format phone number
    let formattedPhone = phoneNumber.replace(/\D/g, "")
    if (!formattedPhone.startsWith("1") && formattedPhone.length === 10) {
      formattedPhone = "+1" + formattedPhone
    } else if (!formattedPhone.startsWith("+")) {
      formattedPhone = "+" + formattedPhone
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber: formattedPhone,
          password,
          confirmPassword,
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSuccess("Account created successfully! Please login to continue.")

        // Clear signup form
        setSignupData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        })

        // Switch to login tab after a short delay
        setTimeout(() => {
          setAuthModal("login")
          setError("")
          setSuccess("")
        }, 2000)
      } else {
        if (data.errors && Array.isArray(data.errors)) {
          setError(data.errors.join(", "))
        } else {
          setError(data.message || "Signup failed. Please try again.")
        }
      }
    } catch (err) {
      console.error("Signup error:", err)
      setError("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  // Clear error and success messages when switching tabs
  const handleTabChange = (value) => {
    setError("")
    setSuccess("")
    setAuthModal(value)
  }

  const investmentPlans = [
    {
      name: "Starter Plan",
      minInvestment: "$100",
      maxInvestment: "$999",
      dailyReturn: "2.5%",
      duration: "30 days",
      totalReturn: "75%",
      popular: false,
      features: [
        "Minimum investment: $100",
        "Daily profit: 2.5%",
        "Total return: 75%",
        "Basic support",
        "Mobile app access",
        "Real-time notifications",
      ],
    },
    {
      name: "Professional Plan",
      minInvestment: "$1,000",
      maxInvestment: "$9,999",
      dailyReturn: "3.5%",
      duration: "45 days",
      totalReturn: "157.5%",
      popular: true,
      features: [
        "Minimum investment: $1,000",
        "Daily profit: 3.5%",
        "Total return: 157.5%",
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
      dailyReturn: "5%",
      duration: "60 days",
      totalReturn: "300%",
      popular: false,
      features: [
        "Minimum investment: $10,000",
        "Daily profit: 5%",
        "Total return: 300%",
        "VIP support 24/7",
        "Advanced analytics",
        "API access",
        "Dedicated account manager",
        "Custom trading strategies",
        "Institutional-grade security",
      ],
    },
  ]

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
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Professional Trader",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "CryptoVault has transformed my investment strategy. I've been earning consistent 3.5% daily returns for 6 months now. The platform is incredibly reliable and secure.",
      rating: 5,
      profit: "$47,500",
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "Started with the Enterprise plan and couldn't be happier. The AI trading algorithms are impressive, and the customer support is outstanding. Highly recommended!",
      rating: 5,
      profit: "$125,000",
    },
    {
      name: "Emma Rodriguez",
      role: "Financial Advisor",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "As a financial advisor, I'm always skeptical of investment platforms. CryptoVault proved me wrong with their transparency and consistent performance. My clients love it!",
      rating: 5,
      profit: "$89,200",
    },
  ]

  const stats = [
    { label: "Total Invested", value: "$127M+", icon: <DollarSign className="h-6 w-6" /> },
    { label: "Active Investors", value: "45,000+", icon: <Users className="h-6 w-6" /> },
    { label: "Countries Served", value: "120+", icon: <Globe className="h-6 w-6" /> },
    { label: "Success Rate", value: "99.7%", icon: <Award className="h-6 w-6" /> },
  ]

  const faqData = [
    {
      question: "How does CryptoVault generate such high returns?",
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
  ]

  const AuthModal = ({ type, onClose }) => {
    if (!type) return null

    return (
      <Dialog open={!!type} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-900 to-purple-900/50 border-purple-500/30 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-white text-center text-2xl flex items-center justify-center gap-2">
              <Wallet className="h-6 w-6 text-purple-400" />
              Welcome to CryptoVault
            </DialogTitle>
          </DialogHeader>

          <Tabs value={type} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-800/50">
              <TabsTrigger value="login" className="data-[state=active]:bg-purple-600 text-white">
                Login
              </TabsTrigger>
              <TabsTrigger value="signup" className="data-[state=active]:bg-purple-600 text-white">
                Sign Up
              </TabsTrigger>
            </TabsList>

            {/* Error/Success Messages */}
            {error && (
              <Alert className="bg-red-900/20 border-red-500/30 text-red-300">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="bg-green-900/20 border-green-500/30 text-green-300">
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}

            <TabsContent value="login" className="space-y-4 mt-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="loginEmail" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="loginEmail"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loginPassword" className="text-gray-300">
                    Password
                  </Label>
                  <Input
                    id="loginPassword"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    required
                    disabled={loading}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    "Login to Dashboard"
                  )}
                </Button>
              </form>
              <p className="text-center text-sm text-gray-400">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-purple-400 hover:text-purple-300"
                  onClick={() => handleTabChange("signup")}
                  disabled={loading}
                >
                  Sign up here
                </button>
              </p>
            </TabsContent>

            <TabsContent value="signup" className="space-y-4 mt-6">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-300">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      value={signupData.firstName}
                      onChange={handleSignupChange}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-300">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      value={signupData.lastName}
                      onChange={handleSignupChange}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signupEmail" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="signupEmail"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={signupData.email}
                    onChange={handleSignupChange}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-gray-300">
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder="+1234567890"
                    value={signupData.phoneNumber}
                    onChange={handleSignupChange}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signupPassword" className="text-gray-300">
                    Password
                  </Label>
                  <Input
                    id="signupPassword"
                    name="password"
                    type="password"
                    placeholder="Create a strong password"
                    value={signupData.password}
                    onChange={handleSignupChange}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-gray-300">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={signupData.confirmPassword}
                    onChange={handleSignupChange}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    required
                    disabled={loading}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    "Create Account & Start Investing"
                  )}
                </Button>
              </form>
              <p className="text-center text-sm text-gray-400">
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-purple-400 hover:text-purple-300"
                  onClick={() => handleTabChange("login")}
                  disabled={loading}
                >
                  Login here
                </button>
              </p>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    )
  }

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
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">
                About
              </a>
              <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">
                Features
              </a>
              <a href="#plans" className="text-gray-300 hover:text-purple-400 transition-colors">
                Plans
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-purple-400 transition-colors">
                Reviews
              </a>
              <a href="#faq" className="text-gray-300 hover:text-purple-400 transition-colors">
                FAQ
              </a>
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
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-purple-500/20 mt-4">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">
                  About
                </a>
                <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Features
                </a>
                <a href="#plans" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Plans
                </a>
                <a href="#testimonials" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Reviews
                </a>
                <a href="#faq" className="text-gray-300 hover:text-purple-400 transition-colors">
                  FAQ
                </a>
                <div className="flex flex-col space-y-2 pt-4">
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
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Returns</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Join over 45,000 investors who trust our advanced AI algorithms to generate consistent daily profits
                  from cryptocurrency trading. Start with as little as $100 and watch your investment grow
                  automatically.
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
                    <div className="flex justify-center mb-2 text-purple-400">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
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
                      <div className="text-green-400 text-sm font-medium">Today's Profit</div>
                      <div className="text-2xl font-bold text-white">+$2,847</div>
                      <div className="text-green-400 text-sm">+12.4% ↗</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 rounded-lg border border-blue-500/30">
                      <div className="text-blue-400 text-sm font-medium">Active Trades</div>
                      <div className="text-2xl font-bold text-white">47</div>
                      <div className="text-blue-400 text-sm">Running</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-white font-medium">Top Performing Assets</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">BTC/USD</span>
                        <span className="text-green-400 font-medium">+2.3%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">ETH/USD</span>
                        <span className="text-green-400 font-medium">+1.8%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">ADA/USD</span>
                        <span className="text-red-400 font-medium">-0.5%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">SOL/USD</span>
                        <span className="text-green-400 font-medium">+3.1%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                    <div className="text-purple-400 text-sm font-medium">Portfolio Growth</div>
                    <div className="text-lg font-bold text-white">+127.5% This Month</div>
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
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">About CryptoVault</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              The Future of Crypto Investment
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              CryptoVault is a revolutionary cryptocurrency investment platform that combines cutting-edge artificial
              intelligence with institutional-grade security to deliver consistent, profitable returns for investors
              worldwide. Our advanced algorithms analyze market data 24/7, executing thousands of micro-trades to
              capitalize on market inefficiencies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Why Choose CryptoVault?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Target className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Proven Track Record</h4>
                    <p className="text-gray-300">Over 3 years of consistent profitability with a 99.7% success rate</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Briefcase className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Professional Management</h4>
                    <p className="text-gray-300">Managed by experienced traders and quantitative analysts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Regulatory Compliance</h4>
                    <p className="text-gray-300">Fully licensed and regulated in multiple jurisdictions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">Company Highlights</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">2021</div>
                  <div className="text-gray-300 text-sm">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">$127M+</div>
                  <div className="text-gray-300 text-sm">Assets Under Management</div>
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
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Platform Features</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Advanced Technology Meets Simplicity
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines sophisticated trading algorithms with an intuitive user experience, making
              professional-grade crypto investment accessible to everyone.
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
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
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
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Investment Plans</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Choose Your Investment Strategy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select from our carefully designed investment plans, each optimized for different risk tolerances and
              investment goals. All plans include our signature AI-powered trading algorithms and comprehensive support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-gradient-to-br from-slate-900/50 to-purple-900/20 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 ${plan.popular ? "ring-2 ring-purple-500 scale-105" : ""}`}
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
                  <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
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
                    <div className="text-2xl font-semibold text-green-400 mt-2">{plan.totalReturn} Total</div>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Min Investment:</span>
                      <span className="text-white font-semibold">{plan.minInvestment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Max Investment:</span>
                      <span className="text-white font-semibold">{plan.maxInvestment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white font-semibold">{plan.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Plan Features:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${plan.popular ? "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700" : "bg-gray-700 hover:bg-gray-600"} text-white`}
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
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Success Stories</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Our Investors Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied investors who have transformed their financial future with CryptoVault.
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
                      className="w-12 h-12 rounded-full border-2 border-purple-400"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                    <div className="text-green-400 text-sm font-medium">Total Profit Earned</div>
                    <div className="text-2xl font-bold text-green-400">{testimonial.profit}</div>
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
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Frequently Asked Questions</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Got Questions? We Have Answers
            </h2>
            <p className="text-xl text-gray-300">Everything you need to know about investing with CryptoVault.</p>
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
                <AccordionContent className="text-gray-300 leading-relaxed">{faq.answer}</AccordionContent>
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
              Join over 45,000 investors who are already earning consistent daily returns with our AI-powered platform.
              Start your journey to financial freedom today.
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
                  CryptoVault
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                The most trusted AI-powered cryptocurrency investment platform. Join thousands of investors earning
                consistent daily returns through our advanced trading algorithms.
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
                <a href="#about" className="text-gray-400 hover:text-purple-400 block transition-colors">
                  About Us
                </a>
                <a href="#features" className="text-gray-400 hover:text-purple-400 block transition-colors">
                  How It Works
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 block transition-colors">
                  Security
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 block transition-colors">
                  Careers
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <div className="space-y-3 text-sm">
                <a href="#faq" className="text-gray-400 hover:text-purple-400 block transition-colors">
                  FAQ
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 block transition-colors">
                  Help Center
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 block transition-colors">
                  Contact Us
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 block transition-colors">
                  Live Chat
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-gray-400">
                  <Mail className="h-4 w-4 mr-2 text-purple-400" />
                  support@cryptovault.com
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
                © 2024 CryptoVault. All rights reserved. | Licensed and regulated financial services.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
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
  )
}
