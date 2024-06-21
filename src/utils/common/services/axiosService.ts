import axios from "axios";

class AxiosService {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  create() {
    return axios.create({
      baseURL: this.baseURL,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

export default AxiosService;
