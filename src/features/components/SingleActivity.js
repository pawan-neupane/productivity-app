
import { Heading, HStack, Box, Stack, Checkbox } from '@chakra-ui/react'

import { CgGym } from 'react-icons/cg'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addHabbit } from '../habit/habitSlice'

function SingleActivity(props){
    console.log("check checkedddd",props.checked,"on",props.name,props.selected?.toLocaleDateString())

    const data = useSelector(state => state.habit.data)
    const dispatch = useDispatch()

    const [checkToggle ,setCheckToggle] = useState(props.checked)


    console.log("check checkToggle",checkToggle,"on",props.name,props.selected?.toLocaleDateString())



    const handleChangeOLD = (e) => {
        setCheckToggle((!checkToggle))
        if (checkToggle == true) {
            const newData = { ...data }
            if(props.selected?.toLocaleDateString()){
                newData[props.name] = [...newData[props.name], props.selected?.toLocaleDateString()]
                dispatch(addHabbit(newData))
            }

        }
        else {
            const newData = { ...data }
            const arrayForSort = [...newData[props.name]]

            const index = arrayForSort.indexOf(props.selected?.toLocaleDateString());
                if (index > -1) { 
                    console.log("index foundddddddd",index)// only splice array when item is found
                arrayForSort.splice(index, 1); // 2nd parameter means remove one item only
                }

            newData[props.name] = arrayForSort
            dispatch(addHabbit(newData))


        }
        

    }

    const handleChange = (e) => {

        setCheckToggle((!checkToggle))
        if(!(data[props.name].includes(props.selected?.toLocaleDateString()))){
            const newData = { ...data }
            newData[props.name] = [...newData[props.name], props.selected?.toLocaleDateString()]
            dispatch(addHabbit(newData))
        }

        else{
            const newData = { ...data }
            const arrayForSort = [...newData[props.name]]

            const index = arrayForSort.indexOf(props.selected?.toLocaleDateString());
                if (index > -1) { 
                    console.log("index foundddddddd",index)// only splice array when item is found
                arrayForSort.splice(index, 1); // 2nd parameter means remove one item only
                }

            newData[props.name] = arrayForSort
            dispatch(addHabbit(newData))

        }
    }


    return(
        <Box border='1px' borderRadius='10px' background='#292c3f' w="100%" h="40px" borderColor="white">
        <HStack marginTop='10px'>
            {props.logo}
            <Heading size='xs' textTransform='uppercase'>
            {props.name}
            </Heading>
           
            <Stack spacing={5} direction='row' position='absolute' left='250px'>
                    <Checkbox colorScheme='green' isChecked={props.checked} onChange={handleChange}>
                        Done
                    </Checkbox>

            </Stack>
            
        </HStack>
    </Box>
    )
}

export default SingleActivity