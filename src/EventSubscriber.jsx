import React, { useState, useEffect } from 'react';

function EventSubscriber() {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div>
            <h2>Mouse Position</h2>
            <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
        </div>
    );
}

export default EventSubscriber;
