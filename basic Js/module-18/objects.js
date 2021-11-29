var man = {
    name: "manush",
    age: 45,
    color: "white"
}
//  multiple ways of sets value of property
var nameProperty = ['name'];
man[nameProperty] = 'jahid'

man.name = "hamza";

man['name'] = 'shohel';
console.log(man.name)