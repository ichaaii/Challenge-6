import { API_ENDPOINT } from "../utils/api-endpoints";
import http3 from "../utils/http3";
import { useQuery } from "@tanstack/react-query";


export const reduxSearchMovie = async (query) => {
  return await http3.get(`${API_ENDPOINT.BINAR_SEARCH}?page=1&query=${query ? query : ""}`);
}