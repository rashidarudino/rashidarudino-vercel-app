import { useState, useRef, useEffect } from 'react';
import {
  SiApache,
  SiAutodeskrevit,
  SiBlender,
  SiBootstrap,
  SiCplusplus,
  SiCsharp,
  SiCss3,
  SiExpress,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiMysql,
  SiPlatformio,
  SiPostgresql,
  SiPowerapps,
  SiPython,
  SiReact,
  SiRust,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiUnity,
  SiUnrealengine,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import './bento.css'; // Make sure to import Tailwind's styles if needed

const tooltipContents = {
  mv: `Javascript • React.js • Express.js • Three.js`,
  data: 'Supabase • MySQL • Postgres • Apache2',
  style: 'CSS3 • Tailwind CSS • MUI',
  design: 'Unreal Engine • Revit • Blender • Unity2D',
  web: 'HTML5',
  embedded: 'C++ • PlatformIO • ESP32',
  game: 'Rust • Python • Java • C# • PowerApps',
};

const colors = {
  mv: 'bg-blue-500',
  data: 'bg-red-500',
  style: 'bg-yellow-500',
  design: 'bg-green-500',
  web: 'bg-cyan-500',
  embedded: 'bg-orange-500',
  game: 'bg-purple-500',
};

export const SkillBento = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const tooltipRef = useRef(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className='relative grid h-96 text-white'>
      <div
        className={`p-2 col-span-2 row-span-2 bg-blue-500 rounded-lg shadow-custom ${
          hoveredItem === 'mv' ? 'pulsating selected' : ''
        }`}
        onMouseEnter={() => handleMouseEnter('mv')}
        onMouseLeave={handleMouseLeave}
      >
        <div className='grid grid-cols-2 grid-rows-2 gap-4'>
          <SiJavascript size={64} />
          <SiReact size={32} />
          <SiExpress size={32} />
          <h1 className='text-lg font-bold'>MV framework</h1>
        </div>
      </div>
      <div
        className={`p-3 col-span-3 gap-3 row-span-1 bg-red-500 rounded-lg shadow-custom ${
          hoveredItem === 'data' ? 'pulsating selected' : ''
        }`}
        onMouseEnter={() => handleMouseEnter('data')}
        onMouseLeave={handleMouseLeave}
      >
        <div className='grid grid-cols-2 grid-rows-2 gap-4'>
          <SiSupabase size={32} />
          <SiMysql size={32} />
          <SiPostgresql size={32} />
          <SiApache size={32} />
        </div>
        <h1 className='text-lg font-bold'>Data</h1>
      </div>
      <div
        className={`col-span-1 row-span-2 bg-yellow-500 rounded-lg shadow-custom ${
          hoveredItem === 'style' ? 'pulsating selected' : ''
        }`}
        onMouseEnter={() => handleMouseEnter('style')}
        onMouseLeave={handleMouseLeave}
        style={{
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <SiCss3 size={32} />
        <SiTailwindcss size={32} />
        <SiMui size={32} />
        <h1 className='text-lg font-bold -rotate-90'>Style</h1>
      </div>
      <div
        className={`p-3 col-span-2 row-span-2 bg-green-500 rounded-lg shadow-custom ${
          hoveredItem === 'design' ? 'pulsating selected' : ''
        }`}
        onMouseEnter={() => handleMouseEnter('design')}
        onMouseLeave={handleMouseLeave}
      >
        <div className='grid grid-cols-2 grid-rows-2 gap-4'>
          <SiAutodeskrevit size={32} />
          <SiFigma size={32} />
          <SiBlender size={32} />
          <SiThreedotjs size={32} />
          <SiPowerapps size={32} />
          <h1 className='text-lg font-bold rotate-90'>Design</h1>
        </div>
      </div>
      <div
        className={`col-span-1 row-span-1 bg-cyan-500 rounded-lg shadow-custom ${
          hoveredItem === 'web' ? 'pulsating selected' : ''
        }`}
        onMouseEnter={() => handleMouseEnter('web')}
        onMouseLeave={handleMouseLeave}
      >
        <SiHtml5 size={32} />
      </div>
      <div
        className={`p-3 col-span-1 row-span-1 bg-orange-500 rounded-lg shadow-custom ${
          hoveredItem === 'embedded' ? 'pulsating selected' : ''
        }`}
        onMouseEnter={() => handleMouseEnter('embedded')}
        onMouseLeave={handleMouseLeave}
      >
        <SiCplusplus size={32} /> <SiPlatformio size={32} />
        <h1 className='text-lg font-bold'>Embedded</h1>
      </div>
      <div
        className={`p-3 col-span-5 row-span-2 gap-3 bg-purple-500 rounded-lg shadow-custom ${
          hoveredItem === 'game' ? 'pulsating selected' : ''
        }`}
        onMouseEnter={() => handleMouseEnter('game')}
        onMouseLeave={handleMouseLeave}
      >
        <SiUnrealengine size={32} />
        <SiUnity size={32} />
        <SiRust size={32} />
        <SiPython size={32} />
        <FaJava size={32} />
        <SiCsharp size={32} />
        <h1 className='text-lg font-bold rotate-45'>Game</h1>
      </div>

      {/* Tooltip */}
      {hoveredItem && (
        <div
          ref={tooltipRef}
          className={`absolute my-5 z-50 p-2 rounded-lg shadow-lg ${
            colors[hoveredItem] || 'bg-white'
          }`}
          style={{
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            whiteSpace: 'nowrap',
          }}
        >
          <div
            className='text-sm text-white'
            dangerouslySetInnerHTML={{
              __html: tooltipContents[hoveredItem],
            }}
          ></div>
        </div>
      )}
    </div>
  );
};
