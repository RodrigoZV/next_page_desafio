'use client'

import Image from 'next/image'

export default function Home() {

  const information = {
    text:'Bem vindo ao universo dos hérois'
  }
  
  const text = "Bem vindo ao universo dos hérois"

  return (
    <>
    <header className='text-white bg-black flex items-center p-5 justify-between shadow-lg rounded-bl-lg rounded-br-lg' >
      <Image className='h-[100%]'
          width={100}
          height={50}
          alt='Logo'
          src={'/Group2.png'}/>
          
      <nav className='flex'>
        <span className='px-3 py-1 hover:bg-yellow-400 active:bg-yellow-500 focus:ring-yellow-300 rounded-full cursor-pointer'>Personagens</span>
        <span className='px-3 py-1 hover:bg-yellow-400 active:bg-yellow-500 focus:ring-yellow-300 rounded-full cursor-pointer'>Hérois</span>
        <span className='px-3 py-1 hover:bg-yellow-400 active:bg-yellow-500 focus:ring-yellow-300 rounded-full cursor-pointer'>Vilões</span>

        <button className='px-3 py-1 hover:bg-yellow-400 active:bg-yellow-500 focus:ring-yellow-300 rounded-full cursor-pointer'>
          <span>Entrar</span>
        </button>
      </nav>
    </header>

    <section className='flex place-items-center'>
      <div className='bg-gradient-to-r from-green-800 to-transparent flex pl-10 text-9xl text-white font-bold place-items-center'>
        <h1>
          <span className='text-detail'>{text}</span>
        </h1>
      </div>
    </section>

    <main className='py-5 first:mt-0' >
      <section className='flex mt-5 justify-center'>
        <div className='bg-gradient-to-r gap-15 from-blue-800 to-detail p-6 shadow-lg flex'>
          <div className='text-white flex flex-col w-[50%] justify-center'>
            <h1 className='text-5xl font-bold'>Título</h1>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, suscipit perferendis dolores eius aut officia. Quod repellendus modi sapiente? Aperiam placeat doloribus natus. Minima earum quos laboriosam aperiam voluptatibus? Deleniti!</span>
          </div>

          <Image className='h-[100%]'
          width={500}
          height={200}
          alt='Junção'
          src={'/Group1.png'}/>

        </div>
      </section>
      <section className='flex mt-5 justify-center'>
        <div className='bg-gradient-to-r gap-15 from-red-800 to-detail p-6 shadow-lg flex'>
          <div className='text-white flex flex-col w-[50%] justify-center'>
            <h1 className='text-5xl font-bold'>Título</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit nesciunt nemo dolore quibusdam fugiat, perferendis aspernatur ab omnis consequatur reprehenderit modi quidem asperiores ex est at cupiditate sit rem!</span>
          </div>

          <Image className='h-[100%]'
          width={500}
          height={200}
          alt='Junção dos Hérois'
          src={'/Mvsdc.jpg'}/>
        </div>
      </section>
    </main>

    <footer className='bg-yellow-600 text-black flex justify-evenly py-10'>
      <div className='flex flex-col'>
        <h1 className='font-black text-3x1'>Info</h1>
        <ol className='text-left'>
          <li>info</li>
          <li>info</li>
          <li>info</li>
        </ol>
      </div>

      <div className='flex flex-col'>
        <h1 className='font-black text-3x1'>Contact</h1>
        <ol className='text-left'>
          <li>contact</li>
          <li>contact</li>
          <li>contact</li>
        </ol>
      </div>

      <div className='flex flex-col'>
        <h1 className='font-black text-3x1'>My</h1>
        <ol className='text-left'>
          <li>my</li>
          <li>my</li>
          <li>my</li>
        </ol>
      </div>
    </footer>
    </>
  )
}
