import React, { createContext ,useEffect} from 'react';
const MainContext = createContext()
const Context = (props) => {
    const handleWhatsAppClick = (props) => {
        const phoneNumber = '9662839699';
        const message = encodeURIComponent(`Hello  mahadev-creation , I am interested in your product  ${props.name}  and would like to get more  information,I would also like to know how I can reach out to your team. Please provide details on how to 'contact us`);

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, '_blank');
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Adds a smooth scrolling animation
        });
      }

    
      const handleShareClick = (data) => {
        if (navigator.share) {
            navigator.share({
                title: `Check out ${data.name}`, // Customize the title
                text: `I found this amazing product: ${data.name}!`, // Customize the sharing message
                url: window.location.href, // You can customize this URL as needed
            })
                .then(() => console.log('Product shared successfully'))
                .catch((error) => console.error('Error sharing product:', error));
        } else {
            // Fallback for browsers that don't support the Share API
            alert('Sharing is not supported in your browser.');
        }
    };
    
    return (
        <MainContext.Provider value={{ handleWhatsAppClick,scrollToTop,handleShareClick }}>
            {props.children}
        </MainContext.Provider>
    );
}
export default Context;
export { MainContext }
