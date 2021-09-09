for (let i = 0; i < arrayOfPeople.length; i++) {
    if(arrayOfPeople[i].city == "Lod"){
        divOfPeopleLod.innerHTML += `<article><h4>Person : ${arrayOfPeople[i].name} ,  Age : ${arrayOfPeople[i].age} ,  City : ${arrayOfPeople[i].city} </h4> <img src="${arrayOfPeople[i].linkOfImg}"></article>`
    }
}