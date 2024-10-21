using CryptoPredict.Api.Extensions;
using CryptoPredict.Api.Interfaces;
using CryptoPredict.Api.Models;


namespace CryptoPredict.Api.Services
{
	public class CryptoPriceService : ICryptoPriceService
	{
		//private const string btcCurrentPriceApiEndpoint = "/v1/bpi/currentprice/BTC.json";
		private readonly Random _random = new Random();

		private readonly HttpClient httpClient;
		
		public CryptoPriceService(HttpClient httpClient,IConfiguration configuration)
		{
			this.httpClient = httpClient;
		}

		public async Task<float> GetBtcCurrentPrice()
		{
			//Simulating this as the coindesk api for the function is not working as expected

			// Simulate a delay to mimic API response time
			await Task.Delay(500);

			// Generate a random price between 25,000 and 35,000
			float randomPrice = (float)(_random.NextDouble() * (35000 - 25000) + 25000);

			return randomPrice;

		}

		public async Task<MarketRange> GetBtcMarketRange(long fromEpoch, long toEpoch)
		{
			var fromUnix = fromEpoch;
			var toUnix = toEpoch;

			// Prepare the API endpoint and parameters
			var btcEndpoint = $"/coins/bitcoin/market_chart/range?vs_currency=usd&from={fromUnix}&to={toUnix}";

			var response = await httpClient.GetResponseAsync<MarketRange>(btcEndpoint);
			return response;

		}

		public async Task<MarketRange> GetEthMarketRange(long fromEpoch, long toEpoch)
		{
			var fromUnix = fromEpoch; 
			var toUnix = toEpoch;

			var ethEndpoint = $"/ethereum/market_chart/range?vs_currency=usd&from={fromUnix}&to={toUnix}";
			var response = await httpClient.GetResponseAsync<MarketRange>(ethEndpoint);
			return response;

		}

	}
}
