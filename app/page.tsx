import { FunctionComponent } from "react";

interface homeProps {
  
}
 
const home: FunctionComponent<homeProps> = () => {
  return ( 
    <div className="bg-primary mx-2 p-2">
      <h1>Hello</h1>
    </div>
   );
}
 
export default home;