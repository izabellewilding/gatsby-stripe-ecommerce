var stripe = require("stripe")("sk_test_2PECtktQNqsL5vWpIUuWWWh000wvy5gZuc")

stripe.skus.update(
  "sku_HOSBMkkkWjWCjn",
  { metadata: { order_id: "6735" } },
  function(err, sku) {
    if (err) return console.log("Error: ", sku)
  }
)
