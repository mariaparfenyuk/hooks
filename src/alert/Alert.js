import React from 'react'
import {useAlert} from './AlertContext'


// https://www.youtube.com/watch?v=9KJxaFHotqI 1:26 

export default function Alert() {

  const alert = useAlert()

  if (!alert.visible) return null

  return (
    <div className={'alert alert-danger'} onClick={alert.toggle}>
      Это очень важное сообщение
    </div>
  )
}