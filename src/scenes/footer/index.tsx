import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p className="my-5">Lorem ipsum dolor, sit amet consectetur elit.</p>
          <p>Atque blanditiis ducimus quae neque.</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Excepturi aspernatur tenetur veniam quia</p>
          <p className="my-5">Vastimus el doratus in theo requiem</p>
          <p>(445) 353 563</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
