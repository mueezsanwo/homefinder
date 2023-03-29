import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Stack, ButtonGroup, Button, Heading } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import { Show, Hide } from '@chakra-ui/react'

const Navbar = () => {

return (  
<Stack direction='row'> 
 <Hide breakpoint='(max-width: 950px)'> 
 <Flex p='5' borderBottom='1px' borderColor='gray.100' alignItems='center' gap='350' justify='space-between' 
 >
  <Box p='2' fontSize='3xl' color='blue.400' fontWeight='bold'>
    <Link href='/'>
    <Heading size='lg'>HomeFinder</Heading>
    </Link>
  </Box>
  <Spacer />  
  <ButtonGroup gap='10'>
  <Link href='/search?purpose=for-rent' passHref>
    <Button colorScheme='teal' variant='ghost'>Rent Property</Button>
  </Link>
  <Link href='/search?purpose=for-sale' passHref> 
    <Button colorScheme='teal' variant='ghost'>Buy Property</Button>
  </Link>   
  </ButtonGroup>
</Flex>
</Hide>
{/* mobile menu */}
    <Show breakpoint='(max-width: 950px)'>
    
    <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>HomeFinder</Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
        <MenuList>
          <Link href='/' passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
    </Show>
   
 </Stack>
)
} 
   
   
export default Navbar;