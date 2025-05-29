using System.ComponentModel.DataAnnotations;

namespace TiendaMVC.Models
{
    /// <sumary>
    ///     Modelo de user para los datos de atenticacion
    /// </sumary>
    public class User
    {
        [Required(ErrorMessage = "Nombre de usuario es obligatorio")]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "El username debe de tener entre 3 y 50 caracteres")]
        [Display(Name = "Usuario")]
        public string Username { get; set; } = string.Empty;

        [Required(ErrorMessage = "La contraseña es obligatorio")]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "La contraseña debe de tener entre 6 y 50 caracteres")]
        [DataType(DataType.Password)]
        [Display(Name = "Contraseña")]
        public string Password { get; set; } = string.Empty;

    }
}