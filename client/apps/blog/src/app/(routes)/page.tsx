import React from "react";

import Bubble from "components/Home/bubble";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between">
        <Bubble href="/html-css" imageName="html.svg" />
        <Bubble href="/js-ts" imageName="javascript.svg" />
        <Bubble href="/react-next" imageName="react.png" />
        <Bubble href="/express" imageName="express.png" />
        <Bubble href="/cs" imageName="computer-science.png" isNeedRadius={true} />
      </div>
    </div>
  );
}
