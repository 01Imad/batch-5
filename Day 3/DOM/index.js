const data = [
    {
        carName: "City",
        manf: "Honda",
        make: 2019,
        price: 5000000
    },
    {
        carName: "A4",
        manf: "Audi",
        make: 2016,
        price: 50000000
    }
]

const carDiv = document.getElementById("cars")

const showCars = () => {
    var html = "<h1>Hello</h1>"
    data.forEach((c, i) => {
        html += `<div class="border">
                    <h2>${c.carName}</h2>
                    <h3>${c.manf}</h3>
                    <p>${c.make}</p>
                    <p>${c.price}</p>
                    <button onclick="update(${i})">update</button>
                    <button>delete</button>
                </div>
                `
    })
    carDiv.innerHTML = html;
}

const onSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    const carName = document.getElementById("carName").value;
    const manf = document.getElementById("manf").value;
    const make = document.getElementById("make").value;
    const price = document.getElementById("price").value;

    let newData = {
        carName: carName,
        manf: manf,
        make: make,
        price: price
    }
    data.push(newData)
}

document.getElementById("carForm")
    .addEventListener("submit", onSubmit)

const update = (i) => {
    const updateCar = data[i]
    const updateForm = document.getElementById("updateForm");
    updateForm.innerHTML = `
    <h1>Update Details</h1>
    <input type="text" name="carName" id = "updateCarName" placeholder="Car Name" value="${updateCar.carName}" >
    <input type="text" name="manf" id = "updateManf" placeholder="Manf" value="${updateCar.manf}" >
    <input type="text" name="make" id = "updateMake" placeholder="Make" value="${updateCar.make}" >
    <input type="number" name="price" id = "updatePrice" placeholder="Price" value="${updateCar.price}" >
    <button onclick="updateSubmit(${i})">Submit</button>
    `
}

const updateSubmit = (i) => {
    console.log(i);
    const carName = document.getElementById("updateCarName").value;
    const manf = document.getElementById("updateManf").value;
    const make = document.getElementById("updateMake").value;
    const price = document.getElementById("updatePrice").value;

    data[i] = {
        carName,
        manf,
        make,
        price
    }
    console.log(data)
}

