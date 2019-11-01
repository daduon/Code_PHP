
const url = "https://jsonplaceholder.typicode.com/todos";

const method = "GET";

const syncronous = true;

// create new object

const data = new XMLHttpRequest();
//open object

data.open(method, url, syncronous)
data.onload = () =>{
    // for response data
    const result = JSON.parse(data.response);
    const table = document.querySelector("table");
    result.forEach(element => {
        if (element.id <= 10){
                table.innerHTML += `  
                                <tr>
                                    <td> ${element.id}
                                    <td> ${element.title}
                `
        }
    });
}
data.send();