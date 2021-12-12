const root = document.querySelector('.root');

async function getData(){
    const response = await fetch('domatio-data.json');
    const data = await response.json();
    console.log(data);
    return data;
}

getData().then(data => {

    

    const find= (value)=> {
        const filterObj = data.domatio.filter(item => item.tags.indexOf(value) !== -1);
        console.log(filterObj);
        
        data.domatio.map(item => {

            root.innerHTML += `
            <div>
                <h1>${item.name}</h1>
                <p>
                    ${
                        item.title === undefined ? "Hello": item.title
                    }
                </p>
                ${
                    item.image ===  undefined ? 
                     `<h3>Coming Soon</h3>` : `<img src=${item.image} alt="${item.name} image" />` 
                }
                
            </div>
        `;
        })
    }
    find("generator");

    
    
});