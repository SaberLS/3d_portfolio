import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import Loader from '../components/Loader.tsx'

import Island from '../models/Island.js'
import Sky from '../models/Sky.js'
import Bird from '../models/Bird.js'
import Plane from '../models/Plane.js'
import HomeInfo from '../components/HomeInfo.tsx'

function Home() {
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)

  const adjustForScreenSize = () => {
    let screenScale

    const rotation = [0.1, 4.7, 0]
    const screenPosition = [0, -6.5, -43]

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]
    }
    else {
      screenScale = [1, 1, 1]
    }

    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5]
      screenPosition = [0, -1.5, 0]
    }
    else {
      screenScale = [3, 3, 3]
      screenPosition = [0, -4, -4]
    }

    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition, islandRotation] = adjustForScreenSize()

  const [planeScale, planePosition] = adjustPlaneForScreenSize()

  return (
    <section className="absolute z top-0 w-full h-full flex justify-center items-center">
      <div className="absolute top-28 left-0 right-0 items-center justify-center flex">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas className={`bg-transparent w-full h-screen  ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 2, 3]} intensity={3} />
          <ambientLight intensity={0.8} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000" intensity={1} />

          <Sky isRotating={isRotating} />
          <Bird />
          <Plane
            scale={planeScale}
            position={planePosition}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
            currentStage={currentStage}
          />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            rotation={islandRotation}
            position={islandPosition}
            scale={islandScale}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>

  )
}

export default Home
