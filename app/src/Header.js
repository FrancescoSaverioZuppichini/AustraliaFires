import React from "react"
import { Box, Text, Flex } from "rebass"

export const Header = ({ theme }) => {
  return (
    <Box style={{ ...theme.shadows.down }} p={3}  mb={4}>
      <Text fontSize={5} color={theme.colors.text}>🇦🇺 Australia bushfires </Text>
    </Box>
  )
}
