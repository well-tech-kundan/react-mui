import Banner from "../../components/banner";
import ContainerBuilder from "../../components/container/ContainerBuilder";
import PromotionSlider from "../../components/promotionslider";

function Home({banners, slidermessage, containerdata}) {
    return (
        <>
            {/* displayComponent is boolean variable, displayComponent{true} will set the banner to be rendered on the page,  */}
            <Banner banners={banners} displayComponent={true} />

            {/*  displayComponent is boolean variable, displayComponent{true} will set the promo slider to be rendered on the page */}
            <PromotionSlider message={slidermessage} displayComponent={true} />

            {/* following will build the container for displaying configured products */}
            <ContainerBuilder    containerdata={containerdata} />
        </>
    );
}

export default Home;