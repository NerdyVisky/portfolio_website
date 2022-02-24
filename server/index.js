//importing libraries/dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const blogsRouter = require('./routes/blogsAPI');
const projectsRouter = require('./routes/projectsAPI');
const cors = require('cors');

//creating express app instance
const app = express();

//initalizing middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use(cors({origin : '*'}));


//creating the backend express server
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {console.log(`Server has started at PORT ${PORT}`)});
app.get('/admin', (req, res) => {
    res.sendFile('admin.html', {root: __dirname + '/views'});
})





app.get('/', (req, res) => {
    res.send("Common Users Page");
});
// Importing API Routes
app.use('/api/blogs', blogsRouter);
app.use('/api/projects', projectsRouter);



// Connect Database
mongoose.set('debug', true);
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB database");
  })
  .catch((err) => {
    console.log("ERROR", err.message);
  });


