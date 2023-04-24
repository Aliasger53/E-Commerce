const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");

// routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");

env.config();

// mongodb connection:
// mongodb+srv://Aliasger53:<password>@cluster0.piobsgk.mongodb.net/?retryWrites=true&w=majority
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.piobsgk.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
