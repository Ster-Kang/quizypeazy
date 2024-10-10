import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

interface CanvasEditorProps {

}

const CanvasEditor = ({}:CanvasEditorProps):JSX.Element => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [drawing, setDrawing] = useState(false);

    const getPointerPosition = (event: any) => {
        const canvas = canvasRef.current;

        if (!canvas) return { x: 0, y: 0};

        const rect = canvas.getBoundingClientRect();

        const x = event.clientX || event.touches[0]?.clientX;
        const y = event.clientY || event.touches[0]?.clientY;

        return { x: x - rect.left, y: y- rect.top };
    };

    const startDrawing = (event: any) => {
        const { x, y } = getPointerPosition(event);
        const context = canvasRef.current?.getContext('2d');
        if (context) {
            context.beginPath();
            context.moveTo(x, y);
            setDrawing(true);
        }
    };

    const draw = (event: any) => {
        if (!drawing) return;

        const { x, y} = getPointerPosition(event);
        const context = canvasRef.current?.getContext('2d');

        if (context) {
            context.lineTo(x, y);
            context.stroke();
        }
    };

    const endDrawing = () => {
        setDrawing(false);
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        if (context) {
            context.lineWidth = 2;
            context.lineCap = 'round';
            context.strokeStyle = 'black';
        };

        if (canvas) {
            canvas.addEventListener('mousedown', startDrawing);
            canvas.addEventListener('mousemove', draw);
            canvas.addEventListener('mouseup', endDrawing);
            canvas.addEventListener('mouseout', endDrawing);
            canvas.addEventListener('touchstart', startDrawing);
            canvas.addEventListener('touchmove', draw);
            canvas.addEventListener('touchend', endDrawing);
        };

        return () => {
            if (canvas) {
                canvas.removeEventListener('mousedown', startDrawing);
                canvas.removeEventListener('mousemove', draw);
                canvas.removeEventListener('mouseup', endDrawing);
                canvas.removeEventListener('mouseout', endDrawing);
                canvas.removeEventListener('touchstart', startDrawing);
                canvas.removeEventListener('touchmove', draw);
                canvas.removeEventListener('touchend', endDrawing);
            }
        };
    }, [drawing]);

    return (
        <canvas
            ref={canvasRef}
            width={1000}
            height={window.innerHeight - 160}
            style={{
                border: '1px solid black',
                touchAction: 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                width: '1000px',
                height: 'calc( 100vh - 10rem)'
            }}
        />
    );
};

export default CanvasEditor;


