import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { createOrderFail, fetchOrderFail, fetchOrderStart, fetchOrderSuccess, setCurrentOrderID } from '../redux/ordersSlice/ordersSlice'

export const getOrders = async(dispatch, currentUser)=> {
    dispatch(fetchOrderStart())
    try {
        const orders = await axios.get(`${BASE_URL}/orders/`, {
            headers: {
                'x-token': currentUser.token
            }
        })
        if(orders){
            dispatch(fetchOrderSuccess(orders.data.data))
        }
    } catch (error) {
        console.log(error)
        dispatch(fetchOrderFail('Algo salió mal, no hay ordenes sin usuario'))
    }
}

export const createOrders = async(order, dispatch, currentUser)=> {
    dispatch(fetchOrderStart())
    try {
        const response = await axios.post(`${BASE_URL}/orders/`, order, {
            headers: {
                'x-token': currentUser.token
            }
        })
        if(response){
            getOrders(dispatch, currentUser)
            dispatch(setCurrentOrderID(response.data.order.orderID))
        }
    } catch (error) {
        console.log(error)
        dispatch(createOrderFail())
    }
}
