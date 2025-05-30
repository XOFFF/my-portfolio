type TechStackProps = {
	stack: string[];
};


export default function TechStack({stack}: TechStackProps) {
	return (
		<div className="flex flex-wrap gap-2 mb-4">
			{stack.map((tech, index) => (
				<span
					key={index}
					className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
				>
					{tech}
				</span>
			))}
		</div>
	);
}
