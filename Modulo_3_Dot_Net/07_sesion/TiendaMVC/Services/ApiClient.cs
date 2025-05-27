using TiendaMVC.Models;
using System.Net.Http.Headers;

namespace TiendaMVC.Services
{
    public class ApiClient
    {
        private readonly HttpClient _http;
        private readonly IHttpContextAccessor _context;

        public ApiClient(HttpClient http, IHttpContextAccessor context)
        {
            _http = http;
            _context = context;

            // Si es que hay un token de sesion, lo incluimos en cada peticion
            var token = _context.HttpContext!.Session.GetString("JWToken");
            if (!string.IsNullOrEmpty(token))
                _http.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
        }

        // Autenticacion
        public async Task<bool> LoginAsync(User user)
        {
            var response = await  _http.PostAsJsonAsync("/api/auth/login", user);
            if (!response.IsSuccessStatusCode) return false;
            var obj = await response.Content.ReadFromJsonAsync<TokenResponse>();
            _context.HttpContext!.Session.SetString("JWToken", obj!.Token);
            return true;
        }
    }

    public class TokenResponse { public string Token { get; set; } = ""; }
}
