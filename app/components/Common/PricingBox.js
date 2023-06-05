import React from "react";
import Button from "../UI/Button";

const PricingBox = ({ ...data }) => {
    const { id, title, price, description, services, url } = data;
    const { currency, amount, type } = price;
    return (
        <>
            <div className="pricing_box_wp">
                <div className="pricing_box_num">{id}</div>
                <div className="pricing_box">
                    <h3 className="h3_title">{title}</h3>
                    <div className="pricing_box_price">
                        <span className="currency">{currency}</span>
                        <span className="price">{amount}</span>
                        <span className="period">/ {type}</span>
                    </div>
                    <div className="pricing_box_content">
                        <p>{description}</p>
                        <div className="pricing_box_services">
                            <ul>
                                {services?.map((data, index) => {
                                    return <li key={index}>{data}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                    <Button url={url} size="sm">
                        Select Now
                    </Button>
                </div>
            </div>
        </>
    );
};

export default PricingBox;
