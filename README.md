<b>Installation Client App</b>

```
git clone https://github.com/LotsmanNazar/IonicApp
```

```
npm install
```

Running the application in development mode
```
cd IonicApp
```

```
npx ionic serve
```

Check the server connection address settings in the <b>config.ts</b> file

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

// Before UseRouting
app.UseCors("CorsPolicy");
```