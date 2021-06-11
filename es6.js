// Template literal

let firstName = 'Rana';
let lastName = 'fge';

let fullName = `${firstName } ${lastName}`

console.log(fullName) // Rana fge

let fullName2 = `${firstName + lastName}` //Ranafge
console.log(fullName2)

document.getElementById('name1').innerText = fullName
document.getElementById('name2').innerText = fullName2


//Destructuring object

const personalInformation = {
    name_: 'Rana',
    nickName: 'fge',
    city: 'Dhaka',
}

const { name_, nickName, city } = personalInformation

document.getElementById('info').innerText = name_ //Rana
document.getElementById('info1').innerText = nickName //fge
document.getElementById('info2').innerText = city //Dhaka

document.getElementById('info3').innerText = `${'Name ' +name_ + ' '+ nickName + ' ' + city}`


function addressMaker(city, state) {
    const newAddress = { city, state }

    document.getElementById('address').innerText = newAddress.city
    return document.getElementById('address1').innerText = newAddress.state


}

addressMaker('durgapur', 'Rangpur')



function addressMakerWithObject(address) {
    const newAddress = {
        city: address.city,
        state: address.state,
        country: address.country
    }
    return newAddress
}

const objAddress = addressMakerWithObject({ city: 'Dhaka', state: 'Rangpur', country: 'Bangladesh' })

console.log(objAddress)
console.log(objAddress.city) //Dhaka
console.log(objAddress.state) //Rangpur
console.log(objAddress.country) //Bangladesh


document.getElementById('city').innerText = objAddress.city
document.getElementById('state').innerText = objAddress.state
document.getElementById('country').innerText = objAddress.country


//for loop

let incomes = [30000, 40000, 50000, 80000];


let total = 0;
// update list item
for (let income of incomes) {
    income += 100

}

console.log(total);
console.log(incomes);


//spread operator


let numbers = [1, 2, 3, 4];

let numbers2 = [...numbers, 5, 6, 7] // copy numbers list

console.log(numbers);
console.log(numbers2);


// add item in a list

numbers2.push(true);

console.log(numbers2)