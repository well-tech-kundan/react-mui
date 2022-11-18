
import StoreFilter from "../../components/store/StoreFilter";
import StoreProducts from "../../components/store/StoreProducts";
import { StoreContainer } from "../../styles/store";

function Store() {
    return (
        <StoreContainer>
            <StoreFilter />
            <StoreProducts />
        </StoreContainer>
    );
}

export default Store;