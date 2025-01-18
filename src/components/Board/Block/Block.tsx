import React from "react";
import "./Block.css";

interface BlockProps {
    value?: string;
    onClick?: () => void;
}
const Block: React.FC<BlockProps> = (props) => {
    return (
        <div onClick={props.onClick} className="block">{props.value}</div>
    );
}   

export default Block;