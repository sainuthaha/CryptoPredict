namespace CryptoPredict.Api.Extensions
{
    public static class ServiceCollectionExtension
    {
        private sealed record HttpClientOptions
        {
            public required Uri BaseAddress { get; init; }
        }

        public static IServiceCollection AddHttpClient<TClient, TImplementation>(
            this IServiceCollection services,
            IConfiguration config,
            string configSectionName = "HttpClient"
        )
            where TClient : class
            where TImplementation : class, TClient
        {
            var serviceName = typeof(TImplementation).Name;
            var section = config.GetSection(configSectionName).GetSection(serviceName);
            var options = section.Get<HttpClientOptions>();
            if (options is null)
            {
                throw new ArgumentException(
                    nameof(configSectionName),
                    "Configuration section cannot be empty"
                );
            }

            var builder = services
                .AddHttpClient<TClient, TImplementation>()
                .ConfigureHttpClient(client =>
                {
                    client.BaseAddress = options.BaseAddress;
                })
                ;



            return services;
        }
    }
}
