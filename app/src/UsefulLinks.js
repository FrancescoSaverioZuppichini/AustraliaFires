import React, { Component } from "react"
import { Box, Card, Heading, Flex, Text, Link } from "rebass"

const links = [
  {
    title: "[App] FiresNearMe",
    text:
      "The app for bush fire warnings and incident information using data from participating fire agencies in Australia.",
    link:
      "https://play.google.com/store/apps/details?id=au.gov.nsw.rfs.firesnearme.national",
    image: null
  },
  {
    title: "[Guide] Survival Plan",
    text: "NSW guide to make your bushfire survival plan.",
    link: "http://www.rfs.nsw.gov.au/plan-and-prepare/bush-fire-survival-plan",
    image: null
  },
  {
    title: "[Post] Ways to Donate",
    text:
      "Reddit post showing different ways to donate, fundtraise and volunteer.",
    link:
      "https://www.reddit.com/r/australia/comments/ejqncy/ways_to_donate_fundraise_and_volunteer_this/",
    image: null
  },
  {
    title: "[Post] Ufficial Resources & Unofficial survival guide",
    text: "Curated Reddit post listing all informations about the bushfires.",
    link:
      "https://www.reddit.com/r/australia/comments/ee1xub/bushfires_official_information_resources/",
    image: null
  }
]

const UsefulLink = ({ title, text, link, image = null }) => {
  return (
    <Box px={2} py={2} width={[1, 1 / 2, 1 / 3]}>
      <Card height="100%">
        <Heading>{title}</Heading>
        <Link href={link}>Source</Link>
        <Text fontSize={3} pt={1} pb={1}>
          {text}
        </Text>
        {image === null ? "" : "wee"}
      </Card>
    </Box>
  )
}

export class UsefulLinks extends Component {
  render() {
    return (
      <Box>
        <Flex flexWrap="wrap" ml={-2}>
          {links.map((el, i) => (
            <UsefulLink key={i} {...el} />
          ))}
        </Flex>
      </Box>
    )
  }
}

export default UsefulLinks
