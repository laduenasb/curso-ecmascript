function newUser(name, age, country) {
	var name = name || 'Luis'
	var age = age || 34
	var country = country || 'CO'
	console.log(name, age, country)
}

newUser()
newUser('David', 14, 'MX')

function newAdmin(name = 'Alejandro', age = 32, country = 'CL'){
	console.log(name, age, country)
}

newAdmin()
newAdmin("Luis", 23, 'PE')