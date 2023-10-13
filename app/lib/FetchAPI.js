'use client'

export async function FetchAPI(url, body, method) {
  try {
    const accessToken = localStorage.getItem('access_token') || null;
    const response = await fetch(`https://cloudwaiver.sparkosol.com/${url}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      return await response.json();
    } else {
      const errorData = await response.json(); // Parse the error response
      throw new Error(errorData.message);
    }
  } catch (error) {
    throw error;
  }
}
