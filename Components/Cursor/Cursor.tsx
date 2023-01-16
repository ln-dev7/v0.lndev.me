import { useContext, useEffect } from "react";
import useMousePosition from "./UseMousePosition";
import { MouseContext } from "../../context/mouseContext";
const Cursor = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  useEffect(() => {
    if (!(navigator.userAgent.indexOf("Chrome") != -1)) {
      const dot: HTMLElement | null = document.querySelector(".dot");
      const ring: HTMLElement | null = document.querySelector(".ring")

      if (dot && ring) {
        //dot.style.display = "none";
        ring.style.display = "none";
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
        className={`dot ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
      <div
        className={`ring ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};
export default Cursor;
