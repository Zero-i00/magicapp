import React, {FC} from 'react';
import {ActivityIndicator} from "react-native";
import {ILoader} from "./loader.interface";

const Loader: FC<ILoader> = ({ color = '#C87559', ...rest }) => {
    return <ActivityIndicator {...rest} size='large' color={color} />
}


export default Loader;
