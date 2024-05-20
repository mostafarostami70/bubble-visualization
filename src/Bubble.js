import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import axios from 'axios';

function Bubble() {
  const canvasRef = useRef(null);
  const [bubbles, setBubbles] = useState([]);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    axios.get('/data.json')
      .then(response => {
        setBubbles(response.data.result);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const scale = window.devicePixelRatio;
    canvas.width = dimensions.width * scale;
    canvas.height = dimensions.height * scale;
    context.scale(scale, scale);

    const simulation = d3.forceSimulation(bubbles)
      .force('charge', d3.forceManyBody().strength(5))
      .force('center', d3.forceCenter(dimensions.width / 2, dimensions.height / 2))
      .force('collision', d3.forceCollide().radius(d => 
        (d.price_change_percentage_24h >= 5 ||  d.price_change_percentage_24h <= -5 ? 
          Math.abs(d.price_change_percentage_24h) * 6 
          : Math.abs(d.price_change_percentage_24h) * 14)))
      .on('tick', () => {
        context.clearRect(0, 0, dimensions.width, dimensions.height);
        bubbles.forEach(bubble => {
          const radius = bubble.price_change_percentage_24h >= 5 ||  bubble.price_change_percentage_24h <= -5 ? 
          Math.abs(bubble.price_change_percentage_24h) * 5 : Math.abs(bubble.price_change_percentage_24h) * 10;
          bubble.x = Math.max(radius, Math.min(dimensions.width - radius, bubble.x));
          bubble.y = Math.max(radius, Math.min(dimensions.height - radius, bubble.y));

          context.beginPath();
          context.arc(bubble.x, bubble.y, radius, 0, 2 * Math.PI);
          context.fillStyle = 'transparent';
          context.shadowColor = 'rgba(204, 219, 232, 1)';
          context.shadowBlur = 10;
          context.fill();
          context.strokeStyle = bubble.price_change_percentage_24h > 0 ? 'rgba(0, 255, 0, 0.7)' : 'rgba(255, 0, 0, 0.7)';
          context.lineWidth = 3;
          context.stroke();
          context.closePath();
          context.fillStyle = 'white';
          context.fillText(bubble.symbol.toUpperCase(), bubble.x - 10, bubble.y + 4);
          context.fillText(bubble.price_change_percentage_24h.toFixed(2), bubble.x - 15, bubble.y + 15);
        });
      });

    let selectedBubble = null;
    function onMouseDown(event) {
      const [x, y] = d3.pointer(event);
      selectedBubble = bubbles.find(bubble => {
        const radius = bubble.price_change_percentage_24h > 1 ? Math.abs(bubble.price_change_percentage_24h) * 7 : Math.abs(bubble.price_change_percentage_24h) * 15;
        return Math.sqrt((bubble.x - x) ** 2 + (bubble.y - y) ** 2) < radius;
      });
      if (selectedBubble) {
        canvas.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('mouseup', onMouseUp);
      }
    }

    function onMouseMove(event) {
      const [x, y] = d3.pointer(event);
      if (selectedBubble) {
        selectedBubble.x = x;
        selectedBubble.y = y;
        simulation.alpha(1).restart();
      }
    }

    function onMouseUp() {
      selectedBubble = null;
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseup', onMouseUp);
    }

    canvas.addEventListener('mousedown', onMouseDown);

    function onTouchStart(event) {
      const touch = event.touches[0];
      const [x, y] = [touch.clientX, touch.clientY];
      selectedBubble = bubbles.find(bubble => {
        const radius = bubble.price_change_percentage_24h > 1 ? Math.abs(bubble.price_change_percentage_24h) * 7 : Math.abs(bubble.price_change_percentage_24h) * 15;
        return Math.sqrt((bubble.x - x) ** 2 + (bubble.y - y) ** 2) < radius;
      });
      if (selectedBubble) {
        canvas.addEventListener('touchmove', onTouchMove);
        canvas.addEventListener('touchend', onTouchEnd);
      }
    }

    function onTouchMove(event) {
      const touch = event.touches[0];
      const [x, y] = [touch.clientX, touch.clientY];
      if (selectedBubble) {
        selectedBubble.x = x;
        selectedBubble.y = y;
        simulation.alpha(1).restart();
      }
    }

    function onTouchEnd() {
      selectedBubble = null;
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
    }

    canvas.addEventListener('touchstart', onTouchStart);

    return () => {
      simulation.stop();

      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseup', onMouseUp);

      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
    };
  }, [bubbles, dimensions]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', backgroundColor: '#222222' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
    </div>
  );
}

export default Bubble;
