import React, { FC, PropsWithChildren } from "react";
import { Text } from "react-native";
import cn from "classnames";
import Button from './Button'
import { IButton } from './button.interface'
import Loader from '../loader/Loader'

const PrimaryButton: FC<PropsWithChildren<IButton>> = ({children, isLoading, disabled, className, ...rest}) => {
  return (
    <Button
    {...rest}
    disabled={isLoading || disabled}
    className={cn(`${disabled ? 'bg-gray/20' : 'bg-primary'} rounded-lg text-center items-center px-4 py-3 w-full`, className)}>
      {isLoading
        ? <Loader color={`#FFFFFF`} /> :
        <Text className={` ${disabled ? 'text-black' : 'text-white'} text-base font-medium`}>
        {children}
      </Text>}
    </Button>
  );
};

export default PrimaryButton;
