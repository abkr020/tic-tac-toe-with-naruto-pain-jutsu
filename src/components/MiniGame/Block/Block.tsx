import React from "react";
import "./Block.css";

interface BlockProps {
    value?: string;
    onClick?: () => void;
    key?: number;
}
const Block: React.FC<BlockProps> = (props) => {
    return (
        <div onClick={props.onClick} className="block">{props.value}</div>
    );
}   

export default Block;