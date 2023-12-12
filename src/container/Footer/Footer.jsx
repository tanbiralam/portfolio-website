import React, {useState} from 'react'


import {images} from "../../constants"
import {Appwrap, MotionWrap} from "../../wrapper"
import {client} from "../../client"
import './Footer.scss'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Appwrap(MotionWrap(Footer, "app__footer", "contact", "app_whitebg"))