import { Button, Card, CardBody, Heading, Stack, StackDivider, Box, HStack } from '@chakra-ui/react'


import { BiRun, BiBookReader, BiMusic } from 'react-icons/bi'
import { CgGym } from 'react-icons/cg'
import { FaPeace } from 'react-icons/fa'
import { useState } from 'react'

import SingleActivity from './SingleActivity'
import DateP from './DateP'
import NewModal from './newmodal'

import { Scrollbars } from 'react-custom-scrollbars-2';

import { useSelector } from 'react-redux'



export function Habit() {

    const [toggle, setToggle] = useState(true)

    const nameToLogoMatch = {
        "Gym": <CgGym />,
        "Run": <BiRun />,
        "Read": <BiBookReader />,
        "Meditate": <FaPeace />,
        "Music": <BiMusic />
    }

    const data = useSelector(state => state.habit.data)

    const datamapped = data.map(value => <SingleActivity key={value} logo={nameToLogoMatch[value]} name={value} />)

    return (
        <Card background='#191e31' color="white" w='350px' h='750px'>

            <Button colorScheme='blue' onClick={() => setToggle(!toggle)} height="40px">
                {toggle ? "Hide Calendar" : "Show Calendar"}
            </Button>

            {toggle &&
                <Box border='1px' borderRadius='10px' borderColor="white" marginLeft="20px" marginRight="20px" marginTop="10px" top='30px'>
                    <HStack marginTop='0px' marginRight='50px'>
                        <DateP />
                    </HStack>
                </Box>}

            <Scrollbars style={toggle ? { width: 350, height: 300 } : { width: 350, height: 800 }} >
                <CardBody >
                    <Stack divider={<StackDivider />} spacing='4'>
                        {datamapped}
                    </Stack>
                </CardBody>
            </Scrollbars>

            <Box marginTop='5px' top='690px' position='absolute' >
                <HStack >
                    <NewModal />
                </HStack>
            </Box>

            <br />

        </Card>
    )
}

export default Habit;