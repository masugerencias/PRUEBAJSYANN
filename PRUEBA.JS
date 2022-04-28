/* Solicita al usuario que elija entre la opción 1 o 2:

1 Se le debe pedir dos número al usuario e indicar si son pares y múltiplos de 7 ambos, uno de ellos o ninguno.
2Se le debe pedir una palabra y comprobar si empieza o termina por a.

Solicita una frase al usuario y contando los espacios que tiene, indica de cuántas palabras consta. */

/* 
Por favor elige una de las dos opciones:

opcion 1: function parymultiplo(){}
opcion 2: function palabra y comprobar (){}

opcion1:

si elges a: dime dos numeros 
        dime el primero
        dime el segundo

        para el primero:
    si es par y multiplo de 7: alert es par y multiplo de 7
    si es par: alert es par
    si es multiplo de 7: alert multiplo de 7
    si no es ni par ni multipo de 7: alert: no es par ni multiplo de 7. 
    
    
        para el segundo:
             si es par y multiplo de 7: alert es par y multiplo de 7
            si es par: alert es par
            si es multiplo de 7: alert multiplo de 7
            si no es ni par ni multipo de 7: alert: no es par ni multiplo de 7.
        */

    
//EJERCICIO 1 CON SWITCH
/* 
alert('Tienes que decirme dos numeros y te diré si son pares, pares y multiplo de 7, solo multiplo de 7 o ninguno de esos')

let num1=parseInt(prompt ('Dime tu primer numero'));
let num2=parseInt(prompt ('Dime tu segundo numero'));

switch(num1){
    case'1':{(num1 %2==0&&  num1 %7==0);//par y multiplo
    alert('El' + num1 + ' es par y múltiplo de 7');
    break;
    }
    case'2':{(num1 %2==0 && num1 %7!=0);//solo par
    alert('El ' + num1+' es simplemente PAR');
    break;}

    case'3':{(num1 %2!=0 && num1 %7==0);//solo multiplo
    alert('El '+num1+' es sólo multiplo de 7');
    break;}

    case'4':{(num1 %2!=0&&  num1 %7!=0); //ninguno de los dos
    alert('El '+ num1 + 'no es ni par ni multiplo de 7');
    break;}
    
}
 */
       



//OPCION 1 CON IF, funciona, aunque podría poner cada IF en un case de SWITCH

function opcionprimera(){
alert('Tienes que decirme dos numeros y te diré si son pares, pares y multiplo de 7, solo multiplo de 7 o ninguno de esos')
let num1=parseInt(prompt ('Dime tu primer numero'));

//par y multiplo num1               
        if (num1 %2==0&&  num1 %7==0) 
            {alert('El' + num1 + ' es par y múltiplo de 7');
          } else if (num1 %2==0 && num1 %7!=0) {
            alert('El ' + num1+' es simplemente PAR');
          } else if (num1 %2!=0 && num1 %7==0) {
              alert('El '+num1+' es sólo multiplo de 7');
          }else {alert('no es nada de losa nteriores') }
          
//par y multiplo num2
let num2=parseInt(prompt ('Dime tu segundo numero'));


          if (num2 %2==0&&  num2 %7==0) 
          {alert('El' + num2 + ' es par y múltiplo de 7');
        } else if (num2 %2==0 && num2 %7!=0) {
          alert('El ' + num2+' es simplemente PAR');
        } else if (num2 %2!=0 && num2 %7==0) {
            alert('El '+num2+' es sólo multiplo de 7');
        }else {alert('no es nada de los anteriores') }


    }

  // OPCION 2 CON IF
function opcionsegunda(){
        let palabra = prompt('Dime una palabra y te diré si empieza o termina por "A"');
        let letra = palabra[0];


        for(let i=0;i<palabra.length;i++);
        if(palabra[0]=='a'){
            alert('tu palabra empieza por A')
        } else if(palabra[palabra.length-1]=='a'){
            alert('tu palabra SI acaba en A')
        }
            
    
    }
           
 

    //EJERCICIO 2
    //Solicita una frase al usuario y contando los espacios que tiene, indica de cuántas palabras consta. */

function ej2(){
    let frase=(prompt('Escribe una frase y te digo cuantas palabras tiene'));
    let contador=0;
    let espacios=0;

    for(let i=0;i<frase.length;i++){
                if(frase[i]==' '){
              contador++;}
                }
    alert(contador+1);
    
  }