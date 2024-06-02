import axios from "axios";

export const request = async (httpConfig) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios({
      url: httpConfig.url,
      method: httpConfig.method,
      ...(httpConfig.data && { data: httpConfig.data }),
      ...(token && {
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      }),
      ...(httpConfig.params && { params: httpConfig.params }),
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.warn("Network Error :", error);
    return { success: false, data: error?.message };
  }
};
