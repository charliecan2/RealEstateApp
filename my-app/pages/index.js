import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import styles from '../styles/Home.module.css';

const Banner = ({purpose}) => {
  return(
    <Flex wrap="wrap" justify="center" align="center" m="10">
      {purpose}
    </Flex>
  )
}

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Banner purpose={"For Sale"} />
      <Banner purpose={"For Rent"} />
    </div>
  )
}
