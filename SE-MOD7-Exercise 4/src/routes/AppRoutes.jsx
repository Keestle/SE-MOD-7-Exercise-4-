import {Routes, Route} from "react-router-dom";
import Homepage from "../HomePage";
import Login from "../Login";
import BitcoinRates from "../BitCoinRates";

function AppRoutes(props) {
    return (
    <Routes>
    {/* index matches on default/home URL: / */}
    <Route index element={<Homepage {...props} />} />
    <Route path='/login' element={<Login {...props} />} />
    <Route path='/BitCoinRates' element={<BitcoinRates {...props} />} />
   
    
    </Routes>
    )
    }
    export default AppRoutes;
    