import { useState } from "react";
import axios from 'axios';
import Line from "../tcomponents/Line";
import ImageJsonTest from "./Preview/ImageJsonTest";

function ImagJson(){
const [fileImg, setFileImg] = useState(null);
const [metadata, setMetadata] = useState();
//
const [ImgHash,setImgHash] = useState();

const sendFileToIPFS = async (e) => {
    e.preventDefault();

  if (fileImg) {
      try {

          const formData = new FormData();
          formData.append("file", fileImg);

          const resFile = await axios({
              method: "post",
              url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
              data : formData,
              headers: {
                  "Authorization" : `Bearer ${process.env.REACT_APP_PINATA_API_JWT_KEY}`,
                  "Content-Type": "multipart/form-data"
              },
          });
  
          const ImgHash = `${resFile.data.IpfsHash}`;

          const json = JSON.stringify({
          detail: metadata,
          image: `https://scarlet-peculiar-llama-283.mypinata.cloud/ipfs/${ImgHash}`,
          });

          const resJson = await axios.post(
            'https://api.pinata.cloud/pinning/pinJSONToIPFS',
            {
              data: json,
            },
            {
              headers: {
                Authorization: `Bearer ${process.env.REACT_APP_PINATA_API_JWT_KEY}`,
              },
            }
          );
          console.log(resJson.data);
  
      } catch (error) {
          console.log("Error sending File & Json to IPFS: ")
          console.log(error)
      }
  }
}


return(
        <div className="  mb-1 max-w-screen-xl mx-auto h-[390px] ">
            <div className="   ">
            <div className='   ml-8 font-semibold mt-2.5 '>
            2. Imag & Json Data 입력
            </div>
        </div>

        <div className="flex justify-center mt-2">
          <div>
              <form onSubmit={sendFileToIPFS}>
              <div className="flex mb-2">
              <input type="text" placeholder="{ 메타데이터 입력 양식}" className="pl-10 pr-3 py-2 rounded-lg border-2 border-black bg-white w-[600px] h-[300px] text-center"
              style={{ caretColor: 'transparent', outline: 'none' }}/>

              <input className="ml-3 w-[600px] rounded-lg border-2 text-center" type="text" onChange={(e) => setMetadata(e.target.value)} placeholder="Metadata를 입력해주세요" style={{ wordWrap: 'break-word' }} />
              </div>

              <div className="mb-2" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <input className="p-2" type="file" onChange={(e) => setFileImg(e.target.files[0])} required />
                  <button className="hover:bg-blue-200 mr-5 rounded-lg p-2" type='submit'>업로드</button>
              </div>

              </form>
          </div>
          </div>
          <div>
            {/* <Line/>
            <ImageJsonTest ImgHash={ImgHash}/> */}
          </div>
        </div>
  );
}

export default ImagJson