function App() {

  return (
    <>
      <header className="header">
        <h1 className="title">MyTunes</h1>
      </header>

      <main className="main">
        <section className="left-side">
          <img src="/aimer.jpeg" alt="Aimer's image" className="photo" />
        </section>
        
        <section className="right-sides">
          <h2 className="name">Aimer's Albums</h2>
          <div className="box">
            <details className="album">
              <summary className="album-title">Sleepless Night</summary>
              <p className="song">1. Yako Ressha Nothing To Lose</p>
              <p className="song">2. AM02:00</p>
              <p className="song">3. Kanashimi wa Aurora ni</p>
              <p className="song">4. Hoshikuzu Venus</p>
              <p className="song">5. [...]</p>
            </details>
          </div>

          <div className="box">
            <details className="album">
              <summary className="album-title">Daydream</summary>
              <p className="song">1. Kataomoi</p>
              <p className="song">2. Higher Ground</p>
              <p className="song">3. Ninelie</p>
              <p className="song">4. Stars in the Rain</p>
              <p className="song">5. [...]</p>
            </details>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="credit">Made by Sandy Ly</p>
        <p className="sub-info">COMP 3170 __ BCIT D3</p>
      </footer>
    </>
  )
}

export default App
