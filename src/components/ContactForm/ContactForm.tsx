"use client";
import Input from "@/components/Input/Input";
import styles from "./ContactForm.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { IFormInputs } from "@/utils/types";
import { sendEmail } from "@/utils/api";

const schema = yup.object().shape({
	startupName: yup.string().required("Startup name is required"),
	idea: yup.string().required("Idea is required"),
	linkedinUrl: yup.string().url().required("LinkedIn URL is required"),
	email: yup.string().email().required("Email is required"),
});

const ContactForm = () => {
	const [success, setSuccess] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
		setLoading(true);

		const response = await sendEmail(data);
		if (response.success) {
			setSuccess(response.message);
			// Clear form fields
			setValue("startupName", "");
			setValue("idea", "");
			setValue("linkedinUrl", "");
			setValue("email", "");
		} else {
			setError(response.message);
		}

		setLoading(false);
	};

	useEffect(() => {
		if (success) {
			const timer = setTimeout(() => {
				setSuccess("");
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [success]);

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Input
				id={"startupName"}
				label='Startup name'
				type='text'
				{...register("startupName")}
				error={errors.startupName?.message}
				hideLabel
				placeholder='Startup name'
				onInput={(e) => setValue("startupName", e.currentTarget.value)}
			/>
			<Input
				label='Your idea'
				type='text'
				id='idea'
				{...register("idea")}
				error={errors.idea?.message}
				hideLabel
				placeholder='Your idea'
				onInput={(e) => setValue("idea", e.currentTarget.value)}
			/>
			<Input
				label='LinkedIn URL'
				type='text'
				id='linkedinUrl'
				{...register("linkedinUrl")}
				error={errors.linkedinUrl?.message}
				hideLabel
				placeholder='LinkedIn URL'
				onInput={(e) => setValue("linkedinUrl", e.currentTarget.value)}
			/>
			<Input
				label='Email'
				type='text'
				id='email'
				{...register("email")}
				error={errors.email?.message}
				hideLabel
				placeholder='Email'
				onInput={(e) => setValue("email", e.currentTarget.value)}
			/>
			<button className='primary_button' disabled={loading}>
				{loading ? "Submitting..." : "Submit form"}
			</button>
			{success && (
				<p className={styles.success}>Form submitted successfully!</p>
			)}
			{error && <p className={styles.error}>Error submitting form</p>}
		</form>
	);
};

export default ContactForm;
