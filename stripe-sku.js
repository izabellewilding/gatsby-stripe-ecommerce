var stripe = require("stripe")("sk_test_2PECtktQNqsL5vWpIUuWWWh000wvy5gZuc")

stripe.skus.create(
  {
    price: 8000,
    currency: "gbp",
    attributes: { name: "Mug" },
    inventory: { type: "infinite" },
    product: "prod_HVuCCBY4bW8LRO",
  },
  function(err, sku) {
    if (err) return console.log("Error: ", err)
    console.log("Sku:", sku) //
  }
)
