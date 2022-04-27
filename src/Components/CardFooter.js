import React from 'react'
import { Flex ,Text,Button,Card} from 'rebass'
import styled, { css } from 'styled-components'

const CardFooter = (props)=>{
    return(
        <div style={{paddingLeft: "15px",width:"80%", paddingTop:"4px",position:"relative",left:"100px",bottom:"25px",backdropFilter:"blur(10px)",background: "linear-gradient(94.33deg, rgba(255, 255, 255, 0.6) 3.19%, rgba(255, 255, 255, 0.1) 99.26%)",borderRadius:"10px"}}>
        <Card>
        <Flex flexDirection={"column"}>
            <b><Text>{props.Text}</Text></b>
           {props.aboutus?
           <Text width={"370px"}>{props.aboutus}</Text>
           :<Flex alignContent={"center"}>
                <Button className='cardButton'>{props.price}</Button>
                <Button className='cardButton' style={{position:"relative",left:"40px"}}>{props.size}</Button>
                <div style={{position:"relative",left:"100px"}}>
                <Button className='cardButton'>Book!</Button>
                </div>
            </Flex>
          }
            </Flex>
        </Card>
        </div>
    )
}
export default CardFooter