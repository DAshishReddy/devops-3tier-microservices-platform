db = db.getSiblingDB("devopsdb")

db.createCollection("users")

db.users.insertOne({
 username: "admin",
 password: "admin123"
})
