using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Moq;
using TiendaMVC.Controllers;
using TiendaMVC.Models;
using TiendaMVC.Services;
using Xunit;

public class ProductosControllerTest
{
    [Fact]
    public async Task Index_ReturnsViewWithProductList()
    {
        var mockAPI = new Mock<ApiClient>();
        mockAPI.Setup(s => s.GetProductosAsync())
            .ReturnAsync(new List<Producto>
            {
                new Producto{ Id=1, Nombre="iPhone 16 ProMax", Precio=25999.00M }
            });

        var moqObject = new ProductosController(moqAPI.Object);
        moqObject.WithFakeSession();

        var result = await moqObject.Index();

        // Assert
        result.Should().BeOfType<ViewResult>()
            .Wich.Model.Should().BeAssignableTo<IEnumerable<Producto>>()
            .And.As<IEnumerable<Producto>>()
            .Should().HaveCount(1);
        
    }
}
