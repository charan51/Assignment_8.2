function prepareFood(tableNumber, items, callback){
    console.log("preparing food for items - ", items);
    callback(tableNumber, items);
};
function servingFood(tableNumber, items){
    console.log('serving food for items -', items);
}
prepareFood(1, ["Burger", "Pasta", "Coke"], servingFood);