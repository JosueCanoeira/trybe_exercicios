

let singer = {
    name:"Josué",
    lastName: "Tito",
    nickName: "Canoeira",
    age: 23,
    skills: ["Operador de gruas"," Mecânico indústrial"," Cozinheiro"],
  bornInfo: {
    city: "Luanda",
    neighBorHood: "Benfica", 
  }  

}

console.log("O senhor" + " " + singer["name"] + " " + singer["lastName"] + " " + singer["nickName"] + " " + "possui"+ " " + singer["age"] + " " + "Anos.")

console.log("O senhor " + " " + singer.name + " " + singer.lastName + " " + singer.nickName + " " + "possui" + " " + singer["age"] + " " +  "Anos." );

singer["fullName"] = singer.name + " " + singer.lastName + " " + singer.nickName;

console.table(singer);
                    
console.log("O senhhor" + " " + singer.name + " " + singer.lastName + " " + singer.nickName + " " + "vive na cidade de" + " " + singer.bornInfo.city + " " + "bairro" + " " + singer.bornInfo.neighBorHood) 