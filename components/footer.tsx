'use client';

import React from 'react'
import { SiNextdotjs, SiChakraui } from 'react-icons/si'
import { Text, VStack, Icon, useTheme } from '@chakra-ui/react'

export default function Footer() {
  const theme = useTheme()
  return (
    <VStack
        as="footer"
        position='fixed'
        bottom='0'
        align='center'
        justify='center'
        wrap='wrap'
        w='100%'
        p='2em'
        zIndex={1}
        opacity={0.7}
        bg={theme.__cssMap['colors.chakra-body-bg'].value}>
        <Text>Made with <Icon as={SiNextdotjs} /> and <Icon as={SiChakraui} /></Text>
    </VStack>
  )
}
