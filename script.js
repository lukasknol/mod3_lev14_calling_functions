// HEY KIDDO EXERCISE
const isAdult = function (age) {
   if (age >= 18) {
      return true;
   } else {
      return false;
   }
};

const greet = function (age) {
   if (isAdult(age)) {
      return "Hello there";
   } else {
      return "Hey kiddo";
   }
};

console.log(isAdult(25));
console.log(isAdult(10));
console.log(greet(25));
console.log(greet(10));

// short version
const isAdultShort = age => age >= 18;

const greetShort = age => (isAdult(age) ? "Hello there" : "Hey kiddo");

console.log(isAdult(25));
console.log(isAdult(10));
console.log(greet(25));
console.log(greet(10));

// VAT EXERCISE 1
const calculateVAT = function(basePrice, VATPercentage) {
   return basePrice * (VATPercentage / 100);
};

const caclulatePriceIncludingVAT = function(basePrice , VATPercentage) {
   const VAT = calculateVAT(basePrice, VATPercentage);
   return basePrice + VAT;
}

console.log(caclulatePriceIncludingVAT(1000, 21));
console.log(caclulatePriceIncludingVAT(2, 9));

// VAT EXERCISE 2
const calculateBasePrice = function(priceIncludingVAT, VATPercentage) {
   const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
   return basePrice;
};

const calculateBasePriceAndVAT = function(priceIncludingVAT, VATPercentage) {
   const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
   const VAT = priceIncludingVAT - basePrice;
   return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21));
console.log(calculateBasePriceAndVAT(2.18, 9));
