const carrito=[];
const añadir = prompt("Seleccione una fruta");
carrito.push(añadir);
while( confirm('¿Quiere añadir alfuna fruta mas?')){

    const añadir = prompt("Añade otra fruta");
   
    carrito.push(añadir);
}

console.log(carrito);