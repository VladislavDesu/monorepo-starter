import {Link, Outlet} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/admin'}>Admin</Link>
            <Link to={'/shop'}>Shop</Link>
            <Outlet/>
        </div>
    );
};

export default App;