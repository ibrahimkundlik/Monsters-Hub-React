import React from "react";
import "./search.styles.css";

export const InputSearch = ({ placeholder, handleChange }) => {
	return (
		<input
			type="search"
			className="search"
			placeholder={placeholder}
			onChange={handleChange}
		/>
	);
};
