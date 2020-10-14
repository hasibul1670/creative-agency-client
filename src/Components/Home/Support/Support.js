import React from 'react';

import slack from "../../../images/logos/slack.png"
import google from "../../../images/logos/google.png"
import uber from "../../../images/logos/uber.png"
import netflix from "../../../images/logos/netflix.png"
import airbnb from "../../../images/logos/airbnb.png"

function Support() {
    return (
        <div className="mt-5 d-flex justify-content-center">
 <img className="support mr-5" src={slack} alt="" srcset=""/>
            <img className="support mr-5"  src={google} alt="" srcset=""/>
            <img className="support mr-5"  src={uber} alt="" srcset=""/>
            <img className="support mr-5"  src={netflix}alt="" srcset=""/>
            <img className="support mr-5" src={airbnb} alt="" srcset=""/>
        </div>
    )
}

export default Support
