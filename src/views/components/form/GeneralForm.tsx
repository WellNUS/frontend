import React, { SyntheticEvent } from "react";
import { Field } from "../../../types/authentication/types";
import FormField from "./FormField";
import AlertDismissible from "./AlertDismissible";
import "../../pages/authentication/authentication.css"

type Props = {
    onSubmit: (e: SyntheticEvent) => void; 
    fields: Field[];
    error: string;
    displayError: boolean;
    closeError: () => void;
}

function GeneralForm(props: Props): React.ReactElement {
    const { fields, onSubmit, error, displayError, closeError } = props;
    return <form onSubmit={onSubmit}>
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
                <button type="submit" className="btn link-button">
                    Submit
                </button>
            </form>
}

export default GeneralForm;