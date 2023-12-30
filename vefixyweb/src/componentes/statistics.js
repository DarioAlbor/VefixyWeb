import React from 'react';
import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaRobot } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { MdOutlineSentimentVerySatisfied } from 'react-icons/md';

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box my={'auto'} color={useColorModeValue('gray.800', 'gray.200')} alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

const BasicStatistics = () => {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
      Nos estamos expandiendo, vos también podrías estarlo.
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Aplicaciones Automatizadas'} stat={'+500'} icon={<FaRobot size={'3em'} />} />
        <StatsCard title={'Sitios Desarrollados'} stat={'+50'} icon={<TbWorldWww size={'3em'} />} />
        <StatsCard title={'Clientes Satisfechos'} stat={'+10'} icon={<MdOutlineSentimentVerySatisfied size={'3em'} />} />
      </SimpleGrid>
    </Box>
  );
};

export default BasicStatistics;
