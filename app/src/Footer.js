import React from "react"
import { Box, Text, Link, Flex } from "rebass"

export const Footer = ({ theme }) => {
  return (
    <Box style={{ ...theme.shadows.up, ...theme.footer }} p={3}>
      <Flex justifyContent="center">
        <Text>Made with ❤️ by Francesco Saverio Zuppichini</Text>
      </Flex>
    </Box>
  )
}
