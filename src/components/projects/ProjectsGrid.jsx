import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';
import hunterianMuseum from '../../images/hunterian_museum.jpg'
import discussion1 from '../../images/experiment/discussion-1.png'
import discussion2 from '../../images/wireframing/wireframe05.jpg'
import discussion3 from '../../images/experiment/discussion-2.png'
import { Link } from 'react-router-dom';
import Card from "./Card"

const ProjectsGrid = () => {

	const data = [
		{ id: 1, title: 'Journey 1: Requirement Gathering, Ideation', details: 'This is where we meet The Hunterian Education Manager.', image: discussion1 },
		{ id: 2, title: 'Journey 2: Wireframing and Usability Testing', details: 'The team showcase their brainstormed ideas and wireframes.', image: discussion2 },
		{ id: 3, title: 'Journey 3: Prototyping', details: 'We start prototyping and understand better of the product we are creating.', image: discussion3 },
		{ id: 4, title: 'Journey 4: Finalised Prototype and Poster', details: 'We showcase our finalised prototypes, posters and many more.', image: discussion1}
	  ];

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center bg-white rounded-lg overflow-hidden shadow-md py-3">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Our Design Journey
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map(item => (
          <Link to={`/page${item.id}`} key={item.id}>
            <Card title={item.title} details={item.details} image={item.image} />
          </Link>
        ))}
      </div>
    </section>
			
	);
};

export default ProjectsGrid;
