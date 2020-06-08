var stripe = require("stripe")("sk_test_2PECtktQNqsL5vWpIUuWWWh000wvy5gZuc")

stripe.skus.create(
  {
    price: 3000,
    currency: "gbp",
    attributes: { name: "Large Jug" },
    inventory: { type: "infinite" },
    product: "prod_HQdLjRufsohhQt",
  },
  function(err, sku) {
    if (err) return console.log("Error: ", err)
    console.log("Sku:", sku) //
  }
)
