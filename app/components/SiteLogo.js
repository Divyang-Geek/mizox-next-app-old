// Images
import logo from "@/assets/images/logo.png";

// Components
import Image from "next/image";
import Link from "next/link";

const SiteLogo = ({ className }) => {
    return (
        <>
            <div className={`site_logo${className ? ` ${className}` : ""}`}>
                <Link href="/" title="Site">
                    <Image src={logo} alt="Site Logo" priority={true} width={222} height={66} />
                </Link>
            </div>
        </>
    );
};

export default SiteLogo;
