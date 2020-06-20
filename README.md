# Alfil

Alfil is a lightweight zero-dependency Javascript library for data validation.

## INSTALLATION

Install Alfil using [npm](https://npmjs.org/):

```bash
npm i alfil
```

Or import the library from the [UNPKG CDN](https://unpkg.com/) inside a `<script>` tag:

```html
<script src="https://unpkg.com/alfil@latest">
```

## 🚀 QUICK USAGE
With these easy steps you can have your Alfil validators up and running in a blink of an eye:
1. Require Alfil (only if you installed it via npm):

```javascript
const Alfil = require("alfil");
```

2. Create your validator schema. For example:

```javascript
const myValidator = Alfil.createValidator({
  firstName: Alfil.string().required(),
  website: Alfil.string().url(),
  prizes: Alfil.number().integer(),
  isFamous: Alfil.bool(),
});
```

3. Then, you can use your validator to validate your data. Continuing with the previous example, let's suppose you have the following data object:

```javascript
const myDummyData = {
  firstName: "James",
  website: "https://james.com/",
  prizes: 24,
  isFamous: true,
};

// Now run the validations against your dummy data
const validationResults = myValidator.validate(myDummyData);
```

4. This last line of code execute your validations. The `validate()` method returns an object with all your validation results. This object has an `isValid` property with a boolean value, so you can make decisions depending on it:

```javascript
if (validationResults.isValid) {
  // Do something if dummy data is valid
} else {
  // Otherwise, do something else
}
```

## ALFIL TYPES

Alfil provides different types of data to shape your validators. Every type has it's own methods and properties, so let's dive into the details:

### Alfil.string(options)
This may be the most common type you're going to use. As it's name suggest, this type will expect a String value when your validation process runs. Next, we'll see it's methods and options:

| Method  | Params                    | Explanation                                                                                                                                                                                                                                                                                                                           |
| -------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| required | -                         | Sets the data to be required, that means your validation will fail against an empty string (you can change this behaviour by setting a custom `emptyValue`, check it out here).                                                                                                                                                       |
| email    | -                         | This method will expect a valid email address. Alfil uses an own regular expression to validate. If you want to use a different RegExp, you can use the `match()` method, that means your validation will fail against an empty string (you can change this behaviour by setting a custom `emptyValue`, check it out here).      |
| password | `opts?: { type: string }` | This method will expect a "safe" password. The `type` property of the `opts` parameter let you decide which kind of password you prefer. Alfil provides you with 2 types of password: **"complex"** and **"moderate"**, the latter being the default. Like the `email()` method, you can use your own RegExp using `match()`. |
| username | -                         | This method will expect a valid username.                                                                                                                                                                                                                                                                                             |
| url      | `opts?: { type: string }` | This method will expect a valid url. The `type` property of the `opts` parameter let you decide what kind of url you prefer. Alfil provides you with 2 types of url: **"requiredProtocol"** and **"optionalProtocol"**, the latter being the default.                                                                        |
| match    | `regex: Regex`            | This method will test the value against the regular expression provided as an argument.                                                                                                                                                                                                                                               |
| min      | `minVal: number`          | This method will check if the length of the value is greater than or equal to `minVal`.                                                                                                                                                                                                                                               |
| max      | `maxVal: number`          | This method will check if the length of the value is less than or equal to `maxVal`.                                                                                                                                                                                                                                                  |
| enum     | `arrOptions: string[]`    | This method will expect that the value is equal to one of the strings provided inside the `arrOptions` Array.                                                                                                                                                                                                                         |

**Options.** the Alfil's String type accepts an options object as an argument. You can use the following options to configure the default behaviour:
|Option|Type|Default|Explanation|
|-|-|-|-|
|trim|boolean|`false`|If this option is set to `true`, Alfil will apply the`trim()` method to the value before executing the validators, except for the password method defined in the previous table. |
|emptyValue|string&#124;null|`""`|This option defines the value that has to be taken as an empty value.

### Alfil.number(options)
This type will expect a Number value when your validations run. Let's see it's methods and options:
|Method|Params|explanation|
|-|-|-|
|required|-|Sets the data to be required, that means your validation will fail against a `null` value (like the Alfil's string you can change this behaviour by setting a custom `emptyValue` property inside the options object).|
|min|`minVal`|This method will check if the number is greater than or equal to `minVal`.|
|max|`maxVal`|This method will check if the number is less than or equal to `maxVal`.|
|integer|-|Will check if the number is an integer.|
|float|-|Will check if the number is a floating point number.|

**Options.** The Alfil's Number type accepts an options object as an argument. You can use the following options to configure the default behaviour:
|Option|Type|Default|Explanation|
|-|-|-|-|
|emptyValue|string&#124;null&#124;number|`null`|This option defines the value that has to be taken as an empty value.|

### Alfil.bool()
This type will expect a Boolean value when your validations runs. Let's see it's methods:
|Method|Params|explanation|
|-|-|-|
|true|-|This method will check if the value is equal to `true`|
|false|-|This method will check if the value is equal to `false`|

## THE VALIDATOR SCHEMA
The `createValidator` method from `Alfil` returns a validator schema. This let's you run your validations against your data objects and thus getting the validation results:
```javascript
const myValidatorSchema = Alfil.createValidator({...});
```
Run your validations using the `validate`method. This method returns the validation results object, so you can store it in a variable, for example:
```javascript
const myResults =  myValidatorSchema.validate(myData);
```
Or you can access these results later using the `getResults` method:
```javascript
const myResults =  myValidatorSchema.getResults();
```
**keep in mind that if you don't run your validations (with the `validate` method) before getting the results, this will throw an Error.**

## 🤝 CONTRIBUTING

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## AUTHOR
👤 **Manuel Pascual**
- Twitter: [@manupasc](https://twitter.com/manupasc)
- Github: [@pascualmj](https://github.com/pascualmj)

## SHOW YOUR SUPPORT
Give a ⭐️ if this project helped you!
And maybe you could [BUY ME A COFFEE](https://www.buymeacoffee.com/pascualmj) 😀
## 📝 LICENSE

This project is [ISC](https://github.com/pascualmj/alfil/blob/master/LICENSE.txt) licensed.
