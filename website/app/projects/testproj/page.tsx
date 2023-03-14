import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: 'Akaya & Pebbles',
    studio: 'Coinflip Studios',
}

export default function Projects(): JSX.Element {
    return (
        <div className="w-full pt-20">
            <Project {...projectProp} />
        </div>
    )
}