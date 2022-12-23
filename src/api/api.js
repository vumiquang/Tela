import axios from "axios";
import myPageApiMap from "./apiMap";

const request = axios.create({
  responseType: "json",
});

const config = (method, url, data, header) => {
  let obj = {
    method,
    url,
  };
  if (data) {
    if (method === "get") {
      obj["params"] = data;
    } else {
      obj["data"] = data;
    }
  }
  if (header) {
    obj["headers"] = header;
  }
  return obj;
};

const apiMap = { ...myPageApiMap(config) };
const api = async (apiName, apiParams) => {
  const config = apiMap[apiName](apiParams);
  config.url = `${config.url}`;

  try {
    const { data } = await request(config);
    return {
      success: true,
      data,
    };
  } catch (error) {
    // if (error?.response?.status === 401 || error?.response?.status === 403) {
    //   location.reload()
    //   return
    // }
    return {
      success: false,
      data: error,
    };
  }
};

export default api;
