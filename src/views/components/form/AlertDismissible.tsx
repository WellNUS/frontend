import React, { Fragment } from "react";
import { Alert } from "react-bootstrap";

type Props = {
    msg: string;
    display: boolean;
    onClose: () => void;
}

function AlertDismissible(props: Props): React.ReactElement {
    const { msg, display, onClose } = props
    if(display) {
        return  <Alert 
                    className="alert_dismissable"
                    variant="danger"
                    onClose={onClose}
                    dismissible
                >
                    {msg}
                </Alert>
    }
    return <Fragment />
}

export default AlertDismissible;