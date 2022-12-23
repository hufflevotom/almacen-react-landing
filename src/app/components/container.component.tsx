import { FunctionComponent } from "react";
import { AppProps } from "../utils/AppProps";

const Container: FunctionComponent<AppProps> = ({ children }) => {
  return <div className="w-full h-full">{children}</div>;
};

export default Container;
