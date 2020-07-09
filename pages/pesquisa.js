import React, {useState} from 'react'

import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    nota: 0
  })

  const Notas = [0,1,2,3,4,5]
  const [success, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})
  const save = async () => {
    try{
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })

      const data = await response.json()
      setSuccess(true)
      setRetorno(data)
    }catch(err){
    
    }
  }

  //pegar dados do formulario
  const onChange = event => {
    const value = event.target.value
    const key = event.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }

  return (
    <div className="pt-6">
      <PageTitle title="Pesquisa"/>
      <h1 className="text-center font-bold my-4 text-2xl">Críticas e Sugestões</h1>
      <p className="text-center mb-6">
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir sua opinião.</p>
      {!success && <div className="w-1/5 mx-auto">
        <label className="font-bold">Seu nome:</label>
        <input name="" id="" type="text" value="" 
          className="p-4 block shadow rounded bg-blue-200 my-2 w-full"
          onChange={onChange} name='nome'
          value={form.name}/>

        <label className="font-bold">Email:</label>
        <input name="" id="" type="text" value="" 
          className="p-4 block shadow rounded bg-blue-200 my-2 w-full"
          onChange={onChange} name='email'
          value={form.email}/>
        
        <label className="font-bold">WhatsApp:</label>
        <input name="" id="" type="text" value="" 
          className="p-4 block shadow rounded bg-blue-200 my-2 w-full"
          onChange={onChange} name='whatsapp'
          value={form.whatsapp}/>
          
        <label className="font-bold">Nota</label>
        <div className="flex py-6">
          {Notas.map(nota => {
            return (
            <label className="block w-1/6 text-center">
              {nota} <br/>
              <input type="radio" name="nota" value={nota} onChange={onChange}/>
              </label>)
          })}
        </div>
        <button onClick={save} className="bg-blue-400 px-6 py-4 mb-4 w-full rounded-lg font-bold shadow-lg">Salvar</button>
      </div> }
      {success && <div className="w-1/5 mx-auto">
        <p className="mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">Obrigado por contribuir com sua sugestão ou crítica</p>
        {
          
          retorno.showCoupon && <div className="text-center border p-4 mb-4">
            Seu Cupom: <br/>
            <strong className="text-2xl">{retorno.Cupom}</strong>
            
            </div>
        }
        {
          retorno.showCoupon && <div className="text-center border p-4 mb-4">
            <strong className="mb-2">{retorno.Promo}</strong>
            <br/>
            <span className="italica">Tire um print ou foto desta tela e apresente ao garçon.</span>
            </div>
        }
      </div>}
    </div>
  )
}

export default Pesquisa