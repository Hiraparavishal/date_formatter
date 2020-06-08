# date_formating
 date_formating package is use to formate date in specific formate. 

## Installation

Use the package manager npm to install date_formating.

```bash
npm install date_formating
```

## Usage
No need to parse the date and doing operation on it and get specific date formate.
you just call DateFormate("pass formate") and get specific foramted date which you want.
```node.js
var date = require('date_formating');

  //call DateFormate() function and pass formate in argument
  var dateformate = date.DateFormate("DD-MM-YYYY");
  //07-06-2020
  var dateformate = date.DateFormate("MM-DD-YYYY");
  //06-07-2020
```
 if you have date and you get into specific formate
 ```node.js
  var date = require('date_formating');
  var datestr = "2020-06-07T07:51:27.670Z" // only this formate is supported
  //call PreDateFormate() function and pass formate in argument
  var dateformate = date.PreDateFormate(datestr,"DD-MM-YYYY");
  //07-06-2020
  var dateformate = date.PreDateFormate(datestr,"MM-DD-YYYY");
  //06-07-2020
```
## Formate
- DD-MM-YYYY
- DD-YYYY-MM
- MM-DD-YYYY
- MM-YYYY-DD
- YYYY-DD-MM
- YYYY-DD-MM

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
Read Licence.txt file from Github