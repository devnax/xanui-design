import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./example/Layout";

const App = () => {
   return (
      <div
         style={{
            fontFamily: "monospace,math, sans-serif",
            textAlign: "center",
            marginTop: "50px",
         }}
      >
         <Layout />
      </div>
   );
};
const rootEle = document.getElementById("root");
if (rootEle) {
   const root = createRoot(rootEle);
   root.render(<Layout />);
}
