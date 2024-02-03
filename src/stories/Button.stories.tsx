import { Button } from "../ui-kit";
import './Button.scss';

export default { title: "Button" }


export const stories = () => (

 <div>
  <div className="story">
   <label>Button</label>
   <Button>Send</Button>
  </div>

  <div className="story">
   <label>Button Disabled</label>
   <Button isDisabled>Disabled</Button>
  </div>
 </div>

)