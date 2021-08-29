FROM mcr.microsoft.com/dotnet/aspnet:5.0-alpine

COPY ./dist/netcore-api /app

WORKDIR /app
ENTRYPOINT ["dotnet", "NxAngularNetCore.NetcoreApi.dll"]