import { useContext, useEffect } from "react";
import useMousePosition from "./UseMousePosition";
import { MouseContext } from "../../context/mouseContext";
const Cursor = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  useEffect(() => {
    if (!(navigator.userAgent.indexOf("Chrome") != -1)) {
      const mouse1: HTMLElement | null = document.querySelector(".mouse-1");
      const mouse2: HTMLElement | null = document.querySelector(".mouse-2");

      if (mouse1 && mouse2) {
        mouse2.style.display = "none";
        // add a class to the mouse1 element
        mouse1.classList.add("mouse-1-special");
      }
    }

    // if (userAgent.indexOf("Chrome") != -1) {
    //     return "Google Chrome";
    // } else if (userAgent.indexOf("Firefox") != -1) {
    //     return "Mozilla Firefox";
    // } else if (userAgent.indexOf("Safari") != -1) {
    //     return "Apple Safari";
    // } else if (userAgent.indexOf("MSIE") != -1 || userAgent.indexOf("Trident/") != -1) {
    //     return "Internet Explorer";
    // } else if (userAgent.indexOf("Edge") != -1) {
    //     return "Microsoft Edge";
    // } else {
    //     return "Unknown";
    // }
  }, [cursorType]);

  return (
    <>
      <div
        className={`mouse-2 ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
      <div
        className={`mouse-1 ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};
export default Cursor;
