const ukdomino = require("ukdomino")
const postcode = "GU206JP"

ukdomino.localStoreOpen(postcode).then(openValue => console.log(openValue))