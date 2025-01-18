import { useControls } from "leva";
import { Model } from "./Model";

export function Scene() {
	const { position } = useControls("Cena", {
		position: { value: { x: 0, y: -0.3, z: 0 }, step: 0.1 },
	});

	return (
		<group>
			<Model
				position={[position.x, position.y, position.z]}
				rotation={[0, 0, 0]}
				scale={0.1}
				path="./hamburguer.glb"
			/>
		</group>
	);
}
