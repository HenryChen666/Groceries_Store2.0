var products = [
	{
		name: "Brocoli",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: true,
		glutenFree: true,
		dairy:false,
		vegetables:true,
		meat:false,
		seafood:false,
		price: 1.99
	},
	{
		name: "Tomato",
		organic: true,
		diabetic: false,
		Lactose: false,
		vegetarian: true,
		glutenFree: true,
		dairy:false,
		vegetables:true,
		meat:false,
		seafood:false,
		price: 1.50
	},
	{
		name: "Rice",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: true,
		glutenFree: true,
		dairy:true,
		vegetables:false,
		meat:false,
		seafood:false,
		price: 4.00
	},
	{
		name: "Eggs",
		organic: true,
		diabetic: false,
		Lactose: false,
		vegetarian: true,
		glutenFree: true,
		dairy:true,
		vegetables:false,
		meat:false,
		seafood:false,
		price: 2.55
	},
	{
		name: "Milk",
		organic: true,
		diabetic: false,
		Lactose: true,
		vegetarian: true,
		glutenFree: true,
		dairy:true,
		vegetables:false,
		meat:false,
		seafood:false,
		price: 3.55
	},
	{
		name: "Bread",
		organic: false,
		diabetic: true,
		Lactose: false,
		vegetarian: true,
		glutenFree: false,
		dairy:true,
		vegetables:false,
		meat:false,
		seafood:false,
		price: 2.35
	},
	{
		name: "Salmon",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: false,
		glutenFree: true,
		dairy:false,
		vegetables:false,
		meat:false,
		seafood:true,
		price: 10.00
	},
	{
		name: "Meat",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: false,
		glutenFree: true,
		dairy:false,
		vegetables:false,
		meat:true,
		seafood:false,
		price: 15.00
	},
	{
		name: "Beef",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: false,
		glutenFree: true,
		dairy:false,
		vegetables:false,
		meat:true,
		seafood:false,
		price: 13.00
	},
	{
		name: "Fish",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: false,
		glutenFree: true,
		dairy:false,
		vegetables:false,
		meat:false,
		seafood:true,
		price: 9.00
	},
	{
		name: "Musseels",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: false,
		glutenFree: true,
		dairy:false,
		vegetables:false,
		meat:false,
		seafood:true,
		price: 20.00
	}
	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictDairyProducts(prods, restriction) {
	let product_names = [];

	prods.sort(function(a,b){              //Sort the array increase order by their price
		return a.price - b.price;
	});

	var organic = checkornot("option1");
	var diabetic = checkornot("option2");
	var lactose = checkornot("option3");

	console.log( organic == true);
	if (organic == true){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].dairy == true) && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				console.log(prods[i].organic);
				
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].dairy == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "GlutenFree") && (prods[i].dairy == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "None") && (prods[i].dairy == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
		}
	}
	else if ( diabetic == true){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].dairy == true) && (prods[i].vegetarian == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].dairy == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "GlutenFree") && (prods[i].dairy == true) && (prods[i].glutenFree == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "None") && (prods[i].dairy == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
		}
	}
	else if (lactose == true){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].dairy == true) && (prods[i].vegetarian == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].dairy == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "GlutenFree") && (prods[i].dairy == true) && (prods[i].glutenFree == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "None") && (prods[i].dairy == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
		}
	}
	else{
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].dairy == true) && (prods[i].vegetarian == true)){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
		else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].dairy == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
		else if ((restriction == "GlutenFree") && (prods[i].dairy == true) && (prods[i].glutenFree == true)){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
		else if ((restriction == "None") && (prods[i].dairy == true)){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
	}
}
	return product_names;
}


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictVegetableProducts(prods, restriction) {
	let product_names = [];

	prods.sort(function(a,b){              //Sort the array increase order by their price
		return a.price - b.price;
	});

	var organic = checkornot("option1");
	var diabetic = checkornot("option2");
	var lactose = checkornot("option3");

	console.log( organic == true);
	if (organic == true){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].vegetables == true) && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				console.log(prods[i].organic);
				
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].vegetables == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "GlutenFree") && (prods[i].vegetables == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "None") && (prods[i].vegetables == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
		}
	}
	else if ( diabetic == true){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].vegetables == true) && (prods[i].vegetarian == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].vegetables == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "GlutenFree") && (prods[i].vegetables == true) && (prods[i].glutenFree == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "None") && (prods[i].vegetables == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
		}
	}
	else if (lactose == true){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].vegetables == true) && (prods[i].vegetarian == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].vegetables == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "GlutenFree") && (prods[i].vegetables == true) && (prods[i].glutenFree == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "None") && (prods[i].vegetables == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
		}
	}
	else{
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetables == true) && (prods[i].vegetarian == true)){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
		else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].vegetables == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
		else if ((restriction == "GlutenFree") && (prods[i].vegetables == true) && (prods[i].glutenFree == true)){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
		else if ((restriction == "None") && (prods[i].vegetables == true)){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
	}
}
	return product_names;
}

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictMeatProducts(prods, restriction) {
	let product_names = [];

	prods.sort(function(a,b){              //Sort the array increase order by their price
		return a.price - b.price;
	});

	var organic = checkornot("option1");
	var diabetic = checkornot("option2");
	var lactose = checkornot("option3");

	console.log( organic == true);
	if (organic == true){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].meat == true) && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				console.log(prods[i].organic);
				
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].meat == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "GlutenFree") && (prods[i].meat == true) && (prods[i].meat == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "None") && (prods[i].meat == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
		}
	}
	else if ( diabetic == true){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].meat == true) && (prods[i].vegetarian == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].meat == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "GlutenFree") && (prods[i].meat == true) && (prods[i].glutenFree == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "None") && (prods[i].meat == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
		}
	}
	else if (lactose == true){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].meat == true) && (prods[i].vegetarian == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].meat == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "GlutenFree") && (prods[i].meat == true) && (prods[i].glutenFree == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "None") && (prods[i].meat == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
		}
	}
	else{
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].meat == true) && (prods[i].vegetarian == true)){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
		else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].meat == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
		else if ((restriction == "GlutenFree") && (prods[i].meat == true) && (prods[i].glutenFree == true)){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
		else if ((restriction == "None") && (prods[i].meat == true)){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
	}
}
	return product_names;
}

function restrictSeafoodProducts(prods, restriction) {
	let product_names = [];

	prods.sort(function(a,b){              //Sort the array increase order by their price
		return a.price - b.price;
	});

	var organic = checkornot("option1");
	var diabetic = checkornot("option2");
	var lactose = checkornot("option3");

	console.log( organic == true);
	if (organic == true){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].seafood == true) && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				console.log(prods[i].organic);
				
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].seafood == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "GlutenFree") && (prods[i].seafood == true) && (prods[i].meat == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "None") && (prods[i].seafood == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
		}
	}
	else if ( diabetic == true){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].seafood == true) && (prods[i].vegetarian == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].seafood == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "GlutenFree") && (prods[i].seafood == true) && (prods[i].glutenFree == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "None") && (prods[i].seafood == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
		}
	}
	else if (lactose == true){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].seafood == true) && (prods[i].vegetarian == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].seafood == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "GlutenFree") && (prods[i].seafood == true) && (prods[i].glutenFree == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
			else if ((restriction == "None") && (prods[i].seafood == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price});
			}
		}
	}
	else{
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].seafood == true) && (prods[i].vegetarian == true)){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
		else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].seafood == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
		else if ((restriction == "GlutenFree") && (prods[i].seafood == true) && (prods[i].glutenFree == true)){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
		else if ((restriction == "None") && (prods[i].seafood == true)){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
	}
}
	return product_names;
}
// check if any of more information checkbox is checked or not
function checkornot(id){
	var x = document.getElementById(id).checked;
	return x;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}