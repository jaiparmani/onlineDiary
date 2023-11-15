import { Audio } from 'react-loader-spinner';
import * as Loaders from "react-loader-spinner";

import CircleLoader from 'react-spinners';
import React from 'react'
import { useState, useEffect } from 'react';
import CutePics from './CutePics'
export default function Loader({ fact, loader}) {
   

  return (

          <div size="60vh">

<div>
        {loader}
          </div>

          <h4>{fact}</h4>
        <CutePics/>
          </div >
          )
}
