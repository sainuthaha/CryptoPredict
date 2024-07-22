using CryptoPredict.Api.Extensions;
using CryptoPredict.Api.Interfaces;
using CryptoPredict.Api.Models;

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
			var response = await httpClient.GetResponseAsync<BtcPrice>(btcCurrentPriceApiEndpoint);
			return response.bitcoin.usd;
		}

    }
}
