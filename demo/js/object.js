
// location file

const url = "scr/province.json";
//request

fetch(url)

// convert to

.then(function(response){
    return response.json();
})
//get result

.then(function(data){
    data.forEach(element => {
        const table = document.querySelector("table");
        table.innerHTML += 
            ` 
                <tr>
                    <td> ${element.id}</td>
                    <td> ${element.name}</td>
                    <td> ${element.native_name}</td>
                    <td> ${element.capital}</td>
                    <td> ${element.area}</td>
                </tr>
            `;
    })
})

// if cannot request

.catch(function(){
    return console.log("connot request!");
})