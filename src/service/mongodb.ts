import { Filter, MongoClient, ObjectId, Document } from 'mongodb';

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

const getDoc = async (collectionName: string, id: string) => {
  const col = await getColByName(collectionName);
  const doc = await col.findOne({
    _id: new ObjectId(id),
  });

  return doc;
};

const addDoc = async (collectionName: string, data: object) => {
  const col = await getColByName(collectionName);

  await col.insertOne(data);
};

const updateDoc = async (collectionName: string, id: string, data: object) => {
  const col = await getColByName(collectionName);

  await col.updateOne(
    {
      _id: new ObjectId(id),
    },
    {
      $set: data,
    }
  );
};

const deleteDoc = async (collectionName: string, id: string) => {
  const col = await getColByName(collectionName);

  await col.deleteOne({
    _id: new ObjectId(id),
  });
};

const updateManyDocs = async (collectionName: string, data: object) => {
  const col = await getColByName(collectionName);

  await col.updateMany(
    {},
    {
      $set: data,
    }
  );
};

const deleteManyDocs = async (collectionName: string, filter: Filter<Document> | undefined) => {
  const col = await getColByName(collectionName);

  await col.deleteMany(filter);
};

export { getDoc, getDocs, addDoc, updateDoc, updateManyDocs, deleteDoc, deleteManyDocs };
