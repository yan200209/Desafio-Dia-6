let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];
let comida = "";
let categoria = "";
let eliminar = "";

let agregarMas = "sí";  // valor inicial como "sí", porque la primera vez siempre va a entrar en el while
while(agregarMas != "no"){
    if(frutas.length === 0 && lacteos.length === 0 && dulces.length === 0 && congelados.length === 0){
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde '1.sí' o '2.no'.");
    } else {
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde '1.sí', '2,no' o '3.eliminar'.");
    }
	
    while (agregarMas != "sí" && agregarMas != "no" && agregarMas != "1" && agregarMas != "2" && agregarMas != "eliminar") { 
	alert(`¡Operación no reconocida!`);
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde '1.sí' o '2.no'.");
    }
	
    if (agregarMas === "2" || agregarMas === "no"){  
	break;
    }
	
    if(agregarMas === "sí" || agregarMas === "1"){
        comida = prompt("¿Qué comida deseas agregar?");
        categoria = prompt("¿En qué categoría encaja esta comida: 'frutas', 'lacteos', 'dulces' o 'congelados'?");
        if(categoria === 'frutas' || categoria === '1'){
            frutas.push(comida);
        } else if (categoria === 'lacteos' || categoria === '2'){
            lacteos.push(comida);
        } else if (categoria === 'dulces'  || categoria === '3'){
            dulces.push(comida);
        } else if (categoria === 'congelados' || categoria === '4'){
            congelados.push(comida);
        } else {
            alert("Esa categoria no está predefinida.")
        }

    } else if(agregarMas === "eliminar" || agregarMas == "3"){

	if(frutas.length === 0 && lacteos.length === 0 && dulces.length === 0 && congelados.length === 0){  //si la lista está vacía (tratamiento de bug, en caso de que la persona escriba "eliminar" incluso cuando solo se muestren las opciones "sí" y "no")
		alert(`¡La lista está vacía!`);
	} else {  
		eliminar = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}\n\n¿Qué producto deseas eliminar?`);
		if(frutas.indexOf(eliminar) != -1){
			frutas.splice(frutas.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else if(lacteos.indexOf(eliminar) != -1){
			lacteos.splice(lacteos.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else if (dulces.indexOf(eliminar) != -1){
			dulces.splice(dulces.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else if (congelados.indexOf(eliminar) != -1){
			congelados.splice(congelados.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else {
			alert(`¡No fue posible encontrar el ítem dentro de la lista!`)
		}
	}
    }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}`);