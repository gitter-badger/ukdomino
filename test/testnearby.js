const ukdomino = require("ukdomino")
const postcode = "G667GL"

ukdomino.getLocalStore(postcode).then(localStore => console.log(localStore))