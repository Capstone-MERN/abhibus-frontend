import axios from "axios";
import { RequestMethods } from "./constants";

async function request(httpConfig) {
  try {
    const response = await axios({
      url: httpConfig.url,
      method: httpConfig.method ?? RequestMethods.GET,
      ...(httpConfig.data && { data: httpConfig.data }),
      ...(httpConfig.params && { params: httpConfig.params }),
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, data: error.message ?? "Something went wrong!!!" };
  }
}

export default request;
