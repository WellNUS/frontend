import React, { SyntheticEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { Field } from "../../../types/authentication/types";
import FormField from "./FormField";
import AlertDismissible from "./AlertDismissible";
import styled from "styled-components";

const StyledButton = styled(Button)`
    color: black;
    background-color: lightpink;
    border: 0;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

type Props = {
    onSubmit: (e: SyntheticEvent)=>void; 
    fields: Field[];
    error: string;
    displayError: boolean;
    closeError: () => void;
}

function GeneralForm(props: Props): React.ReactElement {
    const { fields, onSubmit, error, displayError, closeError } = props;
    return <Form onSubmit={onSubmit}>
                {
                    fields.map((f, i) => (
                        <FormField
                            key={i}
                            id={f.id}
                            type={f.type}
                            label={f.label}
                            placeholder={f.placeholder}
                            notes={f.notes}
                        />
                    ))
                }
                <AlertDismissible 
                    msg={error}
                    display={displayError}
                    onClose={closeError}
                />
                <StyledButton variant="white" type="submit">
                    Submit
                </StyledButton>
            </Form>
}

export default GeneralForm;