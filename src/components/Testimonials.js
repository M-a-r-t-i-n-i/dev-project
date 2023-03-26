import { Box, Image, Text, Grid, GridItem } from "@chakra-ui/react";

const testimonials = [
  {
    name: "John Doe",
    rating: 5,
    text: "I had an amazing experience at this restaurant. The pizza and pasta were both delicious, and the owners were so kind and attentive. You can tell they take pride in the food they serve. Highly recommended!",
  },
  {
    name: "Jane Smith",
    rating: 4,
    text: "Great food and atmosphere! The pizza was one of the best I've ever had. The pasta was also delicious. The owners were friendly and welcoming. I highly recommend this place!",
  },
  {
    name: "Bob Johnson",
    rating: 4,
    text: "The pizza here is fantastic! The pasta was also very good. The owners clearly care about the quality of their food and it shows. I highly recommend giving this place a try!",
  },
  {
    name: "Sarah Lee",
    rating: 5,
    text: "I loved everything about this restaurant! The pizza was delicious and the pasta was amazing. The owners were so friendly and accommodating. This is definitely my new favorite spot!",
  },
  {
    name: "Mike Miller",
    rating: 5,
    text: "The pizza and pasta here are both top notch! The owners clearly care about their customers and go out of their way to make sure you have a great experience. Highly recommend!",
  },
  {
    name: "Emily Chen",
    rating: 4,
    text: "The pizza and pasta were both excellent. The owners were friendly and welcoming, and you could tell they take pride in their food. I would definitely recommend this place!",
  },
  {
    name: "David Kim",
    rating: 5,
    text: "The pizza and pasta here were both outstanding! The owners were very friendly and attentive, and it's clear they put a lot of love into their food. Highly recommended!",
  },
  {
    name: "Laura Davis",
    rating: 4,
    text: "The pizza and pasta were both delicious, and the owners were very kind and welcoming. The atmosphere was great too! Would definitely come back here again.",
  },
  {
    name: "Tom Brown",
    rating: 5,
    text: "The pizza and pasta were both amazing! The owners were friendly and attentive, and it's clear they take pride in their food. Highly recommend giving this place a try!",
  },
  {
    name: "Ava Wilson",
    rating: 4,
    text: "The pizza and pasta were both excellent, and the owners were very friendly and accommodating. I would definitely recommend this restaurant to anyone looking for great Italian food!",
  },
];

export default function Testimonials() {
  return (
    <Box bg="gray.50" py={10}>
      <Box maxW="7xl" mx="auto" px={8}>
        <Text fontSize="3rem" fontWeight="bold" mb={8}>
          Testimonials
        </Text>
        <Grid templateColumns="repeat(5, 1fr)" gap={8}>
          {testimonials.map((testimonial) => (
            <GridItem key={testimonial.name}>
              <Box bg="white" borderRadius="md" boxShadow="md" p={6}>
                <Image
                  src={`https://source.unsplash.com/random/100x100?sig=${Math.floor(
                    Math.random() * 1000
                  )}`}
                  alt="testimonial avatar"
                  borderRadius="full"
                  boxSize={14}
                  objectFit="cover"
                  mb={4}
                />
                <Text fontWeight="bold" mb={2}>
                  {testimonial.name}
                </Text>
                <Text mb={4}>
                  {testimonial.rating}/5 stars - "{testimonial.text}"
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
