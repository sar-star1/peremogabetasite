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
    <section id="instagram" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground font-light">
            @peremogabakery
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mt-4 tracking-wide">
            Instagram
          </h2>
        </div>
        <div
          className="elfsight-app-2ba16e61-fd9c-41a6-ba6e-59c5c3d8e849"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
};

export default InstagramSection;
