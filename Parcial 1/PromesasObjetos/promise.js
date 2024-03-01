
function promesa1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            reject('Hugo');
        }, 1000);
    });
}


function promesa2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            reject('Ramos');
        }, 1000);
    });
}

function promesa3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            reject('Zarate');
        }, 1000);
    });
}

Promise.all([promesa1(), promesa2(), promesa3()])
.then(results => console.log(results))
.catch(error => console.log(error));


Promise.allSettled([promesa1(), promesa2(), promesa3()])
    .then(results => console.log(results))
    .catch(error => console.error(error));

Promise.any([promesa1(), promesa2(), promesa3()])
.then(results => console.log(results))
.catch(error => console.log(error));

Promise.race([promesa1(), promesa2(), promesa3()])
.then(results => console.log(results))
.catch(error => console.log(error))