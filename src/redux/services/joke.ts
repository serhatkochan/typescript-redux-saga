import axios from "services/axios/api";

export const getJokeService = () => {
  return axios.get('v2.jokeapi.dev/joke/Any?blacklistFlags=religious&type=single');
};
