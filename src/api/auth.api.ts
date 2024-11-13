import { SignupProps } from "../pages/Signup";
import { httpClient } from "./https";

export const signup = async(userData: SignupProps) => {
	const response = await httpClient.post("/users/join", userData);

	return response.data;
}