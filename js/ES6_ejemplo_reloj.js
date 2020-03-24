let btn = document.getElementById("btn");

//el evento 'click' del 'button', dispara un evento setTimeout(function(), delay) donde funcion() es el handler y el delay 
//es el tiempo en que se disparará el evento - es un evento con llamado diferido
btn.addEventListener('click', function(e){
  let t_bomba =  document.getElementById("inputBomba").value;
  alert("Corra en 5 segundos se activará la Bomba");
  setTimeout(function(){
  cuentaRegre(t_bomba); }, 5000); // llamado diferido 
 });

//es el handler al evento de llamado diferido - lleva como parametro el tiempo en que se configura la duracion del estallido
//dispara un evento setInterval(funcion(), intervalo)donde funcion() es el handler y el intervalo es lapso de tiempo en que 
//se disparará el evento. Este evento se disparará tantas veces hasta que el handler llame a la funcion clearInterval() que 
//detendra el evento repetitivo
function cuentaRegre(i) {
    let intervalo = setInterval(function() {
        document.getElementById("bomba").innerHTML = i;
        if (i === 0) {
            clearInterval(intervalo); // limpio intervalo para detener
            alert('BOOOOOM!!');
        }
        else {
            i--;
        }
    }, 1000);
}