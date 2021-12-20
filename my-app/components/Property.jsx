import Link from 'next/link';
import Image from 'next/image';

import { Flex, Box, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';

import millify from 'millify';

import defaultImage from '../assets/images/house.jpeg';

export default function Property({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID} }){
    return(
      <Link href={`/property/${externalID}`} passHref>
        <Flex flexWrap="wrap" w="420px" p="5" pt="0" justify="flex-start" cursor="pointer">
          <Box>
              <Image src={coverPhoto ? coverPhoto.url : defaultImage} alt="house" width={400} height={260}/>
          </Box>
          <Box w="full">
            <Flex paddingTop="2" alignItems="center" justify="space-between">
                <Flex alignItems="center">
                    <Box paddingRight="3" color="green.400">
                        {isVerified && <GoVerified />}
                    </Box>
                    <Text fontWeight="bold" fontSize="large">AED {millify(price)}{rentFrequency && `${rentFrequency}`}</Text>
                </Flex>
            </Flex>
          </Box>
        </Flex>
      </Link>
    )
}
