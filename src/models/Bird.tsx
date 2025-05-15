import { useEffect, useRef, useState } from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

function Bird() {
  const { scene, animations } = useGLTF(birdScene)

  const ref = useRef('')
  const { actions } = useAnimations(animations, ref)

  useFrame(({ clock, camera }) => {
    ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

    if (ref.current.position.x > camera.position.x + 10) {
      ref.current.rotation.y = Math.PI
    }
    else if (ref.current.position.x > camera.position.x - 10) {
      ref.current.position.y = 0
    }

    if (ref.current.rotation.y === 0) {
      ref.current.position.x += 0.01
      ref.current.position.z -= 0.01
    }
    else {
      ref.current.position.x -= 0.01
      ref.current.position.z += 0.01
    }
  })

  useEffect(() => {
    actions['Take 001']?.play()
  }, [actions])

  return (
    <mesh ref={ref} position={[-5, -30, 1]} scale={[0.005, 0.005, 0.005]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird
