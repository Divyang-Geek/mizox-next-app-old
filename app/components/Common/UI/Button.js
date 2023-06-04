import Link from "next/link";

const Button = ({ className, url, type, children }) => {
    return (
        <>
            {url ? (
                <Link className={`sec-btn ${className ? className : ""}`} href={url}>
                    {children}
                </Link>
            ) : (
                <button type={type ? type : "button"} className={`sec-btn ${className ? className : ""}`}>
                    {children}
                </button>
            )}
        </>
    );
};

export default Button;
