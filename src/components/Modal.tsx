import {MouseEvent, useEffect} from 'react';
import TechStack from './TechStack';
import type {Project} from '../types/Project';

type ModalProps = {
	project: Project;
	onClose: () => void;
};

export default function Modal({project, onClose}: ModalProps) {
	// to close by pressing Esc
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', handleEscape);
		return () => document.removeEventListener('keydown', handleEscape);
	}, [onClose]);

	const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
		if ((e.target as HTMLElement).id === 'modal-backdrop') {
			onClose();
		}
	};

	return (
		<div
			id="modal-backdrop"
			onClick={handleBackdropClick}
			className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
		>
			<div className="bg-white rounded-2xl p-6 w-full max-w-3xl shadow-xl transform transition-all duration-300 scale-100 opacity-100 animate-fade-in max-h-[90vh] overflow-y-auto">
				<h2 className="text-center text-2xl font-bold mb-2">{project.title}</h2>
				<img
					src={project.image}
					alt={project.title}
					className="w-full mb-4 max-h-[60vh] object-contain rounded-lg"
				/>
				<p className="text-gray-700 mb-4 whitespace-pre-line">
					{project.description}
				</p>

				<div className="flex flex-wrap gap-2 mb-4">
					<TechStack stack={project.stack}></TechStack>
					{/* {project.stack.map((tech, idx) => (
						<span
							key={idx}
							className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
						>
							{tech}
						</span>
					))} */}
				</div>

				<div className="flex justify-end gap-4">
					{project.liveLink && (
						<a
							href={project.liveLink}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:underline font-medium"
						>
							🌐 Live
						</a>
					)}
					{project.githubLink && (
						<a
							href={project.githubLink}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-800 hover:underline font-medium"
						>
							🐱 GitHub
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
