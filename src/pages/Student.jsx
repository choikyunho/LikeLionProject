import Header from "../components/Header";
import DownHeader from "../components/DownHeader";
import Attainment from "../scompontents/Attainment";
import Target from "../scompontents/Target";
import Line from "../scompontents/Line";
import Footer from "../components/Footer";
;


function Student({account,setAccount}){
    return(
        <div>
            <Header account={account} setAccount={setAccount} />
            <DownHeader/>
            <Line/>
            <Target/>
            <Attainment/>
            <Footer/>
        </div>
    );
}
export default Student