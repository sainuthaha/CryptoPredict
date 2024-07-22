namespace CryptoPredict.Api.Interfaces
{
    public interface IBtcPriceService
    {
        Task<int> GetBtcCurrentPrice();
    }
}
