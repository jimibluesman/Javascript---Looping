var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"

];

for (var i = todos.length - 1; i >= 0; i--) {
	todos[i] = todos[i] + "!";
	console.log(i);
}

// todos.forEach(function(todos, i)) {
// 	console.log(todos, i);
// }
