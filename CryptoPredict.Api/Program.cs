using CryptoPredict.Api.Extensions;
using CryptoPredict.Api.Interfaces;
using CryptoPredict.Api.Services;
using Microsoft.AspNetCore.Builder;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddSingleton<ICryptoPriceService, CryptoPriceService>();
builder.Services.AddSingleton<IUserScoreDataService, UserScoreDataService>();
builder.Services.AddStorageService(configuration);
builder.Services.AddHttpClient<ICryptoPriceService,CryptoPriceService>(configuration);

var app = builder.Build();

app.UseCors(
		corsPolicyBuilder => corsPolicyBuilder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
	);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
	app.UseCors(
		corsPolicyBuilder => corsPolicyBuilder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
	);
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
