# Shopping Cart Application

A modern, responsive shopping cart application built with React, Redux Toolkit, Context API, and Tailwind CSS.

## Features
- Product listing fetched from Fake Store API
- Add/Remove items from cart
- Manage item quantities in cart
- Dark/Light mode support persisted in localStorage
- Fully responsive design

## Technologies Used
- React (Vite)
- Redux Toolkit
- Context API
- React Router
- Tailwind CSS
- Axios

## Folder Structure
- `src/components`: Reusable UI components
- `src/pages`: Main application views
- `src/context`: Context API providers
- `src/redux`: Redux store and slices

## Installation
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.

## Running the project
- Use `npm run dev` for development.
- Use `npm run build` to compile for production.
- Use `npm start` to run the production build.

## Redux Explanation
Redux Toolkit is used for state management. `productSlice` handles fetching products, and `cartSlice` manages cart item state (add, remove, quantity).

## Context API Explanation
ThemeContext is used to manage and persist the light/dark theme preference across the application using `localStorage`.

## Screenshots
[Placeholder for screenshot]
