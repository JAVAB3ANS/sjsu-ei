# SJSU Eligibility Index Calculator
- This is my DIY project that calculates your eligibility to undergraduate programs at San Jose State University! This is a showcase of my abilities to implement algorithms and abstractions with the help of HTML, CSS, and JS. Plug away to find where you stand!

- This is an eligibility index calculator you can use to determine your chances of getting into your chosen program of study here at SJSU. The general idea is that if you fall above the number on the list below the calculator, you will most likely be accepted - but being above the EI does not mean you will be accepted. It just means that you fall within the pool of students that will be considered. If you are looking to apply to an engineering major, you will be focusing on the COE EI number that results from the calculation.

## Program Purpose and Development
- The programming language that I used for my algorithm was JavaScript, along with the interactivity function which was expressed using the VueJS application programming interface. My program’s purpose is to help high school students determine their eligibility into general admission or the college of engineering at San Jose State University. The general idea is that if one falls above the number on the list below the calculator, one will most likely be accepted or considered for admission. I created two calculations that would render output on the user interface, one for “general admission” (EI) and the other for admission into the “college of engineering” (COE EI). 

- I independently made the whole program. First, I initialized several variables in my `app.js` file like `EI,` `CSU_GPA,` `SAT_EBRW,` and `SAT_MATH` which the user would input values to calculate their `EI` and/or `COE_EI.` I created form input and assigned the VueJs variables to the `v-models` associated with the form input shown in the user-interface. The “EI” variable would be outputted using a `v-if =’EI!= null’` built in with my HTML `<div>` element, confirming that that the “EI” variable is unequal to “null” as a result of being given another value by my JS calculation.				

- After a while, I thought that my project was not idiot-proof enough as the web developer in me wanted to discourage invalid user responses like extremely long values and punctuation. I wrote additional functions like `(document.onkeydown = function(e))` that only accepted input from numbers, ignoring input from key codes `16 (Shift key)`, `187 (addition/equal sign)`, `189 (subtraction/minus sign)`. In addition, I created the function `(limitKeypress(event,value, maxLength))` which denies additional numerical input if the input length is greater than the maximum length that the function specified for. These functions indirectly discourage the user to input responses that aren’t numbers.

## Algorithm
- My main algorithm which is the `calculate: function()` determines both separate calculations for "EI" and the "COE_EI" when the user presses the green "calculate" button on the website. The calculation for “general EI” is `(GPA x 800) + (SAT_EBRW + SAT_MATH)`. The calculation for `COE EI` is `((GPA x 800) + (SAT_ENGLISH + SAT_MATH x 3))/2`. Once the parent algorithm calculates `EI` and `COE_EI`, it’ll output outcomes in viewable HTML text, therefore creating a methodical sequence in my code.

- The `if-else` statements beneath the calculations for `EI` (1st-circle) and the `COE EI` (2nd-circle) are the child algorithms since they add the variable `AREA_BOOST` (200 points) to the `EI` if the user inputs a number under 20, which assumes the user’s current high school is local to SJSU).

- Finally, the last child algorithm, the “if-else” statement (3rd-circle), determines the user’s projected decisions at general admission. If the user’s `EI` is below the value of the `EI_STANDARD` variable, they haven’t met standards. If the user’s `EI` is between 2950 and 3750, they’ve met standards. If the user’s ”EI” is between 3750 and 4825, they’ve exceeded standards. If the user’s `EI` is greater than/equal to 4825, they’ve transcended requirements.

## Abstraction
- For my 1st abstraction (1st-rectangle), I initialized my variables in `data: { },` which is an object in the VueJS library framework, to allow numerical values for `SAT_MATH`, `SAT_EBRW`, `CSU_GPA`, and `SERVICE_AREA` which the user inputs. Without this, my code would be thrown under the function `calculate: function()`, burdening it with the role of handling variable initialization.

- For my 2nd abstraction (2nd-rectangle), I have a `calculate: function()`  algorithm inside a 
`method: { }` object, another element of VueJS library framework, which houses 3 child functions. It works as soon as the user presses the green "calculate" HTML button mapped to the "v-on:click="calculate" button-class, activating the `calculate:function()` function on the user-interface. The JS variables `EI`, `COE_EI`, and `DECISION` output HTML text, allowing the user to find results immediately.

- For my 3rd abstraction (3rd-rectangle), the `this.EI` and `this.COE_EI` points to their respective variables in the "app" instance. This enables me to mount the separate variable instances to the `data` object, making it easier to set up data observation throughout a series of initialization steps. It sets up the output in the `{{ EI }}` and `{{COE_EI}}` which renders as HTML text on the user interface.

## Video
- [My Video Here!](https://jasonanhvu.github.io/sjsu-ei/sjsu-ei.mp4)

### Author(s):
- [Jason Anh Vu](https://javu404.github.io/) ~ *Webpage Author, Programmer, & Student 
  > Reddit: [u/WizardApple](https://reddit.com/user/WizardApple) 

### License
[MIT](https://opensource.org/licenses/MIT) © 2020 Jason Anh Vu

[![The MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
