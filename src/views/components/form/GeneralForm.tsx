import React, { SyntheticEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { Field } from "../../../types/authentication/types";
import FormField from "./FormField";
import AlertDismissible from "./AlertDismissible";
import styled from "styled-components";

const StyledButton = styled(Button)`
    margin: 1rem 0 0rem 0;
    width: 100%;
    color: black;
    border: 1px #DCDCDC solid;
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
    return <div onSubmit={onSubmit}>
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
            </div>
}

export default GeneralForm;