module.exports = {
    mongoURI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.aexijp6.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
}