// pages/api/user.js
import { insertPrescription, getPrescriptions } from '../../lib/db';

export async function POST(req) {
  // const { name, email } = req.body;

//   if (!name || !email) {
//     return res.status(400).json({ message: 'Name and email are required' });
//   }
  const body = await req.json();

  try {
    const result = await insertPrescription(body);
    return new Response(
      JSON.stringify({ statusCode: 201, 
        message: 'Prescription created', data: result }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: 'Internal server error' }),
      { status: 500 }
    );
  }
}

// async function handleGet(req, res) {
//   const { email } = req.query;

//   if (!email) {
//     return res.status(400).json({ message: 'Email is required to fetch user' });
//   }

//   try {
//     const user = await getUser(email);

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.status(200).json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }

// Main handler that routes requests based on method
// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     await Post(req, res);
//   } else if (req.method === 'GET') {
//     await handleGet(req, res);
//   } else {
//     res.setHeader('Allow', ['GET', 'POST']);
//     res.status(405).json({ message: `Method ${req.method} not allowed` });
//   }
// }
