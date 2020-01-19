import React from "react"
import { Box, Text, Flex } from "rebass"

export const Header = ({ theme }) => {
  return (
    <Box style={{ ...theme.shadows.down, ...theme.header }} p={3}>
      <Text fontSize={4}>🇦🇺 Australia bushfires </Text>
    </Box>
  )
}
