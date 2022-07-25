import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { deleteRequestOptions, getRequestOptions } from "../../../../api/fetch/requestOptions";
import { config } from "../../../../config";
import Empty from "../../error/Empty";
import "./bookingRequests.css";

const BookingRequests = () => {

    const { details } = useSelector((state: any) => state.user);

    const [bookings, setBookings] = useState([{
        user: { first_name: "", last_name: "" }, booking: { details: "", start_time: "", end_time: "", id: "" }
    }]);
    const getBookings = async () => {
        await fetch(config.API_URL + "/booking", getRequestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setBookings(data);
            })
    }

    useEffect(() => {
        getBookings();
    }, []);

    const handleDelete =  async (booking_id: string) => {
        await fetch(config.API_URL + "/booking/" + booking_id, deleteRequestOptions)
            .then(response => response.json())
            .then(data => {
                window.location.reload();
            })
            .catch(err => console.log(err));
    }
    
    return (
        <div className="">
            <h2 className="bookingRequest_subheading">Pending booking requests you sent</h2>
            <div className="layout_content_container_grid">
                {
                    bookings.length === 0 &&
                    <Empty message={"You have no pending requests."}/>
                }
                {
                    bookings.map((obj, id) => {
                        return (
                            <div key={id} className="bookingRequest">
                                <div className="bookingRequest_heading">To: {obj.user.first_name} {obj.user.last_name}</div>
                                <div>{obj.booking.details}</div>
                                <br />
                                <div><b>Start: </b>{new Date(obj.booking.start_time).toLocaleString()}</div>
                                <div><b>End: </b>{new Date(obj.booking.end_time).toLocaleString()}</div>
                                <Button className="request_delete" onClick={() => handleDelete(obj.booking.id)}>Delete Request</Button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BookingRequests;