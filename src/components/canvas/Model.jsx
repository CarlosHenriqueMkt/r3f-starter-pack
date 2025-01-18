import { useGLTF } from "@react-three/drei";
import PropTypes from "prop-types";

export function Model({
	path,
	position,
	rotation,
	scale,
	onClick,
	onPointerEnter,
	onPointerLeave,
}) {
	useGLTF.preload(path);
	const model = useGLTF(path);

	return (
		<primitive
			object={model.scene}
			position={position}
			rotation={rotation}
			scale={scale}
			onClick={onClick}
			onPointerEnter={onPointerEnter}
			onPointerLeave={onPointerLeave}
		/>
	);
}

Model.propTypes = {
	path: PropTypes.string.isRequired,
	position: PropTypes.arrayOf(PropTypes.number),
	rotation: PropTypes.arrayOf(PropTypes.number),
	scale: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.arrayOf(PropTypes.number),
	]),
	onClick: PropTypes.func,
	onPointerEnter: PropTypes.func,
	onPointerLeave: PropTypes.func,
};

Model.defaultProps = {
	position: [0, 0, 0],
	rotation: [0, 0, 0],
	scale: 1,
};
