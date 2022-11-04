import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const UserDetails = () => {
    const { id: userId }= useParams()
  return (
    <>
        <div>UserDetails of { userId }</div>
    </>
  )
}
