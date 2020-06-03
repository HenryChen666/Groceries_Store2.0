function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

function openInfoDropdown(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("dropdownbutn");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
	var s2 = document.getElementById(slct2);
	var s3 = document.getElementById('VegetableProduct');
	var s4 = document.getElementById('MeatProduct');
	var s5 = document.getElementById('SeafoodProduct');

	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
	s2.innerHTML = "";
	s3.innerHTML = "";
	s4.innerHTML = "";
	s5.innerHTML = "";

		
	// obtain a reduced list of products based on restrictions
	var optionArray = restrictDairyProducts(products, s1.value);
	var optionArrayVegetable = restrictVegetableProducts(products, s1.value)
	var optionArrayMeat = restrictMeatProducts(products, s1.value)
	var optionArraySeafood = restrictSeafoodProducts(products, s1.value)

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
	
	// Dairy Product
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var productprice = optionArray[i].price;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode( productName + " $" + productprice));
		s2.appendChild(label);
	
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));
     
	}

	// Vegetable Products
	for (i = 0; i < optionArrayVegetable.length; i++) {
			
		var productName = optionArrayVegetable[i].name;
		var productprice = optionArrayVegetable[i].price;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s3.appendChild(checkbox);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode( productName + " $" + productprice));
		s3.appendChild(label);
	
		// create a breakline node and add in HTML DOM
		s3.appendChild(document.createElement("br"));
     
	}

	// Meat Product
	for (i = 0; i < optionArrayMeat.length; i++) {
			
		var productName = optionArrayMeat[i].name;
		var productprice = optionArrayMeat[i].price;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s4.appendChild(checkbox);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode( productName + " $" + productprice));
		s4.appendChild(label);
	
		// create a breakline node and add in HTML DOM
		s4.appendChild(document.createElement("br"));
     
	}

	//Seafood Product
	for (i = 0; i < optionArraySeafood.length; i++) {
			
		var productName = optionArraySeafood[i].name;
		var productprice = optionArraySeafood[i].price;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s5.appendChild(checkbox);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode( productName + " $" + productprice));
		s5.appendChild(label);
	
		// create a breakline node and add in HTML DOM
		s5.appendChild(document.createElement("br"));
     
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}