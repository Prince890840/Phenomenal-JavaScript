Q:- What is modules ?
-> A module is just a file. One script is one module. As simple as that.

Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:

export keyword labels variables and functions that should be accessible from outside the current module.
import allows the import of functionality from other modules.

Note:- In the browser, we can make a variable window-level global by explicitly assigning it to a window property, e.g. window.user = "John".

Then all scripts will see it, both with type="module" and without it.

-> If the same module is imported into multiple other modules, its code is executed only once, upon the first import. Then its exports are given to all further importers.

Note(======Important======):- A module code is evaluated only the first time when imported

If the same module is imported into multiple other modules, its code is executed only once, upon the first import. Then its exports are given to all further importers.

The one-time evaluation has important consequences, that we should be aware of.

-> Modules always "use strict".
-> To load external scripts from another origin (domain/protocol/port), CORS headers are needed
-> Duplicate external scripts are ignored.
