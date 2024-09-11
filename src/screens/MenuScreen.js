import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Box, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import MenuSection from "../components/MenuScetion";

const MenuScreen = () => {
  const wraps = [
    {
      name: "Deccan Plateau Chicken Wrap",
      description:
        "Southern spiced fried chicken bites, lettuce, tomato, onions & salt & chili potato bites.",
      price: "$8.99",
    },
    {
      name: "Tandoori Chicken Tikka Wrap",
      description:
        "Clay oven roasted chicken, spiced beans rice, sauteed peppers, onions, cilantro, cheese, sour cream & salsa.",
      price: "$8.99",
    },
    {
      name: "Butter Chicken Wrap Panini",
      description: "Butter chicken & saffron rice wrap & raita.",
      price: "$8.99",
    },
    {
      name: "Paneer Tikka Wrap",
      description:
        "Nawabs paneer tikka, vegetable slaw, monterey jack cheese, lettuce, tex-mex potato bites, mint dressing.",
      price: "$8.99",
    },
  ];

  const appetizers = [
    {
      name: "Golconda Chicken Sliders (2 Pieces)",
      description:
        "Deep-fried chicken 65, tomato, onion, lettuce. Creamy tomato mayo.",
      price: "$8.99",
    },
    {
      name: "Golconda Veggie Sliders (2 Pieces)",
      description:
        "Palatina potato and vegetable patty, tomato, onion, lettuce. Creamy tomato mayo.",
      price: "$8.99",
    },
    {
      name: "Dallas Chicken 65",
      description:
        "Boneless chicken breast, spiced with curry leaves, mint chutney, and tossed salad.",
      price: "$9.99",
    },
    {
      name: "Telangana Tomato Fava Bean Butter Dip",
      description: "Served with fried pita bread chips.",
      price: "$6.99",
    },
    {
      name: "Crispy Onion Pakoda",
      description:
        "Sliced onions coated in a flavorful chickpea batter, fried to perfection.",
      price: "$6.99",
    },
    {
      name: "Samosa (3 pcs)",
      description:
        "Golden, flaky pastry pockets filled with spiced potatoes, peas, and aromatic herbs. Served with Mint chutney.",
      price: "$6.99",
    },
  ];

  const biryanis = [
    {
      name: "Chicken Dum Biryani",
      description:
        "Chicken biryanis is aromatic with succulent chicken or goat meat in layers of fluffy rice, fragrant spices and fried onions. Served with raita, boiled egg & saalan.",
      price: "$12.99",
    },
    {
      name: "Chicken 65 Biryani",
      description: "Marinated deep deep-fried chicken 65.",
      price: "$12.99",
    },
    {
      name: "Goat Dum Biryani",
      description:
        "Goat biryanis is aromatic with succulent goat meat in layers of fluffy rice, fragrant spices and fried onions. Served with raita, boiled egg & saalan.",
      price: "$14.99",
    },
    {
      name: "Vijayawada Boneless Chicken Biryani",
      description: "Vijayawada spiced boneless chicken biryani.",
      price: "$12.99",
    },
    {
      name: "Schezwan Vegetable Fried Rice",
      description:
        "Aromatic spices, crisp vegetables, and a mouthwatering Schezwan sauce, all expertly tossed with fragrant rice.",
      price: "$10.99",
    },
    {
      name: "Schezwan Chicken Fried Rice",
      description:
        "Tender chicken pieces stir-fried to perfection with egg, aromatic spices, crisp vegetables, and a mouthwatering Schezwan sauce.",
      price: "$11.99",
    },
    {
      name: "Vegetable Dum Biryani",
      description:
        "Vegetable Dum Biryani is a fragrant and flavorful rice dish with a rich blend of aromatic spices, tender vegetables, and long-grain basmati rice.",
      price: "$12.99",
    },
  ];

  const bowls = [
    {
      name: "Butter Chicken Bowl",
      description: "Boneless creamy butter chicken, saffron rice",
      price: "$10.99",
    },
    {
      name: "Chettinad Mutton Bowl",
      description: "Nilgiris goat korma, saffron rice",
      price: "$12.99",
    },
    {
      name: "Bangalore Chicken Korigassi Bowl",
      description: "Chicken Korigassi, steam rice",
      price: "$10.99",
    },
    {
      name: "Vegetarian Bowl",
      description: "Paneer butter masala and saffron rice",
      price: "$10.99",
    },
    {
      name: "Guntur Chicken Curry & Karampudi Bowl",
      description: "Guntur chicken curry, steam rice",
      price: "$10.99",
    },
    {
      name: "Fried Chicken 65 Burger",
      description:
        "Breaded fried chicken breast 65, sriracha mayo, Swiss cheese, tomato, onion, lettuce & fries.",
      price: "$10.99",
    },
  ];

  const salads = [
    {
      name: "Chicken 65 Salad",
      description:
        "Marinated deep-fried chicken 65, served on a bed of iceberg lettuce, carrots, peppers, onions, beets, fried tortilla chips & cilantro honey emulsion.",
      price: "$8.99",
    },
    {
      name: "Charminar Tandoori Kabab Poke",
      description:
        "Tandoori roasted chicken, tomato, green onions, cucumber, avocado, spiced edamame beans, tandoori mayo, bed of cold quinoa pilaf.",
      price: "$10.99",
    },
    {
      name: "Mediterranean Salad",
      description:
        "Mixed greens, cherry tomatoes, cucumber, Kalamata olives, feta cheese, red onion, and lemon vinaigrette.",
      price: "$9.99",
    },
    {
      name: "Greek Salad",
      description:
        "Romaine lettuce, cucumber, Kalamata olives, feta cheese, red onion, and Greek dressing.",
      price: "$8.99",
    },
    {
      name: "Caprese Salad",
      description:
        "Fresh mozzarella, tomatoes, fresh basil, balsamic glaze, and olive oil.",
      price: "$10.99",
    },
    {
      name: "Caesar Salad",
      description:
        "Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
      price: "$8.99",
    },
  ];

  const beverages = [
    { name: "Coke", description: "", price: "$1.95" },
    { name: "Diet Coke", description: "", price: "$1.95" },
    { name: "Pepsi", description: "", price: "$1.95" },
    { name: "Sprite", description: "", price: "$1.95" },
    { name: "Bottled Water", description: "", price: "$1.95" },
    { name: "Thumbs Up", description: "", price: "$2.95" },
    { name: "Limca", description: "", price: "$2.95" },
    { name: "Badam Milk", description: "", price: "$3.45" },
  ];

  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const fadeInStyle = {
    opacity: fade ? 1 : 0,
    transition: "opacity 1s ease-in",
  };

  return (
    <Box
      bg={"black"}
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      style={fadeInStyle}
    >
      <Header />
      <Box mt={3} flex="1">
        <Box
          mx={{ base: "0px", md: "0px", lg: "0px", xl: "290px" }}
          bg={"white"}
          pt={8}
        >
          <Text
            ml={4}
            mb={8}
            fontSize={{ base: "1.5rem", md: "2.3rem" }}
            fontWeight={"bold"}
            fontFamily={"revert-layer"}
          >
            DAILY MENU
          </Text>
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            gap={"65px"}
          >
            <Box display={"flex"} flexDir={"column"} gap={9} flex={1}>
              <MenuSection
                title="Appetizers"
                description="Mouthwatering bites of flavor and texture, designed to tease your palate and kickstart your culinary adventure."
                items={appetizers}
                marginLeft={4}
                marginRight={4}
              />

              <MenuSection
                title="Classic Biryanis and Rice Specials"
                description="A delectable assortment of aromatic rice dishes, richly spiced and infused with a fusion of flavors."
                items={biryanis}
                marginLeft={4}
                marginRight={4}
              />

              <MenuSection
                title="Wraps"
                description="A delicious embrace of fresh ingredients and vibrant flavors, neatly rolled into a convenient package."
                items={wraps}
                marginLeft={4}
                marginRight={4}
              />
            </Box>

            <Box display={"flex"} flexDir={"column"} gap={9} flex={1}>
              <MenuSection
                title="Bowls"
                description="A delightful selection of wholesome and vibrant dishes creatively layered in a bowl"
                items={bowls}
                marginLeft={4}
                marginRight={4}
              />

              <MenuSection
                title="Salads"
                description="Fresh and healthy salads made with the finest ingredients to tantalize your taste buds."
                items={salads}
                marginLeft={4}
                marginRight={4}
              />

              <MenuSection
                title="Beverages"
                description="A selection of refreshing drinks to complement your meal."
                items={beverages}
                marginLeft={4}
                marginRight={4}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default MenuScreen;
