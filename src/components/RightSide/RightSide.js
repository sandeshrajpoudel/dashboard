import React from 'react';
import Review from '../Review/Review';
import Updates from '../Updates/Updates';
import './rightside.css';

const RightSide = () => {
  return (
<div className="RightContainer">
    <div style={{width: '100%'}}>
        <h3>Updates</h3>
        <Updates/>
    </div>
    <div>
        <h3>Review</h3>
        <Review/>

    </div>

</div>  )
}

export default RightSide;