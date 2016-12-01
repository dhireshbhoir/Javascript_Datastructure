var shoppingList = [
    ["Chocolate", 15],
    ["pens", 8],
    ["bags", 30]
];

//pushing item into list
function pushItem() {
    var list = [];
    list[0] = prompt("Enter item name", "item name");
    list[1] = prompt("Enter qty of item");
    shoppingList.push(list);
    display();
}
//poping item from list
function popItem() {
    shoppingList.pop();
    display();
}
//unshifting item into list
function unShiftItem() {

    var list = [];
    list[0] = prompt("Enter item name", "item name");
    list[1] = prompt("Enter qty of item");
    shoppingList.unshift(list);
    display();
}
//shifting item from list
function shiftItem() {
    shoppingList.shift();
    display();
}
//to display
function display() {
    var show = "";
    for (var i = 0; i < shoppingList.length; i++) {
        show = show + "[" + shoppingList[i][0] + "," + shoppingList[i][1] + "]";
    }
    document.getElementById("demo").innerHTML = show;
}