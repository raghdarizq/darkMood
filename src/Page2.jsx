import { useContext } from "react";

import ThemeContexttt from "./context/DataContext";
const Page2 = () => {
    const {Color} =useContext(ThemeContexttt)

  return (
    
    <div className={`App ${Color}`}>
      <h1>Welcom to Page2</h1>
    </div>
  );
};

export default Page2;
