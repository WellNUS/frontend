import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getRequestOptions } from "../../../../api/fetch/requestOptions";
import { config } from "../../../../config";
import { Applicant, BookingUser } from "../types";
import ApplicantProfile from "./ApplicantProfile";
import "./providerBookingRequests.css";

const ProviderBookingRequests = () => {
    const {details} = useSelector((state: any) => state.user);
    const [applicant, setApplicant] = useState<Applicant>(null);
    // console.log(details);
    const [bookings, setBookings] = useState<BookingUser[]>([]);
    const getBookings = async () => {
        await fetch(config.API_URL + "/booking", getRequestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setBookings(data);
                // console.log(data[0].booking.recipient_id);
            })
    }

    useEffect(() => {
        getBookings();
    }, []);

    const getApplicant = async (applicant_id: number) => {
        await fetch(config.API_URL + "/user/" + applicant_id, getRequestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (applicant !== null) return;
                setApplicant(data);
            })
            .catch(err => console.log(err));
    }
    
    return (
        <div>
            {
                bookings &&
                <div className="">
                    <h2 className="bookingRequest_subheading">Booking Requests</h2>
                    <div className="layout_content_container_grid">
                        {
                            bookings.map((obj, id) => {
                                // console.log(obj)
                                const applicant_id = obj?.booking?.recipient_id;
                                applicant_id && getApplicant(applicant_id);
                                return (
                                    applicant &&
                                    <div key={id} className="bookingRequest">
                                        <div className="bookingRequest_heading">From: {applicant.user.first_name} {applicant.user.last_name}</div>
                                        {/* <div className="bookingRequest_heading">To: {obj.user.first_name} {obj.user.last_name}</div> */}
                                        <br />
                                        {obj?.booking && <div><b>Start: </b>{new Date(obj.booking.start_time).toLocaleString()}</div>}
                                        {obj?.booking && <div><b>End: </b>{new Date(obj.booking.end_time).toLocaleString()}</div>}
                                        <br />
                                        <div>
                                            {obj?.booking && <ApplicantProfile applicant={applicant} booking={obj.booking}/>}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default ProviderBookingRequests;