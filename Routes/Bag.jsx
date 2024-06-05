import BagItem from "../src/Components/BagItem";
import BagSummary from "../src/Components/BagSummary";
import Footer from "../src/Components/Footer";
import Header from "../src/Components/Header";
import { useDispatch, useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector(store => store.bag);
  const items = useSelector(state => state.items);
  const finalItems = items.filter(item => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  })
  return (
    <>
      
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map(item => <BagItem item={item}/>)}
            
          </div>
          
          <div className="bag-summary">
          <BagSummary/>
          </div>
        </div>
      </main>
      
    </>
  );
};

export default Bag;
