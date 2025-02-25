# Pair Programming Exercises

This is a React application designed for conducting pair programming exercises during technical interviews for software engineering positions. The app provides a structured environment for candidates to demonstrate their coding abilities, problem-solving skills, and collaboration.

## Features

- **Exercise Library**: Collection of coding challenges of varying difficulty
- **Interactive UI**: Clean, intuitive interface for navigating exercises
- **Code Editor**: Simple editor for writing and testing solutions
- **Test Runner**: Simulated test runner to validate solutions
- **Responsive Design**: Works on both desktop and mobile devices

## Component Structure

The application is organized with the following component structure:

```
src/
├── components/
│   ├── common/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── Sidebar.js
│   └── exercises/
│       ├── ExerciseList.js
│       ├── ExerciseItem.js
│       └── ExerciseDetail.js
├── contexts/
│   └── ExerciseContext.js
└── utils/
    ├── api.js
    └── helpers.js
```

### Key Components

- **Header**: Navigation and branding
- **Footer**: Links and copyright information
- **Sidebar**: Exercise difficulty filtering and navigation
- **ExerciseList**: Grid display of available exercises
- **ExerciseItem**: Card representation of each exercise
- **ExerciseDetail**: Main workspace with code editor and test runner

### Context

- **ExerciseContext**: Manages global state for exercises, including loading, selection, and error handling

## Exercise Format

Each exercise includes:

- Title
- Difficulty level (Easy, Medium, Hard)
- Description of the problem
- List of specific tasks to complete
- Starter code template
- Test cases to validate solutions

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Using for Interviews

This application is designed to be used during pair programming interviews:

1. Have the candidate select an exercise appropriate for their experience level
2. Allow them to read through the problem statement and requirements
3. Observe as they work through the solution, providing guidance as needed
4. Run tests to validate their solution
5. Discuss alternative approaches and optimizations

## Customizing Exercises

To add new exercises, modify the `fetchExercises` function in `src/utils/api.js` to include additional exercise objects following the existing pattern.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Technologies Used

- React
- CSS
- JavaScript

## License

This project is open source and available under the MIT License.