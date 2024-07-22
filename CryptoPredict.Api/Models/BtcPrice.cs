namespace CryptoPredict.Api.Models
{
	public class BtcPrice
	{
		public required Bitcoin bitcoin { get; set; }
	}

	public class Bitcoin
	{
		public int usd { get; set; }
	}

}
