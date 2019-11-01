const url ="https://jsonplaceholder.typicode.com/todos";

fetch(url)

.then(response => response.json())

.then(data =>{
    const table = document.querySelector('table');
    data.forEach(element => {
        if (element.id <= 10){
            table.innerHTML += `
                                <tr>
                                    <td> ${element.id}
                                    <td> ${element.title}
                                    <td> ${element.completed}
                                </tr>
                                `
        }
    });
})

.catch(() => console.error("data error"))
.finally(() => console.warn("auto run"))