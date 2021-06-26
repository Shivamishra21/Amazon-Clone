import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
 import React from "react";

function Rough() {
    const fade=useSpring({
        from:{
            opacity:0,
            background:"red"
        },
        to:{
            opacity:1,
            background:"blue"
        }
    })
    console.log(fade)
  return (
    <animated.div style={fade}>
      <h1>Rough</h1>
      <p>
        Sint adipisicing magna nostrud occaecat reprehenderit eiusmod eiusmod
        sit mollit ad. Laboris qui id laboris ullamco aliqua magna culpa irure.
        Fugiat occaecat eiusmod qui reprehenderit non ullamco. Amet consequat
        reprehenderit dolor duis anim eiusmod tempor. Nisi nisi fugiat ipsum
        fugiat nulla in adipisicing fugiat reprehenderit deserunt. Dolore aliqua
        deserunt tempor elit proident id occaecat cupidatat pariatur sint.
      </p>
    </animated.div>
  );
}

export default Rough;
