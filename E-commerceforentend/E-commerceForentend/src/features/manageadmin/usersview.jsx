import { Link } from "@mui/material"


export default function UsersView() {
    return (
        <>
            <div className="pagetitle">
                <h1>Users</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active">Users</li>
                    </ol>
                </nav>
            </div>

            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div class="col-12">
                                <div class="card recent-sales overflow-auto">

                                    <div class="filter">
                                        <Link class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></Link>
                                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li><Link class="dropdown-item" href="#">Edit</Link></li>
                                            <li><Link class="dropdown-item" href="#">Create</Link></li>
                                        </ul>
                                    </div>

                                    <div class="card-body">
                                        <h5 class="card-title">Users</h5>

                                        <table class="table table-borderless datatable">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Customer</th>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row"><Link href="#">#2457</Link></th>
                                                    <td>Brandon Jacob</td>
                                                    <td><Link href="#" class="text-primary">At praesentium minu</Link></td>
                                                    <td>$64</td>
                                                    <td><span class="badge bg-success">Approved</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><Link href="#">#2147</Link></th>
                                                    <td>Bridie Kessler</td>
                                                    <td><Link href="#" class="text-primary">Blanditiis dolor omnis similique</Link></td>
                                                    <td>$47</td>
                                                    <td><span class="badge bg-warning">Pending</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><Link href="#">#2049</Link></th>
                                                    <td>Ashleigh Langosh</td>
                                                    <td><Link href="#" class="text-primary">At recusandae consectetur</Link></td>
                                                    <td>$147</td>
                                                    <td><span class="badge bg-success">Approved</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><Link href="#">#2644</Link></th>
                                                    <td>Angus Grady</td>
                                                    <td><Link href="#" class="text-primar">Ut voluptatem id earum et</Link></td>
                                                    <td>$67</td>
                                                    <td><span class="badge bg-danger">Rejected</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><Link href="#">#2644</Link></th>
                                                    <td>Raheem Lehner</td>
                                                    <td><Link href="#" class="text-primary">Sunt similique distinctio</Link></td>
                                                    <td>$165</td>
                                                    <td><span class="badge bg-success">Approved</span></td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}