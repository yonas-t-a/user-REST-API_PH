# User Management API

This project is a **User Management API** built using **Node.js**, **Express**, and **Sequelize**. The API provides functionality to create, retrieve, and delete users in a MySQL database. The structure is modular, adhering to best practices for scalability and maintainability.

---

## **Features**
- Create a new user.
- Retrieve all users.
- Delete a user by ID.
- Follows RESTful principles.

---

## **Technologies Used**
- **Node.js**: JavaScript runtime environment.
- **Express**: Framework for building web applications.
- **Sequelize**: ORM for database interaction.
- **MySQL**: Relational database.
- **dotenv**: Environment variable management.
- **express-validator**: Input validation middleware.

---

## **File Structure**
```plaintext
├── API
│   └── user_API.js          # Routes for user-related API endpoints
├── config
│   └── db-config.js         # Database configuration and Sequelize model definition
├── controller
│   └── user_controller.js   # Controller functions for user operations
├── Model
│   └── user_Model.js        # Functions interacting with the database
├── node_modules             # Node.js dependencies
├── .env                     # Environment variables
├── .gitignore               # Files/folders to ignore in version control
├── package.json             # Project metadata and dependencies
├── package-lock.json        # Dependency lock file
├── README.md                # Project description (this file)
├── server.js                # Main server file
```

---

## **Installation**

### Prerequisites:
- Node.js installed on your system.
- MySQL server running locally or remotely.

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/yonas-t-a/user-REST-API_PH.git
   ```

2. Navigate to the project directory:
   ```bash
   cd user-REST-API_PH
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following:
   ```plaintext
   PORT=3500
   MySQL_DATABASE=<your-database-name>
   MySQL_USER=<your-mysql-username>
   MySQL_PASSWORD=<your-mysql-password>
   MySQL_HOST=localhost
   MySQL_PORT=3306
   ```

5. Start the server:
   ```bash
   npm run dev
   ```

---

## **Usage**

### API Endpoints

#### Base URL:
```
http://localhost:<PORT>/users
```

#### 1. **Get All Users**
   - **Method**: `GET`
   - **Endpoint**: `/`
   - **Response**: List of all users.

#### 2. **Create User**
   - **Method**: `POST`
   - **Endpoint**: `/`
   - **Request Body**:
     ```json
     {
       "name": "John Doe",
       "email": "john.doe@example.com"
     }
     ```
   - **Response**: Created user object.

#### 3. **Delete User**
   - **Method**: `DELETE`
   - **Endpoint**: `/:id`
   - **Request Params**: `id` (integer)
   - **Response**: Confirmation of deletion.

---

## **Code Overview**

### **1. `db-config.js`**
- Configures Sequelize with MySQL.
- Defines the `user` model.

### **2. `user_Model.js`**
- Contains database interaction functions:
  - `findAllUser`: Fetch all users.
  - `insertUser`: Add a new user.
  - `removeUser`: Delete a user by ID.

### **3. `user_controller.js`**
- Controller functions:
  - `createUser`: Handles user creation.
  - `getAllUser`: Handles fetching all users.
  - `deleteUser`: Handles user deletion.

### **4. `user_API.js`**
- Defines routes and maps them to controller functions.

### **5. `server.js`**
- Main entry point for the application.
- Sets up Express server and middleware.

---

## **Validation**
- **Input validation** is performed using `express-validator`:
  - `POST /users`: Validates that `name` is not empty and `email` is a valid email.
  - `DELETE /users/:id`: Ensures `id` is an integer.

---

## **Example Usage**

### Creating a User
```bash
curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '{ "name": "Alice", "email": "alice@example.com" }'
```

### Getting All Users
```bash
curl http://localhost:3000/users
```

### Deleting a User
```bash
curl -X DELETE http://localhost:3000/users/1
```

---

## **Error Handling**
- Errors are logged in the console.
- Proper HTTP status codes are returned for validation errors (`400`) and server errors (`500`).

---

## **Future Enhancements**
- Add authentication and authorization.
- Implement pagination for `GET /users`.
- Add unit tests using a framework like Jest.
- Support soft deletion instead of permanent deletion.

---

## **Contributors**
- Yonas Tessema Achule


