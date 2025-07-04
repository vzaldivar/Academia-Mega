FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY DotNetMinimalAPIDemo.csproj app/
RUN dotnet restore app/DotNetMinimalAPIDemo.csproj
COPY . .
WORKDIR /src/app
RUN dotnet publish -c Realsease -o /app/publish

FROM base AS final
WORKDIR /app
COPY -from=build /app/publish .
ENTRYPOINT [ "dotnet", "DotNetMinimalAPIDemo.dll" ]

