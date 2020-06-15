using MongoDB.Driver;

public class mongo
{
    private const string MONGO_URI = "mongodb://username:password@localhost:27017";
    private const string DATABASE_NAME = "testDatabase";
    private MongoClient client;
    private IMongoDatabase db;

    public void init()
    {
        client = new MongoClient(MONGO_URI);
        server = client.GetServer();
        db = client.GetDatabase(DATABASE_NAME);

        // This is where we fill in the collections 

        Debug.log("Database has been initilliazed")
    }
    Public void shutdown()
    {
        client = null;
        server.Shutdown();
        db = null;
    }
}