const suma = require("./suma");

test("Suma 2 + 3 es igual a 5", ()=>{
    expect(suma(2,3)).toBe(5);
});
