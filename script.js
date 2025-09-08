document.addEventListener("DOMContentLoaded", ()=>{

    const departmentStaff ={
       'ICT': [
           {name: "Ibrahim Dauda",duty:"Web Dev"},
           {name:"Emmanuel Chuma"},
           {name:"Seungwater Kelvin"},
           {name:"Emmanuel Toriola"},
           {name:"Daniel Ademola"},
           {name:"Munira Usman"},
           {name: "Treasure Isah"},
           {name: "Ibrahim Dauda"},
           {name: "David Ekaeda"}
       ],
       'AIS': [
        { name: 'Favour Byencit'},
        {name: 'John Okafor'},
        {name: "Paul Silas"},
        {name: "Cynthia Ofori"},
        {name: "David Adeyemi"},
        {name: "Dabiel Nnamdi"},
        {name: "Samuel Amos"}

       ],
       'communication': [
        {name: 'Nathan Bassey'},
        {name: "Abduljeleen Sabo"},
        {name:"Victor Emenike"},
        {name:"Patience Ojokwor"},
        {name:"Ruth Kadiri"},
        {name:"Salle Muhammad"}
       ],
       'account': [
        {name:"Zayyan Habibat"},
        {name:"Rashedat Umar"},
        {name:"Victory Dorcas"},
        {name:"Paul Passey"},
        {name:"Halima Esuola"},
        {name:"Zayyan Habibat"},
        {name:"David Polycap"},
       ],
       'mechanic': [
        {name:"Abdul Jalal"},
        {name:"Sani Abubarkar"},
        {name:"Esther Jacob"},
        {name:"Taiwo Oye"},
        {name:"Miracle Endurance"},
        {name:"Bello Vincent"},
        {name:"Kabir Usman"},
        {name:"Amos Abah"}
       ],
    }

    let selectedDept = document.getElementById("department")
    let list = document.querySelector(".shape-container")
    console.log(list)

    if(selectedDept){
        selectedDept.addEventListener('change', (event)=>{
            let selectedDeptValue = event.target.value;
            list.innerHTML = "";

            if(selectedDept && departmentStaff[selectedDeptValue]){
                let allStaff = departmentStaff[selectedDeptValue];

                allStaff.forEach(element => {
                    list.innerHTML += `
        <div class="rectangle first">

                       <p>${element.name} </p>
        </div>

                    `
                });
            }



        }) 
    }

    
 
})


// VARIABLE 
var a = 2
let name  = 'sweetie'

// let nam1

// const Pi = 3.142;
// const dod   = '33'


// Array

let Names  = ["sweetie", "emma", "john"]

// console.log(Names)


let person = {
    name:"john",
    age: 20,
    height: 6
}


// console.log(person.name)