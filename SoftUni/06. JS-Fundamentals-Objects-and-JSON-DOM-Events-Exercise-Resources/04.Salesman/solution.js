function solve() {
  let addProductsButton = document.querySelectorAll('div#exercise>button')[0];
  let buyProductsButton = document.querySelectorAll('div#exercise>button')[1];
  let endDayButton = document.querySelectorAll('div#exercise>button')[2];

  addProductsButton.addEventListener('click', loadProducts);
  buyProductsButton.addEventListener('click', buyProducts);
  endDayButton.addEventListener('click', endBuy);

  let logInput = document.querySelectorAll('div#exercise>textarea')[2];

  let store = {
  };
  let profit = 0.0;
  
  function loadProducts(){
    const products = JSON.parse(document.querySelectorAll('div#exercise>textarea')[0].value);
    products.forEach(product => {
      if(!Object.keys(store).includes(product.name)) {
        store[product.name] = product.name;
        store[product.name] = {
          price: product.price,
          quantity: 0,
        }
      }

      store[product.name].quantity += product.quantity;
      printAllAddedProducts(product, logInput);
    });

   
  }

  function buyProducts(){
    const productsToBuy = JSON.parse(document.querySelectorAll('div#exercise>textarea')[1].value);
    const name = productsToBuy.name;
    const quantity = productsToBuy.quantity;

    if(Object.keys(store).includes(name) && store[name].quantity >= quantity) {
      store[name].quantity -= quantity;
      const currentProfit = quantity * store[name].price;
      profit += currentProfit;
      logInput.value += `${quantity} ${name} sold for ${currentProfit}.\n`;
    } else {
      logInput.value += `Cannot complete order.\n`;
    }
  }

  function endBuy(){
    logInput.value += `Profit: ${profit}.`;
    addProductsButton.setAttribute('disabled', true);
    buyProductsButton.setAttribute('disabled', true);
    endDayButton.setAttribute('disabled', true);

    addProductsButton.removeEventListener('click', loadProducts);
    buyProductsButton.removeEventListener('click', buyProducts);
    endDayButton.removeEventListener('click', endBuy);
  }

  function printAllAddedProducts(product, textarea){
    const message = `Successfully added ${product.quantity} ${product.name}. Price: ${product.price}\n`;
    textarea.value += message;
  }
}


// ADD PRODUCTS: [{"name": "tomatoes", "price": 0.40, "quantity": 20}, {"name": "potatoes", "price": 0.60, "quantity": 10}, {"name": "tomatoes", "quantity": 40} ]
// BUY PRODUCTS: {"name": "tomatoes", "quantity": 15}
