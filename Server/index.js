const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

// middleware

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ixzkh9v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  // console.log('verify tokens', token);
  if (!token) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.user = decoded;
    next();
  });
  
};

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const spotCollection = client.db("PHA10").collection("tourist_spots");
    const countryCollection = client
      .db("PHA10")
      .collection("country_collection");

    app.post("/generate-token", async (req, res) => {
      const user = req.body;
      console.log(user);
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .send({ message: true });
    });

    app.post("/logout", async (req, res) => {
      console.log(req.body);
      res.clearCookie("token", { maxAge: 0 }).send({ success: true });
    });

    app.post("/addTouristSpot", async (req, res) => {
      const data = req.body;
      // console.log("tok", req.cookies.token);
      const result = await spotCollection.insertOne(data);
      res.send(result);
    });

    app.get("/mylist/:email", verifyToken, async (req, res) => {
      const email = req.params.email;
      // console.log('my cookie', req.cookies);
      console.log('token owner info', req.user.email, 'called', email);

      if(req.user.email !== req.params.email){
        return res.status(403).send({message:'forbidden access'})
      }

      const result = spotCollection.find({ email: req.params.email });
      const lol = await result.toArray();
      res.send(lol);
    });

    app.get("/selectedCountry/:name", async (req, res) => {
      const country = req.params.name;
      // console.log(country);
      const result = spotCollection.find({ country: country });
      const lol = await result.toArray();
      res.send(lol);
    });

    app.get("/allspot", async (req, res) => {
      // console.log("tok tok", req.cookies.token);
      // console.log(req.user, 'from valid user');

      const result = spotCollection.find();
      const data = await result.toArray();

      res.send(data);
    });

    app.get("/youchoose/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await spotCollection.findOne(query);
      res.send(result);
    });

    app.get("/country-section", async (req, res) => {
      const result = countryCollection.find();
      const data = await result.toArray();
      res.send(data);
    });

    app.delete("/mylist/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await spotCollection.deleteOne(query);
      res.send(result);
    });

    app.put("/update/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          spot: data.spot,
          country: data.country,
          url: data.url,
          location: data.location,
          visitperyear: data.visitperyear,
          description: data.description,
          averagecost: data.averagecost,
          seasonality: data.seasonality,
          travelduration: data.travelduration,
        },
      };
      const result = await spotCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("A10 server TEST 78");
});

app.listen(port, () => {
  console.log("A10 server is running");
});
