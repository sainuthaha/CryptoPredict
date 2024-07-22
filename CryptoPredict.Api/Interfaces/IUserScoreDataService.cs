using CryptoPredict.Api.Models;

namespace CryptoPredict.Api.Interfaces
{
	public interface IUserScoreDataService
	{
		Task<UserScoreData> PostUserScoreData();
		Task<UserScoreData> GetUserScoreData();
	}
}
