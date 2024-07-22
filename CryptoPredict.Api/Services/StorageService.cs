using CryptoPredict.Api.Interfaces;
using CryptoPredict.Api.Models;
using Microsoft.Azure.Cosmos.Table;

namespace CryptoPredict.Api.Services
{
	public class StorageService : IStorageService
	{
		private readonly CloudTableClient tableClient;
		private async Task<List<DynamicTableEntity>> GetDataFromStorageAsync(CloudTable table, TableQuery query)
		{
			var entities = new List<DynamicTableEntity>();
			TableContinuationToken continuationToken = null;
			do
			{
				var queryResult = await table.ExecuteQuerySegmentedAsync(query, continuationToken);

				continuationToken = queryResult.ContinuationToken;
				entities.AddRange(queryResult.Results);

			} while (continuationToken != null);

			return entities;
		}
		public StorageService(CloudTableClient tableClient)
		{
			this.tableClient = tableClient;
		}

		public async Task<UserScoreData> IStorageService.GetUserScoreData(string userId)
		{
			var table = this.tableClient.GetTableReference("UserScoreData");

			var userScoreDataFilter = TableQuery.GenerateFilterCondition("UserId", QueryComparisons.Equal, userId);

			var tableQuery = new TableQuery().Where(userScoreDataFilter);

			var entities = await this.GetDataFromStorageAsync(table, tableQuery);

			return entities;
		}

		Task<UserScoreData> IStorageService.PostUserScoreData()
		{
			throw new NotImplementedException();
		}
	}
}
