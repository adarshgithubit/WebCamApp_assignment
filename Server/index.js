import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb://127.0.0.1:27017/loginData",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DataBase connected sucessfully");
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

//Routes

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password == user.password) {
        res.send({ message: "login sucessfully", user: user });
      }else{
        res.send({ message: "password is inncorrect" });
      }
    } else {
      res.send({ message: "User Is not registerd" });
    }
  });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already exist" });
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send("error", err);
        } else {
          res.send({ message: "sucessfully registerd" });
        }
      });
    }
  });
});

app.post("/register", (req, res) => {
  res.send("This is register api");
});

app.listen(PORT, () => {
  console.log(`Server running sucessfully ${PORT}`);
});
