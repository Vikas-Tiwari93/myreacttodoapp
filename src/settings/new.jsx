import { useState } from "react";
import ProductView from "./Product.Layout";

const HomeView = () => {
  const [uName, setUName] = useState("");
  const [counter, setCounter] = useState(0);

  console.log("HomeView Re-Render: ", uName, counter);
  return (
    <div>
      <p>Homeview</p>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setUName(e.target.value)}
      />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <hr />
      <ProductView name={uName} count={counter} />
    </div>
  );
};

export default HomeView;




const ProductView = (props) => {
  console.log("ProductView Re-Render: ", props);

  return (
    <div>
      <p>
        ProductView: {props.name} {props.count}
      </p>
    </div>
  );
};

export default ProductView;