const API_URL = import.meta.env.VITE_API_URL;

export const useApi = () => {
  const call = async (url, method, payload) => {
    if (method !== "GET" && method !== "POST" && method !== "DELETE") {
      throw new Error(
        'Invalid method. Only "GET", "POST" or "DELETE" allowed.'
      );
    }
    const fetchConfig = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: payload ? JSON.stringify(payload) : undefined,
    };

    try {
      const response = await fetch(`${API_URL}${url}`, fetchConfig);

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const apiError = await response.text();
        throw new Error(apiError);
      }
    } catch (e) {
      throw new Error(`Error occurred. ${e}`);
    }
  };

  const apiGet = async (url) => {
    return await call(url, "GET");
  };

  const apiPost = async (url, payload) => {
    return await call(url, "POST", payload);
  };

  return {
    apiGet,
    apiPost,
  };
};
