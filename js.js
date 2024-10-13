//Question-1
var cartItem = ["laptop", "phone", "headphones"];
var totalCost = 0;
for (leti = 0; i < cartItem.length; i++) {
    var price = prompt(`enter the price of ${cartItem[i]}:`, "0").toLowerCase();
    totalCost += Number(price);
}
if (confirm("your total cost is" + totalCost + ". Do u want to proceed to the payment?")) {
    alert("thanks for ur purchase");
}
else {
    alert("purchase canceled")
}

//Question-2
var quality = prompt("choose ur video quality: 720p, 1080p, 4K", "720p").toUpperCase();
switch (quality) {
    case "720p":
        alert("you have chosen 720p. good for medium speed internet")
        break;
    case "1080p":
        alert("you have chosen 1080p. enjoy HD quality")
        break;
    case "4K":
        alert("you have chosen 4K. ultra HD quality")
        break;
    default:
        alert("invalid quality option. default quality is 720p")
}

//Question-3
var ridetype = prompt("choose ur ride: uberX, uberXL, uberBlack", "uberX");
var conformation = confirm("ur selected" + ridetype + ". Do u want to confirm the booking");
if (conformation) {
    alert("ur" + ridetype + "is being booked...");
    setTimeout(function () {
        alert("ur ride is on its way!");
    }, 2000);
}
else {
    alert("ride booking canceled")
}

//Questiom-4
var product = ["laptop", "phone", "headphones"];
var ratings = [];
for (var i = 0; i < product.length; i++) {
    var rating = prompt("rate the" + product[i] + "out of 5:", "5");
    if (rating >= 0 && rating <= 5) {
        ratings.push(`${product[i]}:${rating}/5`);
    }
    else {
        alert("invaild rating for " + product[i]);
    }
}
alert("thanks for ur rating here is ratings :\n" + ratings.join("\n"));

//Question-5
var plan = prompt("choose ur subscription plan: free, VIP, premium", "free").toUpperCase();
switch (plan) {
    case "FREE":
        alert("limited access with ads")
        break;
    case "VIP":
        alert("no ads and HD quality")
        break;
    case "PREMIUM":
        alert("Ultra HD quality")
        break;
    default:
        alert("invalid plan")
}

//Question-6
var logout=confirm("u wana log out?");
if(logout){
    alert("logging out...");
    setTimeout(function(){
        alert("logged out...")
    }, 2000);
}
else{
    alert("logout cancel")
}