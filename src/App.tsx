import {projects} from './data/projects';
import ProjectCard from './components/ProjectCard';
import {useState} from 'react';
import Modal from './components/Modal';
import type {Project} from './types/Project';

export default function App() {
	const [clickedProject, setClickedProject] = useState<Project | null>(null);

	return (
		<div className="min-h-screen bg-gray-50 py-12 px-6 md:px-12">
			<h1 className="text-gray-600 text-4xl font-bold text-center mb-10">
				My projects
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
				{projects.map((project) => (
					<ProjectCard
						key={project.id}
						project={project}
						onClick={() => setClickedProject(project)}
					/>
				))}
			</div>

			{clickedProject && (
				<Modal
					project={clickedProject}
					onClose={() => setClickedProject(null)}
				/>
			)}
		</div>
	);
}
