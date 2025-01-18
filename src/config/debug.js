import { useControls } from "leva";

export const useDebugConfig = (name, config) => {
	return useControls(
		name,
		{
			...config,
		},
		{ collapsed: true }
	);
};
