import { getPostServer } from "@/utils/getPost";
import React from "react";

const Main = async () => {
  const post = getPostServer("fav=[1,2,3]&block=[4,5,6]");

  return (
    <div className="border border-black row-start-1 row-end-7 col-start-2 col-end-4">
      Main
    </div>
  );
};

export default Main;
