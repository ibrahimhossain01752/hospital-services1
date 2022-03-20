import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allServices')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
       
        <div  className="container text-center">
        <h2 className="mt-5 text-color-danger">Special Feature</h2>
        <div className="row">
            {services.map((p, index)=>(
                <div className="col-lg-4 col-md-6 col-sm-12 card-group container">
                    <div className="service text-center shadow review">
                        <img className="image1 img-fluid w-50 user  " src={p?.img} alt=""/>
                        <div className="card-body">
                        <h5>{p?.title}</h5>
                        <p className="p-2 text-center">{p?.visit}</p>
                        
                        {/* <Link to="/customer">
                        <button onClick={() => addOrder(index)} className="btn">ADD TO CART</button>
                        </Link> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default Services;