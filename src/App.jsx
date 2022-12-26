import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import SceneContainer from "./Components/SceneContainer";

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Loader />
      <Canvas>
        <SceneContainer />
      </Canvas>
    </div>
  );
}

export default App;
