const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http'); 
const socketIO = require('socket.io');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error(`MongoDB connection error: ${error}`));

// Initialize Express app
const app = express();

// Apply middlewares
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Passport configuration
passport.use(new LocalStrategy(async (username, password, done) => {
  // Retrieve user from MongoDB and verify their password
  // ...
}));

// Example protected route
app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ message: 'You are authenticated!' });
});

// Create an HTTP server and attach the Express app to it
const server = http.createServer(app);

// Create Socket.IO instance attached to the server
const io = socketIO(server, {
  cors: {
    origin: 'http://localhost:3000', // Update this to match your frontend URL
    methods: ['GET', 'POST'],
  },
});

// Set up Socket.IO connection
io.on('connection', (socket) => {
  console.log('User connected');

  // Set up Socket.IO event listeners and emitters here
  // ...

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Add this line after other import statements
const routes = require('./routes');

// Add this line after the MongoDB connection setup
app.use('/api', routes);

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
