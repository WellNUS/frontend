import { Form } from "react-bootstrap";
import { Field } from "../../../types/authentication/types";

function FormField(props: Field): React.ReactElement {
    const { id, type, label, placeholder, notes, choices } = props;
    if (type === "select") {
        return (
            <Form.Select aria-label="Default select example" defaultValue={"DEFAULT"}>
                {
                    choices?.map((choice, key) => {
                        if (key === 0) {
                            return <option value={"DEFAULT"} disabled key={key}>{choice}</option>;
                        }
                        return <option value={choice} key={key}>{choice}</option>
                    })
                }
                <option value={"DEFAULT"} disabled></option>
            </Form.Select>
        )
    }
    return  <Form.Group className="mb-3" controlId={id}>
                {/* <Form.Label>{label}</Form.Label> */}
                <Form.Control type={type} placeholder={placeholder} />
                <small>{notes}</small>
            </Form.Group>
}

export default FormField;