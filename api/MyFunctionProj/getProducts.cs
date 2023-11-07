using System;
using System.Net;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace MyFunctionProj
{
    public class getProducts
    {
        private readonly ILogger _logger;

        public getProducts(ILoggerFactory loggerFactory)
        {
            _logger = loggerFactory.CreateLogger<getProducts>();
        }

        [Function("getProducts")]
        // MLS 11/7/23
        // public HttpResponseData Run([HttpTrigger(AuthorizationLevel.Anonymous, "get")] HttpRequestData req)
        public Product[] Run([HttpTrigger(AuthorizationLevel.Anonymous, "get")] HttpRequestData req)
        {
            Candy candyApple = new Candy("candyApple");
            string val = candyApple.getName();
            Product one = new Product(11);
            Product two = new Product(22);
            Product three = new Product(33);
            Product[] prods = {one, two, three};
            // Product[] prods = { { id = 1 }, { id = 2 }, { id = 3 } }; // new Product[3];


            _logger.LogInformation("C# HTTP trigger function processed a request.");


            var response = req.CreateResponse(HttpStatusCode.OK);
            response.Headers.Add("Content-Type", "text/plain; charset=utf-8");

            // response.WriteString($"Welcome to getProduct Azure Functions! {val}");
            // response.Body.Write(prods);

            // I don't know how to send data in an Azure Function
            // This is my 1st attempt 
            // response.WriteString(prods.ToString());

            // This is my second attempt at sending POCO data
            // Yeah! This worked! Thankfully I don't have to manually create JSON like below!
            // Bindings are a big time-saver -- no need to serialize and deserialize
            // a class 
            // string json = string.Format("{{ \"id\": \"{0}\" }}", input.Id);
            return prods;
        }
    }
}
