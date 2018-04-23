import * as Types from '../constraints/EventManangement'
import callAPI, { callAPIForFormData } from '../utils/apiCaller'
import SelectShopPostion from '../constraints/SelectShopPosition'
var initialStateEventStaristic = null;

export const handleGetEventStaristic = (state = initialStateEventStaristic, action) => {
    switch (action.type) {
        case Types.GET_EVENT_STARISTIC:
            return action.data;
        default: 
            return state;
    }
}

var initialStateEventsList = null;

export const handleGetEventsList = (state = initialStateEventsList, action) => {
    switch (action.type) {
        case Types.GET_EVENT_LIST:
            return action.data;
        default: 
            return state;
    }
}

var initialStateForResultOfCreatingEvent = null;

export const handleCreateEvent = (state = initialStateForResultOfCreatingEvent, action) => {
    switch (action.type) {
        case Types.CREATE_EVENT_FOR_SHOP:
            if (action.data.message.success)
            alert ('You have just created event successfully!')
            else
            {
                alert (action.data.message.error)
            }
            return action.data;
        default: 
            return state;
    }
}

//Delete Event

export const handleDeleteEvent  = (state = null, action) =>{
    switch (action.type){
        case Types.DELETE_EVENT:
        if (action.data.message.success)
            {
                alert ('You have just delete event successfully!')
            }
            else
            {
                alert (action.data.message.error)
            }
            return action.data;
        default: 
            return state;
    }
}