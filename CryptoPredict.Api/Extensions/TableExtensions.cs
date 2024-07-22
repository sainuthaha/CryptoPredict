using CryptoPredict.Api.Models;
using Microsoft.Azure.Cosmos.Table;

namespace CryptoPredict.Api.Extensions
{
	public static class TableExtensions
	{

		public static UserScoreData MapToUserScoreData(this DynamicTableEntity entity)
		{
			var properties = entity.WriteEntity(null);

			return new UserScoreData()
			{
				UserId = properties["UserId"].StringValue,
				Score = properties["Score"].Int64Value ?? 0,
				GuessPrice = properties["GuessPrice"].Int64Value ?? 0,
				GuessTime = properties["GuessTime"].DateTimeOffsetValue ?? DateTimeOffset.MinValue
			};
		}

	}
}
