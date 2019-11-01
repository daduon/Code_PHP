

const url = "https://jsonplaceholder.typicode.com/photos";


fetch(url)

.then(response => response.json())

.then(data =>{
    data.forEach(element => {
        const card = document.querySelector('#card');  
        if (element.id <=10){
            card.innerHTML += `
                            <div class="card mt-4">
                                <div class="card-header"> ${element.title} </div>
                                <div class="card-body"> 
                                    <img src="${element.url}" class="img-fluid">
                                </div>
                            </div>
                            `;

        }
    });
})

.catch(() => console.error("error project"))
.finally(() => console.warn("always run!"))