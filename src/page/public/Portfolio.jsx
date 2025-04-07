

import React from "react";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 155,
      category: "development-sort",
      image:
        "https://dtlogistics.wpenginepowered.com/wp-content/uploads/2014/01/portfolio1.jpg",
      title: "Experienced Driver",
      link: "https://dtlogistics.wpengine.com/dt_portfolios/cras-tristique-purus-non-lacus/",
      description: "Seasoned professionals delivering reliability with every parcel",
    },
    {
      id: 154,
      category: "development-sort",
      image: "https://pierbridge.com/media/iz0nchdj/top-10-things-to-consider_002.png",
      title: "Integration of API",
      link: "https://dtlogistics.wpengine.com/dt_portfolios/duis-fermentum-felis/",
      description: "Effortless connectivity with seamless system integration",
    },
    {
      id: 153,
      category: "web-design-sort",
      image:
        "https://dtlogistics.wpenginepowered.com/wp-content/uploads/2014/01/portfolio3.jpg",
      title: "Quick Delivery",
      link: "https://dtlogistics.wpengine.com/dt_portfolios/quisque-id-maximus-leo/",
      description: "Swift dispatch ensuring prompt parcel arrival",
    },

    {
      id: 152,
      category: "web-design-sort",
      image:
        "https://dtlogistics.wpenginepowered.com/wp-content/uploads/2014/01/portfolio4.jpg",
      title: "Outstanding Service",
      link: "https://dtlogistics.wpengine.com/dt_portfolios/aenean-facilisis-tortor/",
      description: "Excellence in every delivery - your parcel, our priority",
      
    },
  ];

  return (
    <div id="main" style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Header */}
      <section
        style={{
          padding: "40px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#2d3436" }}>
          Why choose Bharat Parcel Services?
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#555", marginTop: "10px", maxWidth: "600px" }}>
          Your Prime Choice for Reliable and Efficient Parcel Delivery Solutions.
        </p>
      </section>

      {/* Block/Grid Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1150px",
          margin: "0 auto",
        }}
      >
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            style={{
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#fff",
              transition: "transform 0.3s ease",
            }}
          >
            <figure style={{ margin: 0 }}>
              <img
                src={item.image}
                alt={item.title}
                title={item.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <div style={{ padding: "15px", textAlign: "center" }}>
                <a
                  href={item.link}
                  style={{
                    textDecoration: "none",
                    color: "#007bff",
                    fontWeight: "bold",
                    fontSize: "16px",
                    display: "block",
                  }}
                >
                  {item.title}
                </a>
                <p style={{
                 fontSize: "1rem",
                 color: "#64748b",
                 lineHeight: "1.5",
                 marginBottom: "20px"
               }}>
                 {item.description}
              </p>
              </div>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;  

// import React from "react";

// const Portfolio = () => {
//   const portfolioItems = [
//     {
//       id: 155,
//       image: "https://dtlogistics.wpenginepowered.com/wp-content/uploads/2014/01/portfolio1.jpg",
//       title: "Experienced Drivers",
//       description: "Seasoned professionals delivering reliability with every parcel",
//       link: "#"
//     },
//     {
//       id: 154,
//       image: "https://pierbridge.com/media/iz0nchdj/top-10-things-to-consider_002.png",
//       title: "API Integration",
//       description: "Effortless connectivity with seamless system integration",
//       link: "#"
//     },
//     {
//       id: 153,
//       image: "https://dtlogistics.wpenginepowered.com/wp-content/uploads/2014/01/portfolio3.jpg",
//       title: "Quick Delivery",
//       description: "Swift dispatch ensuring prompt parcel arrival",
//       link: "#"
//     },
//     {
//       id: 152,
//       image: "https://dtlogistics.wpenginepowered.com/wp-content/uploads/2014/01/portfolio4.jpg",
//       title: "Outstanding Service",
//       description: "Excellence in every delivery - your parcel, our priority",
//       link: "#"
//     }
//   ];

//   return (
//     <div style={{ 
//       fontFamily: "'Inter', sans-serif",
//       padding: "40px 20px",
//       backgroundColor: "#f8fafc"
//     }}>
//       {/* Header Section */}
//       <section style={{ 
//         textAlign: "center",
//         maxWidth: "800px",
//         margin: "0 auto 50px",
//         padding: "0 20px"
//       }}>
//         <h1 style={{
//           fontSize: "2.8rem",
//           fontWeight: "700",
//           color: "#1e293b",
//           lineHeight: "1.2",
//           marginBottom: "20px",
//           background: "linear-gradient(45deg, #2563eb, #1e40af)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent"
//         }}>
//           Why Choose Bharat Parcel Services?
//         </h1>
//         <p style={{
//           fontSize: "1.1rem",
//           color: "#64748b",
//           lineHeight: "1.6",
//           marginBottom: "10px"
//         }}>
//           Your Prime Choice for Reliable & Efficient Parcel Solutions
//         </p>
//       </section>

//       {/* Features Grid */}
//       <div style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//         gap: "30px",
//         maxWidth: "1200px",
//         margin: "0 auto",
//         padding: "0 20px"
//       }}>
//         {portfolioItems.map((item) => (
//           <div key={item.id} style={{
//             backgroundColor: "#fff",
//             borderRadius: "16px",
//             boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
//             transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//             overflow: "hidden",
//             ":hover": {
//               transform: "translateY(-5px)",
//               boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)"
//             }
//           }}>
//             <div style={{
//               position: "relative",
//               height: "240px",
//               overflow: "hidden"
//             }}>
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   filter: "brightness(0.95)",
//                   transition: "transform 0.3s ease"
//                 }}
//               />
//             </div>
            
//             <div style={{ 
//               padding: "25px",
//               textAlign: "center"
//             }}>
//               <h3 style={{
//                 fontSize: "1.4rem",
//                 fontWeight: "600",
//                 color: "#1e293b",
//                 marginBottom: "12px"
//               }}>
//                 {item.title}
//               </h3>
//               <p style={{
//                 fontSize: "1rem",
//                 color: "#64748b",
//                 lineHeight: "1.5",
//                 marginBottom: "20px"
//               }}>
//                 {item.description}
//               </p>
//               <a href={item.link} style={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 padding: "10px 24px",
//                 backgroundColor: "#2563eb",
//                 color: "#fff",
//                 borderRadius: "8px",
//                 textDecoration: "none",
//                 transition: "all 0.3s ease",
//                 ":hover": {
//                   backgroundColor: "#1e40af",
//                   transform: "translateY(-2px)"
//                 }
//               }}>
//                 Learn More
//                 <svg style={{ 
//                   width: "18px",
//                   height: "18px",
//                   marginLeft: "8px",
//                   transition: "transform 0.3s ease"
//                 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
