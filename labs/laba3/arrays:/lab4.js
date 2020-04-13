var array = [
	{value: 100, type: "USD"},
	{value: 215, type: "EUR"},
	{value: 7, type: "EUR"},
	{value: 99, type: "USD"},
	{value: 354, type: "USD"},
	{value: 12, type: "EUR"},
	{value: 77, type: "USD"}

]

var sum = 0
for(elem of array){
	if(elem.type == "USD" && elem.value < 100){
		sum += elem.value	
	}
}

alert(sum)
result_string = ""
var result_array = []
for(element of array){
	if(element.type == "EUR"){
		var new_val = {value: element.value * 2, type: "EUR"}
		result_array.push(new_val)
		result_string = result_string + "{value: "+ new_val.value + " type: EUR}<br>"
	}
}

document.getElementById("list").innerHTML = result_string
