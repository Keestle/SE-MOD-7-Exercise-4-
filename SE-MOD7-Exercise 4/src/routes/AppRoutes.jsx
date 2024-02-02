import {Routes, Route} from "react-router-dom";
import Homepage from "../HomePage";
import Login from "../Login";

function AppRoutes(props) {
    return (
    <Routes>
    {/* index matches on default/home URL: / */}
    <Route index element={<Homepage {...props} />} />
    <Route path='/login' element={<Login {...props} />} />
   
    
    </Routes>
    )
    }
    export default AppRoutes;
    