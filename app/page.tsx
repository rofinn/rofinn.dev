import Image from "next/image";
import { Heading, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  const profileStyle = {
    borderRadius: "50%",
    filter: "grayscale(100%)",
  };
  return (
    <main>
      <VStack minHeight="100vh" align="center" justify="center" spacing={8}>
        {/* TODO convert the Vstack components below into a Section component */}
        <VStack w={[300, 600, 800]} spacing={4}>
          <Heading as="h1">Hello, I'm Rory!</Heading>
          <Image
            src="/headshot.jpg"
            height="200"
            width="200"
            alt="profile"
            style={profileStyle}
            priority={true}
          />
          <Text fontSize={["sm", "md", "lg"]}>
            I'm a{" "}
            <b>
              <i>Research Software Developer</i>
            </b>{" "}
            who thrives on small interdisciplinary teams. While I'm often
            considered a generalist, I have the most experience building
            distributed data pipelines and machine learning platforms for
            forecasting and classification tasks.
          </Text>
        </VStack>
        <VStack w={[300, 400, 500]} spacing={4}>
          {/* TODO: Create a tech stack icon cloud */}
        </VStack>
        <VStack w={[300, 400, 500]} spacing={4}>
          {/* TODO: Create a tech stack icon cloud */}
        </VStack>
      </VStack>
    </main>
  );
}
