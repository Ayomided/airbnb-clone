

function Hero() {
  return (
    <div style={{ fontFamily: 'Poppins' }}>
      <img
        src="../public/photo-grid.png"
        alt="Hero Photo Grid"
        className="w-8/12 mt-9 mx-auto py-12"
      />
      <div className="lg:px-48 sm:px-28 xl:px-60">
        <h1 className="text-3xl font-bold pb-4">Online Experiences</h1>
        <p className="w-auto text-xl font-light text-pretty">
          Join unique interactive activities led by one-of-a-kind hosts, all
          without leaving home.
        </p>
      </div>
    </div>
  )
}

export default Hero