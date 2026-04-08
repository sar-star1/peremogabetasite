import { useEffect } from "react";

const InstagramSection = () => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="instagram" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div
          className="elfsight-app-2ba16e61-fd9c-41a6-ba6e-59c5c3d8e849"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
};

export default InstagramSection;
