const thead= document.getElementById("tableHead")
const headings = ["Name", "Price",]
headings.forEach((head) => {
    thead.innerHTML += `<th>${head}</th>`
})

const tbody = document.getElementById("tableBody")
const products = [{ id: 0, name: 'Phone', price: '100 AZN' },
{ id: 2, name: 'Kompüter', price: '200 AZN' },
]
products.forEach((product) => {
    tbody.innerHTML += `
    <tr>
    <td>${product.name}</td>
    <td>${product.price}</td>
    </tr>
    `
})