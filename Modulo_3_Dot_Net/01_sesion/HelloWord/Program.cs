using System;
using System.Collections.Generic;

namespace HelloWord
{
    class Program    
    {
        private static Dictionary<string, string> usuarios = new Dictionary<string, string>
        {
            {"admin", "qwerty"},
            {"usuario", "pass"},
            {"test", "test"}
        };

        static void Main(string[] args)
        {
            // Mensaje de bienvenida
            Console.WriteLine("Este es el programa oficial de Hola Mundo");
            Console.WriteLine("Tienes que iniciar sesion");

            // Definir el usuario y la contraseña
            // string? usuariCorrecto = "admin";
            // string? passCorrecta = "qwerty";

            Console.WriteLine("Escribe tu usuario");
            string? usuarioIngresado = Console.ReadLine();

            Console.WriteLine("Escribe tu contraseña");
            string? passIngresada = Console.ReadLine();                        

            if (usuarioIngresado == null)
            {
                usuarioIngresado = "";
            }

            if (passIngresada == null)
            {
                passIngresada = "";
            }

            if (usuarios.ContainsKey(usuarioIngresado) && usuarios[usuarioIngresado] == passIngresada)
            {
                Console.WriteLine("Has ingresado con exito");
                for (int i = 1; i <= 50; i++)            
                {
                    Console.WriteLine($"{i}. Hola Usuario, gracias.");    
                }
                Console.WriteLine("\n Presiona Enter para salir del programa");
                Console.ReadLine();
            }
            else
            {
                Console.WriteLine("Contraseña y/o usuario incorrecto");
                Console.WriteLine("\n Presiona Enter para salir del programa");
                Console.ReadLine();
            }
        }
    }
}
