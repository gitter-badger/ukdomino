# UKDOMINO NODE.JS MODULE
In this module, the Dominos API is used to create features in Javascript, such as getMenu (for any store) and ordering (W.I.P. AS OF 18/02/2019). This module is for the UK-only; I HIGHLY recommend [this module](https://www.npmjs.com/package/dominos "DOMINO USA MODULE") for people in the USA (NPM link). This project is licensed under [the MIT license](https://choosealicense.com/licenses/mit/ "the MIT license").

## Getting Started
These instructions will get you started with the module and so you can obtain yourself a copy, for development and testing on your local machine.

### Prerequisites and Installing
You will need to [install Node-JS](https://nodejs.org/en/download/install "Node-JS") and my package by using the following line below;

Open your terminal and run the following line, assuming you have Node-JS and NPM installed.

```
  npm install ukdomino
```

You can test this system by creating a file (e.g. bot.js) and including the following data;

```javascript
    const ukdomino = require("ukdomino")
    const postcode = "WC1V6PB"
    
    ukdomino.getLocalStore(postcode).then(localStore => console.log(localStore))
```
If it prints some JSON, you've done this correctly.

## Running Tests/Examples

If you go to the test folder, you can find some examples of code you can use to test. These files are available for use without public credit, unlike the index.js file (licensed).

### Built With

-> node-fetch, used to fetch JSON data. https://www.npmjs.com/package/node-fetch

-> fs, used to write file systems. https://nodejs.org/api/fs.html

-> path, joining paths etc. https://www.npmjs.com/package/path

-> util, sync with fs. https://www.npmjs.com/package/util


Apologies for anything I have forgot; I can add on request.

### Contributing

Please refer to CONTRIBUTING.md if you would like to make a pull request etc. (W.I.P.)

## Authors

* **Ross Hamilton** - *Main Scripting* - [rossAPi](https://github.com/rossAPi "User")


See also the list of [contributors](https://github.com/rossAPi/ukdomino/contributors) who are/have participating/participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgements

* Hats off to the creator of the Dominos USA module for giving me examples AND the Python dominos.co.uk [module](https://github.com/tomasbasham/dominos) for the Dominos.co.uk API links, since I did not know them. *coughs dominos get a public documentation.* 
* Thank you to those two people above for inspiring me to create this.
* I made this module so people could have a Node.JS module for Dominos in the UK since I cannot find one.

## DOCS: 
-> COMING SOON
