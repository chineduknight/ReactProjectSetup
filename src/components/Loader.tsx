import { Spinner, Center } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Center h="100vh" w="100%">
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="black" size="xl" />
    </Center>
  );
};

export default Loader;
