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
      return await response.json();
    } else {
      const errorData = await response.json(); // Parse the error response
      throw new Error(errorData.message);
    }
  } catch (error) {
    throw error;
  }
}
