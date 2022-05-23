import React from "react";
import "./styles.css";

type Props = {
    title: string;
}

const testData = [
    { title: "TITLE_1", description: "DESCRIPTION_1" },
    { title: "TITLE_2", description: "DESCRIPTION_2" },
    { title: "TITLE_3", description: "DESCRIPTION_3" },
    { title: "TITLE_4", description: "DESCRIPTION_4" },
    { title: "TITLE_5", description: "DESCRIPTION_5" }
]

const Container: React.FC<Props> = ({ title }) => {
    return <div className="dashboard-container">
        <div className="dashboard-container-title">{title}</div>
        <div>
            {testData.map((data, i) => {
                return <div 
                            key={i} 
                            className="dashboard-card"
                        >
                            <div>{data.title}</div>
                            <div>{data.description}</div>
                        </div>
            })}
        </div>
    </div>
}

export default Container;