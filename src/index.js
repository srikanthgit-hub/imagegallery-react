
import ReactDOM from 'react-dom/client';
import './index.css';  



import one from "./images/dog1.jpg"
import two from "./images/dog2.jpg"
import three from "./images/dog3.jpg"
import four from "./images/dog4.jpg"
import five from "./images/dog5.jpg"
import six from "./images/dog6.jpg"
import seven from "./images/dog7.jpg"
import eight from "./images/dog8.jpg"

const root = ReactDOM.createRoot(document.getElementById('root'));


function Gallery(props) {
  return (
      <div className='imgdiv'>
      <img src={props.url} alt="" style={{ height: "120px", width: "120px "}} />
        <p style={{fontSize:"20px"}}>{props.description}</p>
      </div>

  )
}

const images = [
  {
    src: one,
    description: "Julie's Rabbit Ears"
  },
  {
    src: two,
    description: "The Innocent Look"
  },
  {
    src: three,
    description: "Big Eyed Buggy"
  },
  {
    src: four,
    description: "The Saint Doggo"
  },
  {
    src: five,
    description: "Big Eyed Buggy"
  },
  {
    src: six,
    description: "The Innocent Look"
  },
  {
    src: seven,
    description: "The Saint Doggo"
  },
  
   {
    src: eight,
    description: "Julie's Rabbit Ears"
  }

];


root.render(
  <div className='cmddiv'>
  {
    images.map(function (item){
      return <Gallery url={item.src} description={item.description}></Gallery>
    })
  }
  </div>
 
);



