using CryptoPredict.Api.Interfaces;
using CryptoPredict.Api.Models;
using Microsoft.Azure.Cosmos.Table;

namespace CryptoPredict.Api.Services
{
	public class UserScoreDataService : IUserScoreDataService
	{
		private readonly CloudTableClient tableClient;

		public UserScoreDataService(CloudTableClient tableClient)
		{
			this.tableClient = tableClient;
		}
		Task<UserScoreData> IUserScoreDataService.GetUserScoreData()
		{
			throw new NotImplementedException();
		}

		Task<UserScoreData> IUserScoreDataService.PostUserScoreData()
		{
			throw new NotImplementedException();
		}
	}
}
