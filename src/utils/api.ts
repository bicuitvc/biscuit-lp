import { IFormInputs } from "@/utils/types";
import axios from "axios";

export const api = axios.create({
	baseURL: "https://353oqkcoa7.execute-api.us-east-1.amazonaws.com",
	headers: {
		"Content-Type": "application/json",
	},
});

const sendEmail = async (data: IFormInputs) => {
	try {
		const response = await api.post("/", data);
		return {
			success: true,
			data: response.data,
			message: "Form submitted successfully!",
		};
	} catch (error) {
		console.log(error);
		return {
			success: false,
			message: "Something went wrong",
			data: null,
		};
	}
};

export { sendEmail };
