function toggleLanguage() {
    var contentElement = document.getElementById("content");
    var callToActionElement = document.getElementById("callToAction");
    var tireSalesElement = document.getElementById("tireSales");
    var tireInstallationElement = document.getElementById("tireInstallation");
    var wheelAlignmentElement = document.getElementById("wheelAlignment");
    var tireRotationElement = document.getElementById("tireRotation");
    var flatTireRepairElement = document.getElementById("flatTireRepair");
    var brakeServicesElement = document.getElementById("brakeServices");
    var buttonElement = document.getElementById("buttonElement");
    var slogan = document.getElementById("slogan")
    var partnership = document.getElementById("partnership")
    // contact us session
    var contact = document.getElementById("contact")
    var visit = document.getElementById("visit")
    var phone = document.getElementById("phone")
    var ourServices = document.getElementById("ourServices")
    var title2 = document.getElementById("title2")
    



    // Check the current language and toggle accordingly
    if (contentElement.innerText.includes("Welcome")) {
        
        // Udate slogan to Spanish
        slogan.innerText = "Tu destino único para neumáticos de calidad y servicios."
        // Update content section to Spanish
        contentElement.innerHTML = "<p>Bienvenido a La Union Tire Inc. – Su Centro Confiable para Neumáticos de Calidad y Servicios Expertos.</p>"
            + "<p>Descubra una experiencia de compra de neumáticos sin inconvenientes donde la calidad se encuentra con la asequibilidad. Somos su destino principal para neumáticos de primera calidad, reparaciones profesionales de neumáticos e instalaciones expertas de frenos. Nuestro compromiso con la excelencia, experiencia inigualable y una amplia selección nos convierten en la opción preferida para servicios de neumáticos confiables y eficientes.</p>"
            + "<p>¿Por qué elegirnos?</p>"
            + "<ul>"
            + "<li>Amplia Selección de Neumáticos: Explore neumáticos premium para varios vehículos y preferencias de conducción.</li>"
            + "<li>Reparaciones Expertas de Neumáticos: Confíe en nuestros técnicos hábiles para un rendimiento óptimo y longevidad.</li>"
            + "<li>Instalaciones Precisas de Frenos: Mejore la seguridad con atención meticulosa a los detalles.</li>"
            + "<li>Enfoque Centrado en el Cliente: Priorizamos sus necesidades, ofreciendo soluciones personalizadas y comunicación transparente.</li>"
            + "</ul>"
            + "<p>Ya sea un conductor experimentado o un entusiasta de la carretera nuevo, confíe en La Union Tire Inc para neumáticos confiables y servicios de primera. Experimente la diferencia en calidad, servicio, y confiabilidad; elíjanos para todas sus necesidades de neumáticos y frenos. Visítenos hoy y eleve su experiencia de conducción con nuestra experiencia inigualable en La Union Tire Inc.</p>";

            // Update Our Services
        ourServices.innerText = "Nuestros Servicios";

            // Update Our Services
            partnership.innerText = "Alianza comercial";

        // Update call to action section to Spanish
        callToActionElement.innerHTML = "¡Revitalize su conducción con La Union Tire Inc.! Explore nuestra selección premium de neumáticos, experimente reparaciones expertas de neumáticos y eleve su seguridad con instalaciones precisas de frenos. Elija confiabilidad, elija calidad: programe su visita hoy y permita que mejoremos su experiencia de conducción. Confíe en La Union Tire Inc. por su experiencia inigualable y servicio excepcional. Su viaje hacia neumáticos superiores y frenos confiables comienza aquí.";

        // Update content to Spanish
        contact.innerText = "Contáctenos";
        visit.innerText = "Visítenos en: 630 New Point Rd Elizabeth, NJ 07206";
        phone.innerText = "Teléfono: (908) 354-3044";
        

        // Update service names to Spanish
        tireSalesElement.innerHTML = "&#10003; Venta de Neumáticos";
        tireInstallationElement.innerHTML = "&#10003; Instalación de Neumáticos";
        wheelAlignmentElement.innerHTML = "&#10003; Alineación de Ruedas";
        tireRotationElement.innerHTML = "&#10003; Rotación de Neumáticos";
        flatTireRepairElement.innerHTML = "&#10003; Reparación de Neumáticos Desinflados";
        brakeServicesElement.innerHTML = "&#10003; Servicios de Frenos";

        

        // Update button text to English
        buttonElement.innerText = "English";

        // Update partnership to spanish
        partnership.innerText = "Colaboración";

        


    } else {
        // Udate slogan to English
        slogan.innerText = "Your one-stop destination for quality tires and services."

        // Update content section to English
        contentElement.innerHTML = "<p>Welcome to La Union Tire Inc. – Your Trusted Hub for Quality Tires and Expert Services!</p>"
            + "<p>Discover a seamless tire shopping experience where quality meets affordability. We're your go-to destination for top-notch tires, professional tire repairs, and expert brake installations. Our commitment to excellence, unmatched expertise, and a vast selection make us the preferred choice for reliable and efficient tire services.</p>"
            + "<p>Why choose Us?</p>"
            + "<ul>"
            + "<li>Extensive Tire Selection: Explore premium tires for various vehicles and driving preferences.</li>"
            + "<li>Expert Tire Repairs: Trust our skilled technicians for optimal performance and longevity.</li>"
            + "<li>Precision Brake Installations: Enhance safety with meticulous attention to detail.</li>"
            + "<li>Customer-Centric Approach: We prioritize your needs, offering personalized solutions and transparent communication.</li>"
            + "</ul>"
            + "<p>Whether you're a seasoned driver or a new road enthusiast, trust La Union Tire Inc for reliable tires and top-notch services. Experience the difference in quality, service, and reliability – choose us for all your tire and brake needs. Visit today and elevate your driving experience with unparalleled expertise at La Union Tire Inc.</p>";

                // Update Our Services
        ourServices.innerText = "Our Services";

        // Update call to action section to English
        callToActionElement.innerHTML = "Revitalize Your Drive with La Union Tire Inc.! Explore our premium tire selection, experience expert tire repairs, and elevate your safety with precision brake installations. Choose reliability, choose quality – schedule your visit today and let us enhance your driving experience. Trust La Union Tire Inc. for unparalleled expertise and exceptional service. Your journey to superior tires and reliable brakes starts here!";

          // Update service names to English
          // Update service names to English
        tireSalesElement.innerHTML = "&#10003; Tire Sales";
        tireInstallationElement.innerHTML = "&#10003; Tire Installation";
        wheelAlignmentElement.innerHTML = "&#10003; Wheel Alignment";
        tireRotationElement.innerHTML = "&#10003; Tire Rotation";
        flatTireRepairElement.innerHTML = "&#10003; Flat Tire Repair";
        brakeServicesElement.innerHTML = "&#10003; Brake Services";

          // Update content to English
          contactHeader.innerText = "Contact Us";
          visit.innerText = "Visit us at: 630 New Point Rd Elizabeth, NJ 07206";
          email.innerText = "Email: info@tireshop.com";
          phone.innerText = "Phone: (908) 354-3044";

        // Update button text to English
        buttonElement.innerText = "Español";
    }
}
