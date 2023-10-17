import React, { HTMLAttributes, ReactHTML } from "react";

import css from "./Title.module.scss";

import classNames from "../ClassNames";

type TitleProps = {
  text: string;
  aaa?: keyof ReactHTML;
  className?: string;
};

function Title<T extends HTMLAttributes<HTMLElement>>({
  aaa: Title = "h1",
  className,
  text,
  ...rest
}: TitleProps & T): JSX.Element {
  return (
    <Title className={classNames(css.title, className)} {...rest}>
      {text}
    </Title>
  );
}

export default Title;
