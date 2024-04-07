import React, { MouseEvent } from "react";

import { Button, ButtonProps } from "@mui/material";

type IButtonWithSound = {
  disableSound?: boolean;
  soundSource?: string;
} & ButtonProps;

const ButtonWithSound = ({
  disableSound = false,
  soundSource = "./hum.ogg",
  onClick,
  children,
  ...rest
}: IButtonWithSound) => {
  const clickSoundDecorator = (event: MouseEvent<HTMLButtonElement>) => {
    !disableSound && new Audio(soundSource).play();
    onClick && onClick(event);
  };
  return (
    <Button onClick={clickSoundDecorator} {...rest}>
      {children}
    </Button>
  );
};

export default ButtonWithSound;
