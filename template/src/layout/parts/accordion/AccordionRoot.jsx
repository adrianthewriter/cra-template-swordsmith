import React from 'react'

import { AccordionContainer } from '@components'
// import Combat from './AccordionCombat'
import Reference from './AccordionReference'
import Settings from './AccordionSettings'

import './AccordionRoot.css'

export default () => (
  <AccordionContainer>
    {/* <Combat /> */}
    <Reference />
    <Settings />
  </AccordionContainer>
)
