# HarryPotter-TaskManager
Mateo Roza - Mayra Cueto - Giovanni La Volpe

# CONTEXT
A web application that retrieves data from the HP-API (Harry Potter API) and displays the characters of the saga on the main menu. Characters can be marked as favorites to filter them later. They can also be deleted.

# MAIN SCREEN
On the home screen, you can see cards for each character in the saga. Each card displays the character's name, the house they belong to, and their image. Each card includes a favorite button to save the character using localStorage (allowing you to filter by favorites later) and a button to view details. Finally, there is a reset button for the characters. This button restores the original number of characters, adding back any that were previously deleted.

# DETAILS MENU
Clicking "view details" on a character card displays a detailed menu with additional information, such as their date of birth. From here, you can delete the character so they no longer appear when returning to the main menu.

# LOGIN
The website features a persistent login system using localStorage. Users enter their username and email, which are then verified against 3 pre-defined sets in a database. If any information does not match, an error message is displayed.

# SETTINGS
The website includes a settings menu. In this section, users can toggle between dark and light modes and switch between 4 different color palettes based on their chosen Hogwarts house. For example, selecting the Gryffindor theme will apply red tones throughout the entire website.
