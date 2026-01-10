const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-white">Promos</span>. All rights reserved.
        </p>

        {/* Disclaimer */}
        <p className="text-sm max-w-4xl mx-auto leading-relaxed">
          We respect everyone’s privacy and do not intend to harm or misuse any individual’s data or images.
          All images used on this website are for demonstration and promotional purposes only.
          If you believe any content or image violates your rights or privacy, please reach out to us through the
          contact form, and we will take immediate action.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
