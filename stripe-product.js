var stripe = require("stripe")("sk_test_2PECtktQNqsL5vWpIUuWWWh000wvy5gZuc")

stripe.products.create(
  {
    name: "Wide Neck Plant Pot",
    type: "good",
    attributes: ["name"],
    metadata: { color: "white", width: "25cm", range: "plantpots" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  function(err, product) {
    if (err) return console.log("Error: ", product)
  }
)
