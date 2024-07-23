using CryptoPredict.Api.Extensions;
using CryptoPredict.Api.Interfaces;
using CryptoPredict.Api.Models;

namespace CryptoPredict.Api.Services
{
    public class BtcPriceService:IBtcPriceService
    {
		private const string btcCurrentPriceApiEndpoint = "/v1/bpi/currentprice/BTC.json";

		private readonly HttpClient httpClient;
        public BtcPriceService(HttpClient httpClient)
        {
            this.httpClient = httpClient;
        }
       
		public async Task<float> GetBtcCurrentPrice()
		{
			var response = await httpClient.GetResponseAsync<BtcPrice>(btcCurrentPriceApiEndpoint);
            return response.bpi.usd.rate_float;

		}

    }
}
