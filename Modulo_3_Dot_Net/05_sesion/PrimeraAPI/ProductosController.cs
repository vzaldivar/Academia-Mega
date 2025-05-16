using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq; 
using PrimeraAPI.Models;
using PrimeraAPI.Data;

namespace PrimeraAPI.Controllers
{
    // api/
    [ApiController]
    [Route("api/[controller]")]
    public class ProductosController : ControllerBase
    {
        // Lectura a la BD
        private readonly ProductoService _service;

        public ProductosController(ProductoService service)
        { 
            _service = service;
        }


        // CREATE

        // POST
        [HttpPost]
        public ActionResult<Producto> Create(Producto newProd)
        {
            // newProd.id = _datos.Max(p => p.id) + 1;
            // _datos.Add(newProd);
            // return CreatedAtAction(nameof(GetById), new { id = newProd.id }, newProd);
            return NoContent();
        }

        // READ

        // GET /api/productos
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var lista = await _service.GetAllAsync();
            return Ok(lista);
        }

        // GET /api/productos/id
        [HttpGet("{id}")]
        public ActionResult<Producto> GetById(int id)
        {
            // var product = _datos.FirstOrDefault(p => p.id == id);

            // if (product == null)
            //     return NotFound();

            // return Ok(product);
            return NoContent();
        }

        // UPDATE

        // PUT /api/productos/id

        [HttpPut("{id}")]
        public IActionResult Update(int id, Producto changeProduct)
        {
            // var product = _datos.FirstOrDefault(p => p.id == id);

            // if (product == null)
            //     return NotFound();

            // product.Nombre = changeProduct.Nombre;
            // product.Precio = changeProduct.Precio;

            // return Ok(product);
            return NoContent();
        }

        // DELETE

        // DELETE /api/productos/id

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            // var product = _datos.FirstOrDefault(p => p.id == id);

            // if (product == null)
            //     return NotFound();

            // _datos.Remove(product);

            // // return NoContent();
            // return Ok("Eliminado correctamente.");
            return NoContent();
        }

    }
}
