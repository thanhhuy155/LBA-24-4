import * as Types from '../constraints/CreateStoreCST'
import callAPI, { callAPIForFormData } from '../utils/apiCaller'
import SelectShopPostion from '../constraints/SelectShopPosition'
var initialState = null;

export const handleCreateStore = (state = initialState, action) => {
    switch (action.type) {
        case Types.HANDLE_CREATE_STORE:
            if (action.data.message.success){
                alert ('Your shop was created')
                window.location.replace("/s/StoreManagementPage");
            }
            else{
                alert (action.data.message.error)
            }
            return action.data;
        default: 
            return state;
    }
}