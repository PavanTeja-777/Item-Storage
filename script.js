if (!localStorage.getItem(1000)) {
    localStorage.setItem(1000,1)
    localStorage.setItem(1001,JSON.stringify([]))
}

const add_func = () => {
    let index = parseInt(localStorage.getItem(1000))   
    let item_name = document.querySelector('#item-name-input').value
    let item_qty = document.querySelector('#item-qty-input').value

    let data = JSON.parse(localStorage.getItem(1001))
    data.push([item_name,item_qty])
    localStorage.setItem(1001, JSON.stringify(data))

    localStorage.setItem(1000, index + 1)
    let table = document.querySelector("table")
    let row = table.insertRow(index)
    row.insertCell().textContent = item_name
    row.insertCell().textContent = item_qty

    document.querySelector('#item-name-input').value = ''
    document.querySelector('#item-qty-input').value = ''
}

const update = () => {
    let table = document.querySelector("tbody")
    let data = JSON.parse(localStorage.getItem(1001))

    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let row = table.insertRow(index)
        row.insertCell().textContent = element[0]
        row.insertCell().textContent = element[1]
    }
}

const clear_data = () => {
    localStorage.setItem(1000,1)
    localStorage.setItem(1001,JSON.stringify([]))
    window.location.reload()
}

window.onload = () => {
    update()
}