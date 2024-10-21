export interface PricePoint {
    timestamp: number;
    price: number;
  }

  export interface MarketCapPoint {
    timestamp: number;
    marketCap: number;
  }

  export interface VolumePoint {
    timestamp: number;
    volume: number;
  }
  
export interface MarketRange {
    prices: PricePoint[]|undefined;
    marketCaps?: MarketCapPoint[] | null;
    totalVolumes?: VolumePoint[] | null;
  }
  