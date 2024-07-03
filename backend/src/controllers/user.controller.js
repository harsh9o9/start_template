import { ApiResponse } from "../utils/ApiResponse.js";

export const userData = async (req, res) => {
  // const { email, password } = req.body;

  return res.json(new ApiResponse(200, { time: "10:30", month: "november" }));
}