import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { itemsActions } from "../Store/itemSlice";
import { fetchStatusActions } from "../Store/fetchStatusSlice";

const FetchItems = () => {
    const fetchStatus = useSelector((store) => store.fetchStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchStatus.fetchDone) return;

        const controller = new AbortController();
        const signal = controller.signal;
        dispatch(fetchStatusActions.markFetchingStarted());
        fetch("http://localhost:8080/items", { signal })
        .then((res) => res.json())
        .then(({items}) => {
            dispatch(fetchStatusActions.markFetchDone());
            dispatch(fetchStatusActions.markFetchingFinished());
            dispatch(itemsActions.addInitialItems(items));
        });

        return () => {
            controller.abort();
        }

    },[fetchStatus]);
    
    return (
        <>
        <div>
            
        </div>
        </>
    )
}

export default FetchItems;