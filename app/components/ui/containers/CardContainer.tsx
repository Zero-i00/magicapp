import React, { FC } from "react";
import { View } from "react-native";
import cn from "classnames";
import { IContainer } from './container.interface'

const CardContainer: FC<IContainer> = ({children, className, ...rest}) => {
  return (
    <View {...rest} className={cn(`p-4 rounded-xl bg-white`, className)}>
      {children}
    </View>
  );
};

export default CardContainer;
