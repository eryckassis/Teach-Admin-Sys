# Teach-Admin-Sys — Professional Documentation
 
## Project Overview

**Teach-Admin-Sys** is an education administration system under development, designed to streamline the management of users (students, teachers, and administrators), courses, and support/academic tickets. It leverages intelligent AI-powered features such as automatic ticket classification, personalized course recommendations, and anomaly detection in user logs.

The system is being developed by Eryk Assis with a focus on scalability, modularity, and seamless integration with modern front-end frameworks.

---
 
## Objectives and Benefits

- **Intelligent Automation:** Utilizes AI algorithms to automate administrative routines (ticket classification, course suggestions, suspicious access detection), reducing manual workload and speeding up service.
- **Centralization:** Unifies the management of different user profiles (students, teachers, administrators) and their actions within a single backend.
- **Simple Integration:** RESTful API ready to be consumed by frontend applications in React, Angular, Vue, or any HTTP client.
- **Extensibility:** Modular code structure, facilitating the addition of new AI features and business rules.
- **Personalization:** Offers personalized suggestions and more agile, intelligent service for end users.

---

## Implemented Features
 
### 1. User Management

- **User Models:** Object-oriented JavaScript classes for Student, Teacher, and Admin profiles, each with specific methods and attributes.
- **Encapsulation:** Private properties and secure access methods (`getters`/`setters`).
- **Information Display:** Methods to return user information according to their role.

### 2. Ticket API with Intelligent Classification

- **Route `/tickets/classify`:** Receives ticket messages and uses AI (OpenAI) to automatically classify them into categories such as `BUG`, `URGENT`, `SUGGESTION`, `PRAISE`, `QUESTION`, etc.
- **Structured Response:** Returns the suggested category, a list of available categories, and the classified message.
- **Validation:** Checks the request body to ensure data integrity.

### 3. AI-Based Course Recommendation

- **Function `recommendCourses`:** Analyzes the user's course history compared to other profiles, suggesting new courses based on interest similarity.
- **Personalization:** Each recommendation is unique to the user's history.
 
### 4. Anomaly Detection
 
- **Function `detectionAnomaly`:** Detects atypical patterns in user accesses/logs, increasing system security.

### 5. Modern Architecture

- **Node.js + Express:** Robust and efficient backend.
- **Security and Error Handling Middlewares.**
- **Environment variable configuration for security.**
- **CORS enabled for easy integration with any frontend.**

---

## How to Integrate with the Frontend

### Step by Step

1. **Backend Configuration:**
   - Start the Node.js server (`npm start` or `node src/index.js`).
   - Backend will be available on the configured port (default is 3000).

2. **API Consumption:**
   - **Ticket Classification:** Send a POST request to `/tickets/classify` with `{ mensagem: "your message" }` in the body.
   - **Recommendations and other endpoints:** Implement routes as the backend evolves.
   
   **Example (fetch in React):**
   ```js
   fetch("http://localhost:3000/tickets/classify", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ mensagem: "I need help with access!" })
   })
   .then(res => res.json())
   .then(data => console.log(data));
   ```

3. **Authentication & Security:**
   - Implement JWT/token authentication in the frontend as needed in the future (in development).

4. **Real-Time Updates:**
   - Adapt the frontend to consume AI responses in real-time, displaying suggestions and automatic classifications to users.

---

## Benefits for End Users

- **Fast and Intelligent Service:** AI automatically classifies tickets, facilitating triage and quick resolution.
- **Personalized Experience:** Course and content suggestions tailored to the user's profile.
- **Increased Security:** Proactive detection of suspicious activities.
- **Autonomy:** Users can resolve doubts, access information, and receive recommendations without constant human support.

---

## Future Potential

- **Expansion of AI Modules:** New algorithms and models for dropout prediction, performance analysis, etc.
- **Advanced Course Management:** Enrollment, approval, class administration, and evaluations.
- **Dashboards for Admins and Teachers:** Metrics visualization, anomaly alerts, and easy management.
- **Internationalization and accessibility.**

---

## Notes

- **Status:** Project in active development; new features and improvements are being planned and progressively implemented.
- **Author:** Eryk Assis

---

## Conclusion

Teach-Admin-Sys already delivers a robust foundation for an intelligent educational management system, ready for integration with any modern frontend and prepared to scale with new AI features as the project evolves. Its structured backend, clear API, and focus on intelligent automation provide real benefits to all user profiles, anticipating the future of dynamic and personalized educational management.

## ⚠️ Use of Private API Keys

This project relies on third-party services (such as OpenAI for AI-powered ticket classification) that require a private API key. By default, the key used is private and **is not included in this repository** for security reasons.

### How to Configure Your Own API Key

1. **Obtain your API key**
   - Access the service you want to use (for example, [OpenAI](https://platform.openai.com/)).
   - Create an account and generate your own API key.

2. **Create a `.env` file in the project root**
   - Create a file named `.env` (if it does not already exist) at the root of the project.
   - Add the following line to the file, replacing it with your key value:
     ```
     OPENAI_API_KEY=your-key-here
     ```

3. **Ensure that the `.env` file is in `.gitignore`**
   - This prevents your private key from leaking to public repositories.

4. **Run the application as usual**
   - The backend will read the environment variable and use your key to authenticate requests to the AI service.

### Example of Usage in Code

The project is already set up to read the environment variable:
```javascript
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
```

### Important Notes

- **Never share your API keys publicly.**
- If you are forking or contributing, use a test key.
- For production environments, use secure environment variables and never expose the key in source code or frontend.

---

With this configuration, any user can use their own API key to safely test and utilize all AI features provided by the project.
