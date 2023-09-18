//Retorno de string
function devolverString(str){
    return str; 
}

devolverString("Me llamo Gonzalo")


//Retorno de suma
function suma(x, y){
    return x + y;
}

suma(2, 4);


//Retorno de resta
function resta(x, y){
    return x - y;
}

resta(6, 2);


//Retorno de multiplicación
function multiplicar(x, y){
    return x * y;
}

multiplicar(3, 10);


//Retorno de división 
function dividir(x, y){
    return x / y; 
}

dividir(4, 2);



//Comparación de numeros
function igualdad(x, y){
    if (x == y){
        return true;
    }else{
        return false;
    }
}

igualdad(2, 2);
igualdad(3, 5);


//Comparación de longitud de strings
function compararLongitur(str1, str2){
    if (str1 == str2){
        return true;
    }else{
        return false;
    } 
}

compararLongitur("Perro", "Perro")
compararLongitur("Barco", "Moto")


//Comparación de parámetro I
function menorQueNoventa(num){
    if (num < 90){
        return true;
    }else{
        return false;
    }
}

menorQueNoventa(80);
menorQueNoventa(100);


//Comparación de parámetro II
function mayorQueCincuenta(num){
    if (num > 50){
        return true;
    }else{
        return false;
    } 
}

mayorQueCincuenta(70);
mayorQueCincuenta(30);


//Retorno de módulo o resto
function obtenerResto(x, y){
    return x % y;
}

obtenerResto(38, 12);


//Comprobar si es par
function esPar(num){
    if (num % 2 == 0){
        return true;
    }else{
        return false;
    }  
}

esPar(4);
esPar(7);


//Comprobar si es impar
function esImpar(num){
    if (num % 2){
        return true;
    }else{
        return false;
    }  
}

esImpar(9);
esImpar(6);


//Elevación de número al cuadrado
function elevarAlCuadrado(num){
    return num ** 2;
}

elevarAlCuadrado(2);


//Elevación de número al cubo
function elevarAlCubo(num){
    return num ** 3;
}

elevarAlCubo(4);


//Elevación de número a un exponente
function elevar(num, exponent){
    return num ** exponent;
}

elevar(2, 3);


//Redondeo de número
function redondearNumero(num){
    return Math.round(num);
}

redondearNumero(49.80);


//Redondeo de número hacia arriba
function redondearHaciaArriba(num){
    return Math.ceil(num); 
}

redondearHaciaArriba(99.20);


//Retorno de número aleatorio
function numeroRandom(){
    return Math.random() * (1 - 0);
}

numeroRandom();


//Comparación de número positivo
function esPositivo(num){
    if (num > 0){
        return "Es positivo";
    }else if(num < 0){
        return "Es negativo";
    }else if(num == 0){
        return false;
    }
}

esPositivo(2);
esPositivo(-4);
esPositivo(0);


//Concatenación de strings I
function agregarSimboloDeExclamacion(str){
    return str + "!";
}

agregarSimboloDeExclamacion("This is amazing");


//Concatenación de strings II
function combinarNombres(nombre, apellido){
    return nombre + " " + apellido;
}

combinarNombres("Gonzalo", "Martos");


//Concatenación de strings III
function retornarSaludo(nombre){
    return "Buenos días" + " " + nombre + "," + " " + "¿Listo para trabajar?" + "."; 
}

retornarSaludo("Gonzalo");


//Operaciones matemáticas I
function areaDelRectangulo(alto, ancho){
    return alto * ancho;
}

areaDelRectangulo(10, 5);


//Operaciones matemáticas II
function perimetroDelCuadrado(lado){
    return lado ** 4;
}

perimetroDelCuadrado(2);


//Operaciones matemáticas III
function areaDelTriangulo(base, altura){
     return (base * altura) / 2;
}

areaDelTriangulo(5, 8);


//Operaciones matemáticas IV
function deEuroAdolar(euro){
     let cambio = 1.20;
     let dolar = euro * cambio;
     return dolar;
}

deEuroAdolar(1);


//Condicionales
function esVocal(letra){
    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        return "Es vocal";
    }else if(letra.length > 1){
        return "Dato incorrecto"
    }
}

esVocal("a");
esVocal("Gonza");