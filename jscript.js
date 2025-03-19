//Name: Thaeem Fagan, ID: 2205592-->

let attempts = 3 

function login() {
      
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    if (!username || !password) {
        alert('Both fields are required.'); // Show an alert if fields are empty
    } 
    else {
        if (attempts >0) {
            password_check(username, password);
        }
        else {
            window.alert("Too many attempts. Try again later.")
        }
    
}
}


function password_check(user_name, pwd) {
var user = user_name;
var password = pwd;
    const users = [
        {User_name :"Admin",Password : "Password123"},
        {User_name :"Mary", Password : "Whatever"},
        {User_name : "Tom", Password : "Anything"},
        {User_name : "Alex", Password: "Adidas12"}
    ];
    
    for (let x = 0; x < users.length; x++) {
        if (users[x].User_name === user && users[x].Password === password) {
            window.location.href = "Product_page.html"; 
            return true;
        }
    }  
    attempts -= 1;
    window.alert("User name or Password is incorrect.")
    return false;
};


const products = [
    { id: "item1", name: "FC BARCELONA Home 14/15", price: 5000 },
    { id: "item2", name: "FC BARCELONA Away 15/16", price: 6000 },
    { id: "item3", name: "FC BARCELONA Third 16/17", price: 6000 },
    { id: "item4", name: "FC BARCELONA Away 16/17", price: 7000 },
    { id: "item5", name: "FC BARCELONA Home 17/18", price: 6000 },
    { id: "item6", name: "FC BARCELONA Away 18/19", price: 5000 },
    { id: "item7", name: "FC BARCELONA Home 19/20", price: 5000 },
    { id: "item8", name: "FC BARCELONA Away 21/22", price: 6500 },
    { id: "item9", name: "PSG MESSI ICONIC Away KIT 22/23", price: 7000 }
];

function confirmSelection() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let selectedProducts = [];
    let total = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedProducts.push({
                id: checkbox.id,
                price: parseFloat(checkbox.value),
                label: checkbox.nextElementSibling.textContent // Label for display
            });
            total += parseFloat(checkbox.value);
        }
    });

    // Store the selected products and total in localStorage
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    localStorage.setItem('total', total);

    window.location.href = 'Invoice.html'
}
    
    

    
