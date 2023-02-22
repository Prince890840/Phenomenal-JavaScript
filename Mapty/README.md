Note: Take a whole reference of the Google map Api AND all stuff regarding to the map methods, co-ordination, popup methods etc.

- Link of the leaflet JavaScript Where you can get the API of Google Map:- https://leafletjs.com/

- Regular function vs arrow function
  -> regular function - required to bind this keyword otherwise you get undefined (manually bind)
  -> arrow function - does not need to bind this keyword, it point to the property of the function

-Question:- Why Strict Mode?

    ->Strict mode makes it easier to write "secure" JavaScript.
    ->Strict mode changes previously accepted "bad syntax" into real errors.

    ->As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

    for example: "use strict";
                 x = 3.14; // This will cause an error (x is not defined).


- How can you defined private instance properties of the class.
example:
    class App{
        #map,
        #mapEvent;
    }