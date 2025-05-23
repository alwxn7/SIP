
import { Supplier, Product, SustainabilityMetric, Risk, ChartDataPoint, TimeSeriesDataPoint } from './types';

export const APP_TITLE = "Sustainability Intelligence Platform";

export const MOCK_SUPPLIERS: Supplier[] = [
  { id: 'S001', name: 'EcoTextiles Inc.', tier: 1, location: 'Vietnam', materials: ['Organic Cotton', 'Recycled Polyester'], sustainabilityScore: 85, carbonFootprint: 1200, waterUsage: 50000, riskLevel: 'Low' },
  { id: 'S002', name: 'Global Metals Co.', tier: 2, location: 'China', materials: ['Aluminum', 'Steel'], sustainabilityScore: 60, carbonFootprint: 4500, waterUsage: 120000, riskLevel: 'Medium' },
  { id: 'S003', name: 'Precision Components Ltd.', tier: 1, location: 'Germany', materials: ['Plastics', 'Microchips'], sustainabilityScore: 78, carbonFootprint: 800, waterUsage: 30000, riskLevel: 'Low' },
  { id: 'S004', name: 'AgroSource Brazil', tier: 3, location: 'Brazil', materials: ['Soybeans', 'Coffee Beans'], sustainabilityScore: 45, carbonFootprint: 6000, waterUsage: 250000, riskLevel: 'High' },
];

export const MOCK_PRODUCTS: Product[] = [
  { id: 'P001', name: 'Organic Cotton T-Shirt', category: 'Apparel', lifecycleStage: 'Production', carbonFootprint: 5.2 },
  { id: 'P002', name: 'Recycled Aluminum Frame', category: 'Electronics', lifecycleStage: 'Manufacturing', carbonFootprint: 12.5 },
  { id: 'P003', name: 'FairTrade Coffee Blend', category: 'Food & Beverage', lifecycleStage: 'Sourcing', carbonFootprint: 2.1 },
];

export const MOCK_DASHBOARD_METRICS: SustainabilityMetric[] = [
  { id: 'M001', name: 'Overall Carbon Footprint', value: 12500, unit: 'tCO2e', trend: 'down', lastUpdated: '2024-07-20' },
  { id: 'M002', name: 'Waste Reduction Rate', value: '15%', unit: '', trend: 'up', lastUpdated: '2024-07-20' },
  { id: 'M003', name: 'Ethical Sourcing Score', value: 72, unit: '/100', trend: 'stable', lastUpdated: '2024-07-20' },
  { id: 'M004', name: 'Water Usage Efficiency', value: '85%', unit: '', trend: 'up', lastUpdated: '2024-07-20' },
];

export const MOCK_CARBON_BREAKDOWN: ChartDataPoint[] = [
  { name: 'Tier 1 Suppliers', value: 4500 },
  { name: 'Tier 2 Suppliers', value: 6000 },
  { name: 'Logistics', value: 1500 },
  { name: 'Operations', value: 500 },
];

export const MOCK_WATER_USAGE_TREND: TimeSeriesDataPoint[] = [
  { date: 'Jan', value: 250 },
  { date: 'Feb', value: 240 },
  { date: 'Mar', value: 245 },
  { date: 'Apr', value: 230 },
  { date: 'May', value: 220 },
  { date: 'Jun', value: 210 },
];

export const MOCK_RISKS: Risk[] = [
  { id: 'R001', description: 'Supplier AgroSource Brazil operates in a region with high deforestation rates.', category: 'Environmental', severity: 'High', supplierId: 'S004', likelihood: 0.75, impact: 'Brand reputation, biodiversity loss, regulatory scrutiny.' },
  { id: 'R002', description: 'Global Metals Co. has reported labor condition concerns in the past.', category: 'Social', severity: 'Medium', supplierId: 'S002', likelihood: 0.5, impact: 'Supply chain disruption, ethical violations, investor concerns.' },
  { id: 'R003', description: 'Potential water scarcity issues affecting EcoTextiles Inc. in Vietnam during dry seasons.', category: 'Environmental', severity: 'Medium', supplierId: 'S001', likelihood: 0.6, impact: 'Production delays, increased operational costs.' },
  { id: 'R004', description: 'Lack of transparency in Tier 3 sourcing for coffee beans.', category: 'Governance', severity: 'High', likelihood: 0.8, impact: 'Difficulty in verifying ethical and sustainable practices.'}
];

export const GEMINI_TEXT_MODEL = 'gemini-2.5-flash-preview-04-17';
export const GEMINI_API_KEY_ERROR_MESSAGE = "API Key not configured. Please set the API_KEY environment variable.";

// Placeholder for API key check - in a real app this would be handled by the environment
export const IS_API_KEY_CONFIGURED = typeof process.env.API_KEY === 'string' && process.env.API_KEY.length > 0;
