import HomeItem from "../src/Components/HomeItem";
import {useSelector} from "react-redux"
const Home = () => {
  const items = useSelector(store => store.items);
  


  return (
    <>
      <main>
        <div className="items-container">
          {items.map(item => <HomeItem key={item.id} item={item}/>)}
          {/* <HomeItem item={items[0]} /> */}
        </div>
      </main>
    </>
  );
};

export default Home;
