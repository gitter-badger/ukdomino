
// UK DOMINOS NPM MODULE MAIN FILE 

// VARIABLES
const path = require("path")
const fetch = require("node-fetch")
const util = require("util")
const fs = require("fs")

// TABLE OF THINGS ADDED TO BASKET ETC.

var store = "";
var localStore = null;

var basket = [];


// FIND LOCAL STORE

exports.getLocalStore = function(postcode) {
	// get the local store
	// get the api and find with the postcode provided
	// fetch the api
	return fetch('https://www.dominos.co.uk/storefindermap/storesearch?SearchText=' + postcode)
		// json it
		.then(res => res.json())
		// return it
		.then(function(json) {
			// return console.log(json.localStore)
			// makes it a variable so we can return it elsewhere
			localStore = json.localStore
			return localStore
		}) .catch (err => console.log("ukdomino error: " + err))
}


exports.localStoreOpen = function(postcode) {
	// get the local store
	// get the api and find with the postcode provided
	// fetch the api
	return fetch('https://www.dominos.co.uk/storefindermap/storesearch?SearchText=' + postcode)
		// json it
		.then(res => res.json())
		// return it
		.then(function(json) {
			// return console.log(json.localStore)
			// check if open
			// return true if the store is open, if the store is anything else (usually closed) return false.
			if (json.localStore.isOpen = "true") {
				return true
			} else {
				return false
			}
		}) .catch (err => console.log("ukdomino error: " + err))
}	

exports.setStore = function(postcode) {
	// if asked for local store, find it.
	// if given the store postcode, use that.
	// fetch the api 
	return fetch('https://www.dominos.co.uk/storefindermap/storesearch?SearchText=' + postcode)
		// json the data 
		.then(res => res.json())
		// return and set appropiately
		.then(function(json) {
			// return console.log(json.localStore.postcode)
			// check if store exists (if does set to store, if not throw a controlled error)
			store = json.localStore.postcode
			// removes whitespaces
			store = store.replace(/\s/g, '')
			// console.log(store)
			console.warn("ukdomino status: Postcode value updated.")
		}) .catch (err => console.log("ukdomino error: " + err))
}

exports.addPizzaToBasket = function(pizza, variant="VARIANT.MEDIUM", quantity=1) {
	// adds pizza item to "basket" table, ready for ordering. 
	// systems can be made to log the "basket" in a file, ready to be picked up later, OR by using the saveBasket() function (RECOMMENDED).
	// make an array to be added to the basket array
	
	// TO ADD: MAJOR IMPORTANT: ADD ITEM ID FROM ITEM
	
	// array for all arguments
	pizza = ["pizza", "stepId: 0", "quantity: " + quantity, "sizeId: " + variant, "productId: " + pizza, "ingredients: [36, 42]", "productIdHalfTwo: 0", "ingredientsHalfTwo: []" , "recipeReferrer: " + 0]
	
	// adds to the end of the list
	
	basket.push(pizza)
	// console.log(basket[0])
}

exports.addSideToBasket = function(side, quantity) {
	// adds side item to "basket" table, ready for ordering,
	// systems can be made to log the "basket" in a file, ready to be picked up later, OR by using the saveBasket() function (RECOMMENDED).
	// make an array to be added to the basket array
	
	// TO ADD: MAJOR IMPORTANT: ADD ITEM ID FROM ITEM
	
	// array for all required arguments
	side = ["side", "productSkuId: " + side]
}

exports.saveBasket = function(location="./") {
	// saves basket to location OR (default) in the folder
	// try the location and create the basketFile, made not a TXT to prevent unwanted editing.
	// make a variable of the basket that allows it to be put on the next line
	var locationLine = path.join(location, "basket")
	fs.writeFile(locationLine, basket, function (err) {
		if (err) return console.log("ukdomino error: (No file or directory) Formal " + err)
		console.log('ukdomino status: Basket was saved.')
	})
}

var resultHandler = function(err) {
	if(err) {
		console.log("ukdomino error: (No file or directory Formal " + err)
	} else {
		console.log('ukdomino status: Basket was cleared/deleted.')
	}
}

exports.clearBasket = function(location = "./") {
	// removes all data from the basket
	// if del = true then delete the basket file as well
	// if del = false then remove just the data
	var locationLine = path.join(location, "basket")
	fs.unlink(locationLine, resultHandler, function () {
		resultHandler()
	})
}

exports.getMenu = function(collectionOnly, menuVersion, storeId) {
	// gets the menu for the store requested.
	// join all parameters
	return fetch("https://www.dominos.co.uk/ProductCatalog/GetStoreCatalog?collectionOnly=" + collectionOnly + "&menuVersion=" + menuVersion + "&storeId=" + storeId)
		// json the data 
		.then(res => res.json())
		// return and set appropiately
		.then(function(json) {
			// return console.log(json)
			// return the json data
			return json
		}) .catch (err => console.log("ukdomino error: " + err))
}