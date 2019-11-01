

const url = "https://raw.githubusercontent.com/radytrainer/demo007/master/cambodia.json";

fetch(url)

.then(response => response.json())

.then(data =>{
    const cmd = document.querySelector("#list");
    data.forEach(element => {
        if (element.id <= 10){
            cmd.innerHTML += `
                                <ul class="list-group">
                                    <li class="list-group-item"> ${element.id}</li>
                                </ul>

                            `;
        }
    });
})

.catch(() => console.error("file error"))

.finally(() => console.warn("auto run!"))