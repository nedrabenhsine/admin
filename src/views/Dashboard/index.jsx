import Layout from "../../layouts/Layout"

const Dashboard = () => {
    return (
        <>
            <Layout>
                <div class="row">
                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div class="card">
                            <div class="card-body p-3">
                                <div class="row">
                                    <div class="col-8">
                                        <div class="numbers">
                                            <p class="text-sm mb-0 text-capitalize font-weight-bold">Nombre Des départemnts</p>
                                            <h5 class="font-weight-bolder mb-0">
                                                $53,000
                                                <span class="text-success text-sm font-weight-bolder">+55%</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div class="col-4 text-end">
                                        <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                            <i class="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div class="card">
                            <div class="card-body p-3">
                                <div class="row">
                                    <div class="col-8">
                                        <div class="numbers">
                                            <p class="text-sm mb-0 text-capitalize font-weight-bold">Nombre Des offre de travail</p>
                                            <h5 class="font-weight-bolder mb-0">
                                                2,300
                                                <span class="text-success text-sm font-weight-bolder">+3%</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div class="col-4 text-end">
                                        <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                            <i class="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div class="card">
                            <div class="card-body p-3">
                                <div class="row">
                                    <div class="col-8">
                                        <div class="numbers">
                                            <p class="text-sm mb-0 text-capitalize font-weight-bold">nombre des employées</p>
                                            <h5 class="font-weight-bolder mb-0">
                                                +3,462
                                                <span class="text-danger text-sm font-weight-bolder">-2%</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div class="col-4 text-end">
                                        <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                            <i class="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="card">
                            <div class="card-body p-3">
                                <div class="row">
                                    <div class="col-8">
                                        <div class="numbers">
                                            <p class="text-sm mb-0 text-capitalize font-weight-bold">les condidatures</p>
                                            <h5 class="font-weight-bolder mb-0">
                                                $103,430
                                                <span class="text-success text-sm font-weight-bolder">+5%</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div class="col-4 text-end">
                                        <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                            <i class="ni ni-cart text-lg opacity-10" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body p-3">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="d-flex flex-column h-100">
                                <h2 class="mb-1 pt-2 text-bold">Profile</h2>
                                <h5 class="font-weight-bolder">nom</h5>
                                <p class="mb-5">j.nom</p>
                                <h5 class="font-weight-bolder">prénom</h5>
                                <p class="mb-5">j.nom</p>
                            </div>
                        </div>
                        <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                            <div class="bg-gradient-primary border-radius-lg h-100">
                                <img src="../assets/img/shapes/waves-white.svg" class="h-100 w-50 top-0 d-lg-block d-none" alt="waves" />
                                <div class="position-relative d-flex align-items-center justify-content-center h-100">
                                    <img src="data:image/png;base64,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" data-deferred="1" class="rg_i Q4LuWd" jsname="Q4LuWd" width="225" height="225" alt="Box2Home | Facebook" data-iml="1241.3999999761581" data-atf="true"></img>
                                </div>
                            </div>
                        </div>
                        <div>

                            <h5 class="font-weight-bolder">email</h5>
                            <p class="mb-5">j.email</p>
                            <h5 class="font-weight-bolder">adresse</h5>
                            <p class="mb-5">j.nom</p>
                            <h5 class="font-weight-bolder">adresse</h5>
                            <p class="mb-5">adr</p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Dashboard