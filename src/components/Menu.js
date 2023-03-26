import React from "react";
import { Grid, GridItem, Box, Image, Text, VStack } from "@chakra-ui/react";

export const menu = [
  // PIZZAs
  {
    name: "Margherita Pizza",
    description: "Tomato sauce, mozzarella, and basil",
    price: "$10",
    picture:
      "https://images.unsplash.com/photo-1564936281291-294551497d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1352&q=80",
  },
  {
    name: "Pepperoni Pizza",
    description: "Tomato sauce, mozzarella, and pepperoni",
    price: "$12",
    picture:
      "https://images.unsplash.com/photo-1602658014714-26b99d5a45cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Hawaiian Pizza",
    description: "Tomato sauce, mozzarella, ham, and pineapple",
    price: "$14",
    picture:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80",
  },
  {
    name: "Meat Lover's Pizza",
    description: "Tomato sauce, mozzarella, pepperoni, ham, sausage, and bacon",
    price: "$16",
    picture:
      "https://images.unsplash.com/photo-1677027472626-c7c40c74ac6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Caprese Pizza",
    description: "Tomato sauce, mozzarella, cherry tomatoes, and basil",
    price: "$12",
    picture:
      "https://images.unsplash.com/photo-1587085416963-22efba033dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    name: "Mushroom Pizza",
    description:
      "Tomato sauce, mozzarella, sautéed mushrooms, garlic, and herbs",
    price: "$13",
    picture:
      "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },

  // PASTAs
  {
    name: "Spaghetti Carbonara",
    description:
      "Spaghetti in a creamy sauce with pancetta, black pepper, and Parmesan cheese",
    price: "$14",
    picture:
      "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  },
  {
    name: "Penne Arrabiata",
    description:
      "Penne pasta in a spicy tomato sauce with garlic and chili flakes",
    price: "$12",
    picture:
      "https://images.unsplash.com/photo-1673081849734-98f0969d436b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
  },
  {
    name: "Linguine alla Vongole",
    description: "Linguine pasta with clams, garlic, white wine, and parsley",
    price: "$16",
    picture:
      "https://www.the-pasta-project.com/wp-content/uploads/linguine-pasta-alle-vongole-linguine-with-clams-15-640x433.jpg",
  },
  {
    name: "Fettuccine Alfredo",
    description:
      "Fettuccine pasta in a creamy sauce with Parmesan cheese and black pepper",
    price: "$13",
    picture:
      "https://sundaysuppermovement.com/wp-content/uploads/2019/02/fettuccine-alfredo-7.jpg",
  },
  {
    name: "Lasagna Bolognese",
    description:
      "Lasagna pasta layered with Bolognese sauce, mozzarella, and Parmesan cheese",
    price: "$15",
    picture:
      "https://images.unsplash.com/photo-1560035285-64808ba47bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Linguine with Clams",
    description:
      "Linguine pasta in a white wine and garlic sauce with fresh clams",
    price: "$18",
    picture:
      "https://i0.wp.com/www.onceuponachef.com/images/2019/03/linguine-with-clams.jpg?resize=1200%2C1056&ssl=1",
  },
  //   {
  //     name: "Spicy Rigatoni",
  //     description:
  //       "Rigatoni pasta in a spicy tomato sauce with Italian sausage and Parmesan cheese",
  //     price: "$14",
  //     picture:
  //       "https://images.unsplash.com/photo-1586953242009-a1014641ad3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpY3klMjByaWdhdG9uaSUyMGFycmF5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  //   },
  //   {
  //     name: "Pappardelle Bolognese",
  //     description:
  //       "Pappardelle pasta in a classic meat ragu sauce with Parmesan cheese",
  //     price: "$16",
  //     picture:
  //       "https://images.unsplash.com/photo-1558452904-44d37b4f41ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBhcHBhcmRlbGxlJTIwYm9sb2duZXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  //   },
];

function Menu() {
  return (
    <Box p="10">
      <p className="font-size"> A pizza a day keeps the hunger pangs at bay</p>
      {/* <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {menu.map((item, index) => (
          <GridItem key={index} colSpan={1}>
            <VStack>
              <Image className="pic" src={item.picture} alt={item.name} />
              <Text fontWeight="bold">{item.name}</Text>
              <Text>{item.description}</Text>
              <Text fontWeight="bold">{item.price}</Text>
            </VStack>
          </GridItem>
        ))}
      </Grid> */}
      <Grid
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap={6}
        className="menu-container"
      >
        {menu.map((item, index) => (
          <GridItem key={index} className="menu-item">
            <Box width="100%" height="200px">
              <Image src={item.picture} alt={item.name} objectFit="cover" />
            </Box>
            <VStack spacing={2} mt={4}>
              <Text fontSize="lg" fontWeight="bold">
                {item.name}
              </Text>
              <Text>{item.description}</Text>
              <Text fontSize="lg" fontWeight="bold">
                {item.price}
              </Text>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default Menu;
