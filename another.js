var sum = numberOne+numberTwo;
 console.log(sum);

 var double = numberOne*numberTwo;
 console.log(double);

var hilok  = numberOne/numberTwo
console.log(hilok);


emptyDiv.innerHTML= `<p>${textOne} ${textTwo}</p> `


for (let i = 0; i < arrayOfPeople.length; i++) {
    showPeopleInfo.innerHTML += `<p>Person : ${arrayOfPeople[i].name} ,  Age : ${arrayOfPeople[i].age} ,  City : ${arrayOfPeople[i].city} ,  Image: <img src="${arrayOfPeople[i].linkOfImg}"></p>`
}