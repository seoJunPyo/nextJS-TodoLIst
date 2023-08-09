import { MongoClient } from 'mongodb';

declare global {
  // eslint-disable-next-line no-var
  var _mongo: Promise<MongoClient>;
}

let mongo: Promise<MongoClient>;
const DB_NAME = 'demo';

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(process.env.MONGO_DB_URL ?? '').connect();

    mongo = global._mongo;
  } else {
    mongo = new MongoClient(process.env.MONGO_DB_URL ?? '').connect();
  }
}

const getColByName = async (collectionName: string) => {
  const client = await mongo;
  const db = client.db(DB_NAME);

  return db.collection(collectionName);
};

const getDocs = async (collectionName: string) => {
  const col = await getColByName(collectionName);

  return col.find().toArray();
};

export { getDocs };
