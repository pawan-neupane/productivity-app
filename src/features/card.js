import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, IconButton, HStack } from '@chakra-ui/react'


import { BiRun,BiBookReader,BiMusic } from 'react-icons/bi'
import { CgGym } from 'react-icons/cg'
import {FaPeace} from 'react-icons/fa'

import {  AddIcon,  DeleteIcon, CopyIcon } from '@chakra-ui/icons'

import Cal from './Calendar'
import DateP from './DateP'


import ReactDarkDatepicker from 'react-dark-datepicker';  
import 'react-dark-datepicker/lib/main.min.css'


// import React from 'react'

//bg color "#1a1e30" '#292c3f'

export function Cardd() {
    return (
        <Card background='#191e31' color="white" w='350px'>

        

            {/* <CardHeader>
                <Heading size='md' display="flex" alignContent="center" marginLeft='35%' >
                    December
                    

                </Heading>
            </CardHeader> */}

            




            <Box border='1px' borderRadius='10px' borderColor="white">
                        <HStack marginTop='10px'>
                           
                            <Heading size='xs' textTransform='uppercase'>
                            <DateP />

                            </Heading>
                        </HStack>
                    </Box>


            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                <Box border='1px' borderRadius='10px' background='#292c3f'  w="100%" h="40px" borderColor="white">
                        <HStack marginTop='10px'>
                            <CgGym />
                            <Heading size='xs' textTransform='uppercase'>
                                Gym
                            </Heading>
                        </HStack>
                    </Box>
                    <Box border='1px' borderRadius='10px' background='#292c3f'  w="100%" h="40px" borderColor="white">
                        <HStack marginTop='10px'>
                            <BiRun />
                            <Heading size='xs' textTransform='uppercase'>
                                Run
                            </Heading>
                        </HStack>
                    </Box>
                    <Box border='1px' borderRadius='10px' background='#292c3f'  w="100%" h="40px" borderColor="white">
                        <HStack marginTop='10px'>
                            <BiBookReader />
                            <Heading size='xs' textTransform='uppercase'>
                                Read
                            </Heading>
                        </HStack>
                    </Box>
                    <Box border='1px' borderRadius='10px' background='#292c3f'  w="100%" h="40px" borderColor="white">
                        <HStack marginTop='10px'>
                            <FaPeace />
                            <Heading size='xs' textTransform='uppercase'>
                                Meditate
                            </Heading>
                        </HStack>
                    </Box>
                    <Box border='1px' borderRadius='10px' background='#292c3f'  w="100%" h="40px" borderColor="white">
                        <HStack marginTop='10px'>
                            <BiMusic />
                            <Heading size='xs' textTransform='uppercase'>
                                Music
                            </Heading>
                        </HStack>
                    </Box>
                    <Box border='1px' borderRadius='10px' background='#292c3f'  w="100%" h="40px" borderColor="white">
                        <HStack marginTop='10px'>
                            <CgGym />
                            <Heading size='xs' textTransform='uppercase'>
                                Gym
                            </Heading>
                        </HStack>
                    </Box>
                    <Box border='1px' borderRadius='10px' background='#292c3f'  w="100%" h="40px" borderColor="white">
                        <HStack marginTop='10px'>
                            <CgGym />
                            <Heading size='xs' textTransform='uppercase'>
                                Gym
                            </Heading>
                        </HStack>
                    </Box>
                   
                </Stack>



                <br />
                <Box >
                    <HStack >
                    <IconButton
                        colorScheme="red"
                        aria-label='Call Segun'
                        size='lg'
                        align='center'
                        marginLeft='20px'
                        marginRight='55px'
                        isRound='true'
                        icon={<DeleteIcon />}
                    />


                    <IconButton
                        colorScheme='blue'
                        aria-label='Call Segun'
                        size='lg'
                        align='center'
            
                        marginLeft='50px'
                        marginRight='100px'
                        isRound='true'
                        icon={<AddIcon />}
                    />
                    
                    <IconButton
                        colorScheme='green'
                        aria-label='Call Segun'
                        size='lg'
                        align='center'
                        position='absolute'
                        left='250px'
                        marginLeft='50px'
                        marginRight='20px'
                        isRound='true'
                        icon={<CopyIcon />}
                    />
                    </HStack>
                </Box>





            </CardBody>
        </Card>
    )
}

// export default Card;