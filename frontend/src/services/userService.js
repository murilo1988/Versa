import { api, requesConfig } from "../utils/config";

// Get user details
const profile = async (data, token) => {
  const config = requesConfig("GET", data, token);

  try {
    const res = await fetch(api + "/users/profile", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const useService = {
  profile,
};

export default useService;
