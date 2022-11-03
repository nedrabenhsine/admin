import { useNavigate, useMatch, useLocation } from "react-router-dom"
import { SlPeople, SlBriefcase } from 'react-icons/sl'
import { BsBuilding, BsCalendar2Range } from 'react-icons/bs'
import { FaWatchmanMonitoring } from 'react-icons/fa'
import { AiOutlineFileDone, AiOutlinePieChart } from 'react-icons/ai'
import { VscRemoteExplorer } from 'react-icons/vsc'
import { IconContext } from 'react-icons'

const Sidebar = () => {

    const { pathname } = useLocation();
    console.log(pathname);
    const history = useNavigate()
    const navigate = path => {
        console.log("24", path);
        history(path)
    }

    return (
        <IconContext.Provider
            value={{ color: 'FB2576' }}
        >
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs bg-dark border-0 fixed-start" id="sidenav-main">
                <a className="navbar-brand pb-0 mt-4" href="https://demos.creative-tim.com/soft-ui-dashboard/pages/dashboard.html">
                    <div className="sidenav-header m-0 p-0 ">
                        <img class="company-logo " width={30} alt="company logo" src="https://img.jobi.tn/0796ce39-f07d-bf64-07c0-d2eb7c00ca22/version/crop/50x50/0-0/" />
                        <span className="h5 ms-2 text-uppercase  text-white font-weight-bold">Insodev RH</span>
                    </div>
                </a>
                <hr className="horizontal light mt-0" />
                <div className="collapse navbar-collapse  w-auto  max-height-vh-100 h-100" id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className={`nav-link ${pathname === '/dashboard' ? 'active' : 'text-white'}`} onClick={() => navigate('/dashboard')} >
                                <div className="me-2 d-flex align-items-center justify-content-center">
                                    <AiOutlinePieChart size={30} />
                                </div>
                                <span className="nav-link-text ms-1">Dashboard</span>
                            </a>
                        </li>
                        <li className={`nav-item`}>
                            <a className={`nav-link  ${pathname === '/employers' ? 'active' : 'text-white'}`} onClick={() => navigate('/employers')}>
                                <div className="me-2 d-flex align-items-center justify-content-center">
                                    {/* <i style={{ fontSize: '1.5rem', color: '#111111' }} class="las la-user-friends"></i> */}
                                    <SlPeople size={30} />
                                </div>
                                <span className="nav-link-text ms-1">Employée</span>
                            </a>
                        </li>
                        <li className={`nav-item`}>
                            <a className={`nav-link  ${pathname === '/wliddays' ? 'active' : 'text-white'}`} onClick={() => navigate('/wliddays')}>
                                <div className=" me-2 d-flex align-items-center justify-content-center">
                                    <BsCalendar2Range size={30} />
                                </div>
                                <span className="nav-link-text ms-1">Gestion des congés</span>
                            </a>
                        </li>
                        <li className={`nav-item`}>
                            <a className={`nav-link  ${pathname === '/permissions' ? 'active' : 'text-white'}`} onClick={() => navigate('/permissions')}>
                                <div className=" me-2 d-flex align-items-center justify-content-center">

                                    <AiOutlineFileDone size={30} />

                                </div>
                                <span className="nav-link-text ms-1">Gestion de autorisations</span>
                            </a>
                        </li>
                        <li className={`nav-item`}>
                            <a className={`nav-link  ${pathname === '/remote' ? 'active' : 'text-white'}`} onClick={() => navigate('/remote')}>
                                <div className=" me-2 d-flex align-items-center justify-content-center">
                                    <VscRemoteExplorer size={30} />

                                </div>
                                <span className="nav-link-text ms-1">Télé travail</span>
                            </a>
                        </li>
                        <li className={`nav-item`}>
                            <a className={`nav-link  ${pathname === '/departments' ? 'active' : 'text-white'}`} onClick={() => navigate('/departments')}>
                                <div className=" me-2 d-flex align-items-center justify-content-center">
                                    <BsBuilding size={30} />
                                </div>
                                <span className="nav-link-text ms-1">Départements</span>
                            </a>
                        </li>
                        <li className={`nav-item `}>
                            <a className={`nav-link  ${pathname === '/jobs' ? 'active' : 'text-white'}`} onClick={() => navigate('/jobs')}>
                                <div className=" me-2 d-flex align-items-center justify-content-center">
                                    <SlBriefcase size={30} />
                                </div>
                                <span className="nav-link-text ms-1">Offres de travail</span>
                            </a>
                        </li>
                        <li className={`nav-item `}>
                            <a className={`nav-link  ${pathname === '/candidacy' ? 'active' : 'text-white'}`} onClick={() => navigate('/candidacy')}>
                                <div className=" me-2 d-flex align-items-center justify-content-center">
                                    <FaWatchmanMonitoring size={30} />

                                </div>
                                <span className="nav-link-text ms-1">Condidatures</span>
                            </a>
                        </li>


                    </ul>
                </div>
            </aside>

        </IconContext.Provider>
    )
}
export default Sidebar