using CryptoPredict.Api.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CryptoPredict.Api.Controllers
{
    [ApiController]
    [Route("api/v1/btcPrice")]
    public class BtcPriceController : ControllerBase
    {
        private IBtcPriceService btcPriceService;

        public BtcPriceController(IBtcPriceService btcPriceService)
        {
            this.btcPriceService = btcPriceService;
        }

        [HttpGet]
        [Route("currentPrice")]
        public async Task<int> GetCurrentPriceAsync()
        {
            return await btcPriceService.GetBtcCurrentPrice();
        }
    }
}
