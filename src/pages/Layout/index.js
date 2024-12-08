
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';

import '../../static/css/style.css'
import '../../static/css/scroll_to_top_button.css'

function Layout() {
  return (
    <>
        <Outlet />
        <Footer />
    </>
  );
}

export default Layout;