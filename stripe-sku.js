var stripe = require("stripe")("sk_test_2PECtktQNqsL5vWpIUuWWWh000wvy5gZuc")

stripe.skus.create(
  {
    price: 5000,
    currency: "gbp",
    attributes: { name: "Large Milk Jug Set" },
    inventory: { type: "infinite" },
    product: "prod_HYqlSo2Q9XfsLv",
  },
  function(err, sku) {
    if (err) return console.log("Error: ", err)
    console.log("Sku:", sku) //
  }
)
