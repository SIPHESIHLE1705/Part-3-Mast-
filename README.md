Initial Configuration of Changelog (v1.0.0) 

The project structure was created. Create the first React Native project and specify the folder layout for the types, screens, and components. 

Additional Core Screens: 

HomeScreen: Shows the average cost of each course's menu items. 

The chef can add, modify, and remove menu items using the MenuManagementScreen. 
Users can filter menu items by course using the Filter Screen feature. 

Updates for Menu Management (v1.1.0) 

create Menu Item Functionality: Captured dishName, description, price, and course, this feature allows users to create new menu items. 

Remove Item Functionality: Made it possible to take certain items off of the menu list. 

UI Improvements: 

styled buttons, containers, and input fields. 

Make the main MenuManagementScreen's background light. 

Feature for Filtering (v1.2.0) 

Course Filtering: The ability to sort menu items by starter, main, or dessert courses has been added in the filtering screen  

New Display in Filtered List: Based on the criteria that were used, the list was improved to show only pertinent menu items. 

Style and User Experience Enhancements (v1.3.0) 

Choice of Courses Dropdown: A dropdown picker was used in place of manual text entry for the course, which improved user experience and decreased input errors. 

Input fields and buttons were styled, and action buttons (Add Item, Remove) were given unique colors. 

Colors, font sizes, and button padding were changed to increase accessibility and readability. 

Applying backdrop colors to every screen ensures visual coherence. 

used a gentle color scheme to style the FilterScreen for a unified appearance. 

Improved Menu Item Presentation (v1.4.0) 

View Complete Item Details: DishName, description, and price have been added to the FlatList rendering in MenuManagementScreen. 

Displaying Grouped Items: Redesigned list item layout to display dishName, description, and price as block for each item  

Refactoring the code: grouped styles for itemContainer, itemText, descriptionText, and costText, among other components. 

harmonized styling for recurring items, which improved the readability and reusability of style declarations. 

Final User Interface Changes (v1.5.0) 

Updated Layout Consistency: All screens now have the same border-radius, padding, and margins. 

uniform font weights and sizes for labels and headings. 

Error Handling and Validation: Before enabling items to be added to the menu list, rudimentary validation for empty fields was introduced. 

Accessibility: To make the software more accessible, readable font sizes and color contrast were guaranteed throughout. 

 

 

 

 

 

Enhancements from Part 2: Better Display of Menu Items 

 

Detailed Item Display: MenuManagementScreen has been updated to display the dishName, description, and price for every new menu item. With this modification, users may view all details as soon as they add an item. 

Improved Layout: The list is now cleaner and more informative because each menu item is presented in a visually separate block with every detail arranged. 

Choosing a Course Using a Dropdown Menu: 

 

Picker Integration: To make choosing a course easier and avoid input errors, a Picker dropdown was used in place of the previous text input. 

Better User Experience: By enabling rapid and reliable course selection, dropdown menus give users a better experience. 

Enhancements to the Style: 

 

Background Colors: To enhance readability and visual appeal, background colors were added to the MenuManagementScreen and FilterScreen. 

Improved Button Styling Include the item Improved Button Styling Consistent text styles, padding, and color schemes are used for the Add Item and Remove buttons. Action buttons are more recognizable and visually distinct because of this style. 

Input Field appearance: Added rounded borders, background colors, and consistent margins to input fields for improved appearance. 

Code Restructured for Readability: 

 

StyleSheet's consolidated style definitions reduce redundancy and improve maintainability by organizing styles for buttons, inputs, and list items. 

Reused Components and Styles: To improve readability and maintainability, repeating components were made simpler, and styles were reused when feasible. 

FilterScreen's Filtered View: 

 

Better Filtering: To make it simpler for users to locate particular dishes, the FilterScreen was modified to only display menu items that correspond with the specified course. 

The "Show All" option was added, enabling users to reset the filter and view the full list of items, improving user control over the displayed items.  

 
