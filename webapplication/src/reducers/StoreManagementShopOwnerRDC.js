import * as Types from '../constraints/StoreManagementShopOwnerCST'

// Handle Sort For
var initialStateSortShop = 1
// 1: All, 2: Locked Shops, 3: Active Shops
export const handleSortShop = (state= initialStateSortShop,action)=>{
    switch (action.type)
    {   
        case Types.HANDLE_SORT_SHOP:
            return action.typeOfSort
        default:
            return state
    }
}

//Get All Shop
var initialStateGetAllShop = null;

export const handleGetStores = (state= initialStateGetAllShop,action)=>{
    switch (action.type)
    {   
        case Types.GET_ALL_SHOP:
            return action.data
        default:
            return state
    }
}

// Get Shop Detail

var initialStateGetShopDetail = null;

export const handleGetShopDetail = (state = initialStateGetShopDetail, action) =>{
    switch (action.type) {
        case Types.GET_SHOP_DETAIL:
                return action.data
            break;
        default:
            return state
    }
}

//Search Shop
var initialStateSearchShop = ""
export const handleSearchShop = (state = initialStateSearchShop, action) =>{
    switch (action.type) {
        case Types.HANDLE_SEARCH_SHOP:
                return action.nameOfShop
        default:
            return state
    }
}

//Get View Chart of Year
var initialStateGetViewChartOfYear = null
export const handleGetViewChartOfYear = (state = initialStateGetViewChartOfYear, action) =>{
    switch (action.type) {
        case Types.GET_VIEW_FOR_YEAR_CHART:
            return action.data;
        default: return state;
            
    }
}

//Get View Chart Of Month
export const handleGetViewChartOfMonth = (state = null, action) =>{
    switch (action.type) {
        case Types.GET_VIEW_FOR_MONTH_CHART:
            return action.data;
        default: return state;
            
    }
}

//Delete Shop
export const handleDeleteShop =  (state= null,action) =>{
    switch (action.type) {
        case Types.DELETE_SHOP:
            if (action.data.message.success)
            {
                alert ('The shop is deleted')
                window.location.replace("/s/StoreManagementPage");
            }
            else {
                alert (action.data.message.error)
            }
            return action.data;
        default: return state;
    }
}