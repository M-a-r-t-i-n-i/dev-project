import React from "react";
import { Link } from "react-router-dom";

function OrderOnline() {
  return (
    <>
      <div className="centered-container">
        <p className="under-construction">
          This section is under construction, please visit us in our restaurant
          instead.
        </p>
        <Link to="/reservations">
          <button>Book a table</button>
        </Link>
      </div>
    </>
  );
}

export default OrderOnline;

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Select,
//   Stack,
//   Text,
// } from "@chakra-ui/react";
// // import { menu } from "./Menu";

// const OrderOnline = ({ dishes }) => {
//   const [orderData, setOrderData] = useState({
//     dish: "",
//     quantity: 1,
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setOrderData({ ...orderData, [name]: value });
//   };

//   const handleAddToCart = () => {
//     // add selected dish to cart
//   };

//   const handleRemoveFromCart = () => {
//     // remove selected dish from cart
//   };

//   const handleCheckout = () => {
//     // handle checkout
//   };

//   const getTotalPrice = () => {
//     // calculate total price of the order
//   };

//   const OrderOnline = () => {
//     return (
//       <Box p={10}>
//         <Text fontSize="3xl" fontWeight="bold" mb={5}>
//           Order Online
//         </Text>
//         <Grid templateColumns="repeat(3, 1fr)" gap={6}>
//           {menu.map((dish) => (
//             <GridItem key={dish.name}>
//               <Box boxShadow="lg" borderRadius="lg" overflow="hidden">
//                 <Image src={dish.picture} alt={dish.name} />
//                 <VStack p={4} align="start" spacing={2}>
//                   <Text fontSize="2xl">{dish.name}</Text>
//                   <Text fontSize="md">{dish.description}</Text>
//                   <Text fontSize="md" fontWeight="bold">
//                     {dish.price}
//                   </Text>
//                 </VStack>
//               </Box>
//             </GridItem>
//           ))}
//         </Grid>
//       </Box>
//     );
//   };
// };

// export default OrderOnline;
