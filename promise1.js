const myCountPromise = () => {
    return new Promise( (resolve, reject) => 
    setTimeout( () => {
        if(param !== undefined){
            resolve(param * 2)
        }
        else{
            reject("Maaf tidak ada nilai dalam parameter")
        }
      }), 2000)
    }

    myCountPromise(2)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })