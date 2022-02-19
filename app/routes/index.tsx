import { Box, Container, Grid, TextInput, Text, Input, Button, Paper, Card } from "@mantine/core"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Index() {

    const variants = {
        on: { y: '0rem', },
        off: { y: '2.5rem', },
    }
    const [isOn, setIsOn] = useState<boolean>(false)
    const [a, setA] = useState<string>('')
    const [list, setList] = useState<string[]>([])

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


            {/* <Text className='z-10 mb-10' onClick={ () => setIsOn(isOn=>!isOn)} animate={isOn ? 'on' : 'off'} variants={ variants } component={ motion.p }>text here</Text> */}
            {/* <TextInput variant='filled' /> */}
            <div className='flex flex-col'>
                <motion.label onClick={() => setIsOn(isOn => !isOn)} variants={variants} animate={(a) ? 'on' : 'off'} className='text-left h-8 pl-4 pointer-events-none text-gray-500'>hello</motion.label>
                <motion.input className='bg-gray-100 rounded-md py-2 px-4' value={a} onChange={event => setA(event.target.value)} />
            </div>
            <div className='flex flex-col'>
                <motion.label onClick={() => setIsOn(isOn => !isOn)} variants={variants} animate={(a) ? 'on' : 'off'} className='z-1 text-left h-8 pl-4 pointer-events-none text-gray-500'>hello</motion.label>
                <TextInput variant='filled' placeholder='hello' radius='md' required value={a} onChange={event => setA(event.target.value)} />
            </div>

            <motion.div>
                <Text variants={variants} animate={(a) ? 'on' : 'off'} component={motion.p}>hello</Text>
                <Input
                    variant="filled"
                    placeholder="Your email"
                    radius="md"
                    size="md"
                /></motion.div>

            <Card className='bg-red-500' padding="md" shadow="lg" radius="md" withBorder layout component={motion.div}>
                <div className=''>
                    {list.map((item, index) => (
                        <motion.div layout key={index}>
                            <Text>{item}</Text>
                        </motion.div>
                    ))}
                </div>
            </Card>

            <Button onClick={() => setList([...list, 'a'])} radius="md" size="md" compact uppercase>
                Add
            </Button>

        </Container>
    )
}
