const templateCard     = document.getElementById('template-card').content
const fragmento        = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('json/api.json')
        const data = await res.json()
        mostrarProductos(data)
    } catch (error) {
        console.log(error)
    }
}

const mostrarProductos = data => {
    console.log (data)
    data.forEach (producto => {
        templateCard.querySelector('h4').textContent = producto.nombre
        templateCard.querySelector('h5').textContent = producto.especie
        templateCard.querySelector('h6').textContent = producto.tipo_de_insecto
        templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
        const clone = templateCard.cloneNode(true)
        fragmento.appendChild(clone)
    });

    cards.appendChild(fragmento)
}