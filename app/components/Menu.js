import Link from "next/link";

const Menu = ({ data }) => {
    // This Component For Submenu
    const ChildMenu = ({ child }) => {
        return (
            <ul className="sub_menu">
                {child?.map((subM) => {
                    const { id, title, link } = subM;
                    return (
                        <li key={id}>
                            <Link href={link} title={title}>
                                {title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <nav className="nav_menu">
            <ul>
                {data?.map((mData) => {
                    const { id, title, link, child } = mData;
                    return (
                        <li key={id}>
                            <Link href={link} title={title}>
                                {title}

                                {child && <span className="dropdown-plus">+</span>}
                            </Link>

                            {child && <ChildMenu child={child} />}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Menu;
