import React from 'react'
import { Flex ,Heading,Card,Image} from 'rebass'
import styled, {css} from 'styled-components'
import CardFooter from './CardFooter'

const Explore = ()=>{
    return(
    <div>
      <Heading fontFamily='Exo 2' fontStyle='normal' fontWeight={900} fontSize='52px' paddingLeft={'70px'} paddingTop={'70px'}>
          Explore
    </Heading>
    <Heading fontFamily='Ubuntu' fontStyle='normal' fontWeight='400' fontSize='18px' mt='21px' maxWidth='265px' paddingLeft={'70px'}>
        From one-guest rooms to penthouses with pools and gardens
    </Heading>
    <Flex>
      <Card padding={"60px"}>
          <Image src="https://www.figma.com/file/oKN9NbDMHh99WaQXyvAPN9/image/c9dd2c03187b3cb8d67c7ab14d49e40b60b0d977?fuid=1099277452133787318" className='card'/>
           <CardFooter price="25$" size="28m" Text="Room with one king size bed"/>
      </Card>
      <Card padding={"60px"}>
      <Image src="https://www.figma.com/file/oKN9NbDMHh99WaQXyvAPN9/image/bd65f12f50fd2b7b8a591c1feb49bb35820ca7b6?fuid=1099277452133787318" className='card'/>
      <CardFooter price="2039$" size="438m" Text="Penthouse for eight persons"/>
      </Card>
    </Flex>
    </div>
    
    )
    const CardBody = styled(Flex)`
  position: absolute;
  bottom: -50px;
  align-items: center;
`
}
export default Explore;