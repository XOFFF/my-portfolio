import TechStack from './TechStack';
import type {Project} from '../types/Project';

type ProjectCardProps = {
	project: Project;
	onClick: () => void;
};

export default function ProjectCard({project, onClick}: ProjectCardProps) {
	return (
		<div
			onClick={onClick}
			className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-[1.03]"
		>
			<div className="flex flex-col h-full">
				<img
					src={project.image}
					alt={project.title}
					className="w-full h-48 object-cover"
				/>
				<div className="flex flex-col justify-between flex-1 p-4">
					<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
					<p className="line-clamp-2 text-gray-600 mb-3">
						{project.description}
					</p>
					<div className="flex flex-col flex-1">
						<div className="flex flex-wrap gap-2 mb-4">
							<TechStack stack={project.stack} />
						</div>
						<div className="flex gap-4 mt-auto">
							{project.liveLink && (
								<a
									href={project.liveLink}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:underline"
								>
									🌐 Live
								</a>
							)}
							{project.githubLink && (
								<a
									href={project.githubLink}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-800 hover:underline"
								>
									🐱 GitHub
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
