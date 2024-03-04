import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import './styles.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Canvas camera={{ position: [0, 0, 2] }}>
      <App />
    </Canvas>
  </StrictMode>
)
