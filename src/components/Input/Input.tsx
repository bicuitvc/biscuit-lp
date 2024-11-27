"use client";
const Input = ({
	label,
	type,
	id,
	placeholder,
	error,
	hideLabel = false,
	disabled,
	onInput,
	...props
}: {
	label: string;
	type: string;
	placeholder: string;
	error: string | undefined;
	hideLabel?: boolean;
	disabled?: boolean;
	onInput?: (e: any) => void;
	[key: string]: any;
}) => {
	return (
		<div className={`form_group ${error ? "has_error" : ""}`}>
			<label htmlFor={id} className={hideLabel ? "sr-only" : "label"}>
				{label}{" "}
			</label>

			<input
				{...props}
				type={type}
				id={id}
				className='input'
				disabled={disabled}
				placeholder={placeholder}
				min={0}
				onInput={(e) => {
					if (onInput) {
						onInput(e);
					}
				}}
			/>

			{error && <div className='error'>{error}</div>}
		</div>
	);
};

export default Input;
