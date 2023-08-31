async function fetchData() {
    try {
        const data = await fetch('./data.json');
        const score = document.querySelector('#score');
        let total = 0;
        let json = await data.json();
        json.forEach(element => {
            putData(element);
            total += element.score;
        });

        score.innerText = `${ Math.round(total / json.length) }`;
    }
    catch (e) {
        console.log("Error!", e);
    }
}

function putData(json) {
    const list = document.querySelector('.summary ul');
    const newLi = document.createElement('li');
    newLi.innerHTML = `<span class='category'> <img src='${json.icon}'/>  ${json.category} </span> <span class='score'> ${json.score}<span class='total'> / 100 </span></span>`;
    list.appendChild(newLi);
}

fetchData();