using System.Data.SqlClient;
using PrimeraAPI.Models;
using Microsoft.Extensions.Configuration;

namespace PrimeraAPI.Data
{
    public class ProductoService
    {
        private readonly string _connecionString;

        public ProductoService(IConfiguration config)
        {
            _connecionString = config.GetConnectionString("TiendaDB");
        }
    }

    // Obtener todos los productos
    public async Task<Producto> GetAllAsync()    
    {
        var productList = new List<Producto>();
        using var connection = new SqlConnection(_connecionString);
        await open.OpenAsync();
        using var cmd = new SqlCommand("SELECT * FROM Productos", conn);
        using var reader = await cmd.ExecuteReaderAsync();
        while (await reader.ReadAsync())
        {
            productList.Add(new Producto
            {
                GetByIdAsync = reader.GetInt32(0),
                Nombre = reader.GetString(1),
                Precio = reader.GetDecimal(2)
            });
        }
    }

    // Obtener producto pot ID
    public async Task<Producto> GetByIdAsync()
    {

    }

    // Crear un nuevo producto
    public async Task<Producto> CreateIdAsync(Producto producto)
    {

    }

}