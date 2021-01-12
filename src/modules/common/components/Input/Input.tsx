type Props = {
	value: string;
	onChange: (e: React.FormEvent<HTMLInputElement>) => void;
	label: string;
};

const Input = ({ value, onChange, label }: Props) => {
	return (
		<div>
			<label htmlFor={label}>{label}</label>
			<input name={label} type='text' onChange={onChange} value={value} />
		</div>
	);
};

export default Input;
