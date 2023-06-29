import Head from 'next/head';
import { Box, Center, Circle, Flex, Grid, SimpleGrid, Text, Link, Button } from '@chakra-ui/react';
import styled from 'styled-components';
import {BsTwitter,BsLinkedin,BsGithub, BsFillTelephoneInboundFill, BsEnvelope} from 'react-icons/bs';
import {BiMenuAltLeft} from 'react-icons/bi';
import {IoCloseCircle} from 'react-icons/io5';
import { Link as ScrollLink } from 'react-scroll'
import Image from 'next/image';
import {  useRef} from 'react';
import {AiFillLock} from 'react-icons/ai'
import {FaMapMarkerAlt} from 'react-icons/fa'
const StyledWrapper = styled.div`

  .padd{
    padding-left:1.2em;
    padding-right:1.2em; 
    
    @media(min-width:700px){
      padding-left:2.5em;
      padding-right:2.5em; 
    }

    @media(min-width:900px){
      padding-left:5em;
      padding-right:5em; 
    }

  }

  
  .avatar{

   }

  .header{
    font-size:30px;
    font-weight:500;
    border-bottom:3px solid;
    border-image-slice:1;
    border-image-source:linear-gradient(0deg, #B16CEA 14.04%, #FF5E69 44.72%, #FF8A56 71.77%, #FFA84B 99.85%);
    @media(min-width: 700px){
      font-size:35px;
      
    }
  }

  
  
  .line{
    height:100%;
  }

  .heroimg{
    width:250px;

    @media(min-width: 700px){
      width:350px;
      height:500px;
    }

    @media(min-width: 700px){
      width:450px;
      height:500px;
    }

  }

  
  .projectImg{
    flex:1;    
  }

  .respondImg{
    width:350px;
    height:200px;

    @media(min-width: 700px){
      width:450px;
      height: 300px;
    }
    @media(min-width: 900px){
      width:500px;
      height: 350px;
    }

  }
  
  .navContainer{

    a{
      &:hover{
        border-bottom:2px solid;
        border-image-slice:1;
        border-image-source:linear-gradient(0deg, #B16CEA 14.04%, #FF5E69 44.72%, #FF8A56 71.77%, #FFA84B 99.85%);
      }  
      
    }
  }

  .resNav{
    position:fixed;
    top:0;
    left:-2000px;
    z-index:100;
    &.open{
      transition:1.5s;
      left:0 !important;
    }
  }


`

const IconWrapper = styled.div`
  display:grid;
  grid-row-gap:1em;
  color:var(--white);
  /* .footer-icon {
    background: linear(90deg, #B16CEA 14.06%, #FF5E69 44.79%, #FF8A56 71.87%, #FFA84B 100%);
    -webkit-text-fill-color: transparent;
    background-clip: text;
  } */
  

  @media(min-width:700px){
    grid-row-gap:2em;
  }

  svg{
    font-size:20px;

    @media(min-width:700px){
      font-size:30px;
    }
  }

  

`


const NavBar = ()=>{

  const menuRef = useRef<any>()

  const toggleNav =()=> menuRef?.current?.classList?.toggle('open')

  return(
    <>

      <Flex 
        display={{ base: 'flex', lg: 'none' }}
        ref={menuRef}
        w='100%' h='100vh' cursor='pointer' color={'#1A1E22'} pos='relative'
        bgColor='#D8D2CC' justify='center' align='center' flexDir='column' gap='40px' fontSize={'1.4rem'}
        className='resNav'
      >
        <Button
          _hover={{ opacity: '1' }} bgColor='transparent'
          pos='absolute' top='40px' right='20px'
        >
          <IoCloseCircle onClick={toggleNav} size='2.6rem' />
        </Button>
      
        <ScrollLink onClick={toggleNav}  to='home' smooth={true} duration={500}>Home</ScrollLink>
        <ScrollLink onClick={toggleNav}  to='about' smooth={true} duration={500}>About Me</ScrollLink>
        <ScrollLink onClick={toggleNav} to='skills' smooth={true} duration={500}>Skills</ScrollLink>
        <ScrollLink onClick={toggleNav} to='projects' smooth={true} duration={500}>Projects</ScrollLink>

        <Flex gap={'1.4em'} align="center">
          <a href='https://twitter.com/Dayvvo1'  target={"_blank"}> <BsTwitter /> </a>

          <a href='https://www.linkedin.com/in/dayvvo/' target={"_blank"}> <BsLinkedin /> </a>

          <a href='https://github.com/dayvvo' target={'_blank'}> <BsGithub />  </a>
        </Flex>
      </Flex>


      <Flex py='1.2rem' justify={'flex-end'} pos='relative'>
        
        <Flex
          fontSize={'17px'} gap={'2.5em'} cursor='pointer' display={{ base: 'none', lg: 'flex' }}
          className='navContainer'
        >
          <ScrollLink to='about' smooth={true} duration={500}>About Me</ScrollLink>
          <ScrollLink to='skills' smooth={true} duration={500}>Skills</ScrollLink>
          <ScrollLink to='projects' smooth={true} duration={500}>Projects</ScrollLink>
        </Flex>
        <Flex
          display={{ base: 'flex', lg: 'none' }} w='40px' h='40px' cursor='pointer'
          bgColor='#D8D2CC' borderRadius='50%' justify='center' align='center' 
          onClick={toggleNav}         
        >
          <BiMenuAltLeft color='#1A1E22' fontSize={'2.2rem'} />
        </Flex>


      </Flex>
    </>
  )
}


const About =()=>{
  return(

    <Box mt='3em' className='padd' id='about'>
      <Center>
        <Text as='div' className='header'>About Me</Text>
      </Center>

      <Flex align={'center'} mt='1em' direction={{base:'column-reverse', lg:'row'}}>
        <Box>
          <Grid templateColumns={'3px 96%'} columnGap={'0.8em'} gap={'1%'}>
            <Box h='100%' w='4px' bg={'var(--col-1)'} fontSize={'1px'} borderRadius='2px' color='transparent' borderX={'px solid var(--col-1)'} >a</Box>      
            <Box fontSize={'19px'} lineHeight='35px'>
              <Box>
                Hello! 👋 I’m Adeyemi Matthew, a Software Engineer with more than 4 years of experience 
                building groundbreaking digital products across a variety of industries.
              </Box>

              <Box mt='1.2em'>
                The internet is my fun place and my oyster. Find me contributing my knowledge, 
                skills and experience to developing projects that make our lives easier and better.
                Perhaps my favorite pastime is teaching, as I dedicate time to mentoring and 
                imparting knowledge to the next generation of promising tech talent on the continent.
              </Box>

            </Box>
          </Grid>
        </Box>

        <Image className='heroimg' src='/hero-bitmoji.png' alt='hero-bitmoji' height={300} width={200} /> 

      </Flex>

    </Box>

  )
}

const Skills = ()=>{

  const skillsMap =[
    {
      img:'/skills/icons8-html-5.png',
      text:'HTML'
    },
    {
      img:'/skills/icons8-css3.png',
      text:'CSS'
    },
    {
      img:'/skills/icons8-javascript-logo.png',
      text:'JAVASCRIPT'
    },

    {
      img:'/skills/icons8-amazon-web-services.png',
      text:'AWS'
    },

    {
      img:'/skills/icons8-python.png',
      text:'PYTHON'
    },

    {
      img:'/skills/icons8-jira.png',
      text:'JIRA'
    },

    {
      img:'/skills/icons8-github.png',
      text:'GITHUB'
    },

    {
      img:'/skills/icons8-clickup.png',
      text:'CLICKCUP'
    },

    {
      img:'/skills/icons8-azure.png',
      text:'MICROSOFT AZURE'
    },

    {
      img:'/skills/icons8-trello.png',
      text:'TRELLO'
    },

    {
      img:'/skills/icons8-splunk.png',
      text:'SPLUNK'
    },

  ]

  return(
    <Box mt='2em' className='padd' id='skills'>
      <Center mt='1em'>
          <Text as='div' className='header'>Skills</Text>
      </Center>

      <SimpleGrid rowGap={'3em'} mt='1.5em' minChildWidth={{base:'150px',lg:'180px'}} 
       spacingX='40px' spacingY='20px'>

        {skillsMap.map((entry,index)=>

          <Center minH={'90px'} key={index}>
            <Box>
              <Center>
                <Image  src={entry.img} alt={entry?.img} 
                 width={100} height={120} 
                />
              </Center>
              <Center mt='0.5em' fontSize={'15px'}>
                {entry.text}
              </Center>
            </Box>
          </Center>
        
        )}


      </SimpleGrid>
      
    </Box>

  )
}


const Projects = ()=>{
  return(
    <Box mt='5em' className='padd' id='projects'>
      <Center mt='1em'>
        <Text as='div' className='header'>Work Experience</Text>
      </Center>

      <Center>

        <Flex mt='3em' align={'center'} direction={{base:'column', sm:'row', lg:'row' }} gap={{base:'3em',lg:'5em'}}>

          <Image className='respondImg'
          alt='chillsbay' src={'/projects/peepsdb.png'} width={250} height={250} 
          />

          <Box flex={1} mt='1em'>
            <Flex gap={'0.5em'}>
              
              <Image src={'/projects/sjultra-logo.png'} alt='chilsbay-logo' 
                width={80} height={50} 
              />
              <Text as='div' fontSize={'25px'}>SJUTRA.INC</Text>

            </Flex>

            <Box mt='1em'>
              <Text as='div' fontSize={'20px'}>Develop high-impact strategies  </Text>
              <Text as='div' fontSize={'20px'}>
                that drive effective digital  
              </Text>
              <Text as='div' fontSize={'20px'}>
                business transformation
              </Text>

            </Box>
            
            <Box mt='2em'>
              <Link fontSize={'12px'} color='' href='#'>web</Link>

              <Flex gap='.6em' align={'center'} mt='1em'>

                <Text fontSize={'15px'}> Role: </Text>

                <Text as='div' fontSize={{base:'20px',}} 
                bgGradient='linear(90deg, #B16CEA 14.06%, #FF5E69 44.79%, #FF8A56 71.87%, #FFA84B 100%);
                to-l, #7928CA, #FF0080)' className='bai-font'
                bgClip='text' display='block' textAlign='center'
                fontWeight='extrabold' >
                  Software Engineer(Full Stack)
                </Text>
              </Flex>


              <Flex gap='.6em' align={'center'} mt='1em'>

                <Text fontSize={'15px'}> Date: </Text>

                <Text as='div' fontSize={{base:'25px',}} 
                bgGradient='linear(90deg, #B16CEA 14.06%, #FF5E69 44.79%, #FF8A56 71.87%, #FFA84B 100%);
                to-l, #7928CA, #FF0080)' className='bai-font'
                bgClip='text' display='block' textAlign='center'
                fontWeight='extrabold' >
                  MAY 2022-PRESENT
                </Text>
              </Flex>


            </Box>


            <Box className='mid'>
              <Box mt='2em' bg={'var(--col-1)'} borderRadius={'18px'} flex={1} maxWidth={'220px'} p='0.5em'>

                <Flex className='xcla' align={''} gap={''}>

                  <Center  gap={'0.5em'}>
                    <Button bg={'var(--productColor)'} fontSize={'10px'} borderRadius={'16px'} height={5}>
                      <Text mr='0.5em'>
                        GITHUB 
                      </Text>
                      <AiFillLock fontSize={'13px'}/>
                    </Button>
                  

                    <Link target={'_blank'}  color={'var(--productColor)'} href='https://pristincapital.com' fontSize={'15px'}>View product </Link>

                    <Link>
                      <Image src={'/projects/arrowRight.svg'} alt='arrowRight' width={10} height={5} />
                    </Link>

                  </Center>


                  {/* <Center gap={'1em'} >
                    <Button bg={'var(--productColor)'} fontSize={'10px'} borderRadius={'16px'} height={5}>
                      <a href="https://github.com/Dayvvo/chillsbay">
                        GITHUB 
                      </a>
                    </Button>
                

                    <Flex gap={'0.5em'} align={'center'}>
                      <Link color={'var(--productColor)'} target='_blank' href='https://chillsbay.netlify.app/' fontSize={''}>View Product</Link>

                      <Link>
                        <Image src={'/projects/arrowRight.svg'} alt='arrowRight' width={10} height={5} />
                      </Link>
                    </Flex>

                  </Center> */}

                </Flex>

              </Box>
            </Box>


          </Box>
          

        </Flex>
  
      </Center>


      <Center>

        <Flex mt='3em' align={'center'} direction={{base:'column', sm:'row', lg:'row' }} gap={{base:'3em',lg:'5em'}}>

          <Image className='respondImg'
          alt='chillsbay' src={'/projects/chillsbay.svg'} width={450} height={250} 
          />

          <Box flex={1} mt='1em'>
            <Flex gap={'0.5em'}>
              
              <Image src={'/projects/chillsbay-logo.png'} alt='chilsbay-logo' 
                width={80} height={50} 
              />
              <Text as='div' fontSize={'25px'}>CHILLS BAY</Text>

            </Flex>

            <Box mt='1em'>
              <Text as='div' fontSize={'20px'}>Find Amazing things to do</Text>
              <Text as='div' fontSize={'20px'}>Anytime,anywhere in Lagos...</Text>
            </Box>
            
            <Box mt='2em'>
              <Link fontSize={'12px'} color='' href='#'>web</Link>

              <Flex gap='.6em' align={'center'} mt='1em'>

                <Text fontSize={'15px'}> Role: </Text>

                <Text as='div' fontSize={{base:'25px',}} 
                bgGradient='linear(90deg, #B16CEA 14.06%, #FF5E69 44.79%, #FF8A56 71.87%, #FFA84B 100%);
                to-l, #7928CA, #FF0080)' className='bai-font'
                bgClip='text' display='block' textAlign='center'
                fontWeight='extrabold' >
                  Front end engineer
                </Text>
              </Flex>

              <Flex gap='.6em' align={'center'} mt='1em'>

                <Text fontSize={'15px'}> Date: </Text>

                <Text as='div' fontSize={{base:'25px',}} 
                bgGradient='linear(90deg, #B16CEA 14.06%, #FF5E69 44.79%, #FF8A56 71.87%, #FFA84B 100%);
                to-l, #7928CA, #FF0080)' className='bai-font'
                bgClip='text' display='block' textAlign='center'
                fontWeight='extrabold' >
                  JAN 2022-MARCH 2022
                </Text>
              </Flex>



            </Box>

            <Box className='mid'>
              <Box mt='2em' bg={'var(--col-1)'} borderRadius={'18px'} flex={1} width={'210px'} p='0.5em'>

                <Flex align={''} gap={''}>

                  <Center gap={'1em'} >
                    <Button bg={'var(--productColor)'} fontSize={'10px'} borderRadius={'16px'} height={5}>
                      <a href="https://github.com/Dayvvo/chillsbay">
                        GITHUB 
                      </a>
                    </Button>
                

                    <Flex gap={'0.5em'} align={'center'}>
                      <Link color={'var(--productColor)'} target='_blank' href='https://chillsbay.netlify.app/' fontSize={''}>View Product</Link>

                      <Link>
                        <Image src={'/projects/arrowRight.svg'} alt='arrowRight' width={10} height={5} />
                      </Link>
                    </Flex>

                  </Center>

                </Flex>

              </Box>
            </Box>


          </Box>
          

        </Flex>
  
      </Center>



      <Center>

        <Flex mt='4em' justify={'center'} direction={{base:'column', sm:'row', lg:'row' }} gap='3em'>

          <Image className='respondImg' 
           alt='priston' src={'/projects/priston.svg'} width={450} height={250} 
          />

          <Box flex={1} mt='1em'>
            <Flex  gap={'0.5em'}>
              
              <Image src={'/projects/pristinLogo.png'} alt='pristinLogo' 
                width={80} height={50} 
              />
              <Text as='div' fontSize={'25px'}>PRISTIN CAPITAL</Text>

            </Flex>

            <Box mt='1em'>
              <Text as='div' fontSize={'20px'}>Pristin capital is an intersection</Text>
              <Text as='div' fontSize={'20px'}>between Private equity and a search</Text>
              <Text as='div' fontSize={'20px'}>fund soley for SME's...</Text>
            </Box>
            
            <Box mt='2em'>
              <Link fontSize={'12px'} color='' href='#'>web</Link>

              <Flex gap='.6em' align={'center'} mt='1em'>

                <Text fontSize={'15px'}> Role: </Text>

                <Text as='div' fontSize={{base:'25px',}} 
                bgGradient='linear(90deg, #B16CEA 14.06%, #FF5E69 44.79%, #FF8A56 71.87%, #FFA84B 100%);
                to-l, #7928CA, #FF0080)' className='bai-font'
                bgClip='text' display='block' textAlign='center'
                fontWeight='extrabold' >
                  Front end engineer
                </Text>
              </Flex>


              <Flex gap='.6em' align={'center'} mt='1em'>

                <Text fontSize={'15px'}> Date: </Text>

                <Text as='div' fontSize={{base:'25px',}} 
                bgGradient='linear(90deg, #B16CEA 14.06%, #FF5E69 44.79%, #FF8A56 71.87%, #FFA84B 100%);
                to-l, #7928CA, #FF0080)' className='bai-font'
                bgClip='text' display='block' textAlign='center'
                fontWeight='extrabold' >
                  JAN 2021-OCTOBER 2021
                </Text>
              </Flex>



            </Box>

            <Box mt='2em' bg={'var(--col-1)'} borderRadius={'18px'} flex={1} maxW={220} p='0.5em'>

              <Flex gap={'1em'}>

                <Center  gap={'0.5em'}>
                  <Button bg={'var(--productColor)'} fontSize={'10px'} borderRadius={'16px'} height={5}>
                    <Text mr='0.5em'>
                      GITHUB 
                    </Text>
                    <AiFillLock fontSize={'13px'}/>
                  </Button>
                

                  <Link target={'_blank'}  color={'var(--productColor)'} href='https://pristincapital.com' fontSize={'15px'}>View product </Link>

                  <Link>
                    <Image src={'/projects/arrowRight.svg'} alt='arrowRight' width={10} height={5} />
                  </Link>

                </Center>

              </Flex>

            </Box>
            


          </Box>
          

        </Flex>
     
      </Center>



      <Center>
  
        <Flex mt='4em' direction={{base:'column', sm:'row', lg:'row' }} gap='3em'>

          <Image className='respondImg' 
          alt='ark' src={'/projects/ark.svg'} width={450} height={250} 
          />

          <Box flex={1} mt='1em'>
            <Flex  gap={'0.5em'}>
              
              <Image src={'/projects/arkLogo.png'} alt='pristinLogo' 
                width={40} height={20} 
              />
              <Text as='div' fontSize={'25px'}>ARK</Text>

            </Flex>

            <Box mt='1em'>
              <Text as='div' fontSize={'20px'}>With ARK, you can book a storage</Text>
              <Text as='div' fontSize={'20px'}>space, move inwithin 24 hours </Text>
              <Text as='div' fontSize={'20px'}>and rest assured that your</Text>
              <Text as='div' fontSize={'20px'}>stored items are secure.</Text>
            </Box>
            
            <Box mt='2em'>
              <Link fontSize={'12px'} color='' href='#'>web</Link>

              <Flex gap='.6em' align={'center'} mt='1em'>

                <Text fontSize={'15px'}> Role: </Text>

                <Text as='div' fontSize={{base:'20px',}} 
                bgGradient='linear(90deg, #B16CEA 14.06%, #FF5E69 44.79%, #FF8A56 71.87%, #FFA84B 100%);
                to-l, #7928CA, #FF0080)' className='bai-font'
                bgClip='text' display='block' textAlign='center'
                fontWeight='extrabold' >
                  Front end engineer
                </Text>
              </Flex>

              <Flex gap='.6em' align={'center'} mt='1em'>

                <Text fontSize={'15px'}> Date: </Text>

                <Text as='div' fontSize={{base:'25px',}} 
                bgGradient='linear(90deg, #B16CEA 14.06%, #FF5E69 44.79%, #FF8A56 71.87%, #FFA84B 100%);
                to-l, #7928CA, #FF0080)' className='bai-font'
                bgClip='text' display='block' textAlign='center'
                fontWeight='extrabold' >
                  MARCH 2023-OCTOBER 2023f
                </Text>
              </Flex>



            </Box>


            <Box mt='2em' bg={'var(--col-1)'} borderRadius={'18px'} flex={1} maxW={220} p='0.5em'>

              <Flex gap={'1em'}>

                <Center  gap={'0.5em'}>
                  <Button bg={'var(--productColor)'} variant='ghost' fontSize={'10px'} borderRadius={'16px'} height={5}>
                    <Text mr='0.5em'>
                        GITHUB 
                    </Text>
                    <AiFillLock fontSize={'13px'}/>
                  </Button>
                

                  <Link color={'var(--productColor)'} target='_blank'  href='http://www.storeatark.com/' fontSize={'15px'}>View product </Link>

                  <Link>
                    <Image src={'/projects/arrowRight.svg'} alt='arrowRight' width={10} height={5} />
                  </Link>

                </Center>

              </Flex>

            </Box>
            


          </Box>
          

        </Flex>
  
      </Center>





    </Box>
  )
}


const Footer = ()=>{
  return(
    <Box mt='7em' id='footer'>
      <Center>
        <Image src={'/projects/happyDayvvo.svg'} alt='happyDayvvo' width={250}  height={200}></Image>
      </Center>

      <Box>
        <Box>
          {/* <Center> */}
            <Text as='div' fontSize={{base:'25px', sm:'40px', lg:'50px'}} 
              bgGradient='linear(90deg, #B16CEA 14.06%, #FF5E69 44.79%, #FF8A56 71.87%, #FFA84B 100%);
              to-l, #7928CA, #FF0080)' className='bai-font'
              bgClip='text' display='block' textAlign='center'
              fontWeight='extrabold' >
              Let's Work Together
            </Text>
            <Box
              w='500px' mx='auto' h='3px'
              bgGradient='linear(90deg, #B16CEA 14.06%, #FF5E69 44.79%, #FF8A56 71.87%, #FFA84B 100%);
              to-l, #7928CA, #FF0080)'
            ></Box>
          {/* </Center> */}
        </Box>

        <Center mt='1em' >
          <IconWrapper>
            <Flex gap={'3em'} align="center">
              <a href='https://twitter.com/Dayvvo1'  target={"_blank"}> <BsTwitter /> </a>

              <a href='https://www.linkedin.com/in/dayvvo/' target={"_blank"}> <BsLinkedin /> </a>

              <a href='https://github.com/dayvvo' target={'_blank'}> <BsGithub />  </a>
            </Flex>
          </IconWrapper>

        </Center>

        <Center py='0.7em' mt='1.5em' >
          <Box>

            <Flex fontSize={'10px'} gap={'2.5em'} cursor='pointer'>
              <Flex gap='0.7em' align='center'>
                <BsFillTelephoneInboundFill fontSize={'20px'}/>
                <a href='#'> 08060060099 </a>
              </Flex>

              <Flex gap='0.7em' align='center'>
                <FaMapMarkerAlt fontSize={'20px'}/>
                <a href='#'>No 15 Shooting Range Kabala Doki  </a>
              </Flex>

              <Flex gap='0.7em' align='center'>
                <BsEnvelope fontSize={'20px'}/>
                <a href = "mailto:dyvvoo@gmail.com">dyvvoo@gmail.com</a>            
              </Flex>

            </Flex>

            <Center mt='1em' fontSize={'14px'}>
              This site is owned and operated by Matthew Adeyemi
            </Center>
          </Box>


        </Center>



        <Flex py='1.2em' justify={'center'} mt='2em' >
      
          <Flex fontSize={'10px'} gap={'2.5em'} cursor='pointer'>

            <ScrollLink to='about' smooth={true} duration={500}>About Me</ScrollLink>
            <ScrollLink to='skills' smooth={true} duration={500}>Skills</ScrollLink>
            <ScrollLink to='projects' smooth={true} duration={500}>Projects</ScrollLink>

          </Flex>


        </Flex>

      </Box>

      

    </Box>
  )
}

const Home=({className}:{className:string})=> {

  return (
    <StyledWrapper>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex className='padd' minH={'100vh'} flexDir='column' id='home'  >
        <NavBar/>
        
        <Box mt='2em' pos={'relative'} >
          
          <Box display={{base:'none',lg:'initial'}} pos={'absolute'} top={0} left={0} >
            <IconWrapper>

              <a href='https://twitter.com/Dayvvo'  target={"_blank"}> <BsTwitter /> </a>

              <a href='https://www.linkedin.com/in/dayvvo/' target={"_blank"}> <BsLinkedin /> </a>

              <a href='https://github.com/dayvvo' target={'_blank'}> <BsGithub />  </a>              
              
          
            </IconWrapper>


          </Box>

          <Center className=''>
            <Box mt='-1em'>
              <Center>
                <Image className='avatar' alt='my_avatar' width={270} height={270} src={'/bitmoji.png'} />
              </Center>
              <Center>
                <Box>
                  <Center>
                    <Text as='div' fontWeight={600} fontSize={'20px'} mt='1.4em' >I'm Adeyemi Matthew</Text>
                  </Center>

                  <Box mt='0.6em' position={'relative'} >
                    <Box position={'absolute'} left='-40px' top='-40px'>
                      <Image src='/coverart1.svg' alt='coverart' width={40} height={40} />
                    </Box>

                    <Box position={'absolute'} left='-40px' bottom='-20px'>
                      <Image src='/coverart4.svg' alt='coverart' width={50} height={60} />
                    </Box>


                    <Box position={'absolute'} right='-50px' top='-40px'>
                      <Image src='/coverart3.svg' alt='coverart' width={50} height={80} />
                    </Box>


                    <Box position={'absolute'} right='-20px' bottom='-30px'>
                      <Image src='/coverart2.svg' alt='coverart' width={40} height={40} />
                    </Box>

                    <Text as='div' fontWeight={'thin'} 
                      textAlign={'center'} fontSize={'32px'} lineHeight={'40px'}  >
                      <Center>
                        I develop ideas and help build <br/> a better world through <br /> software.
                      </Center>

                    </Text>

                    <Center my='1.2em'>
                      <ScrollLink to='footer' smooth={true} duration='500'>
                        <Image className='cursor' src={'/arrow-down.svg'}  alt='arrow-down' height={90} width={60} />
                      </ScrollLink>
                    </Center>
                  </Box>
                </Box>
              
              </Center>
            </Box>
          </Center>



        </Box>

      </Flex>

      <About/>

      

      <Box h='150px' pos={'relative'} mt='7em'>

        <Flex py='1.2em' position={'absolute'} top={0} left={0} transform={'rotate(4deg)'} 
         zIndex={30} justify={'space-between'} w='100%' bg='var(--col-1)' px={{base:'1em',md:'1.5em',lg:'2em'}}>
          
          {
            ['DEVELOP','FRONTEND','CLOUD','BACKEND'].map((entry,index)=>
                    
              <Flex align='center' w='15%' key={index} justify='space-between'>
                <Circle size={'8px'} bg='#FF7E21'></Circle>
                <Text as='div' color='#1A1E22' fontSize={'15px'}> {entry} </Text>
              </Flex>
            )

          }
        </Flex>

        <Flex py='1.2em' position={'absolute'} top={0} left={0} transform={'rotate(-4deg)'} 
         justify={'space-between'} w='100%' bg='#494E54' px={{base:'1em',md:'1.5em',lg:'2em'}}>
          
          {
            ['DEVELOP','FRONTEND','CLOUD','BACKEND'].map((entry,index)=>
                    
              <Flex align='center' w='15%' key={index} justify='space-between'>
                <Circle size={'8px'} bg='#FF7E21'></Circle>
                <Text as='div' fontSize={'15px'}> {entry} </Text>
              </Flex>
            )

          }
        </Flex>


      </Box>

      <Skills/>

  
      <Projects/>


      <Footer/>

      



    </StyledWrapper>
  )
};






export default Home;


