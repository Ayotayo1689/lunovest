import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import BigLogo from "../assets/biglogo.png";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  TrendingUp,
  DollarSign,
  Wallet,
  Calendar,
  BarChart3,
  PieChart,
  ArrowUpRight,
  ArrowDownLeft,
  Bell,
  Settings,
  User,
  LogOut,
  Plus,
  Minus,
  Eye,
  EyeOff,
  RefreshCw,
  Target,
  Award,
  Clock,
  Activity,
  Menu,
  X,
  Copy,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { useToast } from "@/hooks/useToast";
import { useNavigate } from "react-router-dom";
import formatTimeAgo from "../utils/formatTimeAgo";
import { useApiGet, useApiPost } from "@/hooks/useApi";
import { formatDate, formatTime } from "@/utils/formatDate";

export default function UserDashboard() {
  const { post, isLoading } = useApiPost();
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [depositModal, setDepositModal] = useState(false);
  const [withdrawModal, setWithdrawModal] = useState(false);
  const [createPlanModal, setCreatePlanModal] = useState(false);
  const [depositStep, setDepositStep] = useState("generating");
  const [createPlanStep, setCreatePlanStep] = useState("form");
  const [withdrawStep, setWithdrawStep] = useState("planSelection"); // planSelection, processing, completed
  const [addressCopied, setAddressCopied] = useState(false);

  // Create Plan Form State
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedCrypto, setSelectedCrypto] = useState("");
  const [amount, setAmount] = useState("");
  const [cryptoAmount, setCryptoAmount] = useState("");
  const [cryptoList, setCryptoList] = useState([]);
  const [cryptoPrices, setCryptoPrices] = useState({});
  const [loadingCrypto, setLoadingCrypto] = useState(false);

  // Deposit Form State
  const [selectedDepositPlan, setSelectedDepositPlan] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [depositCryptoAmount, setDepositCryptoAmount] = useState("");
  const [depositSelectedCrypto, setDepositSelectedCrypto] = useState("");

  // Withdraw Form State
  const [selectedWithdrawPlan, setSelectedWithdrawPlan] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawWalletAddress, setWithdrawWalletAddress] = useState("");

  const { toast } = useToast();
  const navigate = useNavigate();

  const userData1 = localStorage.getItem("userData");
  const parsedUserData = JSON.parse(userData1);

  useEffect(() => {
    if (userData1 === null) {
      navigate("/");
    }
  }, [userData1]);

  const handleConnectWallet = () => {
    setWithdrawModal(false);
    navigate("/connect_wallet");
  };
  const {
    data: userPlans,
    isLoading: isLoadingUserPlans,
    error: errorPlans,
    refetch: refetchPlans,
  } = useApiGet(`investment/plans/${parsedUserData?.userId}`);

  const {
    data: userInvestmentSummary,
    isLoading: isLoadingUserInvestmentSummary,
    error: errorInvestmentSummary,
    refetch: refetchInvestmentSummary,
  } = useApiGet(`investment/summary/${parsedUserData?.userId}`);

  const {
    data: userTransactionHistory,
    isLoading: isLoadingUserTransactionHistory,
    error: errorTransactionHistory,
    refetch: refetchTransactionHistory,
  } = useApiGet(
    `investment/transactions/${parsedUserData?.userId}?page=1&limit=50`
  );

  const {
    data: userTransactionHistoryGraph,
    isLoading: isLoadingUserTransactionHistoryGraph,
    error: errorTransactionHistoryGraph,
    refetch: refetchTransactionHistoryGraph,
  } = useApiGet(
    `investment/transactions/${parsedUserData?.userId}?page=1&limit=50000`
  );

  // Available investment plans
  const investmentPlans = [
    {
      planName: "Starter",
      planId: "starter",
      dailyPercentage: 5,
      withdrawalDay: 30,
      minimumAmount: 100,
    },
    {
      planName: "Premium",
      planId: "premium",
      dailyPercentage: 10,
      withdrawalDay: 60,
      minimumAmount: 500,
    },
    {
      planName: "Professional",
      planId: "professional",
      dailyPercentage: 15,
      withdrawalDay: 90,
      minimumAmount: 1000,
    },
    {
      planName: "Enterprise",
      planId: "enterprise",
      dailyPercentage: 20,
      withdrawalDay: 120,
      minimumAmount: 5000,
    },
  ];

  // Supported cryptocurrencies with their wallet addresses
  const supportedCryptos = {
    "usd-coin": {
      id: "usd-coin",
      name: "USD Coin",
      symbol: "USDC",
      walletAddress: "0x8E5Ea7e20B8D2165189DDc19aea0c65b3dAb8a48",
      network: "Ethereum",
    },
    ethereum: {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      walletAddress: "0x8E5Ea7e20B8D2165189DDc19aea0c65b3dAb8a48",
      network: "Ethereum",
    },
    "tether-tron": {
      id: "tether",
      name: "Tether (Tron)",
      symbol: "USDT",
      walletAddress: "TSMC4rE1njaAbdkSM5NSu62AXwE4ei5FkL",
      network: "Tron",
    },
    "tether-bnb": {
      id: "tether",
      name: "Tether (BNB Chain)",
      symbol: "USDT",
      walletAddress: "0x8E5Ea7e20B8D2165189DDc19aea0c65b3dAb8a48",
      network: "BNB Smart Chain",
    },
    binancecoin: {
      id: "binancecoin",
      name: "BNB",
      symbol: "BNB",
      walletAddress: "0x8E5Ea7e20B8D2165189DDc19aea0c65b3dAb8a48",
      network: "BNB Smart Chain",
    },
    ripple: {
      id: "ripple",
      name: "XRP",
      symbol: "XRP",
      walletAddress: "rhLh8TofQ1Vooyf9jek1EVBtqdeyr8u2Uy",
      network: "XRP Ledger",
    },
    bitcoin: {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      walletAddress: "bc1qply66nzysdcshe3dxnkr56wnpr8lzlyhlg60a3",
      network: "Bitcoin",
    },
    solana: {
      id: "solana",
      name: "Solana",
      symbol: "SOL",
      walletAddress: "UTRb1uYXJ8x7xaXPRJWBvgSy8o2QEdFVfnR7HweuXHy",
      network: "Solana",
    },
  };

  // Convert supported cryptos to array format for easier use
  const supportedCryptoList = Object.values(supportedCryptos);

  // Mock crypto data as fallback with only supported coins
  const mockCryptoData = {
    cryptoList: supportedCryptoList,
    prices: {
      "usd-coin": { usd: 1.0 },
      ethereum: { usd: 2650 },
      tether: { usd: 1.0 },
      binancecoin: { usd: 315 },
      ripple: { usd: 0.52 },
      bitcoin: { usd: 43250 },
      solana: { usd: 98 },
    },
  };

  // Check if withdraw button should be shown
  const shouldShowWithdrawButton = () => {
    const hasActivePlans = userPlans?.data && userPlans.data.length > 0;
    const hasBalance =
      userInvestmentSummary?.data?.totalInvestment +
        userInvestmentSummary?.data?.totalProfit >
      0;
    const hasProfit = userInvestmentSummary?.data?.totalProfit > 0;

    return hasActivePlans && hasBalance && hasProfit;
  };

  // Process transaction history for chart
  const processTransactionDataForChart = () => {
    if (!userTransactionHistoryGraph?.data?.transactions) return [];

    const transactions = [
      ...userTransactionHistoryGraph.data.transactions,
    ].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));

    let runningBalance = 0;
    const chartData = [];

    transactions.forEach((transaction, index) => {
      if (transaction.transactionType === "deposit") {
        runningBalance += transaction.amount;
      } else if (transaction.transactionType === "profit") {
        runningBalance += transaction.amount;
      } else if (transaction.transactionType === "withdrawal") {
        runningBalance -= transaction.amount;
      }

      chartData.push({
        date: formatDate(transaction.dateTime),
        balance: runningBalance,
        amount: transaction.amount,
        type: transaction.transactionType,
        description: transaction.description,
      });
    });

    return chartData;
  };

  const chartData = processTransactionDataForChart();

  // Custom tooltip for the chart
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-800 border border-slate-600 rounded-lg p-3 shadow-lg">
          <p className="text-white font-medium">{label}</p>
          <p className="text-green-400">
            Balance: {formatCurrency(data.balance)}
          </p>
          <p className="text-gray-300 text-sm">{data.description}</p>
          <p
            className={`text-sm ${
              data.type === "deposit"
                ? "text-green-400"
                : data.type === "profit"
                ? "text-blue-400"
                : "text-red-400"
            }`}
          >
            {data.type === "withdrawal" ? "-" : "+"}
            {formatCurrency(data.amount)}
          </p>
        </div>
      );
    }
    return null;
  };

  // Get wallet address for selected crypto
  const getWalletAddress = (cryptoKey) => {
    return supportedCryptos[cryptoKey]?.walletAddress || "";
  };

  // Get current wallet address based on selected crypto
  const getCurrentWalletAddress = () => {
    if (createPlanStep === "address" && selectedCrypto) {
      return getWalletAddress(selectedCrypto);
    }
    if (depositStep === "address" && depositSelectedCrypto) {
      return getWalletAddress(depositSelectedCrypto);
    }
    return "";
  };

  // Fetch crypto data from CoinGecko with caching and rate limiting
  useEffect(() => {
    const fetchCryptoData = async () => {
      const cachedData = localStorage.getItem("cryptoData");
      const cacheTimestamp = localStorage.getItem("cryptoDataTimestamp");
      const now = Date.now();
      const fiveMinutes = 5 * 60 * 1000;

      if (
        cachedData &&
        cacheTimestamp &&
        now - Number.parseInt(cacheTimestamp) < fiveMinutes
      ) {
        const parsed = JSON.parse(cachedData);
        setCryptoList(parsed.cryptoList);
        setCryptoPrices(parsed.prices);
        setLoadingCrypto(false);
        return;
      }

      setLoadingCrypto(true);

      try {
        const randomDelay = Math.random() * 2000;
        await new Promise((resolve) => setTimeout(resolve, randomDelay));

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000);

        const supportedIds =
          "usd-coin,ethereum,tether,binancecoin,ripple,bitcoin,solana";
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${supportedIds}&vs_currencies=usd`,
          {
            signal: controller.signal,
            mode: "cors",
            headers: {
              Accept: "application/json",
            },
          }
        );

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const cacheData = {
          cryptoList: supportedCryptoList,
          prices: data,
        };
        localStorage.setItem("cryptoData", JSON.stringify(cacheData));
        localStorage.setItem("cryptoDataTimestamp", now.toString());

        setCryptoList(supportedCryptoList);
        setCryptoPrices(data);
      } catch (error) {
        const cachedData = localStorage.getItem("cryptoData");
        if (cachedData) {
          const parsed = JSON.parse(cachedData);
          setCryptoList(parsed.cryptoList);
          setCryptoPrices(parsed.prices);

          toast({
            title: "Using Cached Data",
            description: "Cryptocurrency prices may be outdated",
            variant: "default",
          });
        } else {
          setCryptoList(mockCryptoData.cryptoList);
          setCryptoPrices(mockCryptoData.prices);

          toast({
            title: "Using Offline Data",
            description: "Cryptocurrency prices may not be current",
            variant: "default",
          });
        }
      } finally {
        setLoadingCrypto(false);
      }
    };

    fetchCryptoData();
  }, []);

  const refreshCryptoPrices = async () => {
    localStorage.removeItem("cryptoData");
    localStorage.removeItem("cryptoDataTimestamp");

    setLoadingCrypto(true);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const supportedIds =
        "usd-coin,ethereum,tether,binancecoin,ripple,bitcoin,solana";
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${supportedIds}&vs_currencies=usd`,
        {
          signal: controller.signal,
          mode: "cors",
          headers: {
            Accept: "application/json",
          },
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const cacheData = {
        cryptoList: supportedCryptoList,
        prices: data,
      };
      localStorage.setItem("cryptoData", JSON.stringify(cacheData));
      localStorage.setItem("cryptoDataTimestamp", Date.now().toString());

      setCryptoPrices(data);

      toast({
        title: "Prices Updated",
        description: "Cryptocurrency prices have been refreshed",
      });
    } catch (error) {
      toast({
        title: "Update Failed",
        description: "Could not refresh prices, using cached data",
        variant: "destructive",
      });
    } finally {
      setLoadingCrypto(false);
    }
  };

  // Convert USD to crypto amount
  const convertToCrypto = (usdAmount, cryptoId) => {
    if (!usdAmount || !cryptoId || !cryptoPrices[cryptoId]) return "";
    const price = cryptoPrices[cryptoId].usd;
    return (Number.parseFloat(usdAmount) / price).toFixed(8);
  };

  // Convert crypto to USD amount
  const convertToUSD = (cryptoAmount, cryptoId) => {
    if (!cryptoAmount || !cryptoId || !cryptoPrices[cryptoId]) return "";
    const price = cryptoPrices[cryptoId].usd;
    return (Number.parseFloat(cryptoAmount) * price).toFixed(2);
  };

  // Handle amount change for create plan
  const handleAmountChange = (value) => {
    setAmount(value);
    if (selectedCrypto) {
      setCryptoAmount(convertToCrypto(value, selectedCrypto));
    }
  };

  // Handle crypto amount change for create plan
  const handleCryptoAmountChange = (value) => {
    setCryptoAmount(value);
    if (selectedCrypto) {
      setAmount(convertToUSD(value, selectedCrypto));
    }
  };

  // Handle crypto selection for create plan
  const handleCryptoSelect = (cryptoKey) => {
    setSelectedCrypto(cryptoKey);
    const cryptoData = supportedCryptos[cryptoKey];
    if (amount && cryptoData) {
      setCryptoAmount(convertToCrypto(amount, cryptoData.id));
    }
  };

  // Handle amount change for deposit
  const handleDepositAmountChange = (value) => {
    setDepositAmount(value);
    if (depositSelectedCrypto) {
      const cryptoData = supportedCryptos[depositSelectedCrypto];
      if (cryptoData) {
        setDepositCryptoAmount(convertToCrypto(value, cryptoData.id));
      }
    }
  };

  // Handle crypto amount change for deposit
  const handleDepositCryptoAmountChange = (value) => {
    setDepositCryptoAmount(value);
    if (depositSelectedCrypto) {
      const cryptoData = supportedCryptos[depositSelectedCrypto];
      if (cryptoData) {
        setDepositAmount(convertToUSD(value, cryptoData.id));
      }
    }
  };

  // Handle crypto selection for deposit
  const handleDepositCryptoSelect = (cryptoKey) => {
    setDepositSelectedCrypto(cryptoKey);
    const cryptoData = supportedCryptos[cryptoKey];
    if (depositAmount && cryptoData) {
      setDepositCryptoAmount(convertToCrypto(depositAmount, cryptoData.id));
    }
  };

  // Mock user data
  const userData = {
    name: "John Anderson",
    email: "john.anderson@email.com",
    joinDate: "March 15, 2024",
    totalInvested: 15750.0,
    currentBalance: 23847.25,
    totalProfit: 8097.25,
    profitPercentage: 51.4,
    activePlans: 3,
    lastLogin: "2 hours ago",
    membershipLevel: "Professional",
  };

  // Handle create plan modal steps
  useEffect(() => {
    if (createPlanModal && createPlanStep === "generating") {
      const timer = setTimeout(() => {
        setCreatePlanStep("address");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [createPlanModal, createPlanStep]);

  // Handle deposit modal
  useEffect(() => {
    if (depositModal && depositStep === "generating") {
      const timer = setTimeout(() => {
        setDepositStep("address");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [depositModal, depositStep]);

  const handleDepositClick = () => {
    setDepositModal(true);
    setDepositStep("planSelection");
    setAddressCopied(false);
  };

  const handleCreatePlanClick = () => {
    setCreatePlanModal(true);
    setCreatePlanStep("form");
    setAddressCopied(false);
  };

  // Submit create plan
  const handleCreatePlanSubmit = async () => {
    if (!selectedPlan || !selectedCrypto || !amount || !cryptoAmount) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const planData = investmentPlans.find((p) => p.planId === selectedPlan);
    const cryptoData = supportedCryptos[selectedCrypto];

    if (Number.parseFloat(amount) < planData.minimumAmount) {
      toast({
        title: "Error",
        description: `Minimum amount for ${planData.planName} plan is $${planData.minimumAmount}`,
        variant: "destructive",
      });
      return;
    }

    const payload = {
      userId: parsedUserData.userId,
      investmentPlanName: planData.planName,
      investmentPlanId: planData.planId,
      dailyPercentage: planData.dailyPercentage,
      withdrawalDay: planData.withdrawalDay,
      amount: Number.parseFloat(amount),
      currency: "USD",
      amountInCrypto: Number.parseFloat(cryptoAmount),
      cryptoCoinName: cryptoData.symbol + " " + `(${cryptoData.network})`,
    };

    try {
      const response = await post("investment/create-plan", payload, true);

      if (response.success) {
        setCreatePlanStep("generating");
        toast({
          title: "Success",
          description: "Investment plan created successfully!",
        });
      } else {
        toast({
          title: "Something went wrong.",
          description: response?.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create investment plan",
        variant: "destructive",
      });
    }
  };

  // Submit deposit
  const handleDepositSubmit = async () => {
    if (
      !selectedDepositPlan ||
      !depositSelectedCrypto ||
      !depositAmount ||
      !depositCryptoAmount
    ) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const cryptoData = supportedCryptos[depositSelectedCrypto];

    const payload = {
      investmentPlanId: selectedDepositPlan,
      userId: parsedUserData.userId,
      amount: Number.parseFloat(depositAmount),
      amountInCrypto: Number.parseFloat(depositCryptoAmount),
      cryptoCoinName: cryptoData.symbol + " " + `(${cryptoData?.network})`,
    };

    try {
      const response = await post("/investment/deposit", payload, true);

      if (response.success) {
        setDepositStep("generating");
        toast({
          title: "Success",
          description: "Deposit initiated successfully!",
        });
      } else {
        toast({
          title: "Something went wrong.",
          description: response?.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process deposit",
        variant: "destructive",
      });
    }
  };

  // Submit withdrawal
  const handleWithdrawSubmit = async () => {
    if (!selectedWithdrawPlan || !withdrawAmount || !withdrawWalletAddress) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const selectedPlan = userPlans?.data?.find(
      (plan) => plan.investmentPlanId === selectedWithdrawPlan
    );

    if (!selectedPlan) {
      toast({
        title: "Error",
        description: "Selected plan not found",
        variant: "destructive",
      });
      return;
    }

    const payload = {
      investmentPlanId: selectedWithdrawPlan,
      userId: parsedUserData.userId,
      amount: Number.parseFloat(withdrawAmount),
      walletAddress: withdrawWalletAddress,
    };

    try {
      setWithdrawStep("processing");
      const response = await post("/investment/withdraw", payload, true);

      if (response.success) {
        setWithdrawStep("completed");
        toast({
          title: "Success",
          description: "Withdrawal request submitted successfully!",
        });
        refetchPlans();
        refetchInvestmentSummary();
        refetchTransactionHistory();
        errorTransactionHistoryGraph();
      } else {
        setWithdrawStep("planSelection");
        toast({
          title: "Something went wrong.",
          description: response?.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      setWithdrawStep("planSelection");
      toast({
        title: "Error",
        description: "Failed to process withdrawal",
        variant: "destructive",
      });
    }
  };

  function getTotalDays(startDateString, daysLeft) {
    const startDate = new Date(startDateString);
    const futureDate = new Date(startDate);
    futureDate.setDate(startDate.getDate() + daysLeft);

    const msPerDay = 1000 * 60 * 60 * 24;
    const totalDays = Math.round((futureDate - startDate) / msPerDay);

    return totalDays;
  }

  const handleCopyAddress = async () => {
    const walletAddress = getCurrentWalletAddress();
    try {
      await navigator.clipboard.writeText(walletAddress);
      setAddressCopied(true);
      toast({
        title: "Address Copied!",
        description: "Wallet address has been copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Please copy the address manually",
        variant: "destructive",
      });
    }
  };

  const handleDepositComplete = () => {
    setDepositModal(false);
    setDepositStep("planSelection");
    setAddressCopied(false);
    refetchTransactionHistory();
    errorTransactionHistoryGraph();
    toast({
      title: "Deposit Initiated!",
      description: "Your deposit will be processed within 10 minutes",
    });
  };

  const handleCreatePlanComplete = () => {
    setCreatePlanModal(false);
    setCreatePlanStep("form");
    setAddressCopied(false);
    refetchPlans();
    refetchInvestmentSummary();
    toast({
      title: "Plan Created!",
      description: "Your investment plan has been created successfully",
    });
  };

  const handleWithdrawClick = () => {
    setWithdrawModal(true);
    setWithdrawStep("planSelection");
    setSelectedWithdrawPlan("");
    setWithdrawAmount("");
    setWithdrawWalletAddress("");
  };

  const closeDepositModal = () => {
    setDepositModal(false);
    setDepositStep("planSelection");
    setAddressCopied(false);
  };

  const closeCreatePlanModal = () => {
    setCreatePlanModal(false);
    setCreatePlanStep("form");
    setAddressCopied(false);
    setSelectedPlan("");
    setSelectedCrypto("");
    setAmount("");
    setCryptoAmount("");
  };

  const closeWithdrawModal = () => {
    setWithdrawModal(false);
    setWithdrawStep("planSelection");
    setSelectedWithdrawPlan("");
    setWithdrawAmount("");
    setWithdrawWalletAddress("");
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const getTransactionIcon = (type) => {
    switch (type) {
      case "deposit":
        return <ArrowDownLeft className="h-4 w-4 text-green-400" />;
      case "withdrawal":
        return <ArrowUpRight className="h-4 w-4 text-red-400" />;
      case "profit":
        return <TrendingUp className="h-4 w-4 text-blue-400" />;
      default:
        return <Activity className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-purple-500/20 backdrop-blur-md bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center ">
              <img src={BigLogo || "/placeholder.svg"} alt="" width={"100px"} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-white hover:text-purple-400 transition-colors font-medium"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Investments
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Transactions
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Analytics
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </Button>

              {/* Desktop User Menu */}
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
                        navigate("/");
                      }}
                      className="text-white hover:bg-slate-700"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-purple-500/20 mt-4">
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="#"
                  className="text-white hover:text-purple-400 transition-colors font-medium"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Investments
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Transactions
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Analytics
                </a>
                <div className="border-t border-purple-500/20 pt-4">
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
                      variant="ghost"
                      className="text-gray-300 hover:text-white hover:bg-white/10 justify-start"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex flex-col space-y-4">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  text-white">
                Welcome back, {parsedUserData?.firstName}! 👋
              </h1>
              <p className="text-gray-300 mt-2 text-sm md:text-base">
                Member since {formatTimeAgo(parsedUserData?.registeredAt)} •
                Last login: {formatTimeAgo(parsedUserData?.lastLogin)}
              </p>
              <Badge className="mt-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                <Award className="h-3 w-3 mr-1" />
                {userData.membershipLevel} Member
              </Badge>
            </div>
           
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          <Card className="bg-gradient-to-br from-purple-900/30 to-cyan-900/20 border-purple-500/30 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs md:text-sm font-medium text-gray-300">
                Total Invested
              </CardTitle>
              <DollarSign className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-lg md:text-2xl font-bold text-white">
                  {balanceVisible
                    ? formatCurrency(
                        userInvestmentSummary?.data?.totalInvestment || 0
                      )
                    : "••••••"}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setBalanceVisible(!balanceVisible)}
                  className="text-gray-400 hover:text-white p-1"
                >
                  {balanceVisible ? (
                    <EyeOff className="h-3 w-3" />
                  ) : (
                    <Eye className="h-3 w-3" />
                  )}
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Since {formatTimeAgo(parsedUserData?.registeredAt)}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border-green-500/30 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs md:text-sm font-medium text-gray-300">
                Current Balance
              </CardTitle>
              <Wallet className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-lg md:text-2xl font-bold text-white">
                {balanceVisible
                  ? formatCurrency(
                      userInvestmentSummary?.data?.totalInvestment +
                        userInvestmentSummary?.data?.totalProfit || 0
                    )
                  : "••••••"}{" "}
              </div>
              <p className="text-xs text-green-400 mt-1">
                +
                {(
                  ((userInvestmentSummary?.data?.totalInvestment +
                    userInvestmentSummary?.data?.totalProfit) /
                    userInvestmentSummary?.data?.totalInvestment -
                    1 || 0) * 100
                ).toFixed(0)}
                % growth
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border-blue-500/30 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs md:text-sm font-medium text-gray-300">
                Total Profit
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-lg md:text-2xl font-bold text-white">
                {balanceVisible
                  ? formatCurrency(
                      userInvestmentSummary?.data?.totalProfit || 0
                    )
                  : "••••••"}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-900/30 to-orange-900/20 border-yellow-500/30 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs md:text-sm font-medium text-gray-300">
                Active Plans
              </CardTitle>
              <Target className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-lg md:text-2xl font-bold text-white">
                {userInvestmentSummary?.data?.activePlansCount || 0}
              </div>
              <p className="text-xs text-yellow-400 mt-1">
                Investment plans running
              </p>
            </CardContent>
          </Card>
        </div> <div className="flex mb-8 flex-col sm:flex-row gap-3">
              <Button
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                onClick={handleDepositClick}
              >
                <Plus className="h-4 w-4 mr-2" />
                Deposit
              </Button>
              {shouldShowWithdrawButton() && (
                <Button
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                  onClick={handleWithdrawClick}
                >
                  <Minus className="h-4 w-4 mr-2" />
                  Withdraw
                </Button>
              )}
            </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Investment Growth Chart */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-slate-900/50 to-purple-900/20 border-purple-500/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white flex items-center gap-2 text-lg md:text-xl">
                      <BarChart3 className="h-5 w-5 text-purple-400" />
                      Portfolio Performance
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-sm">
                      Your investment balance over time
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={refetchTransactionHistoryGraph}
                    className="text-gray-400 hover:text-white"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {chartData.length > 0 ? (
                  <div className="h-64 md:h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient
                            id="balanceGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#8b5cf6"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="#8b5cf6"
                              stopOpacity={0.1}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="date" stroke="#9ca3af" fontSize={12} />
                        <YAxis
                          stroke="#9ca3af"
                          fontSize={12}
                          tickFormatter={(value) =>
                            `$${value.toLocaleString()}`
                          }
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Area
                          type="monotone"
                          dataKey="balance"
                          stroke="#8b5cf6"
                          strokeWidth={2}
                          fillOpacity={1}
                          fill="url(#balanceGradient)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  <div className="h-64 md:h-80 flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-400">
                        No transaction data available
                      </p>
                      <p className="text-gray-500 text-sm">
                        Make your first investment to see the chart
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Active Plans */}
          <div>
            <Card className="bg-gradient-to-br from-slate-900/50 to-purple-900/20 border-purple-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white justify-between  flex items-center gap-2 text-lg">
                  <div className="flex justify-center gap-2 items-center">
                    <PieChart className="h-5 w-5 text-purple-400" />
                    Active Plans
                  </div>
                  <Button
                    onClick={handleCreatePlanClick}
                    variant="ghost"
                    className="text-purple-400 p-0 hover:text-white hover:bg-purple-500/20 text-sm"
                  >
                    Create Plan
                  </Button>
                </CardTitle>
                <CardDescription className="text-gray-300 text-sm">
                  Your current investments
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {userPlans?.data?.length > 0 ? (
                  userPlans.data.map((plan, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-gray-800/30 to-gray-700/20 border border-gray-600/30 rounded-lg p-4 hover:border-purple-500/30 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-white font-semibold text-sm">
                            {plan?.investmentPlanName}
                          </h4>
                          <p className="text-gray-400 text-xs">
                            {formatCurrency(plan?.totalAmountInvested || 0)}{" "}
                            invested
                          </p>
                        </div>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                          {plan?.dailyPercentage}%
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Progress</span>
                          <span className="text-gray-300">
                            {getTotalDays(plan?.createdAt, plan.daysLeft)} days
                          </span>
                        </div>
                        <Progress
                          value={
                            ((getTotalDays(plan?.createdAt, plan?.daysLeft) -
                              plan?.daysLeft) /
                              getTotalDays(plan?.createdAt, plan.daysLeft)) *
                            100
                          }
                          className="h-2 bg-gray-700"
                        />
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-400">
                            {plan?.daysLeft} days left
                          </span>
                          <span className="text-sm font-semibold text-green-400">
                            +{formatCurrency(plan?.dailyAmountEarned || 0)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">No active plans</p>
                    <p className="text-gray-500 text-sm">
                      Create your first investment plan to get started
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="mt-8">
          <Card className="bg-gradient-to-br from-slate-900/50 to-purple-900/20 border-purple-500/30 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white flex items-center gap-2 text-lg">
                    <Clock className="h-5 w-5 text-purple-400" />
                    Recent Transactions
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-sm">
                    Your latest account activity
                  </CardDescription>
                </div>
                <Button
                  variant="ghost"
                  className="text-purple-400 hover:text-white hover:bg-purple-500/20 text-sm"
                >
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userTransactionHistory?.data?.transactions?.length > 0 ? (
                  userTransactionHistory.data.transactions
                    .slice(0, 5)
                    .map((transaction) => (
                      <div
                        key={transaction.transactionId}
                        className="flex items-center justify-between p-3 md:p-4 bg-gradient-to-r from-gray-800/20 to-gray-700/10 border border-gray-600/20 rounded-lg hover:border-purple-500/30 transition-colors"
                      >
                        <div className="flex items-center space-x-3 md:space-x-4 flex-1 min-w-0">
                          <div className="bg-gray-700/50 p-2 rounded-lg flex-shrink-0">
                            {getTransactionIcon(transaction?.transactionType)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-white font-medium text-sm truncate">
                              {transaction?.description}
                            </p>
                            <p className="text-gray-400 text-xs">
                              {formatDate(transaction?.dateTime)} at{" "}
                              {formatTime(transaction?.dateTime)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
                          <div className="text-right">
                            <p
                              className={`font-semibold text-sm ${
                                transaction?.transactionType === "deposit"
                                  ? "text-green-400"
                                  : transaction?.transactionType ===
                                    "withdrawal"
                                  ? "text-red-400"
                                  : "text-blue-400"
                              }`}
                            >
                              {transaction?.transactionType === "withdrawal"
                                ? "-"
                                : "+"}
                              {formatCurrency(transaction?.amount || 0)}
                            </p>
                          </div>
                          <Badge
                            className={`text-xs ${
                              transaction?.status === "success"
                                ? "bg-green-500/20 text-green-400 border-green-500/30"
                                : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            }`}
                          >
                            {transaction?.status}
                          </Badge>
                        </div>
                      </div>
                    ))
                ) : (
                  <div className="text-center py-8">
                    <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">No transactions yet</p>
                    <p className="text-gray-500 text-sm">
                      Your transaction history will appear here
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats Footer */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Today's Profit</h3>
              <p className="text-2xl font-bold text-green-400">
                +
                {formatCurrency(userInvestmentSummary?.data?.todaysProfit || 0)}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Days Invested</h3>
              <p className="text-2xl font-bold text-blue-400">
                {userInvestmentSummary?.data?.investmentPeriod || 0}
              </p>
              <p className="text-xs text-gray-400">Since you started</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Success Rate</h3>
              <p className="text-2xl font-bold text-green-400">100%</p>
              <p className="text-xs text-gray-400">Profitable days</p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Create Plan Modal */}
      <Dialog open={createPlanModal}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-900 to-purple-900/50 border-purple-500/30 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-white text-center text-xl flex items-center justify-center gap-2">
              <Target className="h-5 w-5 text-purple-400" />
              Create Investment Plan
            </DialogTitle>
          </DialogHeader>

          {createPlanStep === "form" && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="plan-select"
                    className="text-white text-sm font-medium"
                  >
                    Select Investment Plan
                  </Label>
                  <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                    <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white">
                      <SelectValue placeholder="Choose a plan" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600">
                      {investmentPlans.map((plan) => (
                        <SelectItem
                          key={plan.planId}
                          value={plan.planId}
                          className="text-white hover:bg-slate-700"
                        >
                          <div className="flex flex-col">
                            <span className="font-medium">{plan.planName}</span>
                            <span className="text-xs text-gray-400">
                              {plan.dailyPercentage}% daily •{" "}
                              {plan.withdrawalDay} days • Min: $
                              {plan.minimumAmount}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="crypto-select"
                    className="text-white text-sm font-medium"
                  >
                    Select Cryptocurrency
                  </Label>
                  <Select
                    value={selectedCrypto}
                    onValueChange={handleCryptoSelect}
                    disabled={loadingCrypto}
                  >
                    <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white">
                      <SelectValue
                        placeholder={
                          loadingCrypto ? "Loading..." : "Choose cryptocurrency"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600">
                      {Object.entries(supportedCryptos).map(([key, crypto]) => (
                        <SelectItem
                          key={key}
                          value={key}
                          className="text-white hover:bg-slate-700"
                        >
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">
                                {crypto.name} ({crypto.symbol})
                              </span>
                              <span className="text-xs text-gray-400">
                                $
                                {cryptoPrices[
                                  crypto.id
                                ]?.usd?.toLocaleString() || "N/A"}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500">
                              {crypto.network}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {selectedCrypto && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      Price: $
                      {cryptoPrices[
                        supportedCryptos[selectedCrypto]?.id
                      ]?.usd?.toLocaleString() || "N/A"}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={refreshCryptoPrices}
                      disabled={loadingCrypto}
                      className="text-purple-400 hover:text-white"
                    >
                      <RefreshCw
                        className={`h-4 w-4 ${
                          loadingCrypto ? "animate-spin" : ""
                        }`}
                      />
                    </Button>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="amount"
                      className="text-white text-sm font-medium"
                    >
                      Amount (USD)
                    </Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => handleAmountChange(e.target.value)}
                      className="bg-slate-800/50 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="crypto-amount"
                      className="text-white text-sm font-medium"
                    >
                      Crypto Amount
                    </Label>
                    <Input
                      id="crypto-amount"
                      type="number"
                      placeholder="0.00000000"
                      value={cryptoAmount}
                      onChange={(e) => handleCryptoAmountChange(e.target.value)}
                      className="bg-slate-800/50 border-slate-600 text-white"
                    />
                  </div>
                </div>

                {selectedPlan && (
                  <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-4">
                    <p className="text-blue-400 text-sm">
                      ℹ️ Plan Details:{" "}
                      {
                        investmentPlans.find((p) => p.planId === selectedPlan)
                          ?.dailyPercentage
                      }
                      % daily returns for{" "}
                      {
                        investmentPlans.find((p) => p.planId === selectedPlan)
                          ?.withdrawalDay
                      }{" "}
                      days
                    </p>
                  </div>
                )}
              </div>

              <div className="flex space-x-3">
                <Button
                  disabled={isLoading}
                  variant="outline"
                  onClick={closeCreatePlanModal}
                  className="flex-1 border-slate-600 text-white hover:bg-slate-800"
                >
                  Cancel
                </Button>
                <Button
                  disabled={isLoading}
                  onClick={handleCreatePlanSubmit}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    "Create Plan"
                  )}
                </Button>
              </div>
            </div>
          )}

          {createPlanStep === "generating" && (
            <div className="flex flex-col items-center space-y-6 py-8">
              <Loader2 className="h-12 w-12 text-purple-400 animate-spin" />
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Generating Secure Wallet
                </h3>
                <p className="text-gray-300 text-sm">
                  Please wait while we generate a secure wallet address for your
                  investment...
                </p>
              </div>
            </div>
          )}

          {createPlanStep === "address" && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Send {supportedCryptos[selectedCrypto]?.symbol} to this
                  address:
                </h3>
                <p className="text-gray-300 text-sm">
                  Copy the address below and send your{" "}
                  {supportedCryptos[selectedCrypto]?.name} deposit
                </p>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-600">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">
                    {supportedCryptos[selectedCrypto]?.name} Address (
                    {supportedCryptos[selectedCrypto]?.network}):
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopyAddress}
                    className={`${
                      addressCopied ? "text-green-400" : "text-purple-400"
                    } hover:text-purple-300`}
                  >
                    {addressCopied ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <div className="text-white font-mono text-sm break-all bg-slate-700/50 p-2 rounded">
                  <p className="max-w-[300px] truncate">
                    {getCurrentWalletAddress()}
                  </p>
                </div>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4">
                <p className="text-yellow-400 text-sm">
                  ⚠️ Only send {supportedCryptos[selectedCrypto]?.symbol} on the{" "}
                  {supportedCryptos[selectedCrypto]?.network} network to this
                  address. Sending other cryptocurrencies or using wrong
                  networks may result in permanent loss.
                </p>
              </div>

              <Button
                onClick={handleCreatePlanComplete}
                disabled={!addressCopied}
                className={`w-full ${
                  addressCopied
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-600 cursor-not-allowed"
                } text-white`}
              >
                I Have Deposited the Funds
              </Button>

              {!addressCopied && (
                <p className="text-center text-sm text-gray-400">
                  Please copy the address first to enable the deposit
                  confirmation button
                </p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Deposit Modal */}
      <Dialog open={depositModal} onOpenChange={closeDepositModal}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-900 to-purple-900/50 border-purple-500/30 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-white text-center text-xl flex items-center justify-center gap-2">
              <Wallet className="h-5 w-5 text-purple-400" />
              Deposit Funds
            </DialogTitle>
          </DialogHeader>

          {depositStep === "planSelection" && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Select Investment Plan
                </h3>
                <p className="text-gray-300 text-sm">
                  Choose which plan you want to deposit into
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="deposit-plan-select"
                    className="text-white text-sm font-medium"
                  >
                    Your Active Plans
                  </Label>
                  <Select
                    value={selectedDepositPlan}
                    onValueChange={setSelectedDepositPlan}
                  >
                    <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white">
                      <SelectValue placeholder="Choose a plan to deposit into" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600">
                      {userPlans?.data?.map((plan) => (
                        <SelectItem
                          key={plan.investmentPlanId}
                          value={plan.investmentPlanId}
                          className="text-white hover:bg-slate-700"
                        >
                          <div className="flex flex-col">
                            <span className="font-medium">
                              {plan.investmentPlanName}
                            </span>
                            <span className="text-xs text-gray-400">
                              {plan.dailyPercentage}% daily • {plan.daysLeft}{" "}
                              days left
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="deposit-crypto-select"
                    className="text-white text-sm font-medium"
                  >
                    Select Cryptocurrency
                  </Label>
                  <Select
                    value={depositSelectedCrypto}
                    onValueChange={handleDepositCryptoSelect}
                    disabled={loadingCrypto}
                  >
                    <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white">
                      <SelectValue
                        placeholder={
                          loadingCrypto ? "Loading..." : "Choose cryptocurrency"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600">
                      {Object.entries(supportedCryptos).map(([key, crypto]) => (
                        <SelectItem
                          key={key}
                          value={key}
                          className="text-white hover:bg-slate-700"
                        >
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">
                                {crypto.name} ({crypto.symbol})
                              </span>
                              <span className="text-xs text-gray-400">
                                $
                                {cryptoPrices[
                                  crypto.id
                                ]?.usd?.toLocaleString() || "N/A"}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500">
                              {crypto.network}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="deposit-amount"
                      className="text-white text-sm font-medium"
                    >
                      Amount (USD)
                    </Label>
                    <Input
                      id="deposit-amount"
                      type="number"
                      placeholder="0.00"
                      value={depositAmount}
                      onChange={(e) =>
                        handleDepositAmountChange(e.target.value)
                      }
                      className="bg-slate-800/50 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="deposit-crypto-amount"
                      className="text-white text-sm font-medium"
                    >
                      Crypto Amount
                    </Label>
                    <Input
                      id="deposit-crypto-amount"
                      type="number"
                      placeholder="0.00000000"
                      value={depositCryptoAmount}
                      onChange={(e) =>
                        handleDepositCryptoAmountChange(e.target.value)
                      }
                      className="bg-slate-800/50 border-slate-600 text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  disabled={isLoading}
                  onClick={closeDepositModal}
                  className="flex-1 border-slate-600 text-white hover:bg-slate-800"
                >
                  Cancel
                </Button>
                <Button
                  disabled={isLoading}
                  onClick={handleDepositSubmit}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    "Continue"
                  )}
                </Button>
              </div>
            </div>
          )}

          {depositStep === "generating" && (
            <div className="flex flex-col items-center space-y-6 py-8">
              <Loader2 className="h-12 w-12 text-purple-400 animate-spin" />
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Generating Wallet Address
                </h3>
                <p className="text-gray-300 text-sm">
                  Please wait while we generate a secure wallet address for
                  you...
                </p>
              </div>
            </div>
          )}

          {depositStep === "address" && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Send {supportedCryptos[depositSelectedCrypto]?.symbol} to this
                  address:
                </h3>
                <p className="text-gray-300 text-sm">
                  Copy the address below and send your{" "}
                  {supportedCryptos[depositSelectedCrypto]?.name} deposit
                </p>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-600">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">
                    {supportedCryptos[depositSelectedCrypto]?.name} Address (
                    {supportedCryptos[depositSelectedCrypto]?.network}):
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopyAddress}
                    className={`${
                      addressCopied ? "text-green-400" : "text-purple-400"
                    } hover:text-purple-300`}
                  >
                    {addressCopied ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <p className="text-white font-mono text-sm break-all bg-slate-700/50 p-2 rounded">
                  {getCurrentWalletAddress()}
                </p>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4">
                <p className="text-yellow-400 text-sm">
                  ⚠️ Only send {supportedCryptos[depositSelectedCrypto]?.symbol}{" "}
                  on the {supportedCryptos[depositSelectedCrypto]?.network}{" "}
                  network to this address. Sending other cryptocurrencies or
                  using wrong networks may result in permanent loss.
                </p>
              </div>

              <Button
                onClick={handleDepositComplete}
                disabled={!addressCopied}
                className={`w-full ${
                  addressCopied
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-600 cursor-not-allowed"
                } text-white`}
              >
                I Have Deposited the Funds
              </Button>

              {!addressCopied && (
                <p className="text-center text-sm text-gray-400">
                  Please copy the address first to enable the deposit
                  confirmation button
                </p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Withdraw Modal */}

      <Dialog open={withdrawModal} onOpenChange={closeWithdrawModal}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-900 to-purple-900/50 border-purple-500/30 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-white text-center text-xl flex items-center justify-center gap-2">
              <Wallet className="h-5 w-5 text-purple-400" />
              Withdraw Funds
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2">
                Connect Your Wallet to Withdraw
              </h3>
              <p className="text-gray-300 text-sm">
                You need to connect your crypto wallet to withdraw your profits
                securely.
              </p>
            </div>

            <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-4">
              <p className="text-blue-400 text-sm">
                🔒 Your wallet connection is secure and encrypted. We never
                store your private keys.
              </p>
            </div>

            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={() => setWithdrawModal(false)}
                className="flex-1 border-slate-600 text-white hover:bg-slate-800"
              >
                Cancel
              </Button>
              <Button
                onClick={handleConnectWallet}
                className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Connect Wallet"
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
