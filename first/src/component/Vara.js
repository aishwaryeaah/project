import React, {useState} from 'react';

function Vara() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <header style={{ padding: '20px', textAlign: 'center', fontFamily: 'Anta, serif' }}>
        <h1>CURIOUS SHE, CONFIDENT SHE</h1>
        {/*<h3 style={{ fontFamily: '"Bona Nova", serif', fontWeight: 400, fontStyle: 'italic' }}>
          dedicated to educating and empowering women about their bodies and health.
  </h3>*/}
      </header>
      <div style={{ display: 'flex', justifyContent: 'space-around', flex: 1 }}>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/b44073102680611.5f4bb4f87274b.png" 
        alt="Image 1" style={{ maxHeight: '50vh' }}
         />
      </div>
      {/*<div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ textAlign: 'center', maxWidth: '80%' }}>Place for text goes here...</p>
</div>*/}
    </div>
  );
}

export default Vara;
