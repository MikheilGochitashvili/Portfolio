import data from '../fetch.json'
import interactive from '../IMG/where_in_world.png'
import GithubLogo from '../components/svg/githublogo.js'

const ProjectPage = () => {
    console.log(data)
    
    return (
        <div className="project_page_container">
            
                {
                    data[0].projects.map((item) => {
                        return (
                            <div className='individual_project'>
                                <div className='project_img_container'>
                                    <img className='project_img' src={item.img} alt={item.img} />
                                </div>
                                <div className='project_description'>
                                    <div>
                                        <span className='project_title'>{item.title}</span>
                                    </div>
                                    <div className='tech'>
                                        <span className='tech_used'>Technologies Used : <span className='tech_inner'>{item.tech}</span> </span>
                                    </div>
                                    <div className='description_outer_container'>
                                        <span className='project_description_span'>
                                            {item.description}
                                        </span>
                                    </div>
                                    <div className='project_links'>
                                        <a className='live_url' href={item.liveURL} target="_blank">
                                            Live URL
                                        </a>
                                        <a className='repository_link' href={item.repository} target="_blank">
                                            Repository
                                            <GithubLogo color="white"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default ProjectPage;