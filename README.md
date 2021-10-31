# _Mr. Rogers Neighborhood_

#### By _**James Matthew Luker**_

#### _Mr. Rogers Neighborhood is an interactive webpage designed to take a user's number input and transform it in several ways._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _JQuery-3.6.0._
* _Visual Studio Code_
* _Markdown_

## Description

_Mr. Rogers Neighborhood is a free to use, interactive HTML webpage that allows the user to enter a number and by clicking a submit button they can transform that number in several ways.  It will turn the input number into an array of numbers from 0 up to that number, then it will replace every element that includes a 1 with the word "Beep!", every element that includes 2 with the word "Boop!" and every element that includes a 3 with the text "Won't you be my neighbor". The user can input another number as many times as they want and watch the output change._

## Test Drive Development

**Describe: inputChangeToRangeArray()**

**Test**: "It should return an array with a 1 if the number 1 is inputted"
* **Code**: inputChangeToRangeArray(1);
* **Expected Output**: [1]

**Test**: "It should return an array of numbers starting with 0 and up to the input number"
* **Code**: inputChangeToRangeArray(4);
* **Expected Output**: [0, 1, 2, 3, 4]

**Test**: "It should take in a number, declare an array with elements that start with 0 and go up to the inputted number, and call changeRangeArray on that array to have the desired string output"
* **Code**: inputChangeToRangeArray(4)
* **Expected Output**: "0", "Beep!", "Boop!", "Won't you be my neighbor?", "4"

**Describe: changeRangeArray()**

**Test**: "It should take the inputted array and declare a new array with the inputted array's values"
* **Code**: changeRangeArray([1]);
* **Expected Output**: [1]

**Test**: "It should take the new array and turn it in to a string"
* **Code**: changeRangeArray([0, 1, 2]);
* **Expected Output**: "0, 1, 2"

**Test**: "It should turn that string into an array of individual string values"
* **Code**: changeRangeArray([0, 1, 2])
* **Expected Output**: ["0", "1", "2"]

**Test**: "It should check if the number 1 is included in any of the elements of the new string array"
* **Code**: changeRangeArray([0, 1, 2, 3, 4]);
* **Expected Output**: true, ["0", "1", "2", "3", "4"]

**Test**: "If an element of the array includes the number 1 it should change that element to 'Beep!'"
* **Code**: changeRangeArray([0, 1, 2, 3, 4]);
* **Expected Output**: ["0", "Beep!", "2", "3", "4"]

**Test**: "If an element of the array includes the number 1 it should change that element to 'Beep!', and if an element of the array includes the number 2 it should change that element to 'Boop!'"
* **Code**: changeRangeArray([0, 1, 2, 3, 4]);
* **Expected Output**: ["0", "Beep!", "Boop!", "3", "4"]

**Test**: "If an element of the array includes the number 1 it should change that element to 'Beep!', and if an element of the array includes the number 2 it should change that element to 'Boop!', and if an element of the array includes the number 3 it should change that element to 'Won't you be my neighbor?'"
* **Code**: changeRangeArray([0, 1, 2, 3, 4]);
* **Expected Output**: ["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4"]

**Test**: "It should make the 3 exception the most important, then 2 the 2 exception, then the 1 exception"
* **Code**: changeRangeArray([1, 2, 3, 4, 12, 13, 23]);
* **Expected Output**: ["Beep!, "Boop!", "Won't you be my neighbor", "4", "Boop!", "Won't you be my neighbor", "Won't you be my neighbor"]

**Test**: "It should return the mutated input array changed into a list of strings"
* **Code**: changeRangeArray([1, 2, 3, 4, 12, 13, 23]);
* **Expected Output**: "Beep!, Boop!, Won't you be my neighbor, 4, Boop!, Won't you be my neighbor, Won't you be my neighbor

## Setup/Installation Requirements

*  Note: The {} symbols are to indicate what code needs to be written.  Do not use the {} symbol in your code
* _Open your terminal and use the code {cd ~/Desktop} to navigate to your computer's desktop._
* _In your terminal type the code {git clone https://github.com/jmlden36/Mr-Rogers-Neighborhood.git} to clone the portfolio repository onto your desktop._
* _Find the Mr-Rogers-Neighborhood project folder on your desktop and open it._
* _Now open the index.html file that resides inside the Mr-Rogers-Neighborhood project folder which will open the Mr-Rogers-Neighborhood HTML webpage._
* _Enter a number in the input form._
* _Press the enter key on your keyboard or click the "Click here to transform your number" button to see how your number is transformed._
* _Repeat this process as many times as you want with different numbers to see the different transformations._
* _You can also access Mr. Rogers Neighborhood by clicking on this [github pages link](https://jmlden36.github.io/Mr-Rogers-Neighborhood/)_ 

## Known Bugs

* _There will be no output for non number inputs or negative number inputs._
* _If you have any issues or notice any bugs please email [jamesmattluker@gmail.com](mailto:jamesmattluker@gmail.com)._

## License

_[MIT](LICENSE.txt)_

Copyright (c) _2021_ _James Matt Luker_