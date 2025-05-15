using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]

public class SaludoController : ControllerBase
{

    // GET /saludo
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new { mensaje = "Hola desde SaludoController" });
    }

    // GET /saludo/personalizado/{name}
    [HttpGet("personalizado/{nombre}")]
    public IActionResult GetPersonalizado(string nombre)
    {
        var respuesta = new
        {
            mensaje = $"Hola, {nombre}"        
        };

        return Ok(respuesta);

    }

}