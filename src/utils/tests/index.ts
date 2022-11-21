const clearBody = () => {
	const body = document.body;

	while (body.firstChild) {
		body.removeChild(body.firstChild);
	}
};

const clearUp = () => {
	clearBody();
	jest.clearAllMocks();
};

const waitForHandler = () => new Promise(res => setTimeout(res, 0));

export {
	clearBody,
	clearUp,
	waitForHandler
};
