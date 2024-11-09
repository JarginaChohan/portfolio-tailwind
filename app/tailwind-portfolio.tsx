"use client"

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import abc from "../app/1000525530.jpg"
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about')
  const sectionRefs:any = {
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  }

  const scrollToSection = (section:any) => {
    setActiveSection(section)
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex justify-center space-x-8">
            {['about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`text-lg font-medium transition-colors duration-300 ${
                    activeSection === section ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-16">
        <section ref={sectionRefs.about} className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Image src={abc} alt="Jargina Chohan" className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-white shadow-lg" />
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Jargina Chohan</h1>
            <p className="text-xl text-blue-600 mb-6">MBA in HR | Web Developer | Lifelong Learner</p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate about leveraging my diverse skill set in HR and web development to drive organizational growth and innovation. Committed to continuous learning and applying cutting-edge technologies to solve real-world problems.
            </p>
          </motion.div>
        </section>

        <section ref={sectionRefs.skills} className="bg-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Skills & Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: 'HTML/CSS', icon: '🌐' },
                { name: 'JavaScript', icon: '📜' },
                { name: 'React', icon: '⚛️' },
                { name: 'Next.js', icon: '▲' },
                { name: 'Tailwind CSS', icon: '🎨' },
                { name: 'TypeScript', icon: '🔷' },
                { name: 'MS Office', icon: '📊' },
                { name: 'HR Management', icon: '👥' },
                { name: 'Project Management', icon: '📅' }
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-100 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <span className="text-4xl mb-2 block">{skill.icon}</span>
                  <h3 className="text-lg font-medium text-gray-800">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section ref={sectionRefs.projects} className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Projects & Experience</h2>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Current Work Experience</h3>
                <p className="text-gray-600">Currently, I am working in a Government School, where I apply my HR knowledge and continuously develop my web development skills to enhance educational processes and systems.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Ongoing Certification</h3>
                <p className="text-gray-600">Artificial Intelligence, Web 3.0 & Metaverse: An intensive program from Governor House Karachi, focusing on cutting-edge technologies that are shaping the future of the digital landscape.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section ref={sectionRefs.contact} className="bg-gray-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-xl mb-8">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <a href="mailto:jargina.chohan7@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Email Me
              </a>
              <p className="text-gray-300">Phone: 0336-2824083</p>
            </div>
            <div className="mt-8 flex justify-center space-x-6">
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jargina-chohan-5313a71aa?', icon: '🔗' },
                { name: 'Facebook', url: 'https://www.facebook.com/Jargina.chohan509', icon: '📘' },
                { name: 'Instagram', url: 'https://www.instagram.com/jargina.chohan509?igsh=Z2tvNTlhaXhsa2Zi', icon: '📷' },
                { name: 'GitHub', url: 'https://github.com/JarginaChohan', icon: '🐙' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition duration-300"
                  aria-label={`Visit Jargina's ${social.name} profile`}
                >
                  <span className="text-2xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Jargina Chohan. All rights reserved.</p>
      </footer>
    </div>
  )
}