import { motion } from "framer-motion";
import me from "../assets/me.jpg"
import { styles } from "../styles";
import { SocialIcon } from 'react-social-icons';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 h-full max-w-7xl mx-auto ${styles.paddingX} flex flex-row justify-between items-center gap-5`}
      >

        <div className="h-[50%] w-[50%]">
          <img src={me} alt="" className="h-full w-[80%] rounded-3xl" />
        </div>

        <div className="flex space-x-8">

          <div className="flex flex-col w-full space-y-4 mt-[7.5%]">

            <div className="flex w-full justify-end">
              <SocialIcon url="https://www.linkedin.com/in/muhammad-huzaifa-2a3821249/" fgColor='silver' bgColor='transparent' target="_blank" />
              <SocialIcon url="https://github.com/huzaifa620" fgColor='silver' bgColor='transparent' target="_blank" />
              <SocialIcon url="https://www.instagram.com/muhammadhuzaifasiddiq/" fgColor='silver' bgColor='transparent' target="_blank" />
              <SocialIcon url="https://www.facebook.com/profile.php?id=100016574462614" fgColor='silver' bgColor='transparent' target="_blank" />
              <SocialIcon url="https://twitter.com/FAGhost3" fgColor='silver' bgColor='transparent' target="_blank" />
            </div>
            <h1 className={`${styles.heroHeadText} text-white text-right`}>
              The Name's <br className='sm:block hidden' /> <span className='text-[#915EFF]'> Huzaifa </span>
            </h1>
          </div>

          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

        </div>

      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
