var stripe = require("stripe")("sk_test_2PECtktQNqsL5vWpIUuWWWh000wvy5gZuc")

stripe.skus.create(
  {
    price: 2200,
    currency: "gbp",
    attributes: { name: "Wide Neck Plant Pot" },
    inventory: { type: "infinite" },
    product: "prod_HVraeOm9JFIclu",
  },
  function(err, sku) {
    if (err) return console.log("Error: ", err)
    console.log("Sku:", sku) //
  }
)
