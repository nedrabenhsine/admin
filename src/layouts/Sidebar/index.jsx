import { useHistory, useRouteMatch } from "react-router-dom"

export default () => {

    const { path, url } = useRouteMatch()

    const history = useHistory()

    const navigate = path => {
        history.push(path)
    }

    return (
        <>
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
                    <a className="navbar-brand m-0" href="https://demos.creative-tim.com/soft-ui-dashboard/pages/dashboard.html" target="_blank">
                    <img class="size-96 company-logo bg-white" alt="company logo" _v-ab01d028="" src="https://img.jobi.tn/0796ce39-f07d-bf64-07c0-d2eb7c00ca22/version/crop/50x50/0-0/"/>
                        <span className="ms-1 font-weight-bold">Insodev RH</span>
                    </a>
                </div>
                <hr className="horizontal dark mt-0" />
                <div className="collapse navbar-collapse  w-auto  max-height-vh-100 h-100" id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className={`nav-link  ${path === '/dashboard' ? 'active' : ''}`} onClick={() => navigate('/dashboard')} >
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <svg width="12px" height="12px" viewBox="0 0 45 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>shop </title>
                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <g transform="translate(-1716.000000, -439.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g transform="translate(0.000000, 148.000000)">
                                                        <path className="color-background opacity-6" d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z" />
                                                        <path className="color-background" d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="nav-link-text ms-1">Dashboard</span>
                            </a>
                        </li>
                        <li className={`nav-item`}>
                            <a className={`nav-link  ${path === '/employers' ? 'active' : ''}`} onClick={() => navigate('/employers')}>
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i style={{ fontSize: '2rem', color: '#111111' }} class="las la-user-friends"></i>
                                </div>
                                <span className="nav-link-text ms-1">Employée</span>
                            </a>
                        </li>
                        <li className={`nav-item`}>
                            <a className={`nav-link  ${path === '/wliddays' ? 'active' : ''}`} onClick={() => navigate('/wliddays')}>
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i style={{ fontSize: '2rem', color: '#111111' }} class="las la-calendar"></i>
                                </div>
                                <span className="nav-link-text ms-1">Gestion des congés</span>
                            </a>
                        </li>
                        <li className={`nav-item`}>
                            <a className={`nav-link  ${path === '/permissions' ? 'active' : ''}`} onClick={() => navigate('/permissions')}>
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i style={{ fontSize: '2rem', color: '#111111' }} class="las la-file-alt"></i>
                                </div>
                                <span className="nav-link-text ms-1">Gestion de autorisations</span>
                            </a>
                        </li>
                        <li className={`nav-item`}>
                            <a className={`nav-link  ${path === '/remote' ? 'active' : ''}`} onClick={() => navigate('/remote')}>
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i style={{ fontSize: '2rem', color: '#111111' }} class="las la-tv"></i>
                                </div>
                                <span className="nav-link-text ms-1">Télé travail</span>
                            </a>
                        </li>
                        <li className={`nav-item`}>
                            <a className={`nav-link  ${path === '/departments' ? 'active' : ''}`} onClick={() => navigate('/departments')}>
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i style={{ fontSize: '2rem', color: '#111111' }} class="las la-landmark"></i>
                                </div>
                                <span className="nav-link-text ms-1">Départements</span>
                            </a>
                        </li>
                        <li className={`nav-item `}>
                            <a className={`nav-link  ${path === '/jobs' ? 'active' : ''}`} onClick={() => navigate('/jobs')}>
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i style={{ fontSize: '2rem', color: '#111111' }} class="las la-briefcase"></i>
                                </div>
                                <span className="nav-link-text ms-1">Offres de travail</span>
                            </a>
                        </li>
                        <li className={`nav-item `}>
                            <a className={`nav-link  ${path === '/candidacy' ? 'active' : ''}`} onClick={() => navigate('/candidacy')}>
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i style={{ fontSize: '2rem', color: '#111111' }} class="las la-briefcase"></i>
                                </div>
                                <span className="nav-link-text ms-1">Condidatures</span>
                            </a>
                        </li>


                    </ul>
                </div>

            </aside>

        </>
    )
}