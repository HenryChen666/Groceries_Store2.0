var products = [
	{
		name: "Brocoli",
		id:"p1",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: true,
		glutenFree: true,
		dairy:false,
		vegetables:true,
		meat:false,
		seafood:false,
		img: "Image/Brocoli.jpg",
		price: 1.99
	},
	{
		name: "Tomato",
		id:"p2",
		organic: true,
		diabetic: false,
		Lactose: false,
		vegetarian: true,
		glutenFree: true,
		dairy:false,
		vegetables:true,
		meat:false,
		seafood:false,
		img: "Image/Tomato.jpg",
		price: 1.50
	},
	{
		name: "Rice",
		id:"p3",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: true,
		glutenFree: true,
		dairy:true,
		vegetables:false,
		meat:false,
		seafood:false,
		img: "Image/Rice.jpeg",
		price: 4.00
	},
	{
		name: "Eggs",
		id:"p4",
		organic: true,
		diabetic: false,
		Lactose: false,
		vegetarian: true,
		glutenFree: true,
		dairy:true,
		vegetables:false,
		meat:false,
		seafood:false,
		img: "Image/Eggs.jpg",
		price: 2.55
	},
	{
		name: "Milk",
		id:"p5",
		organic: true,
		diabetic: false,
		Lactose: true,
		vegetarian: true,
		glutenFree: true,
		dairy:true,
		vegetables:false,
		meat:false,
		seafood:false,
		img: "Image/Milk.jpg",
		price: 3.55
	},
	{
		name: "Bread",
		id:"p6",
		organic: false,
		diabetic: true,
		Lactose: false,
		vegetarian: true,
		glutenFree: false,
		dairy:true,
		vegetables:false,
		meat:false,
		seafood:false,
		img: "Image/Bread.jpg",
		price: 2.35
	},
	{
		name: "Salmon",
		id:"p7",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: false,
		glutenFree: true,
		dairy:false,
		vegetables:false,
		meat:false,
		seafood:true,
		img: "Image/Salmon.jpg",
		price: 10.00
	},
	{
		name: "Chicken",
		id:"p8",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: false,
		glutenFree: true,
		dairy:false,
		vegetables:false,
		meat:true,
		seafood:false,
		img: "Image/chicken.jpg",
		price: 15.00
	},
	{
		name: "Beef",
		id:"p9",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: false,
		glutenFree: true,
		dairy:false,
		vegetables:false,
		meat:true,
		seafood:false,
		img: "Image/beef.jpg",
		price: 13.00
	},
	{
		name: "Fish",
		id:"p10",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: false,
		glutenFree: true,
		dairy:false,
		vegetables:false,
		meat:false,
		seafood:true,
		img: "Image/Fish.jpeg",
		price: 9.00
	},
	{
		name: "Musseels",
		id:"p11",
		organic: false,
		diabetic: false,
		Lactose: false,
		vegetarian: false,
		glutenFree: true,
		dairy:false,
		vegetables:false,
		meat:false,
		seafood:true,
		img: "Image/Musseels.jpg",
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
				
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].dairy == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "GlutenFree") && (prods[i].dairy == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "None") && (prods[i].dairy == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
		}
	}
	else if ( diabetic == true){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].dairy == true) && (prods[i].vegetarian == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].dairy == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "GlutenFree") && (prods[i].dairy == true) && (prods[i].glutenFree == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "None") && (prods[i].dairy == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
		}
	}
	else if (lactose == true){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].dairy == true) && (prods[i].vegetarian == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].dairy == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "GlutenFree") && (prods[i].dairy == true) && (prods[i].glutenFree == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "None") && (prods[i].dairy == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
		}
	}
	else{
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].dairy == true) && (prods[i].vegetarian == true)){
			product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
		}
		else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].dairy == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
		}
		else if ((restriction == "GlutenFree") && (prods[i].dairy == true) && (prods[i].glutenFree == true)){
			product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
		}
		else if ((restriction == "None") && (prods[i].dairy == true)){
			product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
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
				
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].vegetables == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "GlutenFree") && (prods[i].vegetables == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "None") && (prods[i].vegetables == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
		}
	}
	else if ( diabetic == true){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].vegetables == true) && (prods[i].vegetarian == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].vegetables == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "GlutenFree") && (prods[i].vegetables == true) && (prods[i].glutenFree == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "None") && (prods[i].vegetables == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
		}
	}
	else if (lactose == true){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].vegetables == true) && (prods[i].vegetarian == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].vegetables == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "GlutenFree") && (prods[i].vegetables == true) && (prods[i].glutenFree == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "None") && (prods[i].vegetables == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
		}
	}
	else{
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetables == true) && (prods[i].vegetarian == true)){
			product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
		}
		else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].vegetables == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
		}
		else if ((restriction == "GlutenFree") && (prods[i].vegetables == true) && (prods[i].glutenFree == true)){
			product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
		}
		else if ((restriction == "None") && (prods[i].vegetables == true)){
			product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
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
				
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].meat == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "GlutenFree") && (prods[i].meat == true) && (prods[i].meat == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "None") && (prods[i].meat == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
		}
	}
	else if ( diabetic == true){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].meat == true) && (prods[i].vegetarian == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].meat == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "GlutenFree") && (prods[i].meat == true) && (prods[i].glutenFree == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "None") && (prods[i].meat == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
		}
	}
	else if (lactose == true){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].meat == true) && (prods[i].vegetarian == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].meat == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "GlutenFree") && (prods[i].meat == true) && (prods[i].glutenFree == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "None") && (prods[i].meat == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
		}
	}
	else{
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].meat == true) && (prods[i].vegetarian == true)){
			product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
		}
		else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].meat == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
		}
		else if ((restriction == "GlutenFree") && (prods[i].meat == true) && (prods[i].glutenFree == true)){
			product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
		}
		else if ((restriction == "None") && (prods[i].meat == true)){
			product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
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
				
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].seafood == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "GlutenFree") && (prods[i].seafood == true) && (prods[i].meat == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "None") && (prods[i].seafood == true) && (prods[i].organic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
		}
	}
	else if ( diabetic == true){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].seafood == true) && (prods[i].vegetarian == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].seafood == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "GlutenFree") && (prods[i].seafood == true) && (prods[i].glutenFree == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "None") && (prods[i].seafood == true) && (prods[i].diabetic == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
		}
	}
	else if (lactose == true){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].seafood == true) && (prods[i].vegetarian == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].seafood == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "GlutenFree") && (prods[i].seafood == true) && (prods[i].glutenFree == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
			else if ((restriction == "None") && (prods[i].seafood == true) && (prods[i].lactose == true)){
				product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
			}
		}
	}
	else{
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].seafood == true) && (prods[i].vegetarian == true)){
			product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
		}
		else if ((restriction == "Vegetarian and GlutenFree") && (prods[i].seafood == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
		}
		else if ((restriction == "GlutenFree") && (prods[i].seafood == true) && (prods[i].glutenFree == true)){
			product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
		}
		else if ((restriction == "None") && (prods[i].seafood == true)){
			product_names.push({name:prods[i].name, price:prods[i].price, img:prods[i].img, id:prods[i].id});
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