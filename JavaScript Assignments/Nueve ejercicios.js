const Nueve_funciones = (a) =>{ 

    if(a == 1){    

        /* 1) 1- Declarar un arreglo con 50 espacios (puedes iniciar todos los valores en 0 si te es más cómodo).
        Mediante un ciclo recorre cada una de las posiciones de este arreglo y asignale un nuevo valor.
        Ejemplo:
            arreglo [50 elementos]
            ciclo:
                arreglo[posición0] = nuevoValor
                .
                .
                .
                .
            fin de Ciclo;
            imprime el arreglo con sus nuevos valores. */

        let A = Array.from( {length: 50}, () => Math.floor(Math.random()*10));
        console.log(`Este arreglo contiene ${A.length} elementos`);
        console.log(`Estos son los primeros diez elementos del arreglo original ${A.slice(0,9)}`);
        for (let i = 0; i<A.length; i++){
            A[i] = Math.floor(Math.random()*10);
        }
        console.log(`Estos son los primeros diez elementos del nuevo arreglo ${A.slice(0,9)}`);
    }

    else if (a ==2){

        /* 2)  2. Desarrolla una función para: Suma, Resta, Multiplicación, división 
        (Cada función debe hacer sólo una de estas operaciones, en total tendrás 4 funciones) 
        Cada función debe recibir 2 parámetros (ten en cuenta la división entre 0, 
        si llega el 0 que muestre una alerta mediante Alert(); ). 
        Imprime en consola los resultados de llamar cada función. 
        OPCIONAL: Que todas estas funciones sean llamadas mediante una función principal en la cual imprimas
        todos los resultados (para ello cada función de operación debe regresar el resultado para poder 
        imprimirlo en la función principal).*/

        const Operaciones = (a,b) => {
            console.log(`Suma: El valor de ${a} + ${b} es igual a ${a+b}`);
            console.log(`Resta: El valor de ${a} - ${b} es igual a ${a-b}`);
            console.log(`Multiplicaciòn: El valor de ${a} * ${b} es igual a ${a*b}`);
            if(b == 0){
                console.log(`División: La operación ${a} / ${b} no es posible. Pues no se puede dividir entre cero.`);
            }
            else{
                console.log(`División: El valor de ${a} / ${b} es igual a ${a/b}`);
            }

        }

        alert('Los valores que vas a operar tienen la estructura: \n' + 'Suma:  m + n \n' +  'Resta:  m - n  \n'+ 'Multiplicación: m * n \n' + 'División: m/n.');
        let m = parseFloat(prompt('Ingresa el valor m'));
        let n = parseFloat(prompt('Ingresa el valor n'));

        Operaciones(m,n);

    }

    else if(a == 3){
        /* 3) 3. Mediante un ciclo imprime la sumatoria de 0 hasta n. 
        Ejemplo:
            ciclo de 0 a n:
                0+1
                1+2
                .
                .
                .
                .
                .
                n-1 + n
            fin de ciclo.
            imprimir el resultado (Ejemplo: 0+1+2+3+4+5 = 15  sólo imprimir el resultado).
            OPCIONAL: Imprimir una cadena como la siguiente: "La suma de 0 a N es: 0 + 1 + 2 +3 + 5 = 15"*/

        var i = parseInt(prompt("Ingrese el nùmero que desea sumar"));
        var k = 0;
        var j;
        for(j = 0 ;j <= i; j++){
            k = k + j;
        }
        console.log(`La sumatoria de los números de 0 hasta ${5} es ${k} `);

    }

    else if(a == 4) {
        /* 4) 4. Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos que:
            En caso afirmativo el usuario responderá si
            En caso contrario responderá no.
        Si el usuario responde SÍ Imprima en consola: «irás a la cárcel».
        Si el usuario responde NO Imprima en consola: «irás a casa».
        Si recibe cualquier otra respuesta imprima en consola: "No reconozco su respuesta" */

        let confesion = prompt('¿Es usted culpable? Escriba "sí" o "no" , respete las minùsculas y los acentos.');

        if(confesion == "sí"){
            console.log(`Usted Sí irá a la cárcel por haber dicho que ${confesion}`);
        }
        else if(confesion == "no"){
            console.log(`Usted NO irá a la cárcel por haber dicho que ${confesion}`);

        }
        else{ 
            console.log('No reconozco la respuesta, solo puede ser "sí" o "no". Recargue la pàgina e intente de nuevo.');
        }
    }

    else if (a == 5) {
        /* 5) 5.  En un estacionamiento cobran $1.5 por hora o fracción. 
        Diseñe un algoritmo que determine cuanto debe pagar un cliente por el estacionamiento de su vehículo,
        conociendo el tiempo de estacionamiento en horas y minutos. */

        alert('A continuación ingrese la cantidad de horas que ha gastado y posteriormente, los minutos.')
        var horas = parseInt(prompt('Ingrese el número de horas que gastó, si fue menos de una hora, escriba "0"'));

        if(horas >= 0){
            console.log(`El número de horas fue: ${horas}`);
            horas = horas * 1.5;
        }
        else{
            console.log(`No es posible este número de horas: ${horas}.`)
        }
        var minutos = parseInt(prompt('Ingrese el número de minutos que gastó.'))

        if (minutos > 0 && minutos < 60){
            console.log(`El número de minutos ingresado fue: ${minutos}`);
            minutos = 1.5
        }
        else{
            console.log(`Eso que tú me pides, es imposible: ${minutos} minutos`);
        }

        console.log(`El total a pagar es $ ${horas + minutos}. Si no paga, abandone toda esperanza de volver. UwUr`);
        }
    /* 6) 6. Diseñe un programa que determine si un número es par o impar. */

    else if (a == 6){
    
        let numero = parseFloat(prompt('Ingrese un número entero para saber si es par o impar'));
        if (Number.isInteger(numero)== true){
            if (numero%2 == 0 || numero == 0){
                console.log('Este número es par');
            }
            else{
                console.log('Este número es impar');
            }
        }
        else{
            console.log(`Usted debe de ingresar un valor numérico entero. ${numero} no es válido`);
        }
    }
    
    else if (a == 7){
    
        /* 7) 7. Diseñe un programa que liste del 0 al 100. 
        Tanto de forma ascendente como de forma descendente. OPCIONAL: Que imprima todos los primos de 0 a 100. */

        /* Ascendente */
        console.log('Esta es la lista ascendente.');
        for (let i = 0; i<= 100; i++){
            console.log(i);
        }
        console.log('Esta es la lista descendente.');
        /* Descendente */
        for(let i = 100; i>=0; i--){
            console.log(i);
        }
        console.log('Esta es la lista de los números primos del 0 al 100.');
        /*Números primos  */
        var B = [2];

        for(let j = 3; j<= 100; j++){
            let m = 0;
            
            for(let k = 0;  k< B.length; k++){
                
                if(j%B[k] != 0){    
                    m++;
                    
                    if(m == B.length ){    
                        B.push(j);
                                    }
                }
            }
        }
        console.log(B);

    }

    else if(a == 8){

        /* 8) 8. El promedio de prácticas de un curso se calcula en base a cuatro prácticas calificadas de las cuales
        se elimina la nota menor y se promedian las tres notas más altas.
        Diseñe un algoritmo que determine la nota eliminada y el promedio de prácticas de un estudiante. */

        var A = [];
        var nota1 = parseFloat(prompt('Ingrese la primera nota'));
        var nota2 = parseFloat(prompt('Ingrese la segunda nota'));
        var nota3 = parseFloat(prompt('Ingrese la tercera nota'));
        var nota4 = parseFloat(prompt('Ingrese la cuarta nota'));
        A.push(nota1, nota2, nota3, nota4);
        console.log(`Las notas ingresadas fueron ${A}`);
        A.sort();
        console.log(`La nota más baja es ${A[0]}`);
        console.log(`El promedio se calculará con ${A[1]}, ${A[2]}, ${A[3]}`);
        console.log(`El promedio otorgado es ${(A[1] + A[2] + A[3])/3} `);

    }

    else if (a == 9) {
        /* 9) 9. En cada posición de un arreglo coloca una letra de tu nombre.
        Despues recorre ese arreglo con un ciclo e imprime letra por letra.*/

        var Gustavo = ["G","u","s","t","a","v","o"];
        for (let i = 0; i < Gustavo.length; i++){
            console.log(Gustavo[i]);
        }
    }

    else {
        alert('Opción no válida. Recargue la página e ingrese eñ número de la opcoón listada.')
    }
    /* 10.Haz un programa en el que el usuario pueda elegir una solución respecto a todos los anteriores problemas, 
    es decir, le listarás la lista de soluciones que brindarás (en este caso serán 9) y según lo que elija el usuario
    debes solucionarlo y pedirle los datos necesarios. */

}

alert('Ingrese la opción de función que desea ejecutar: \n' + '1) Arreglo de 50 elementos\n' + '2) Operaciones aritméticas\n' + '3) Sumatoria\n' + '4) Culpable\n' + '5) Estacionamiento\n' + '7) Listas del 0 al 100 y primos.\n' + '8) Promedio\n' + '9) Nombre\n');
var eleccion = parseInt(prompt('Ingrese el número de la opción que quiere consultar'));
Nueve_funciones(eleccion);