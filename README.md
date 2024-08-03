# TrekBag - A Hiker's To-Do List

## Description

TrekBag is a specialized to-do list application designed for hikers and travelers. It helps you keep track of essential items you need to pack, ensuring you're always prepared for your adventures. The project is built using ReactJS with Vite and showcases various React concepts and best practices.

## Live Site

[TrekBag Live](https://kuyaloy.github.io/ReactJs-TrekBag/)

## Repository

[TrekBag GitHub Repository](https://github.com/KuyaLoy/ReactJs-TrekBag/)

## Features

- **Initial Items**: Includes Good Mood (for humor), Passport, and Phone Charger.
- **Packing Tracker**: Checkbox to mark items as packed, with a counter displaying the number of packed items (e.g., "1/3 items packed").
- **Add Item**: Functionality to add new items to your packing list.
- **Mark All Complete**: Option to mark all items as packed.
- **Reset to Initial**: Resets the list to the default three items.
- **Remove All Items**: Clears the entire list.
- **Sorting**: Dropdown to sort items by their packed and unpacked status using React-Select.

## Learning Outcomes

This project helped me enhance my skills in:

- Project Structure (Reusability)
- `useState`
- `map`
- Input Checkboxes (Controlled vs Uncontrolled Input)
- Array of Objects & Spread Operator
- React Patterns for Updating State & Conditional Rendering Pitfalls
- Best Practices for Naming Props & Where to Compute Derived State
- Sorting Items & Advanced LocalStorage with `useState`
- `useMemo`
- Children Composition
- Context API with Custom Hook
- Transition to Zustand (State Management)

While developing TrekBag, I explored prop drilling and state management using context. However, noticing the disadvantages of context, I rewrote the state management using Zustand. You can see this progression in the commit history of my GitHub repository.

## Credits

Special thanks to ByteGrad for the inspiration and tutorials.

## Disclaimer

I am an experienced developer, and I already know these concepts. However, I decided to revisit the basics to reinforce my understanding and to inspire others in their learning journey.

## How to Run

1. Clone the repository:
   ```sh
   git clone https://github.com/KuyaLoy/ReactJs-TrekBag.git
   cd TrekBag
   npm install
   npm run dev
   ```
