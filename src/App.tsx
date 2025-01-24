import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import Timeline from './components/Timeline';
import Navbar from './components/Navbar';
import { experiences } from './data/experiences';

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Hi, I'm <span className="gradient-text">Haider Ali</span>
            </h1>
            <motion.p 
  className="text-xl text-gray-300 mb-8 leading-relaxed"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.8 }}
>
  <em>
    A <span className="font-bold text-white">Front-end Developer</span> skilled in 
    <span className="font-medium text-blue-400"> React Native</span>, 
    <span className="font-medium text-blue-400"> Flutter</span>, 
    <span className="font-medium text-blue-400"> RESTful APIs</span>, 
    <span className="font-medium text-blue-400"> JavaScript</span>, and 
    <span className="font-medium text-blue-400"> Dart</span>.  
    Passionate about building <span className="text-blue-400">scalable</span>, 
    <span className="font-medium text-blue-400"> user-centric applications</span> with 
    <span className="font-medium text-blue-400"> elegant interfaces</span>.
  </em>
</motion.p>



            <motion.div 
              className="flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              
              {[
                { icon: Github, href: "https://github.com/Haiderr-Ali" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/haiderali81/" },
                { icon: Mail, href: "mailto:alihaiderali1050@gmail.com" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="p-2 text-gray-300 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
              alt="Developer Illustration"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1552308995-2baac1ad5490?auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div 
  className="flex-1 space-y-6"
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <p className="text-lg text-gray-600 leading-relaxed">
    <span className="text-2xl font-bold text-blue-600">Hello!</span>  
    <br />
    I am a passionate <span className="text-blue-500 font-semibold">Front-End Developer</span> and 
    <span className="text-blue-500 font-semibold"> Mobile App Developer</span>, specializing in building 
    <span className="italic text-gray-700"> scalable, user-centric applications</span> with 
    <span className="font-medium text-gray-800"> seamless interfaces.</span> 
    I excel in <span className="text-blue-500 font-semibold">React Native</span>, 
    <span className="text-blue-500 font-semibold"> Flutter</span>, and 
    <span className="text-blue-500 font-semibold"> RESTful APIs</span>, with a strong command of 
    <span className="font-medium"> JavaScript</span>, <span className="font-medium">Dart</span>, 
    and state management tools to deliver 
    <span className="italic"> visually dynamic and engaging solutions.</span>
  </p>

  <p className="text-lg text-gray-600 leading-relaxed">
    Currently, I am honing my expertise as an 
    <span className="text-blue-500 font-semibold"> Software Engineer at Mintways Technologies</span>, where I 
    work on <span className="font-medium">Flutter</span> and <span className="font-medium">React Native</span> to 
    deliver <span className="italic text-gray-700">impactful digital experiences.</span> My technical toolkit includes 
    <span className="font-medium"> Firebase</span>, <span className="font-medium">Git</span>, and a robust foundation 
    in <span className="italic">problem-solving</span> and architecture design.
  </p>

  <p className="text-lg text-gray-600 leading-relaxed">
    Beyond coding, I have a passion for 
    <span className="italic text-gray-700"> continuous learning</span> and staying ahead with emerging technologies 
    to <span className="italic text-gray-700"> innovate</span> and enhance user experiences. 
    When I am not building solutions, you can find me exploring new places, playing cricket, or drawing inspiration 
    from <span className="italic text-gray-700">thought-provoking books.</span>
  </p>

  <p className="text-lg text-gray-600 leading-relaxed font-poppins">
    <span className="text-blue-600 font-bold">My Skills:</span> <em className=' font-semibold'>React Native, Flutter, Dart, Firebase, RESTful APIs, 
    Redux, Provider, BLoC, JavaScript, React.js, HTML, CSS, Tailwind CSS, and Data Structures & Algorithms</em>.
  </p>
</motion.div>

          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience" 
        className="py-20 bg-gradient-to-br from-gray-900 to-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Experience
          </motion.h2>
          <Timeline experiences={experiences} />
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
  id="projects" 
  className="py-20 bg-white"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <div className="container mx-auto px-6">
    <motion.h2 
      className="text-4xl font-bold text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      Featured Projects
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2].map((project) => (
        <motion.div 
          key={project} 
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: project * 0.2 }}
          whileHover={{ y: -5 }}
        >
          <img
            src={
              project === 1
                ?  "/smp.webp" // Image for Project 1
                : project === 2
                ? "/ecm.webp" // Image for Project 2
                : `https://images.unsplash.com/photo-167${project}238491-${project}23?auto=format&fit=crop&w=800&q=80`
            }
            alt={`Project ${project}`}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">
              {project === 1
                ? "School Management App"
                : project === 2
                ? "E-Bazaar : Online Shopping Portal"
                : `Project Title ${project}`}
            </h3>
            {/* <p className="text-gray-700 mb-6 leading-relaxed">
  {project === 1
    ? "✨ A comprehensive school management mobile application developed with Flutter. This collaborative project showcases innovation and efficiency, completed with excellence at Mintways Technology."
    : project === 2
    ? "🛒 <span className='font-semibold'>E-Bazar</span> is a cutting-edge, fully responsive e-commerce platform built using <span className='font-semibold'>HTML, CSS, JavaScript,</span> and <span className='font-semibold'>React</span>. Designed for a seamless and engaging shopping experience, it effortlessly adapts to devices of all sizes, offering users an intuitive interface on desktops, tablets, and smartphones."
    : "ℹ️ A brief description of the project and the technologies utilized."}
</p> */}
<p className="text-gray-700 mb-6 leading-relaxed">
  {project === 1 ? (
    <>
      ✨ A comprehensive school management mobile application developed with <span className="font-semibold">Flutter</span>. 
      This collaborative project showcases innovation and efficiency, completed with excellence at Mintways Technology. 
      Key skills utilized include <span className="font-semibold">Flutter, BLoC, Firebase,</span> and <span className="font-semibold">REST APIs</span>.
    </>
  ) : project === 2 ? (
    <>
      🛒 <span className="font-semibold">E-Bazar</span> is a cutting-edge, fully responsive e-commerce platform built using{" "}
      <span className="font-semibold">React, JavaScript, HTML,</span> and <span className="font-semibold">Tailwind CSS</span>. 
      Designed for a seamless and engaging shopping experience, it effortlessly adapts to devices of all sizes, offering users 
      an intuitive interface on desktops, tablets, and smartphones. The project also integrates <span className="font-semibold">APIs </span> 
      for dynamic functionality.
    </>
  ) : (
    "ℹ️ A brief description of the project and the technologies utilized."
  )}
</p>
{project === 2 && (
  <a 
    href="https://e-bazaronlineshop.netlify.app/" 
    className="text-blue-600 hover:text-blue-800 font-medium underline" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    🌐 Visit: https://e-bazaronlineshop.netlify.app/
  </a>
)}

          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>



      {/* Footer */}
      <motion.footer 
        className="bg-gray-900 text-white py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 Haider Ali. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;