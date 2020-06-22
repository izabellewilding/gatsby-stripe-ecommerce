var stripe = require("stripe")("sk_test_2PECtktQNqsL5vWpIUuWWWh000wvy5gZuc")

stripe.skus.create(
  {
    price: 0800,
    currency: "gbp",
    attributes: { name: "Breakfast Bowl" },
    inventory: { type: "infinite" },
    product: "prod_HVuQPWkDaCvNVk",
  },
  function(err, sku) {
    if (err) return console.log("Error: ", err)
    console.log("Sku:", sku) //
  }
)
