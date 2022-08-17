
const {MongoClient} = require("mongodb");

const _DB = {
    url: "mongodb://localhost:27017",
    name: "mentorStudent"
}

const client = new MongoClient(_DB.url);

const connectToDB = async() => {
    await client.connect();
    let db = client.db(_DB.name);
    return db
}

module.exports = connectToDB