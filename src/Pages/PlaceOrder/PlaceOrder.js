// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import useFirebase from '../../hooks/useFirebase';
// import { useForm } from "react-hook-form";

// const PlaceOrder = () => {
//     const { user } = useFirebase();
//   const [orders, setOrder] = useState([]);
//   const {id} = useParams();
//   const {register, handleSubmit, watch, formState: { errors },
//   } = useForm();
   

//  const history = useNavigate();

//  useEffect(()=>{
//     fetch(`http://localhost:5000/allServices/${id}`)
//     .then((res) => res.json())
//     .then((result) => {
//       setOrder(result[0])
//     });
//   },[id, orders])

//   const onSubmit = (data) => {
//     data.email = user?.email;
//     data.status = 'pending'
//     data.img = orders.img;
//     data.key = orders.key;
//     data.price = orders.price;

//     console.log(data)
//     fetch("/placeorderInsert", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result)
//         if(result){
//           alert('Oder Successful')
//           history.push('/services')
//         }
//       });
//   };
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default PlaceOrder;