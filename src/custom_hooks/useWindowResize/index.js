import * as React from 'react';

const useResize = () => {
	const [windowSize, setWindowSize] = React.useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const handleResize = () => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	React.useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return windowSize;
};

export default useResize;