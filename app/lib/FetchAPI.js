export async function FetchAPI(url, body, method) {
  try {
    const response = await fetch(`http://192.168.1.36:3000/${url}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to sign in');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
