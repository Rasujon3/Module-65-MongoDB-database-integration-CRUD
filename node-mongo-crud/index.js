const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();

const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());

// user: dbuser1
// password: HXfOVEsvhh6aTwD4

const uri =
  "mongodb+srv://dbuser1:HXfOVEsvhh6aTwD4@cluster0.fdben.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const userCollection = client.db(`foodExpress`).collection(`users`);
    app.post("/user", (req, res) => {
      res.send("");
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Running My Nose CRUD Server");
});

app.listen(port, () => {
  console.log("CRUD Server is running...");
});
