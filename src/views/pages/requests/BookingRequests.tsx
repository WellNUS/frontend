import { useEffect, useState } from "react";
import { getRequestOptions } from "../../../api/fetch/requestOptions";
import { config } from "../../../config";
import "./bookingRequests.css";

const BookingRequests = () => {
    const [bookings, setBookings] = useState([{
        user: { first_name: "", last_name: "" }, booking: { details: "", start_time: "", end_time: "" }
    }]);
    const getBookings = async () => {
        await fetch(config.API_URL + "/booking", getRequestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setBookings(data);
            })
    }

    useEffect(() => {
        getBookings();
    }, []);
    
    return (
        <div className="">
            <h2 className="bookingRequest_subheading">Pending requests you sent</h2>
            <div className="layout_content_container_grid">
                {
                    bookings.map((obj, id) => {
                        return (
                            <div key={id} className="bookingRequest">
                                <div className="bookingRequest_heading">To: {obj.user.first_name} {obj.user.last_name}</div>
                                <div>{obj.booking.details}</div>
                                <br />
                                <div><b>Start: </b>{new Date(obj.booking.start_time).toLocaleString()}</div>
                                <div><b>End: </b>{new Date(obj.booking.end_time).toLocaleString()}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BookingRequests;