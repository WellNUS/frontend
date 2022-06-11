import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import userSlice from "../../../state/slices/user";

export const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state);
    const logout = userSlice.actions.logout;
    dispatch(logout(user));
    navigate("/");
}
