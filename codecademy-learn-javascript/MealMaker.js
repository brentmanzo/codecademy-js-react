const menu = {
    _meal: "",
    _price: 0,
    get todaysSpecial(){
      if(this._meal && this._price){
        return `Today’s Special is ${this._meal} for $${this._price}!`
      }else{
        return "Meal or price is incorrect"
      }
  
    },
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string") {
        this._meal = mealToCheck;
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === "number") {
        this._price = priceToCheck;
      }
    },
  };
  
  menu.meal = 'Adobo';
  menu.price = 20;
  
  console.log(menu.todaysSpecial);
  
