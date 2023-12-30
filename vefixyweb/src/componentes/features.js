// Importa los módulos necesarios de Chakra UI y React
import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { IoAnalyticsSharp, IoCodeSlash, IoSearchSharp } from 'react-icons/io5';
  import { ReactElement } from 'react';
  
  // Define la interfaz para las propiedades de cada característica
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  // Define el componente Feature
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  // Define el componente SplitWithImage
  const SplitWithImage = () => {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              ¡Conocenos más!
            </Text>
            <Heading>Somos tu agencia de estrategia y productos digitales.</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Nos afianzamos en el mercado ofreciendo soluciones tecnologicas a cualquier tipo de problema
              Somos expertos en desarrollos de marca y aplicaciones. Con un historial que nos avala.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
              }>
              <Feature
                icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />}
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Marketing digital'}
              />
              <Feature
                icon={<Icon as={IoCodeSlash} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Desarrollo de aplicaciones'}
              />
              <Feature
                icon={<Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />}
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Analisis de datos'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  };
  
  // Exporta el componente SplitWithImage
  export default SplitWithImage;
  