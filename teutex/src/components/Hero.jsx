import styles from '../style'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col text-white font-thin text-6xl mt-10 font-sans ${styles.paddingY}`}>
      <div>
        Welcome to Our{'\n'}
        <div>
        Company!
        </div>
        <div className='text-[14px] mt-5'>
        Are you looking for reliable immigration consultants to handle your immigration case?
        <div className='mt-1'>
        Our certified and reliable Immigration Consultant professionals can help you!          
        </div>
        <div className='mt-1'>
        We provide services in all different areas of immigration.          
        </div>
        </div>
      </div>
    </section>
  )
}

export default Hero