import React from "react";
import { ReactDOM } from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.OnConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>

      <footer className={classes.actions}>
        <Button onClick={props.OnConfirm}> Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop OnConfirm={props.OnConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          OnConfirm={props.OnConfirm}
        />,
        document.getElementById("overlay-root")
      )}
      {/* <div className={classes.backdrop} onCick={props.OnConfirm} /> */}
    </React.Fragment>
  );
};

export default ErrorModal;
