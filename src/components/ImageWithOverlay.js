import React from 'react';

const ImageWithOverlay = ({ path, text, badgeText }) => {
  return (
    <div>
        <div style={{ position: 'relative', display: 'inline-block', marginTop: 60, }}>
            <img
                src={path}
                alt="driveway1"
                style={{ width: '500px', height: 'auto', borderRadius:10, margin: 0 }}
            />
            <div
                style={{
                position: 'absolute',
                top: '2%',
                left: '2%',
                background: 'green', 
                margin: '0px',
                paddingLeft: '2%',
                paddingRight: '2%',
                paddingBottom: '1%',
                borderRadius: '10px',
                opacity: '70%'
                }}>
                <span style={{ color: '#fff', fontSize: '24px' }}>{badgeText}</span>
            </div>
            <div
                style={{
                position: 'absolute',
                bottom: '5%',
                left: '8%',
                width: '80%',
                background: 'green', // Green translucent background color rgba(0, 128, 0, 0.5)
                paddingLeft: '2%',
                paddingRight: '2%',
                paddingTop: '1%',
                paddingBottom: '1%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                opacity: '70%'
                }}>
                <span style={{ color: '#fff', fontSize: '24px' }}>{text}</span> {/* Replace 'Your Text' with your desired text */}
            </div>
        </div>
    </div>
  );
};

export default ImageWithOverlay;