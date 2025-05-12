# Spider Component Implementation Plan

## Requirements

### AddSpiderButton Component

1. **Name**: 
   - Component should be named "AddSpiderButton"

2. **Appearance**:
   - Positioned near the bottom-left cloud (not just screen corner)
   - Slightly larger size than default button (adjust padding/font-size)
   - Black text with white outline and white fill (background)
   - No visible outline on hover or focus
   - Uses the custom font "spider-font.ttf" (Chunk 2 - Font Integration - Completed)
   - Text says "Add spider?" initially, changes to "Remove spider?" when a spider is present (Chunk 2 - Toggle Functionality)

3. **Functionality**:
   - When clicked:
     - With an ~15% probability, displays the 'Surprise Spider' image (see below).
     - Otherwise (most of the time), adds the regular Spider Image Component to the page (Chunk 3 - Spider Display).
   - When clicked again (regardless of which spider is showing), removes the currently displayed spider component (Chunk 3 - Spider Display).
   - The button text toggles between "Add spider?" and "Remove spider?" accordingly whenever *any* spider is displayed (Chunk 2 - Toggle Functionality).

### Spider Image Component (Regular Spider - To be created/managed by AddSpiderButton)

4. **Appearance & Behavior**:
   - Uses static image from `public/Spider.png`
   - Takes up about 25% of the rainbow's width
   - Is centered horizontally on the page
   - Is positioned near the top of the page
   - Display is toggled by AddSpiderButton clicks (Chunk 3 - Spider Display)

### Surprise Spider (Alternative display managed by AddSpiderButton)

5. **Appearance & Behavior**:
   - Uses static image from `public/spidersspidersspiders.png`
   - Displays at 100% of the rainbow's width.
   - Triggered randomly (~15% chance) on "Add spider?" click instead of the regular spider.
   - Display is toggled off by AddSpiderButton click, same as the regular spider (Chunk 3 - Spider Display).

### Rainbow Component Interaction

6. **Opacity Change**:
   - When *either* the regular or surprise spider image is present, the Rainbow component's opacity adjusts to 75% (Chunk 4 - Rainbow Opacity).

### Layout Requirements

7. **Whitespace**:
   - Minimize excess whitespace around the Rainbow component for a more compact layout.

## Test Plan (TDD Approach)

### Chunk 1: Button Rendering, Positioning, and Styling
- Test button renders with correct initial text ("Add spider?")
- Test button position is near the bottom-left cloud.
- Test button has increased size (verify padding/font-size via computed styles or snapshots).
- Test button styling (black text, white outline/fill).
- Test no outline appears on hover/focus.
- Test overall layout has reduced whitespace around the rainbow (visual verification or snapshot testing).

### Chunk 2: Toggle Functionality
- Test click behavior changes text to "Remove spider?"
- Test second click changes text back to "Add spider?"

### Chunk 3: Spider Display (Regular & Surprise)
- Test regular spider image component appears when button is clicked (mock random to force this path).
- Test regular spider image component disappears on second click.
- Test regular spider position (centered horizontally, near top).
- Test regular spider size (approx 25% of rainbow width).
- Test surprise spider image (`spidersspidersspiders.png`) can appear when button is clicked (mock random to force this path).
- Test surprise spider image displays at 100% width relative to rainbow.
- Test surprise spider image component disappears on second click.

### Chunk 4: Rainbow Opacity
- Test Rainbow component opacity changes to 75% when regular spider is present.
- Test Rainbow component opacity changes to 75% when surprise spider is present.

## Font Information
- Font file: `spider-font.ttf`
- Location: `public/fonts/spider-font.ttf`
- Integration: Completed.

## Development Process
1. Set up font files (Completed).
2. Write tests for each chunk in order (Chunk 1 first).
3. Implement components/styling to pass tests for the current chunk.
4. Visually verify UI changes in the browser after each chunk.
5. Get approval at each step before proceeding to the next chunk.
6. Create a git commit after tests pass for each chunk. 