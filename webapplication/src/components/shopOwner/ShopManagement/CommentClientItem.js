import React, { Component } from 'react';

export default class CommentClientItem extends Component {
  render() {
    return (
        <div class="panel panel-default" style = {{marginBottom:10, marginTop:10, padding:10, backgroundColor:'#EEEEEE'}}>
            <div class="panel-body">
               <span> 
                   <strong>{`From: ${'Nguyen Van A'}`}</strong>
                   <p>20-Mar-2018 At 9 A.M</p>
               </span>
               <i>
                I think you should improve your shop.
               </i>
            </div>
        </div>
    )
  }
};
