<b>Installation Client App</b>

```
git clone https://github.com/LotsmanNazar/IonicApp
```

```
npm install
```

Running the application in development mode
```
npx ionic serve
```

<hr>

<b>Server Application Settings</b>

You need allow requests from any origin (for development mode)

```
builder.Services.AddCors(options => options.AddPolicy("CorsPolicy",
builder =>
{
	builder.AllowAnyHeader()
			.AllowAnyMethod()
			.SetIsOriginAllowed((host) => true)
			.AllowCredentials();
}));
```