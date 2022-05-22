import React from "react";
import "./styles.css"

type Props = {
    title: string;
    style: string;
}

const testData = [
    { title: "TITLE_1", description: "DESCRIPTION_1" },
    { title: "TITLE_2", description: "DESCRIPTION_2" },
    { title: "TITLE_3", description: "DESCRIPTION_3" },
    { title: "TITLE_4", description: "DESCRIPTION_4" },
    { title: "TITLE_5", description: "DESCRIPTION_5" }
]

const Container: React.FC<Props> = ({ title, style }) => {
    return <div className={style}>
        <h3>{title}</h3>
        <div>
            {testData.map(data => {
                return <div>
                    <h4>{data.title}</h4>
                    <h5>{data.description}</h5>
                </div>
            })}
        </div>
    </div>
}

export default Container;