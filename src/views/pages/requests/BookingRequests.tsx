import { useEffect, useState } from "react";
import { getRequestOptions } from "../../../api/fetch/requestOptions";
import { config } from "../../../config";

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
        <div>
            Pending requests you sent
            {
                bookings.map((obj, id) => {
                    return (
                        <div key={id}>
                            <div>Provider Name: {obj.user.first_name} {obj.user.last_name}</div>
                            <div>Details: {obj.booking.details}</div>
                            <div>Start: {new Date(obj.booking.start_time).toLocaleString()}</div>
                            <div>End: {new Date(obj.booking.end_time).toLocaleString()}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BookingRequests;