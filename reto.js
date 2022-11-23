        //creo la variable del número que hay que solucionar
let number = 73505468014063; 
        //creo la función para encontrar los números primos que multiplicados den como resultado number
function findMultiplierPrimeNumbers(number) {
        //inicio un contador c a partir del primer numero primo que es 2 
    let c = 2; 
        //inicio el bucle, que acaba cuando al descomponer number el resultado es 1    
    while(number > 1){ 
        //dividiremos number entre el número c del contador y si el resto es 0, el número c es primo
        if(number % c == 0){ 
            console.log(c + ' ');
        //se hace una asignación de división,se divide number entre el número c que ha entrado en el if
        //y el resultado de la división pasa a ser la variable number, que vuelve a entrar en el bucle ya que el resto es 0             
            number /= c; 
        }
        else c++;
    }
}  
findMultiplierPrimeNumbers(number); 
 


