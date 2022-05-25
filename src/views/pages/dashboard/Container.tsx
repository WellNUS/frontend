import React from "react";
import {
    Wrapper,
    ContainerTitle,
    Card
} from "./styled/styled";

const testData = [
    { title: "TITLE_1", description: "DESCRIPTION_1" },
    { title: "TITLE_2", description: "DESCRIPTION_2" },
    { title: "TITLE_3", description: "DESCRIPTION_3" },
    { title: "TITLE_4", description: "DESCRIPTION_4" },
    { title: "TITLE_5", description: "DESCRIPTION_5" }
]

const Container = ({ title } : { title: string }) => {
    return <Wrapper>
        <ContainerTitle>{title}</ContainerTitle>
        <div>
            {testData.map((data, i) => {
                return <Card key={i}>
                            <div>{data.title}</div>
                            <div>{data.description}</div>
                        </Card>
            })}
        </div>
    </Wrapper>
}

export default Container;