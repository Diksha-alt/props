import Card from "./Components/card.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Image1 from "./images/Rock-garden-Nek-Chand.webp";
import Image2 from "./images/elante-mall.jpg";
import Image3 from "./images/sukhna-lake.jpg";

const card1=
  {
  Title1:"Rock Garden",
  img1:Image1,
  description1:"The Rock Garden of Chandigarh is a sculpture garden in Chandigarh, India. It is also known as Nek Chand’s Rock Garden after its founder Nek Chand, a government official who started the garden secretly in his spare time in 1957"
}

const card2=
{
  Title2:"Elante mall" ,
  img2:Image2,
  description2:"Elante mall ( Nexus Malls ) is a shopping mall in the city of Chandigarh in India. With the gross leasable area of 1,000,000 sq ft (93,000 m ), it is the 7th largest shopping mall in Northern India and the 10th largest in India"
}
const card3=
{
  Title3:"Sukhna Lake",
  img3:Image3,
  description3:"Sukhna Lake in Chandigarh, India, is a reservoir at the foothills of the Himalayas, the Shivalik hills. This 3 km² rainfed lake was created in 1958.The boat ride  during evening time is a wonderful experience."
}


function App() {
  return (
    <>
    <div className="container">
      <h1 className="text-center" style={{color:"#0084d1"}}>Tourists Places</h1>
      <div className="row mt-5">
        <Card image={card1.img1} title={card1.Title1} desc={card1.description1}/>
        <Card image={card2.img2} title={card2.Title2} desc={card2.description2}/>
        <Card image={card3.img3} title={card3.Title3} desc={card3.description3}/>
      </div>
    </div>
    </>
  )
}

export default App;
