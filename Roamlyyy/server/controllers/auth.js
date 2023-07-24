import { db } from "../connect.js"; // Import the database connection object
import bcrypt from "bcryptjs"; // Import the bcrypt library for password hashing


// Define the signup function for user registration
export const signup = async (req, res) => {

  try {
    // CHECK IF USER EXISTS
    const q = `SELECT * FROM public."user" WHERE email = $1`; // SQL query to check if the user exists

    const existingUser = await db.query(q, [req.body.email]); // Execute the query with user's email

    // Check if the user already exists in the database
    if (existingUser.rowCount !== 0) {
      return res.status(409).json({ message: "User already exists!" }); // Return a 409 status code if user already exists
    }

    // CREATE A NEW USER
    // Hash the password
    const salt = bcrypt.genSaltSync(10); // Generate a salt for password hashing
    const hashedPassword = bcrypt.hashSync(req.body.password, salt); // Hash the user's password

    // Construct the INSERT INTO query to add a new user to the database
    const insertQuery =
      'INSERT INTO public."user" ("firstName","lastName","email", "password") VALUES ($1, $2, $3, $4)';

    // Prepare the values to be inserted into the database
    const values = [
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      hashedPassword,
    ];

    // Execute the INSERT INTO query to add the new user to the database
    await db.query(insertQuery, values);

    // Return a success response if the user is created successfully
    return res.status(200).json({ message:"User has been created."});
  } catch (err) {
    // Catch any errors that occur during the process
    return res.status(500).json({ error: err }); // Return a 500 status code for server error
  }
};

// Define the login function (rest of the implementation not provided in this snippet)
export const login = (req, res) => {
  // ... rest of the login function (not shown here)
};

// Define the logout function (rest of the implementation not provided in this snippet)
export const logout = (req, res) => {
  // ... rest of the logout function (not shown here)
};
