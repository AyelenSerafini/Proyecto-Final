 

document.addEventListener("DOMContentLoaded", function() 
    let cart = []();
    const products = [
        { id: 1, name: "Labial Rojo", price: 10 },
        { id: 2, name: "Base de Maquillaje", price: 25 },
        { id: 3, name: "Rímel", price: 15 }
    ];

    function updateCart() {
        const cartItems = document.getElementById("cart-items");
        const totalPriceElement = document.getElementById("total-price");
        cartItems.innerHTML = "";

        let totalPrice = 0;
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = ${item.name} - $${item.price};
            cartItems.appendChild(li);
            totalPrice += item.price;
        });

        totalPriceElement.textContent = Total: $${totalPrice};
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            const productId = parseInt(this.parentElement.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);
            cart.push(product);
            updateCart();
        });
    });

    document.getElementById("checkout").addEventListener("click", function() {
        if (cart.length > 0) {
            alert("Gracias por tu compra. Procesaremos tu pedido pronto.");
            cart = [];
            updateCart();
        } else {
            alert("Tu carrito está vacío.");
        }
    });




let titulo =document.getElementById ( DeliMarket)
const elementosClases = document.getElementsByClassName ("items")
for( let items of elementosClases) {
    items.style.color = "black";

}
const nuevoParrafo = document.createElement("p")
nuevoParrafo.textContent = "Gracias por su compra"
document.body.appendChild(nuevoParrafo)

const parrafos = document.getElementsByClassName("p")
for(let item of parrafos) {
    item.style.color = "orange"
}

const boton = document.getElementsByTagName("botoncito")
boton.addEventListener('click',() =>{alert("añadiste al carrito")})
 let container = document.getElementById("contenedor")
 let nombre = "DeliMarket"

 container.innerHTML = '<h1>Venta de Mercaderia ${nombre}</h1>'

 const descripcion = document.getElementById("descripcion")

 const inputDescripcion = getElementById("inputDescripcion")

 const botonAgregar = document.getElementById("agregarDescripcion")


 function agregarTarea(){
    const nuevaTarea = document.createElement('li')
    nuevaTarea.addEventListener('click', () => nuevaTarea.style.textDecoration = 'line-through')
    descripcion.appendChild(nuevaTarea) 
    inputDescripcion.value="";
}
botonAgregar.addEventListener('click', agregarTarea)
const formulario = document.getElementById("formulario")
formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value

    alert('Gracias, ${nombre}.tu formulariofue enviado con el mail ${email}')
    document.getElementById('nombre').value = ''
    document.getElementById('email').value = ''
})



