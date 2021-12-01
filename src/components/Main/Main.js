import React from 'react'
import './Main.css'
import background from '../../background.jpeg'
import { dates } from '../../data'
import Zodiac from '../Zodiac/Zodiac'

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {dates.map((zodiac) => {
        return <Zodiac key={zodiac.type} {...zodiac} />
      })}
    </main>
  )
}
