import { API_URL, STRAPI_API_TOKEN } from "./urls";

export async function fetchDataFromApi(endpoints) {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
    // cache: "no-store",
  };

  const res = await fetch(`${API_URL}${endpoints}`, options);

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }

  const data = await res.json();
  return data;
}

export async function putDataToApi(endpoint, data) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(
        `Failed to put data to the API: ${response.status} - ${response.statusText}`
      );
    }
  } catch (error) {
    throw error;
  }
}
