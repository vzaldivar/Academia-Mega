using Microsoft.Data.SqlClient;
using PrimeraAPI.Models;
using Microsoft.Extensions.Configuration;

namespace PrimeraAPI.Data
{
    public class ProductoService
    {
        private readonly string _connnectionString;

        public ProductoService(IConfiguration config)
        {
            string? connnectionString = config.GetConnectionString("TiendaDB");

            if (connnectionString == null)
            {
                connnectionString = "Server=localhost;Database=TiendaDB;Trusted_Connection=True;";
            }

            this._connnectionString = connnectionString;

        }

        // Obtener todos los productos
        public async Task<List<Producto>> GetAllAsync()
        {
            var productList = new List<Producto>();
            using var conn = new SqlConnection(_connnectionString);
            await conn.OpenAsync();
            using var cmd = new SqlCommand("SELECT Id, Nombre, Precio FROM Productos", conn);
            using var reader = await cmd.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                productList.Add(new Producto
                {
                    Id = reader.GetInt32(0),
                    Nombre = reader.GetString(1),
                    Precio = reader.GetDecimal(2)
                });
            }

            return productList;
        }

        // // Obtener producto by id
        // public async Task<List<Producto>> GetByIdAsync()
        // {
        //     return null;
        // }

        // // Crear un producto
        // public async Task<List<Producto>> CreateIdAsync()
        // {
        //     return null;
        // }
    }
}