# Spring Boot + React Multiplication Table Application

## Overview

This project was developed as part of Java Full Stack Development Placement Training to understand Frontend-Backend Integration using React.js and Spring Boot.

The application allows users to enter a number from the React frontend and retrieve its multiplication table from the Spring Boot backend through a REST API.

The project demonstrates:

- Spring Boot REST APIs
- React Frontend Development
- Fetch API
- Frontend-Backend Communication
- Controller-Service Architecture
- Path Variables
- CORS Configuration
- State Management using React Hooks

---

## Technologies Used

### Frontend
- React.js
- JavaScript (ES6+)
- JSX
- Fetch API
- React Hooks (useState)

### Backend
- Java
- Spring Boot
- REST APIs
- Maven

---

## Project Architecture

User
↓
React Frontend
↓
Fetch API Request
↓
Spring Boot Controller
↓
Service Layer
↓
Response Returned
↓
React UI Display

---

## Backend Implementation

### Spring Boot Application

The application starts using the Spring Boot main class.

### Controller Layer

The controller exposes a REST endpoint that accepts a number through a path variable and returns the multiplication table. It also enables communication with the React frontend using CORS configuration.

#### API Endpoint

GET /table/{number}

Example:

GET /table/5

---

### Service Layer

The service layer contains the business logic for generating multiplication tables using a loop.

Example Output:

5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
...
5 * 10 = 50

---

## Frontend Implementation

### React Application

The React application uses functional components and Hooks for managing user input and state.

### useState Hook

Used to store:

- Username
- Password
- User Input Data

React state updates automatically when users interact with form fields.

---

### Fetch API Integration

The frontend communicates with the Spring Boot backend using the Fetch API.

Features:

- Sends HTTP Requests
- Receives Backend Responses
- Displays Results Dynamically
- Handles Connection Errors

The request is sent using JSON data and the response is displayed through alerts.

---

## Concepts Practiced

### Spring Boot

- Spring Boot Application Setup
- REST API Development
- Controller Layer
- Service Layer
- Dependency Injection
- Path Variables
- CORS Configuration

### React

- Functional Components
- useState Hook
- Event Handling
- Form Inputs
- Fetch API

### Full Stack Concepts

- Frontend-Backend Communication
- REST Architecture
- JSON Data Transfer
- Client-Server Interaction
- API Testing

---

## Features

### Backend

✔ Generate multiplication tables

✔ REST API endpoint creation

✔ Service-based business logic

✔ CORS support

### Frontend

✔ User input handling

✔ API communication using Fetch

✔ Dynamic response display

✔ Error handling

---

## Learning Outcomes

Through this project, I learned:

- How React communicates with Spring Boot applications.
- Building REST APIs using Spring Boot.
- Creating service-layer business logic.
- Passing values using Path Variables.
- Handling frontend requests using Fetch API.
- Managing component state using React Hooks.
- Configuring CORS for cross-origin communication.
- Understanding complete frontend-backend workflow.

---

## Training Details

**Placement Training:** Java Full Stack Development

**Day:** 16

**Topic:** React and Spring Boot Integration

### Concepts Learned

- Frontend-Backend Integration
- REST APIs
- Fetch API
- React Hooks
- Controller Layer
- Service Layer
- Path Variables
- CORS
- Full Stack Communication

---

## Project Structure

Backend
│
├── MutlitableApplication.java
├── MultiController.java
└── MultiService.java

Frontend
│
├── LoginforSpringBoot.js
└── index.js

---

## Author

**Shrinidhi Dhamodharan**

Aspiring Java Full Stack Developer

Currently learning React.js, Spring Boot, REST APIs, JPA, Database Integration, and Full Stack Development through hands-on projects and placement training.

---
## Here are the screenshots of the work done today
<img width="1040" height="578" alt="image" src="https://github.com/user-attachments/assets/4d6a0fb9-5ada-484f-90eb-0f002fdb6146" />
<img width="1040" height="759" alt="image" src="https://github.com/user-attachments/assets/447a1551-6f4c-4798-89c4-e51a086734d5" />
<img width="1040" height="862" alt="image" src="https://github.com/user-attachments/assets/ec430ca4-04fb-49de-868a-7e1b9a7ed339" />

