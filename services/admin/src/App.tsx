import {Outlet} from "react-router-dom";

const App = () => {
    return (
        <div>
            ADMIN MODULE
            <Outlet/>
        </div>
    );
};

export default App;