import { betterAuth } from 'better-auth';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db(); // এখানে ব্র্যাকেটের ভেতর আপনার ডাটাবেজ নাম দিতে পারেন, যেমন: db('myLibrary')

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
  },
});
