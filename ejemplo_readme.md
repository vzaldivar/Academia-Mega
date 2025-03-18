# Sesión 2: Introducción a JavaScript y Testing

## Fecha: 15/03/2025

## Objetivos de la Sesión

- Comprender los fundamentos de JavaScript moderno (ES6+)
- Aprender sobre el entorno de testing Jest
- Implementar tests unitarios básicos

## Temas Cubiertos

1. **Fundamentos de JavaScript**
   - Variables y constantes (let, const)
   - Funciones flecha
   - Desestructuración de objetos y arrays
   - Operadores spread y rest

2. **Introducción al Testing**
   - ¿Por qué es importante el testing?
   - Tipos de tests: unitarios, integración, e2e
   - Estructura de un test con Jest

## Ejercicios Realizados

### Ejercicio 1: Calculadora con Tests

```javascript
// calculator.js
export const sum = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
};

// calculator.test.js
import { sum, subtract, multiply, divide } from './calculator';

describe('Calculator', () => {
  test('adds two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 1)).toBe(0);
  });
  
  test('subtracts two numbers correctly', () => {
    expect(subtract(3, 1)).toBe(2);
    expect(subtract(1, 3)).toBe(-2);
  });
  
  test('multiplies two numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
  });
  
  test('divides two numbers correctly', () => {
    expect(divide(6, 2)).toBe(3);
    expect(divide(7, 2)).toBe(3.5);
  });
  
  test('throws error when dividing by zero', () => {
    expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
  });
});
```

### Ejercicio 2: Manejo de Arrays con Tests

He implementado funciones para manipular arrays y sus respectivos tests unitarios, verificando comportamiento con diferentes tipos de inputs y edge cases.

## Desafíos Encontrados

- **Configuración del entorno de Jest**: Tuve problemas iniciales con la configuración de Babel para usar sintaxis ES6. Lo resolví siguiendo la documentación oficial y ajustando el archivo `babel.config.js`.
- **Testing de excepciones**: Aprendí a usar correctamente la sintaxis para verificar que una función lanza excepciones específicas.

## Recursos Adicionales

- [Documentación oficial de Jest](https://jestjs.io/docs/getting-started)
- [JavaScript Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
- [ES6 Features Overview](https://github.com/lukehoban/es6features)

## Próximos Pasos

- Investigar sobre mocks y spies en Jest
- Practicar TDD (Test-Driven Development) en el próximo ejercicio
- Revisar conceptos de asincronía en JavaScript para la próxima sesión

## Reflexiones Personales

Esta sesión me ha ayudado a comprender la importancia de escribir tests desde el inicio del desarrollo. Me ha gustado especialmente cómo Jest proporciona un feedback claro sobre los tests fallidos, lo que facilita la depuración. Necesito practicar más con funciones asíncronas y su testing.

---

*Entregable correspondiente a la Semana 2 del Módulo 1: JavaScript Testing*