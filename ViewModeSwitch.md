What does it do?
  While maintaining the same HTML content, this project changes the layout of the site using two distinct CSS stylesheets.

What interactive elements exist?
  The grid icon and the list view icons in the upper right. The "Add to cart" button has a mouseover transition of the background color.

How do you interact with them?
  Interact with the grid and list view by clicking. The add to cart transition is via hover.

What visual effects are produced by interacting?
  The grid and icon colors change by hovering over them, and also change once they are clicked.
  The entire layout of the page is rearranged via clicking on the view style icons.

How does it do it?
  JavaScript is used by applying Event Listeners to the view style icons. The code sets two different CSS stylesheets as either disabled or non-disabled. The active stylesheet styles the HTML on the page.

What existing HTML elements are changed?
  The entire content of the page looks totally different, except for the view style icons and the border around the whole page.

What new HTML elements are created?
  No HTML elements are altered. The content stays 100% the same, and only the styling differs.

What CSS styles are used to produce the effect?
  CSS hover styles the view style icons. Different alignment, margins, padding create a 3x3 grid style layout vs. a 9-item list that stretches across the page, due to block alignment. The grid style focuses on vertical alignment, whereas the list view works to align all elements for one "product" in line with each other across the full page. Color of icons, borders, and text are maintained between style sheets.
