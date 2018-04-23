import React, { Component } from 'react'
import * as Types from '../constraints/StoreManagementShopOwnerCST'
import callAPI from '../utils/apiCaller'

// Sort for Shop
export const actHandleSortShop = (typeOfSort) =>{
    return {
        type : Types.HANDLE_SORT_SHOP,
        typeOfSort
    }
}

//SearchShop
export const actSearchShop = (nameOfShop) =>{
    return {
        type : Types.HANDLE_SEARCH_SHOP,
        nameOfShop
    }
}
// Get all shops
const actSaveResultStoreOwnerManage = ( data ) => {
    return {
        type: Types.GET_ALL_SHOP,
        data
    }
}

export const actHandleGetShopManagement = () => {
    return (dispatch) => {
        return callAPI('WA_StoreOwnerManagement', 'GET', null).then(res => {
             dispatch(actSaveResultStoreOwnerManage(res));
        })
    }
}

// Get Shop Detail

const actSaveResultGetShopDetail = (data) =>{
    return {
        type: Types.GET_SHOP_DETAIL,
        data
    }
}

export const actHandleGetShopDetail = (id) =>{
    return (dispatch) => {
        return callAPI ('WA_Store_Details/'+id, 'GET', null).then (res => {
            dispatch (actSaveResultGetShopDetail(res))
        }) 
    }
}

// Get View Chart of Year
const actSaveResultGetViewChartOfYear = (data) =>{
    return {
        type : Types.GET_VIEW_FOR_YEAR_CHART,
        data
    }
}

export const actHandleGetViewChartOfYear = (idShop, year) =>{
    return (dispatch) =>{
        return callAPI ('WA_ViewChartOfYear', 'POST', {
            Store_ID : idShop,
	        Year : year,
        }).then (res =>{
            dispatch (actSaveResultGetViewChartOfYear (res))
        })
    }
}

//Get View Chart Of Month
const actSaveResultGetViewChartOfMonth = (data) =>{
    return {
        type : Types.GET_VIEW_FOR_MONTH_CHART,
        data
    }
}

export const actHandleGetViewChartOfMonth = (idShop, year, month) =>{
    return (dispatch) =>{
        return callAPI ('WA_ViewChartOfMonth', 'POST', {
            Store_ID : idShop,
	        Year : year,
	        Month: month
        }).then (res =>{
            dispatch (actSaveResultGetViewChartOfMonth (res))
        })
    }
}

// Delete Shop

//Get View Chart Of Month
const actSaveResultDeleteShop = (data) =>{
    return {
        type : Types.DELETE_SHOP,
        data
    }
}

export const actHandleDeleteShop = (idShop) =>{
    return (dispatch) =>{
        return callAPI ('Store_Details/' + idShop, 'DELETE', null).then (res =>{
            dispatch (actSaveResultDeleteShop (res))
        })
    }
}
