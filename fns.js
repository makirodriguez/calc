const fns = {
    sum,
    res,
    mul,
    div,
    pow,
};

function sum(a, b) {
    return a + b;
}

// Completar estas funciones

function res(a, b) {
	return a - b;
}

function mul(a, b) {
	return a * b;
}

function div(a, b) {
    // Tener en cuenta division por 0
    // Si b es 0 retornar "Error: div by 0"
	if(b==0){
		return "Error: div by 0";
	}
	else{
		return a/b;
	}	
}

function pow(a, b) {
    return a ** b;
}

module.exports = fns;
