import React from 'react'
import { useContext } from 'react'
import { Link, Route } from 'react-router-dom'
import { ordercontex } from '../../../App'
import AdminSidebar from '../AdminSidebar/AdminSidebar'
import AllList from '../AllList/AllList'


function MainPanal() {



const h1= <h1>hello</h1>



    return (
        <section>
        <div className="mt-3 container-fluid row">
            <div className="col-6 col-sm-6 col-md-3">
                <AdminSidebar></AdminSidebar>
            </div>

            <div id='ordermain' className="col-6 col-sm-6 col-md-7 d-flex justify-content-center">
   


            </div>

        </div>
    </section>
    )
}

export default MainPanal
