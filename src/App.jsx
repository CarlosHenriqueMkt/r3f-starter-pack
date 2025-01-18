import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./components/canvas/Experience";
import Layout from "./components/dom/Layout";
import { THREE } from "../utils/threeUtil";

export default function App() {
	return (
		<Layout>
			<Canvas
				gl={{
					powerPreference: "high-performance",
					alpha: false,
					antialias: true,
					stencil: true,
					toneMapping: THREE.ACESFilmicToneMapping,
					toneMappingExposure: 1,
				}}
				shadows={false}
				dpr={1}
				camera={{
					fov: 55,
					near: 0.1,
					far: 1000,
					position: [0, 0, -5],
				}}
				performance={{ min: 0.5 }}
			>
				<Suspense fallback={null}>
					<Experience />
				</Suspense>
			</Canvas>
		</Layout>
	);
}
