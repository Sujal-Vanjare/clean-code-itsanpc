import { API_URL, STRAPI_API_TOKEN } from "./urls";

export async function fetchDataFromApi(endpoints, revalidateTag) {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
    // cache: "no-store",
  };

  try {
    const res = await fetch(`${API_URL}${endpoints}`, options);

    if (!res.ok) {
      console.error("Error in fetchDataFromApi:", res.status, res.statusText);
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in fetchDataFromApi:", error.message);
    throw error;
  }
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
      console.error(
        "Error in putDataToApi:",
        response.status,
        response.statusText
      );
      throw new Error(
        `Failed to put data to the API: ${response.status} - ${response.statusText}`
      );
    }
  } catch (error) {
    console.error("Error in putDataToApi:", error.message);
    throw error;
  }
}
