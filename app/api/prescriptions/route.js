// pages/api/user.js
import { insertPrescription, getPrescriptions } from '../../lib/db';

export async function POST(req) {
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

export async function GET(req) {
  try {
    // Fetch all prescriptions from the database
    const prescriptions = await getPrescriptions();

    // Return the prescriptions as JSON with a 200 status code
    return new Response(JSON.stringify(prescriptions), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching prescriptions:', error);

    // If an error occurs, return a 500 error with a message
    return new Response(
      JSON.stringify({ message: 'Failed to fetch prescriptions' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

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
