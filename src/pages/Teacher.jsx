import Header from "../components/Header";
import DownHeader from "../components/DownHeader";
import Footer from "../components/Footer";
import Line from "../tcomponents/Line";
import Block from "../tcomponents/Block";
import ImagJson from "../tcomponents/ImagJson";

function Teacher({account,setAccount}){
    return(
        <div>
            <Header account={account} setAccount={setAccount} />
            <DownHeader/>
            <Line/>
            <Block/>
            <Line/>
            <ImagJson/>
            <Footer/>
        </div>
    );
}
export default Teacher