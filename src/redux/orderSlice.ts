import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {DeliveryAddress} from "../types/db";

const initialState: DeliveryAddress = {
    firstName: '',
    lastName: '',
    streetAddressLine1: '',
    streetAddressLine2: '',
}

export const portalSlice = createSlice({
    name: 'portal',
    initialState,
    reducers: {
        updateAddress: (state, action: PayloadAction<DeliveryAddress>) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.streetAddressLine1 = action.payload.streetAddressLine1;
            state.streetAddressLine2 = action.payload.streetAddressLine2;
            state.email = action.payload.email;
            state.tel = action.payload.tel;
        },
    },
})

export const { updateAddress } = portalSlice.actions
export default portalSlice.reducer