import Image from 'next/image'

export default function Home() {
  return (
    <>
    <header className='text-white bg-black flex items-center p-5 justify-between shadow-lg rounded-bl-lg rounded-br-lg' >
      <h1>Bem-Vindo!</h1>
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
      <div className='bg-gradient-to-r from-yellow-500 to-transparent flex pl-10 text-9xl text-white font-bold place-items-center'>
        <h1>
          <span className='text-detail'>Bem vindo ao úniverso dos hérois</span>
        </h1>
      </div>
    </section>

    <main>
      <section>
        <div>
          <div>
            <h1>Título</h1>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, suscipit perferendis dolores eius aut officia. Quod repellendus modi sapiente? Aperiam placeat doloribus natus. Minima earum quos laboriosam aperiam voluptatibus? Deleniti!</span>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h1>Título</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit nesciunt nemo dolore quibusdam fugiat, perferendis aspernatur ab omnis consequatur reprehenderit modi quidem asperiores ex est at cupiditate sit rem!</span>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div>
        <h1>info</h1>
        <ol>
          <li>info</li>
          <li>info</li>
          <li>info</li>
        </ol>
      </div>

      <div>
        <h1>contact</h1>
        <ol>
          <li>contact</li>
          <li>contact</li>
          <li>contact</li>
        </ol>
      </div>

      <div>
        <h1>my</h1>
        <ol>
          <li>my</li>
          <li>my</li>
          <li>my</li>
        </ol>
      </div>
    </footer>
    </>
  )
}
