
import { color } from 'motion';
import CircularText from './CircularText.jsx';
import './Circulartext.css';
import DepthText from './DepthText.jsx';
import LogoLoop from './LogoLoop.jsx';
import './LogoLoop.css';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

function App() {


  return (
    <>
    <h1>Hii i am ritik</h1>
    

<CircularText
  text="REACT*BITS*COMPONENTS*"
  onHover="speedUp"
  spinDuration={20}
/>




<DepthText
  text="Elevate"
  layers={34}
  depth={2.4}
  faceColor="#f8fafc"
  depthColor="#7c3aed"
  tilt={7.5}
  pointerTracking
  smoothing={0.14}
  perspective={900}
  autoOrbit
  orbitSpeed={0.35}
  fontSize="clamp(3rem, 12vw, 7rem)"
  fontWeight={900}
  shadow
/>




    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
      
      {/* Vertical loop with deceleration on hover */}
      <LogoLoop
        logos={techLogos}
  useCustomRender={false}
/>
    </div>
              </>
  )
}

export default App
