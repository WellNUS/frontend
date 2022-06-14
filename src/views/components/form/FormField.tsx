import { Form } from "react-bootstrap";
import { Field } from "../../../types/authentication/types";

function FormField(props: Field): React.ReactElement {
    const { id, type, label, placeholder, notes } = props;
    return  <Form.Group className="mb-3" controlId={id}>
                {/* <Form.Label>{label}</Form.Label> */}
                <Form.Control type={type} placeholder={placeholder} />
                <Form.Text>{notes}</Form.Text>
            </Form.Group>
}

export default FormField;