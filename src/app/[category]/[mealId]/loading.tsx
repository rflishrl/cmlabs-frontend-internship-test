import { PiCircleNotch } from "react-icons/pi";

export default function loading() {
	return (
		<div className="flex justify-center flex-col items-center gap-2 text-2xl pt-32">
			<PiCircleNotch className="animate-spin " />
			loading ..
		</div>
	);
}
