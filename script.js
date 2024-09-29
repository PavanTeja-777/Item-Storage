if (!localStorage.getItem(0)) {
    localStorage.setItem(0,1)
    localStorage.setItem(1,JSON.stringify([]))
}

const add_func = () => {
    let index = parseInt(localStorage.getItem(0))   
    let item_name = document.querySelector('#item-name-input').value
    let item_qty = document.querySelector('#item-qty-input').value

    let data = JSON.parse(localStorage.getItem(1))
    data.push([item_name,item_qty])
    localStorage.setItem(1, JSON.stringify(data))

    localStorage.setItem(0, index + 1)
    let table = document.querySelector("table")
    let row = table.insertRow(index)
    row.insertCell().textContent = item_name
    row.insertCell().textContent = item_qty

    document.querySelector('#item-name-input').value = ''
    document.querySelector('#item-qty-input').value = ''
}

const update = () => {
    let table = document.querySelector("tbody")
    let data = JSON.parse(localStorage.getItem(1))
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let row = table.insertRow(index)
        row.insertCell().textContent = element[0]
        row.insertCell().textContent = element[1]
    }
}

const clear_data = () => {
    localStorage.setItem(0,1)
    localStorage.setItem(1,JSON.stringify([]))
}

window.onload = () => {
    update()
}