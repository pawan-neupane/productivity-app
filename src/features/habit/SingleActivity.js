
import { Heading, HStack, Box } from '@chakra-ui/react'

import { CgGym } from 'react-icons/cg'

function SingleActivity(props){
    // console.log(props)


    return(
        <Box border='1px' borderRadius='10px' background='#292c3f' w="100%" h="40px" borderColor="white">
        <HStack marginTop='10px'>
            {props.logo}
            <Heading size='xs' textTransform='uppercase'>
            {props.name}
            </Heading>
        </HStack>
    </Box>
    )
}

export default SingleActivity