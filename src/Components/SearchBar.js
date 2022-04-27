import React from 'react'
import { Flex ,Heading,Card,Image} from 'rebass'
import styled, {css} from 'styled-components'
import CardFooter from './CardFooter'

const SearchBar = ()=>{
    return(
    // <div className='search'>
    // <Flex padding={"60px"} width={"80%"}>
    //     <Card padding={"20px"} >item</Card>
    //     <Card padding={"20px"}>item</Card>
    //     <Card padding={"20px"}>item</Card>
    //     <Card padding={"20px"}>item</Card>
    // </Flex>
    // </div>
    <div className='container'>
    <div className='item p'>
      <div className='primary-text'>CITY</div>
      <div className='secondary-text'>Select your city</div>
    </div>
    <div className='item p'>
      <div className='primary-text'>DATES</div>
      <div className='secondary-text'>Select your dates</div>
    </div>
    <div className='item p'>
      <div className='primary-text'>GUESTS</div>
      <div className='secondary-text'>Add guests</div>
    </div>
    <div className='search-button'> Search</div>
  </div>
    )
}
export default SearchBar ;