var products = [
	{
		name: "Brocoli",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: true,
		glutenFree: true,
		price: 1.99
	},
	{
		name: "Tomato",
		organic: true,
		diabetic: false,
		Lactose: false,
		vegetarian: true,
		glutenFree: true,
		price: 1.50
	},
	{
		name: "Rice",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: true,
		glutenFree: true,
		price: 4.00
	},
	{
		name: "Eggs",
		organic: true,
		diabetic: false,
		Lactose: false,
		vegetarian: true,
		glutenFree: true,
		price: 2.55
	},
	{
		name: "Milk",
		organic: true,
		diabetic: false,
		Lactose: true,
		vegetarian: true,
		glutenFree: true,
		price: 3.55
	},
	{
		name: "Bread",
		organic: false,
		diabetic: true,
		Lactose: false,
		vegetarian: true,
		glutenFree: false,
		price: 2.35
	},
	{
		name: "Salmon",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: false,
		glutenFree: true,
		price: 10.00
	},
	{
		name: "Meat",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: false,
		glutenFree: true,
		price: 15.00
	},
	{
		name: "Beef",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: false,
		glutenFree: true,
		price: 13.00
	},
	{
		name: "Fish",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: false,
		glutenFree: true,
		price: 9.00
	},
	{
		name: "Musseels",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: false,
		glutenFree: true,
		price: 20.00
	}
	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];

	prods.sort(function(a,b){              //Sort the array increase order by their price
		return a.price - b.price;
	});

	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
		else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
		else if (restriction == "None"){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
	}
	return product_names;
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