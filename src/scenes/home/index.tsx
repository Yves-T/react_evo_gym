import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import HomePageText from "../../assets/HomePageText.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";
import { SelectedPage } from "../../shared/SelectedPage";

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="bg-gray-20 gap-16 py-10 md:h-full md:pb-0">
      {/* image and main header */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      >
        {/* main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-(--text-evolve)">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          {/* actions */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-primary-500 hover:text-secondary-500 text-sm font-bold underline"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:mt-16 md:ml-40 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-PageGraphic" />
        </div>
      </motion.div>
      {/* sponsors */}
      {isAboveMediumScreens && (
        <div className="bg-primary-100 h-[150px] w-full py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="forbes-sponsor" />
              <img src={SponsorFortune} alt="fortune-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
