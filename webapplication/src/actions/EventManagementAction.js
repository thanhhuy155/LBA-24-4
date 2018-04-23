import * as Types from '../constraints/EventManangement'
import callAPI, {callAPIForFormData} from '../utils/apiCaller'

// Get Event Staristic
const actSaveResultEventStaristic = ( data ) => {
    return {
        type: Types.GET_EVENT_STARISTIC,
        data
    }
}

export const actHandleGetEventStaristic = (id) => {
    return (dispatch) => {
        return callAPI('WA_PromotionsStaticByIDStore/' +id, 'GET', null).then(res => {
             dispatch(actSaveResultEventStaristic(res));
        })
    }
}

//Get Events List
const actSaveResultEventsList = (data) =>{
    return {
        type: Types.GET_EVENT_LIST,
        data
    }
}

export const actHandleGetEventsList = (id) =>{
    return (dispatch) => {
        return callAPI ('WA_GetPromotionsByIDStore/' +id, 'GET',null).then (res =>{
            dispatch (actSaveResultEventsList (res))
        })
    }
}

//Create Event

export const actSaveResultCreateEvent = (data) => {
    return {
        type: Types.CREATE_EVENT_FOR_SHOP,
        data
    }
}

export const actCreateEvent = (Store_Details_ID, Promotion_Title, Promotion_Description, Promotion_DateStart, Promotion_DateEnd, imageArray) => {
    return async (dispatch) => {
        var formData = new FormData();
        for (let i = 0; i < imageArray.length; i++) {
            formData.append('fileImage' + i, imageArray[i].file)
        }
            const dataAfterUploadImage = await callAPIForFormData('UploadListImages', formData)
            if (dataAfterUploadImage.message.success) {
                const {ImageList} = dataAfterUploadImage.data
                dispatch(actSaveResultCreateEvent (await callAPI('WA_Promotions', 'POST', {
                    Promotion_Title,
                    Promotion_Description,
                    Promotion_DateStart,
                    Promotion_DateEnd,
                    Store_Details_ID,
                    Promotion_Image : ImageList
                    })))
                }
                else {
                    dispatch (actSaveResultCreateEvent(dataAfterUploadImage))
                }
            
    }
}

//Delete Event
export const actSaveResultFromDeletingEvent = (data) => {
    return {
        type: Types.DELETE_EVENT,
        data
    }
}

export const actHandleDeleteEvent = (idShop) =>{
    return (dispatch) =>{
        return callAPI ('Promotions/' + idShop, 'DELETE', null).then (res =>{
            dispatch (actSaveResultFromDeletingEvent (res))
        })
    }
}