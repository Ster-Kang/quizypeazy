import styled from "styled-components";

interface SVGsProps {
    viewBox: string;
    d: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: string;
    style?: React.CSSProperties;
    strokeOpacity?: string;
}

const SVGs = ({viewBox, d, strokeOpacity, fill, stroke, strokeWidth, style}:SVGsProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox={viewBox} style={style}>
            <path d={d} fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeOpacity={strokeOpacity}>
            </path>
        </svg>
    )
}

export default SVGs;
