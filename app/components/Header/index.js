// Components
import BottomHeader from "./BottomHeader";
import TopHeader from "./TopHeader";

const Header = () => {
    return (
        <>
            <header className="main_header">
                <TopHeader />
                <BottomHeader />
            </header>
        </>
    );
};

export default Header;
