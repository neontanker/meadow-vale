import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen  z-20 bg-opacity-75 bg-black"
      onClick={props.onClick}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed  w-4/5 left-[10%] top-[10vh] lg:top-[15vh] sm:left-[20%] sm:w-[60%] lg:left-[25%]  lg:w-[50%] xl:left-[30%]  xl:w-[40%] z-30 ">
      <div className="">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
