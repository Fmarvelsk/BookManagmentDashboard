import React from 'react';
import { Row, Col } from 'react-bootstrap'
import StatsCard from './StatsCard'
import { managerData, StatsNumber } from '../Data'
import DashNav from './DashNav'
import Booking from './Booking';

const MainContent = () => {
    return(
        <div className="main">
            <div className="link-info wr">
            <h2 className="db">Dashboard</h2>
            <button className="customize">Customize Blocks</button>
            </div>
            <p className="msg">Welcome Back!</p>
            
            <header className="quick">Quick stats</header>
<Row>
            { StatsNumber.map( (data, i) =>
            <Col xl={3} sm={6} key={i}>
                <StatsCard data={data}/> 
                </Col>   
            )}
            </Row>
                <DashNav/>

                <Row className="mt-7">
                    { managerData.map( (data, i) => 
                    <Col sm={6} lg={4} key={i}>
                    <Booking bookInfo={data}/>          
                    </Col> 
                    )}
                          </Row>
              
        </div>
    )

}

export default MainContent
