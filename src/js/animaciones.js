const caja1 =  document.getElementById("caja1");
const caja2 =  document.getElementById("caja2");
const caja3 =  document.getElementById("caja3");
const caja4 =  document.getElementById("caja4");
function boton1(){
      caja1.classList.remove('animacion1');
      setTimeout(() => caja1.classList.add('animacion1'), 100);
}
function boton2(){
    caja2.classList.remove('animacion2');
    setTimeout(() => caja2.classList.add('animacion2'), 100);
}
function boton3(){
    caja3.classList.remove('animacion3');
    setTimeout(() => caja3.classList.add('animacion3'), 100);
}
function boton4(){
    caja4.classList.remove('animacion4');
    setTimeout(() => caja4.classList.add('animacion4'), 100);
}