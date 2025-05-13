const {multiplicar, dividir} = require("./math");

test("Multiplicar 3 * 4 = 12", ()=>{
    expect(multiplicar(3,4)).toBe(12);
})

test("Dividor 10 / 2 = 5", ()=>{
    expect(dividir(10,2)).toBe(5);
})

test("No se puede dividir entre 0", ()=>{
    expect(()=>dividir(10,0).toThrow("No se puede dividir entre 0"));
})
