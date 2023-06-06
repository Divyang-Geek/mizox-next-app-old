const Title = ({ className, children }) => {
    return (
        <>
            <div className="sec_title">
                <h2 className={`h2_title ${className ? className : ""}`}>{children}</h2>
            </div>
        </>
    );
};

export default Title;
