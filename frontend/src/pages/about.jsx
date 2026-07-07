import React from 'react';
import dp from "../assets/dp.png";

const About = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    background: '#18181b',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    textAlign: 'center'
  };

  const socialBtnStyle = {
    display: 'inline-block',
    margin: '10px',
    padding: '10px 20px',
    background: '#27272a',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };

  return (
    <div style={containerStyle}>

      <img
        src={dp}
        alt="Shurveer Singh"
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid #f97316",
          marginBottom: "20px"
        }}
      />

      <h2
        style={{
          fontSize: "2.6rem",
          color: "#fff",
          marginBottom: "10px"
        }}
      >
        About the Developer
      </h2>

      <h3
        style={{
          fontSize: "1.5rem",
          color: "#f97316",
          marginBottom: "25px"
        }}
      >
        Shurveer Singh | MERN Stack Developer
      </h3>

      <p
        style={{
          color: "#a1a1aa",
          fontSize: "1.15rem",
          lineHeight: "1.9",
          maxWidth: "700px",
          margin: "0 auto"
        }}
      >
        Hello! I'm <strong style={{ color: "#fff" }}>Shurveer Singh</strong>, a
        passionate <strong>MERN Stack Developer</strong> currently pursuing my
        <strong> Master of Computer Applications (MCA)</strong>.

        <br /><br />

        I specialize in building modern, responsive and scalable web
        applications using
        <strong> React.js, Node.js, Express.js, MongoDB and REST APIs.</strong>

        <br /><br />

        This E-Commerce platform is one of my major full-stack projects,
        featuring secure JWT Authentication, Admin Dashboard, Product
        Management, Shopping Cart, Razorpay Payment Integration and complete
        deployment using Render.

        <br /><br />

        I enjoy solving real-world problems through clean, efficient code and
        continuously improving my skills by working on practical projects.

        <br /><br />

        I am actively seeking opportunities as a
        <strong> Full Stack (MERN) Developer</strong> where I can contribute,
        learn new technologies and grow as a professional software developer.
      </p>

      <div
        style={{
          marginTop: "35px",
          marginBottom: "30px"
        }}
      >
        <h3
          style={{
            color: "#f97316",
            marginBottom: "15px"
          }}
        >
          Technical Skills
        </h3>

        <p
          style={{
            color: "#d4d4d8",
            lineHeight: "2"
          }}
        >
          HTML5 • CSS3 • JavaScript • React.js • Redux Toolkit • Node.js •
          Express.js • MongoDB • JWT Authentication • REST APIs • Razorpay •
          Git • GitHub • Render • Responsive Web Design
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          marginTop: "25px"
        }}
      >
        <a
          href="https://www.instagram.com/shurveersingh_67?igsh=MXllNjlkNDkyNWpn"
          target="_blank"
          rel="noreferrer"
          style={{
            ...socialBtnStyle,
            background: "rgba(236,72,153,0.2)",
            borderColor: "#ec4899",
            color: "#ec4899"
          }}
        >
          📸 Instagram
        </a>

        <a
          href="https://x.com/Shurveer9"
          target="_blank"
          rel="noreferrer"
          style={socialBtnStyle}
        >
          ✖️ X (Twitter)
        </a>

        <a
          href="https://wa.me/917627001176"
          target="_blank"
          rel="noreferrer"
          style={{
            ...socialBtnStyle,
            background: "rgba(16,185,129,0.2)",
            borderColor: "#10b981",
            color: "#10b981"
          }}
        >
          💬 WhatsApp
        </a>
      </div>

    </div>
  );
};

export default About;