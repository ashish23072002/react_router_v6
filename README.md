# React 19 Project with React Router v6 and API Integration : - [Live Link](https://movies-react-router-v6.netlify.app/)

This project is a modern web application built using the latest features of **React 19** and **React Router v6**. The app demonstrates dynamic routing, API data handling, and error management using the new `loader` and `errorElement` features introduced in React Router.

---

## 🚀 Key Features

- **React 19**: Utilizes the latest version of React with improved performance and new hooks.
- **React Router v6**: Implements nested routes, loaders for data fetching, and error boundaries.
- **API Integration**: Fetches dynamic data from an external API using React Router loaders.
- **Error Handling**: Gracefully handles errors using `errorElement` from React Router v6.
- **Modular Structure**: Clean and scalable folder structure for easy maintenance and feature addition.

---

## 🧠 How It Works

- Routes are defined using `createBrowserRouter` and `RouterProvider`.
- API data is fetched using **route loaders** instead of useEffect, which improves performance and SSR capabilities.
- Errors such as failed API calls are caught and displayed using **React Router's errorElement**.


---

## 🔧 Tech Stack

- **React 19**
- **React Router v6**
- **JavaScript (ES6+)**
- **Fetch API**

---

## 📁 Folder Structure (Sample)



## Why React Router?

Single-Page Application (SPA) Navigation: Allows you to navigate between different "pages" (components) without full page reloads, making your app feel faster and more fluid.

Declarative Routing: Define your routes as React components, making them easy to read and manage.

URL Management: Synchronizes your UI with the URL, allowing users to bookmark pages and use the browser's back/forward buttons.

Nested Routing: Supports complex UIs where parts of the layout change based on nested URLs.

## Outlet

In React Router DOM, the <Outlet /> component serves as a placeholder within a parent route's component where the matched child route components will be rendered. It is a key element for implementing nested routing and shared layouts.