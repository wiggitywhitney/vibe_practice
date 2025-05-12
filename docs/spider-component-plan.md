# Spider Component Implementation Plan

## Development Notes (2025-05-12)
- **Rainbow Image Refactor:**  
  Decided to replace the CSS background-image approach with a dedicated `Rainbow` React component that renders the rainbow PNG as an `<img>`.  
  - This change allows us to precisely position the AddSpiderButton relative to the rainbow/cloud using React and CSS.
  - The rainbow image will be imported and rendered as a component, making future layout and interaction changes easier.
  - The AddSpiderButton will be positioned within the same container as the Rainbow component for better alignment and responsiveness.
  - **Planned styling changes for AddSpiderButton:**
    - Position the button close to the left cloud of the rainbow image (not just the lower left corner of the screen).
    - Increase the button size slightly for better visibility and usability.

- **Next Steps:**  
  1. Write a test for the Rainbow component to ensure it renders the image correctly.
  2. Implement the Rainbow component in `src/components/Rainbow.jsx`.
  3. Refactor App.jsx to use the Rainbow component and position AddSpiderButton accordingly.

## Requirements

### AddSpiderButton Component

1. **Name**: 
   - Component should be named "AddSpiderButton"

2. **Appearance**:
   - Small button positioned in the lower left corner
   - Black text with white outline and white fill (background)
   - Uses the custom font "spider-font.ttf" from public/fonts directory
   - Text says "Add spider?" initially, changes to "Remove spider?" when a spider is present

3. **Functionality**:
   - When clicked, adds a spider component to the page
   - When clicked again, removes the spider component
   - The button text toggles between "Add spider?" and "Remove spider?" accordingly

4. **Spider Image**:
   - Uses static image from public/Spider.png
   - Takes up about 25% of the rainbow's width
   - Is centered horizontally on the page
   - Is positioned near the top of the page
   - When spider is present, the rainbow background is adjusted to 75% opacity

## Test Plan (TDD Approach)

### Chunk 1: Button Rendering and Positioning
- Test that button renders with correct initial text ("Add spider?")
- Test button position in lower left corner
- Test button styling (black text, white outline, white fill)

### Chunk 2: Font Integration
- Test custom font application

### Chunk 3: Toggle Functionality
- Test click behavior changes text to "Remove spider?"
- Test second click changes text back to "Add spider?"

### Chunk 4: Spider Display
- Test spider image appears when button is clicked
- Test spider position (centered horizontally, near top)
- Test spider size (25% of rainbow width)

### Chunk 5: Rainbow Opacity
- Test rainbow opacity changes to 75% when spider is present

## Font Information
- Font file should be named: spider-font.ttf
- Location: public/fonts/spider-font.ttf

## Development Process
1. Set up font files
2. Write tests for each chunk in order
3. Implement components to pass tests
4. Get approval at each step before proceeding 
5. Create a git commit after tests pass for each chunk
6. For font integration (Chunk 2), integrate the component into App.jsx for visual verification before proceeding to Chunk 3 