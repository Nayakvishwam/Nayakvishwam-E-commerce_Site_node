import SideNavbar from '../components/admin/sidebar'
import Navbar from '../components/admin/navbar'
import $ from "jquery"
import "../assests/admin/vendor/bootstrap/css/bootstrap.min.css"
import "../assests/admin/vendor/bootstrap-icons/bootstrap-icons.css"
import "../assests/admin/vendor/boxicons/css/boxicons.min.css"
import "../assests/admin/vendor/quill/quill.snow.css"
import "../assests/admin/vendor/quill/quill.bubble.css"
import "../assests/admin/vendor/remixicon/remixicon.css"
import "../assests/admin/vendor/simple-datatables/style.css"
import "../assests/admin/css/style.css"
import "../assests/admin/vendor/apexcharts/apexcharts.min.js"
import "../assests/admin/vendor/bootstrap/js/bootstrap.bundle.min.js"
import "../assests/admin/vendor/chart.js/chart.umd.js"
import "../assests/admin/vendor/echarts/echarts.min.js"
import "../assests/admin/vendor/quill/quill.min.js"
import "../assests/admin/vendor/simple-datatables/simple-datatables.js"
import "../assests/admin/vendor/tinymce/tinymce.min.js"
import "../assests/admin/vendor/php-email-form/validate.js"
import "../assests/admin/js/main.js"
import AppRoutes from '../routes/AppRoutes.jsx'
function App() {
  return (
    <>
      <Navbar />
      <SideNavbar />
      <main id="main" className="main">
          <AppRoutes />
      </main>
    </>
  )
}

export default App
