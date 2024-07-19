                        // ACTIVIDAD

// 1). Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
// function calcularMasaCorporal(altura, peso) { // Se asigna los valores que queremos calcular
//     var imc = peso / (altura*altura); //Se realiza la operación dentro de la función; var: es para número como let es para letra
//     return imc; //Se debe retornar la variable imc 
// }
// let masaCorporal = calcularMasaCorporal(2, 160) //Si se quiere contar con la info, se establece otra variable y se encierra la la función
// console.log(masaCorporal)

// 2). Crea una función que calcule el valor del factorial de un número pasado como parámetro.

// function calcularFactorial(numero) {
//     if (numero === 0 || numero === 1) {
//       return 1;
//     } else {
//       return numero * calcularFactorial(numero - 1);
//     }
//   }
//   // Ejemplo de uso
//   let numero = prompt('Dame un número');
//   let resultado = calcularFactorial(numero);
//   console.log(`El factorial de ${numero} es ${resultado}`);
  
//   3). Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales. Para esto, considera la cotización del dólar igual a R$4,80. 

// function convetirMoneda(dolar) { //Aqui se crea una función
//     var cotiacionDolar = 4.80; //se declara la varible cotizaciondolar
//     var realies = dolar * cotiacionDolar; //De declara la variable reales
//     return realies;    //returnamos reales, siempre que se declare debe retornar, ya sea dentro de una variable o en return
// }
                        //aquí se pasa los parametros
// let valorEnDolar = 50;
// let valorEnReales = convetirMoneda(valorEnDolar);
// console.log(`${valorEnDolar} Dolares es R ${valorEnReales}`); 

    // 4).Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

    // function calcuarMedidas(altura, anchura) {
    //     var area = altura * anchura;
    //     var perimetro = (altura*2)+(anchura*2);
    //     console.log("Área: " + area);
    //      console.log("Perímetro: " + perimetro);
    // }

    // let medidas = calcuarMedidas (prompt('Dame la altura'), prompt('dame la anchura'))
    
    // 5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

    // function calcularCirculo(pi , radio) {
    //     var area = pi * (radio*radio);
    //     var perimetro = 2 * pi* radio;
    //     console.log(`Area = ${area}`)
    //     console.log(`Perimetro = ${perimetro}`)
    // }

    // let medidas = calcularCirculo (3.14, prompt('Dame el radio'))

      // 6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

      function mostrarTablaDeMultiplicar(numero) {
        for (var i = 1; i <= 10; i++) {
          var resultado = numero * i;
          console.log(numero + " x " + i + " = " + resultado);
        }
      }
      // Ejemplo de uso
      let numero = 7;
      mostrarTablaDeMultiplicar(numero);
      