using CryptoPredict.Api.Interfaces;

namespace CryptoPredict.Api.Services
{
    public class BtcPriceService:IBtcPriceService
    {
		private const string btcCurrentPriceApiEndpoint = "/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

		private readonly HttpClient httpClient;
        public BtcPriceService(HttpClient httpClient)
        {
            this.httpClient = httpClient;
        }
       
		public async Task<int> GetBtcCurrentPrice()
		{
			var response = await httpClient.GetAsync(btcCurrentPriceApiEndpoint);
			if (response.IsSuccessStatusCode)
			{
				var content = await response.Content.ReadAsStringAsync();
				// Assuming the API returns the price directly as an integer in the response body
				if (int.TryParse(content, out int btcPrice))
				{
					return btcPrice;
				}
			}
			throw new Exception("Failed to fetch BTC price or parse response.");
		}

    }
}
