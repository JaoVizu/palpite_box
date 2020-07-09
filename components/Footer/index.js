import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-700 p-4">
      <div className="container mx-auto text-center font-bold text-white">
      Projeto desenvolvido por: João Vizu {' '}
      <a className="hover:underline">Linkedin</a>
      <div className="mt-2">
        <img className="inline p-4" src="/logo_semana_fsm.png"/>
        <img className="inline p-4" src="/logo_devpleno.png"/>
      </div>
      </div>
    </footer>
  )
}

export default Footer;