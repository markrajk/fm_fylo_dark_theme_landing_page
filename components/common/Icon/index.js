import React from 'react'
import IcomoonReact from "icomoon-react";
import { useTheme } from 'styled-components';

import iconSet from "@/public/icon-font/selection.json";

const Icon = (props) => {
    const theme = useTheme();
    const { color, size = "100%", icon, className = "" } = props;

    return (
        <IcomoonReact
            className={className}
            iconSet={iconSet}
            color={color ? color : theme.color.cyan}
            size={size}
            icon={icon}
        />
    );
}

export default Icon