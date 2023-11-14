import React from "react";

import { Metadata } from "next";
import SocialLinkClient from "./SocialLinkClient";

export const metadata: Metadata = {
  title: "Links | Manoram Baudel",
  description: "Connect with me.",
};

const Links = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <SocialLinkClient />
    </div>
  );
};

export default Links;
