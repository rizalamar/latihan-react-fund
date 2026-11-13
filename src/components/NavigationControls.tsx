interface Props {
	onPrev: () => void;
	onNext: () => void;
}

export default function NavigationControls({ onPrev, onNext }: Props) {
	return (
		<div className="absolute inset-y-0 flex justify-between w-full px-10 items-center">
			<button onClick={onPrev} className="p-4 bg-gray-200 rounded-full">
				Prev
			</button>
			<button onClick={onNext} className="p-4 bg-gray-200 rounded-full">
				Next
			</button>
		</div>
	);
}
