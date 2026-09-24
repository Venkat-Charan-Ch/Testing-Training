let inventory = [
    {
    name: "Laptop",
    category: "Electronics",
    quantity: 10,
    reorderLevel: 5
    },
    {
    name: "Chair",
    category: "Office Supplies",
    quantity: 20,
    reorderLevel: 10
    },
    {
    name: "Pen",
    category: "Stationery",
    quantity: 0,
    reorderLevel: 50
    },
    {
    name: "Notebook",
    category: "Stationery",
    quantity: 50,
    reorderLevel: 20
    },
    {
    name: "Desk",
    category: "Office Supplies",
    quantity: 15,
    reorderLevel: 5
    },
    {
    name: "Vaccum Cleaner",
    category: "Cleaning Supplies",
    quantity: 3,
    reorderLevel: 10
    }
];
let table = document.querySelector("#inventoryTable");
table.innerHTML = '';
inventory.forEach((item) => {
    let row = `
        <tr>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.quantity}</td>
            <td>${item.reorderLevel}</td>
            <td>${item.quantity > item.reorderLevel ? "In Stock" : item.quantity > 0 ? "Low Stock" : "No Stock"}</td>
            <td>
                <button onclick = "editItem(index)">Edit</button>
                <button onclick = "deleteItem(index)">Delete</button>
            </td>
        </tr>
    `;
    table.innerHTML += row;
});