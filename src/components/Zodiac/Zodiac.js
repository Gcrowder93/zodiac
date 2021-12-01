import React from 'react'
import './Zodiac.css'

export default function Zodiac(props) {
  return (
    <>
      <div className="zodiac" style={{ name: props.name, dates: props.dates }}>
        <img height="100" src={`${process.env.PUBLIC_URL}/signs/${props.name}.png`} />
        <span className="name">{props.name}</span>
        <span>{props.dates}</span>
      </div>
    </>
  )
}
