var stripe = require("stripe")("sk_test_2PECtktQNqsL5vWpIUuWWWh000wvy5gZuc")

stripe.products.update(
  "prod_HOS9fPLn71z2zP",
  { attributes: ["name"] },
  function(err, product) {
    if (err) return console.log("Error: ", product)
  }
)
