import * as React from 'react';


const useHover = () => {
	const [isHovered, setIsHovered] = React.useState(false);
	const ref = React.useRef(null);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	React.useEffect(() => {
		const node = ref.current;
		if (node) {
			node.addEventListener('mouseenter', handleMouseEnter);
			node.addEventListener('mouseleave', handleMouseLeave);
			return () => {
				node.removeEventListener('mouseenter', handleMouseEnter);
				node.removeEventListener('mouseleave', handleMouseLeave);
			};
		}
	}, []);

	return [ref, isHovered];
};

export default useHover;