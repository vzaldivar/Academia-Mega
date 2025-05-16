using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq; 
using ProductoService.Models;
using PrimeraAPI.Data;

namespace PrimeraAPI.Controllers
{
    [ApiController]
    //[ApiVersion("1.0")]
    //[Route("api/v{version:apiVersion}[controller]")] // api/productos
    [Route("api/[controller]")] // api/productos

    public class ProductosController : ControllerBase
    {
        // Aqui seria la lectura de datos en BD
        private readonly ProductoService _service;

        public ProductosController(ProductoService service)
        {
            _service = service;
        }

        // - CREATE -
        [HttpPost] // POST /api/productos
        public ActionResult<Producto> Create(Producto nuevo)
        {
            return NoContent();
        }

        // - READ - 
        [HttpGet] // api/productos
        public async Task<ActionResult> GetAll()
        {
            var lista = await _service.GetAllAsync();

            return Ok(lista);
        }

        [HttpGet("{id}")] // GET /api/productos/1
        public ActionResult<Producto> GetById(int id)
        {
            var product = _datos.FirstOrDefault(p => p.id == id);
            if (product == null) return NotFound();

            return Ok(product);
        }

        // - UPDATE -
        [HttpPut("{id}")] // PUT /api/productos/1
        public IActionResult Update(int id, Producto actualizado)
        {
            var product = _datos.FirstOrDefault(p => p.id == id);
            if (product == null) return NotFound();

            product.Nombre = actualizado.Nombre;
            product.Precio = actualizado.Precio;

            return NoContent();
        }

        // - DELETE -
        [HttpDelete("{id}")] // DELETE /api/productos/1
        public IActionResult Delete(int id)
        {
            var product = _datos.FirstOrDefault(p => p.id == id);
            if (product == null) return NotFound();

            _datos.Remove(product);
            return Ok("El valor se ha eliminado correctamente");
        }
    }
}


