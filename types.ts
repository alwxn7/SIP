export enum NavigationItem {
  Dashboard = 'Dashboard',
  SupplyChain = 'Supply Chain',
  RiskAssessment = 'Risk Assessment',
  OpportunityFinder = 'Opportunity Finder',
  EmissionsEstimator = 'Emissions Estimator',
  GreenerRoutes = 'Greener Routes',
}

export interface Supplier {
  id: string;
  name: string;
  tier: number;
  location: string;
  materials: string[];
  sustainabilityScore: number; // 0-100
  carbonFootprint: number; // tCO2e
  waterUsage: number; // m3
  riskLevel: 'Low' | 'Medium' | 'High';
}

export interface Product {
  id: string;
  name: string;
  category: string;
  lifecycleStage: string;
  carbonFootprint: number; // tCO2e
}

export interface SustainabilityMetric {
  id: string;
  name: string;
  value: string | number;
  unit: string;
  trend?: 'up' | 'down' | 'stable';
  lastUpdated: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
}

export interface TimeSeriesDataPoint {
  date: string;
  value: number;
}

export interface Risk {
  id: string;
  description: string;
  category: 'Environmental' | 'Social' | 'Governance' | 'Operational';
  severity: 'Low' | 'Medium' | 'High';
  supplierId?: string; // Optional: link risk to a specific supplier
  likelihood: number; // 0-1 (e.g. 0.7 for 70%)
  impact: string; // Qualitative description of impact
}

export interface GroundingChunkWeb {
  uri: string;
  title: string;
}
export interface GroundingChunk {
  web?: GroundingChunkWeb;
  // Other types of chunks can be added here if needed
}
export interface GroundingMetadata {
  groundingChunks?: GroundingChunk[];
  // Other grounding metadata fields
}
export interface Candidate {
  groundingMetadata?: GroundingMetadata;
  // Other candidate fields
}
export interface GeminiResponseContent {
  text: string;
  candidates?: Candidate[];
}

export interface IconProps {
  className?: string;
}

// For Emissions Estimator
export interface EmissionEstimateRequest {
  productName: string;
  category: string;
  weightKg: number;
  primaryMaterial: string;
  manufacturingLocation: string;
  transportMode: string;
  transportDistanceKm: number;
}

// For Greener Routes
export interface GreenerRouteRequest {
  origin: string;
  destination: string;
  shipmentType: string;
  shipmentWeightTonnes: number;
}