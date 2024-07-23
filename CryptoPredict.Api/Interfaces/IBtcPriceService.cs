namespace CryptoPredict.Api.Interfaces
{
    public interface IBtcPriceService
    {
        Task<float> GetBtcCurrentPrice();
    }
}
