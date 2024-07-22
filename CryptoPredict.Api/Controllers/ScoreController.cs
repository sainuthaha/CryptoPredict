using CryptoPredict.Api.Interfaces;
using CryptoPredict.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace CryptoPredict.Api.Controllers
{
	[ApiController]
	[Route("api/v1/user/scoreData")]
	public class UserScoreDataController : ControllerBase
	{
		private IUserScoreDataService userScoreDataService;

		public UserScoreDataController(IUserScoreDataService userScoreDataService)
		{
			this.userScoreDataService = userScoreDataService;
		}

		[HttpGet]
		public async Task<UserScoreData> GetUserScoreDataAsync(string userId)
		{
			return await userScoreDataService.GetUserScoreData(userId);
		}

		[HttpPost]
		public async Task<UserScoreData> PostUserScoreDataAsync(UserScoreData userScoreData)
		{
			return await userScoreDataService.PostUserScoreData(userScoreData);
		}

	}
}
