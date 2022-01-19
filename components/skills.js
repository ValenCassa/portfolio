import { Box, Text, SimpleGrid, Center } from '@chakra-ui/react'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { useColorModeValue } from '@chakra-ui/react'
import { SiNextdotjs, SiExpress, SiMongodb, SiGraphql, SiJest, SiCypress, SiRedux } from 'react-icons/si'


const StyledBox = ({ text, icon }) => {
    return (
        <Box boxShadow={'sm'} fontWeight={'500'} backgroundColor={'black'} w={'100px'} h={'100px'} mx={1} borderRadius={'md'} backgroundColor={useColorModeValue('rgba(174, 174, 174, 0.2)', 'rgba(0, 0, 0, 0.25)')}>
            <Box width={'60%'} m={'1.2em auto'}>
                <Box display={'flex'} justifyContent={'center'}>
                    {icon}
                </Box>
                <Text fontSize={'13px'} mt={1} textAlign={'center'}>{text}</Text>
            </Box>
        </Box>
    )
}

const SkillsSection = () => {
    return (
        <Center>
            <SimpleGrid columns={3} spacing={6}>
                <StyledBox text={'React'} icon={<FaReact size={40} />}  />
                <StyledBox text={'Redux'} icon={<SiRedux size={40}/>} />
                <StyledBox text={'Next'} icon={<SiNextdotjs size={40}/>} />
                <StyledBox text={'Express'} icon={<SiExpress size={40}/>} /> 
                <StyledBox text={'NodeJs'} icon={<FaNodeJs size={40}/>} />
                <StyledBox text={'Mongo'} icon={<SiMongodb size={40}/>} />
                <StyledBox text={'GraphQl'} icon={<SiGraphql size={40}/>} />
                <StyledBox text={'Jest'} icon={<SiJest size={40}/>} />
                <StyledBox text={'Cypress'} icon={<SiCypress size={40}/>} />
            </SimpleGrid>
        </Center>
    )
}

export default SkillsSection