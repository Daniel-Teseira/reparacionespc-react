const SpeedTest = () => {
  return (
    <section class='speedtest'>
        <iframe
          src='https://fast.com'
          width='100%'
          height='600'
          frameborder='0'
          >
        </iframe>

        <div style={{ width: '100%', height: '600px' }}>
          <iframe
            src='/speedtest/index.html'
            title='Test de velocidad'
            width='100%'
            height='100%'
            frameBorder='0'
          />
        </div>        
      </section>
  )
}

export default SpeedTest