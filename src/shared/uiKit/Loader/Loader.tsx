import { classNames } from "shared/lib/classNames/classNames";
import "./Loader.scss";

interface LoaderProps {
  classes?: string;
}

export const Loader = ({ classes }: LoaderProps) => (
  <div className={classNames("lds-roller", {}, [classes])}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);
