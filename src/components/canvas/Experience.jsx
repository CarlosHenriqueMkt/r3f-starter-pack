import { Scene } from "./Scene";
import { Lights } from "./environment/Lights";
import { Controls } from "./environment/Controls";

export function Experience() {
	return (
		<>
			<Lights />
			<Scene />
			<Controls />
		</>
	);
}
