using CryptoPredict.Api.Interfaces;
using CryptoPredict.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace CryptoPredict.Api.Controllers
{
    [ApiController]
    [Route("api/v1/crypto")]
    public class CryptoPriceController : ControllerBase
    {
        private ICryptoPriceService cryptoPriceService;

        public CryptoPriceController(ICryptoPriceService cryptoPriceService)
        {
            this.cryptoPriceService = cryptoPriceService;
        }

        [HttpGet]
        [Route("currentPrice")]
        public async Task<float> GetCurrentPriceAsync()
        {
            return await cryptoPriceService.GetBtcCurrentPrice();
        }

		[HttpGet]
        [Route("marketRange/btc")]
		public async Task<MarketRange> GetBtcMarketRangeAsync(long fromEpoch, long toEpoch)
		{
			return await cryptoPriceService.GetBtcMarketRange(fromEpoch, toEpoch);
		}

		[HttpGet]
		[Route("marketRange/eth")]
		public async Task<MarketRange> GetEthMarketRangeAsync(long fromEpoch, long toEpoch)
		{
			return await cryptoPriceService.GetEthMarketRange(fromEpoch, toEpoch);
		}


	}
}
