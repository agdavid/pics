import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 5by8KugYrvtp9F8H9tbrVionjrxKolCn0YyJwlzQSQY",
  },
});
