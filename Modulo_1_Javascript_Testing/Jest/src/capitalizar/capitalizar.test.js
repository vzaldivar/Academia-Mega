const capitalizar = require("./capitalizar");

test("Capitalizar hola -> Hola", ()=>{
    expect(capitalizar("hola")).toBe("Hola");
})

test("Capitalizar JAVASCRIPT -> Javascript", ()=>{
    expect(capitalizar("JAVASCRIPT")).toBe("Javascript");
})

test("Capitalizar victorzaldivar -> VictorZaldivar", ()=>{
    expect(capitalizar("victorzaldivar")).toBe("VictorZaldivar");
})


