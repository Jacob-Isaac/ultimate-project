
import astronaut from "../../../images/globe2.glb"
import iosAstronaut from "../../../images/Astronaut.usdz"
import { Wrapper, Model } from "./styled";
// import './style.css';

const Globe = () => (
<Model>
  <model-viewer
  id="orbit-demo" interpolation-decay="200"
  src={astronaut}
  ios-src={iosAstronaut}
  alt="A 3D model of an astronaut"
  camera-controls
  ar
  disable-zoom
  touch-action="pan-y"
//   shadow-intensity="1"
disable-tap 
auto-rotate 
  > 
   <button class="view-button" slot="hotspot-0" data-position="-0.0569m 0.0969m -0.1398m" data-normal="-0.5829775m 0.2863482m -0.7603565m" data-orbit="-50.94862deg 84.56856deg 0.06545582m" data-target="-0.04384604m 0.07348397m -0.1213202m">
    The Fighters
  </button>      
  </model-viewer>

</Model>

  );
  
  export default Globe;



{/* <model-viewer src="globe2.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls poster="poster.webp" shadow-intensity="1"> </model-viewer> */}