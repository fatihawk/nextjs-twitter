import React from 'react'

import TextTitle from '../components/title-bold'

export default {
  title: 'Typography'
}

export const Title = () => (
  <div >
      <TextTitle>Merhaba Dünya</TextTitle>
      <TextTitle bold={false}>Merhaba Dünya</TextTitle>
  </div>
)
