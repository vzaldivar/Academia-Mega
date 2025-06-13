using Xunit;
using FluentAssertions;
using TiendaMVC.Models;
using System.ComponentModel.DataAnnotations;

public class ModelValidationTests
{
    [Theory]
    [InlineData("", "pwd")] // Simulando un usuario vacio
    [InlineData("user", "")] // Simulando una contraseña vacia

    public void User_Should_Fail_If_Field_Missing(string user, string pwd)
    {
        var dto = new User { Username = user, Password = pwd };

        var result = new List<ValidationResult>();
        var context = new ValidationContext(dto);
        var valid = Validator.TryValidateObject(dto, context, result, true);

        valid.Should().BeFalse();
        result.Should().NotBeEmpty();
        
    }
}