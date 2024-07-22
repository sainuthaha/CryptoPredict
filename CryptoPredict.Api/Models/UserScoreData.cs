namespace CryptoPredict.Api.Models
{
	public record UserScoreData
	{
        public required string UserId { get; init; }
		public int Score { get; init; }
		public DateTime Date { get; init; }
		public int GuessPrice { get; init; }
	}
}
