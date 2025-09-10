// lib/api.ts

export const getFleetData = async () => {
  const token = localStorage.getItem('token');

  const res = await fetch('http://localhost:5000/api/fleet', {
    headers: {
      Authorization: token || '', // Passport extracts Bearer token
    },
  });

  if (!res.ok) {
    throw new Error('Unauthorized');
  }

  return res.json();
};
