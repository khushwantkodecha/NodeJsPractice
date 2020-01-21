const { MongoClient, ObjectID } = require("mongodb");

//In MongoDB default database is test.
//If you didn't create any database, then collections will be stored in test database.

//connectiong mongodb using mongoclient
MongoClient.connect("mongodb://localhost:27017/animals", { useUnifiedTopology: true }, function(err, client) {
  if (err) throw err;
  //creating db
  const db = client.db("animals");

  const obj_id = new ObjectID();

  console.log(obj_id);
  //creating collection mammals(if it not exists) and inserting data into it
  db.collection("mammals").insertOne(
    {
      name: "parrot",
      legs: 2
    },
    (err, result) => {
      if (err) {
        return console.log(err);
      }
      console.log("data inserted to collection mammals");
    }
  );
  console.log("connected");

  //converting obj data to array of mammals collection
  db.collection("mammals")
    .find()
    .toArray((err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
    });

  //updating the data by finding one data by id and set the new value
  db.collection("mammals")
    .findOneAndUpdate(
      {
        _id: new ObjectID("5e198e597abc1530976a924a")
      },
      {
        $set: {
          name: "updated"
        }
      }
    )
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });

  //deleting data from the collection
  db.collection("mammals")
    .findOneAndDelete({
      _id: new ObjectID("5e198e597abc1530976a924a")
    })
    .then(result => {
      console.log(result);
    });
});
