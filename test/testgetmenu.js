const ukdomino = require("ukdomino")

ukdomino.getMenu(false, 636856473000000000, 28496).then(json => console.log(JSON.stringify(json, null, 2)))