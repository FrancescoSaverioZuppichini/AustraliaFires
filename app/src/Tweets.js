import React, { Component } from "react"
import PropTypes from "prop-types"
import { Box, Card, Heading, Flex, Text } from "rebass"
 
const Tweet = () => {
  return (
    <Card>
      <Heading>Tizio</Heading>
      <Text fontSize={2} fontStyle="italic">
        18.0.1.2020
      </Text>
      <Text fontSize={3} pt={1} pb={1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit
        libero justo, in accumsan ante iaculis vehicula. Nullam suscipit
        vestibulum lorem sit amet dapibus.
      </Text>
      <Text fontSize={2} fontWeight="bold">
        #fire
      </Text>
    </Card>
  )
}

export default class Tweets extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Flex>
        <Tweet />
      </Flex>
    )
  }
}
