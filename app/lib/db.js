// lib/db.js (no changes if already defined)
import clientPromise from './mongodb';

export async function insertPrescription(data) {
  const client = await clientPromise;
  const db = client.db('mydatabase');
  return await db.collection('users').insertOne(data);
}

export async function getPrescriptions() {
  const client = await clientPromise;
  const db = client.db('afya_db');
  return await db.collection('prescriptions').findAll ();
}
