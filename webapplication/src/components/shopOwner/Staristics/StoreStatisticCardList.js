import React, { Component,Fragment} from 'react';
import StatisticsCard from './StatisticsCard'
export default class General extends Component {
    constructor (props)
    {
        super (props)
    }

    render() {
        var CardItems = [
            {Color: '#CDDC39', Title:'Number of Shop', Content: 'No Data', Icon:''},
            {Color: '#4CAF50', Title:'Number of Shop Progressing', Content: 'No Data', Icon:''},
            {Color: '#F44336', Title:'Number of Shop Locked', Content: 'No Data', Icon:''},
        ]
        if (this.props.dataShops)
        {
            var {numberOfStore, numberOfProgressingStore, numberOfClosedStore , storeDetailsManagementViewModel}  =this.props.dataShops.data
                CardItems= [
                    {Color: '#CDDC39', Title:'Number of Shop', Content: numberOfStore + ' Shops', Icon:''},
                    {Color: '#4CAF50', Title:'Number of Shop Progressing', Content: numberOfProgressingStore +' Shops', Icon:''},
                    {Color: '#F44336', Title:'Number of Shop Locked', Content: numberOfClosedStore + ' Shops', Icon:''},
                ]

        }
        return (
            <Fragment>
                {CardItems.map ((item,index)=>{
                    return <StatisticsCard item= {item} key= {index}/>
                })}
            </Fragment>
        )
    }
};
