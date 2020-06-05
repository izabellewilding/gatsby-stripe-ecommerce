var stripe = require("stripe")("sk_test_2PECtktQNqsL5vWpIUuWWWh000wvy5gZuc")

stripe.skus.create(
  {
    price: 2000,
    currency: "gbp",
    inventory: { type: "finite", quantity: 100 },
    product: "prod_HP74Vtq5I1iLAQ",
  },
  function(err, sku) {
    if (err) return console.log("Error: ", err)
    console.log("Sku:", sku) //
  }
)
