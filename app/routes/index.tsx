import { Box, Container, Grid, TextInput } from "@mantine/core"
import { useState } from "react"

export default function Index() {
    return (
        <Container size='xs'>
            <TextInput
            variant='filled'
  placeholder="Your name"
  label="Full name"
  radius="md"
  size="md"
  required
/>
            <TextInput
            variant='filled'
  placeholder="exampleuser"
  label="Username"
  radius="md"
  size="md"
  required
/>
        </Container>
    )
}
