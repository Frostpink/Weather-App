/** @format */

import { Container, Center, TextInput, Grid, Group, Text, Card, Title } from '@mantine/core'
import { useState } from 'react'

// function CenterComponent2() {
//     return (
//         <>
//             <Grid align='center'>
//                 <Grid.Col span={4}>icon</Grid.Col>
//                 <Grid.Col span={8}>
//                     <Group direction='column' position='center'>
//                         <Title align='center'>Today</Title>
//                         <Text align='center'>Wed, 23 Feb</Text>
//                     </Group>
//                 </Grid.Col>

//                 <Grid.Col span={12}>
//                     <Title align='center'>-32°C</Title>
//                 </Grid.Col>

//                 <Grid.Col span={12}>
//                     <Text align='center'>Toronto, Ontario</Text>
//                 </Grid.Col>
//             </Grid>
//         </>
//     )
// }
// FIXME: Line 44 fontSize not working
function CenterComponent() {
    return (
        <>
            <Group direction='column' align='center' spacing={0}>
                <Group align='center' spacing={0}>
                    <Text>icon</Text>
                    <Group direction='column' align='center' spacing={0}>
                        <Title style={{}} align='center'>
                            Today
                        </Title>
                        <Text align='center'>Wed, 23 Feb</Text>
                    </Group>
                </Group>

                <Text style={{ fontSize: '16' }} weight={700} align='center'>
                    -32°C
                </Text>

                <Text align='center'>Toronto, Ontario</Text>
            </Group>
        </>
    )
}

function WeatherCard({ text, temperature }: { text: string; temperature: string }) {
    return (
        <Card shadow='sm' withBorder radius='md'>
            <Card.Section>
                <Text align='center' size='sm' variant='text' weight={600}>
                    {text}
                </Text>
                <Title align='center'>Icon</Title>
                <Text align='center' size='sm' variant='text' weight={500}>
                    {temperature}°C
                </Text>
            </Card.Section>
        </Card>
    )
}

export default function Index() {
    const [days, _] = useState<{ hour: string; temperature: string }[]>([
        { hour: '12am', temperature: '26' },
        { hour: '2am', temperature: '26' },
        { hour: '4am', temperature: '26' },
        { hour: '6am', temperature: '26' },
        { hour: '8am', temperature: '26' },
        { hour: '10am', temperature: '26' },
        { hour: '12pm', temperature: '26' },
        { hour: '2pm', temperature: '26' },
        { hour: '4pm', temperature: '26' },
        { hour: '6pm', temperature: '26' },
        { hour: '8pm', temperature: '26' },
        { hour: '10pm', temperature: '26' },
    ])

    return (
        <Container size='xs' padding='xs'>
            <TextInput placeholder='Search' variant='filled' radius='md' size='md' />
            <Center>
                <CenterComponent />
            </Center>
            <Grid columns={6}>
                {days.map(({ hour, temperature }, index) => (
                    <Grid.Col span={1}>
                        <WeatherCard key={index} temperature={temperature} text={hour} />
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    )
}
