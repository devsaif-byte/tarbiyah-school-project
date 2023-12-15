import React from "react";

const NoCopyText = ({ children }) => {
	const handlePreventCopy = function (e) {
		e.preventDefault();
	};
	return <div onCopy={handlePreventCopy}>{children}</div>;
};

export default NoCopyText;
