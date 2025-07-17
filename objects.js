"use strict";

// Practice Object CRUD, copying, and destructuring.
let product = {
	id: 101,
	name: "Laptop",
	price: 1200,
	details: {
		brand: "TechPro",
		specs: {
			cpu: "i7",
			ram: "16GB",
		},
	},
};

let cart = {
	items: [
		{ id: 101, qty: 1 },
		{ id: 202, qty: 2 },
	],
	customer: {
		name: "Alice",
		address: { city: "Bangkok", zip: "10110" },
	},
};

// Task 01: CRUD on an Object (After each step, log the product object.)
// 1️⃣ C – Create (Add new property)
// 👉 Add stock: true to product.
product.stock = true;
console.log("1️⃣ After Create:", product);

// 2️⃣ R – Read (Access property)
// 👉 Log product.details.brand and product.details.specs.cpu.
console.log("2️⃣ Brand:", product.details.brand);
console.log("2️⃣ CPU:", product.details.specs.cpu);

// 3️⃣ U – Update (Change value)
// 👉 Update product.price to 999.
product.price = 999;
console.log("3️⃣ After Update:", product);

// 4️⃣ D – Delete (Remove property)
// 👉 Delete product.details.specs.ram.
delete product.details.specs.ram;
console.log("4️⃣ After Delete:", product);

// Task 02: Copying Objects
// 5️⃣ Shallow copy (spread operator)
// 👉 Create productCopy = { ...product }.
// Change productCopy.name = "Gaming Laptop".
// ✅ Log both product.name and productCopy.name.
let productCopy = { ...product };
productCopy.name = "Gaming Laptop";
console.log("5️⃣ product.name:", product.name);
console.log("5️⃣ productCopy.name:", productCopy.name);

// 6️⃣ Deep copy (structuredClone)
// 👉 Create cartCopy = structuredClone(cart).
// Change cartCopy.customer.address.city = "Chiang Mai".
// ✅ Log cart.customer.address.city and cartCopy.customer.address.city.
let cartCopy = structuredClone(cart);
cartCopy.customer.address.city = "Chiang Mai";
console.log("6️⃣ cart.customer.address.city:", cart.customer.address.city);
console.log("6️⃣ cartCopy.customer.address.city:", cartCopy.customer.address.city);

// Task 03: Destructuring
// 7️⃣ Basic destructuring
// 👉 Extract name and price from product into variables.
// ✅ Log name and price.
let { name, price } = product;
console.log("7️⃣ name:", name);
console.log("7️⃣ price:", price);

// 8️⃣ Rename and default
// 👉 Destructure product so that name becomes productName.
// 👉 Also give stock a default value of false if it’s not in the object.
// ✅ Log productName and stock.
let { name: productName, stock = false } = product;
console.log("8️⃣ productName:", productName);
console.log("8️⃣ stock:", stock);

// 9️⃣ Nested destructuring
// 👉 From product.details, extract brand and from product.details.specs, extract cpu in one destructuring statement.
// ✅ Log brand and cpu.
let {
	details: {
		brand,
		specs: { cpu },
	},
} = product;
console.log("9️⃣ brand:", brand);
console.log("9️⃣ cpu:", cpu);