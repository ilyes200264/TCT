export const demoAdminSummary = {
  adminName: "Sophie Durant",
  totalOperators: 18,
  networkBalance: 6_200,
  upcomingRenewals: 5,
  fleetInService: 126,
  lastAudit: "2025-10-21T10:15:00Z",
};

export const demoOperators = [
  {
    id: "op-1",
    name: "Alex Martin",
    email: "alex@bayfleet.com",
    location: "San Francisco, CA",
    licenseType: "Fleet Tier 2",
    balance: 48250.35,
    activeVehicles: 12,
    renewalDate: "2025-03-15",
    status: "Active",
  },
  {
    id: "op-2",
    name: "Priya Patel",
    email: "priya@highwaypartners.com",
    location: "Austin, TX",
    licenseType: "Fleet Tier 1",
    balance: 31210.8,
    activeVehicles: 9,
    renewalDate: "2025-01-22",
    status: "Renewal due",
  },
  {
    id: "op-3",
    name: "Matthieu Laurent",
    email: "matthieu@metrodrive.fr",
    location: "Paris, France",
    licenseType: "Fleet Tier 3",
    balance: 71560.45,
    activeVehicles: 18,
    renewalDate: "2025-04-05",
    status: "Active",
  },
  {
    id: "op-4",
    name: "Camila Souza",
    email: "camila@atlanticfleet.com.br",
    location: "Rio de Janeiro, Brazil",
    licenseType: "Fleet Tier 2",
    balance: 26875.9,
    activeVehicles: 7,
    renewalDate: "2025-02-10",
    status: "At risk",
  },
  {
    id: "op-5",
    name: "Noah Fischer",
    email: "noah@alpinecars.de",
    location: "Munich, Germany",
    licenseType: "Fleet Tier 1",
    balance: 39420.12,
    activeVehicles: 10,
    renewalDate: "2025-06-18",
    status: "Active",
  },
];

export const demoTransactions = [
  {
    id: "txn-1",
    operatorId: "op-1",
    operatorName: "Alex Martin",
    type: "credit",
    amount: 12500,
    description: "Operator commission payout (Q3)",
  createdAt: "2025-09-08T10:15:00Z",
  },
  {
    id: "txn-2",
    operatorId: "op-2",
    operatorName: "Priya Patel",
    type: "debit",
    amount: -4200,
    description: "New fleet acquisition - Ford Transit",
  createdAt: "2025-09-07T14:25:00Z",
  },
  {
    id: "txn-3",
    operatorId: "op-3",
    operatorName: "Matthieu Laurent",
    type: "tax",
    amount: -1870,
    description: "Regional tax withholding",
  createdAt: "2025-09-06T09:10:00Z",
  },
  {
    id: "txn-4",
    operatorId: "op-4",
    operatorName: "Camila Souza",
    type: "commission",
    amount: 3300,
    description: "Referral bonus for premium wash program",
  createdAt: "2025-09-05T16:05:00Z",
  },
  {
    id: "txn-5",
    operatorId: "op-5",
    operatorName: "Noah Fischer",
    type: "debit",
    amount: -2600,
    description: "Deferred maintenance reserve",
  createdAt: "2025-09-04T11:40:00Z",
  },
];

export const demoVehicles = [
  {
    id: "veh-1",
    brand: "Ford",
    model: "Transit Cargo XL",
    price: 31800,
    imageUrl: "https://images.pexels.com/photos/4489730/pexels-photo-4489730.jpeg",
    operatorId: "op-1",
    operatorName: "Alex Martin",
    status: "Available",
  },
  {
    id: "veh-2",
    brand: "Mercedes-Benz",
    model: "Sprinter 2500",
    price: 45200,
    imageUrl: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg",
    operatorId: "op-2",
    operatorName: "Priya Patel",
    status: "Reserved",
  },
  {
    id: "veh-3",
    brand: "Toyota",
    model: "Hiace Commercial",
    price: 29950,
    imageUrl: "https://images.pexels.com/photos/4489726/pexels-photo-4489726.jpeg",
    operatorId: "op-3",
    operatorName: "Matthieu Laurent",
    status: "Available",
  },
  {
    id: "veh-4",
    brand: "RAM",
    model: "ProMaster 3500",
    price: 38900,
    imageUrl: "https://images.pexels.com/photos/6197048/pexels-photo-6197048.jpeg",
    operatorId: "op-4",
    operatorName: "Camila Souza",
    status: "Maintenance",
  },
  {
    id: "veh-5",
    brand: "Volkswagen",
    model: "Crafter Panel",
    price: 36500,
    imageUrl: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg",
    operatorId: "op-5",
    operatorName: "Noah Fischer",
    status: "Available",
  },
];

export const demoServiceRequests = [
  {
    id: "svc-1",
    operatorId: "op-4",
    operatorName: "Camila Souza",
    type: "mechanic",
    status: "Scheduled",
    date: "2025-09-03",
    createdAt: "2025-09-02T09:00:00Z",
    notes: "Brake inspection for RAM ProMaster",
  },
  {
    id: "svc-2",
    operatorId: "op-2",
    operatorName: "Priya Patel",
    type: "wash",
    status: "Done",
    date: "2025-09-05",
    createdAt: "2025-09-05T15:45:00Z",
    notes: "Premium wash - Sprinter fleet",
  },
  {
    id: "svc-3",
    operatorId: "op-1",
    operatorName: "Alex Martin",
    type: "wash",
    status: "Requested",
    date: "2025-09-07",
    createdAt: "2025-09-06T11:15:00Z",
    notes: "Express wash for 4 vehicles",
  },
];

export const demoDocuments = [
  {
    id: "doc-1",
    operatorId: "op-1",
    operatorName: "Alex Martin",
    title: "2024 Franchise Agreement",
    category: "Contracts",
    createdAt: "2024-12-01T10:00:00Z",
  },
  {
    id: "doc-2",
    operatorId: "op-3",
    operatorName: "Matthieu Laurent",
    title: "Insurance Certificate",
    category: "Compliance",
    createdAt: "2025-01-12T09:20:00Z",
  },
  {
    id: "doc-3",
    operatorId: "op-2",
    operatorName: "Priya Patel",
    title: "Vehicle Purchase Order - Transit",
    category: "Procurement",
    createdAt: "2025-09-03T16:45:00Z",
  },
];

export const demoSupportTickets = [
  {
    id: "tkt-1",
    operatorId: "op-2",
    operatorName: "Priya Patel",
    subject: "Transmission noise - Sprinter 2500",
    type: "mechanic",
    status: "Scheduled",
    createdAt: "2025-09-04T08:15:00Z",
  },
  {
    id: "tkt-2",
    operatorId: "op-3",
    operatorName: "Matthieu Laurent",
    subject: "Monthly premium wash",
    type: "wash",
    status: "Done",
    createdAt: "2025-08-30T13:00:00Z",
  },
  {
    id: "tkt-3",
    operatorId: "op-4",
    operatorName: "Camila Souza",
    subject: "Door alignment - Ford Transit",
    type: "mechanic",
    status: "Requested",
    createdAt: "2025-09-06T17:30:00Z",
  },
];

export const demoAlerts = [
  {
    id: "alert-1",
    title: "5 operator licenses expire this quarter",
    description: "Prioritize renewals for Priya Patel, Camila Souza, and three others.",
    severity: "warning" as const,
  },
  {
    id: "alert-2",
    title: "Critical maintenance overdue",
    description: "RAM ProMaster (Camila Souza) has been in maintenance for 12 days.",
    severity: "danger" as const,
  },
  {
    id: "alert-3",
    title: "High-growth opportunity",
    description: "Matthieu Laurent grew fleet utilization by 18% month-over-month.",
    severity: "success" as const,
  },
];

export const demoRevenueByMonth = [
  { month: "Apr", revenue: 21500 },
  { month: "May", revenue: 24450 },
  { month: "Jun", revenue: 26800 },
  { month: "Jul", revenue: 27500 },
  { month: "Aug", revenue: 30120 },
  { month: "Sep", revenue: 32210 },
  { month: "Oct", revenue: 33580 },
];

export const demoTopModels = [
  { model: "Ford Transit", units: 42 },
  { model: "Mercedes Sprinter", units: 34 },
  { model: "Toyota Hiace", units: 29 },
  { model: "RAM ProMaster", units: 18 },
];

export const demoVehicleHoldings = [
  {
    id: "hold-1",
    brand: "Mercedes-Benz",
    model: "Sprinter 3500 (2017)",
    acquisitionDate: "2025-02-14",
    purchasePrice: 18278.22,
    mileage: 22850,
    vin: "W1W4EBHY7NT056789",
  },
  {
    id: "hold-2",
    brand: "Toyota",
    model: "Corolla (2022)",
    acquisitionDate: "2025-04-02",
    purchasePrice: 13900,
    mileage: 18400,
    vin: "JTFST22P200456321",
  },
  {
    id: "hold-3",
    brand: "Nissan",
    model: "Versa Note S (2019)",
    acquisitionDate: "2025-09-18",
    purchasePrice: 15400,
    mileage: 9200,
    vin: "3N1CE2CP6KL357890",
  },
];

export const demoVehicleReadyForSale = [
  {
    id: "ready-1",
    brand: "Mercedes-Benz",
    model: "Sprinter 3500 (2017)",
    listedDate: "2025-09-02",
    floorPrice: 29500,
    interestedBuyers: 3,
  },
  {
    id: "ready-2",
    brand: "Toyota",
    model: "Corolla (2022)",
    listedDate: "2025-09-04",
    floorPrice: 20900,
    interestedBuyers: 2,
  },
];

export const demoVehicleMaintenance = [
  {
    id: "maint-1",
    brand: "Nissan",
    model: "Versa Note S (2019)",
    operatorName: "Atelier principal",
    enteredAt: "2025-09-05",
    reason: "Diagnostic moteur et transmission",
    eta: "2025-10-12",
  },
];

export const demoVehicleSalesLedger = [
  {
    id: "sale-1",
    brand: "BMW",
    model: "320x (2017)",
    soldAt: "2025-10-01",
    salePrice: 13000,
    buyer: "CityFleet Auto",
    vin: "2BX3W94V0HM456321",
  },
];

