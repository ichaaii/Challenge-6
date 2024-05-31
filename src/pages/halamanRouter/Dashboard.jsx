import React, { useEffect, useState } from 'react'
import { useGetDataUser } from '../../service/auth/get_user'


export const Dashboard = () => {
    const { data: paijoSalto  , isError , status } = useGetDataUser({})

    useEffect(() => {
    }, [paijoSalto , status])



  return (
    <div>Dashboard</div>
  )
}