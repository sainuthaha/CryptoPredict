namespace CryptoPredict.Api.Models
{
	public class MarketRange
	{
		public required List<PricePoint> Prices { get; set; }
		public required List<MarketCapPoint> MarketCaps { get; set; }
		public required List<VolumePoint> TotalVolumes { get; set; }
	}

	public class PricePoint
	{
		public long Timestamp { get; set; } // In milliseconds
		public double Price { get; set; }    // Price in USD
	}

	public class MarketCapPoint
	{
		public long Timestamp { get; set; } // In milliseconds
		public double MarketCap { get; set; } // Market Cap in USD
	}

	public class VolumePoint
	{
		public long Timestamp { get; set; } // In milliseconds
		public double Volume { get; set; } // Volume in USD
	}
}
