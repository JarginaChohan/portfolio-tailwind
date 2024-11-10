'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import abc from "../app/1000525530.jpg"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about')
  const sectionRefs: any = {
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    Object.values(sectionRefs).forEach((ref:any) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (section: string) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-rose-50 to-teal-50 min-h-screen">
      <header className="bg-white/80 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-8">
            {['about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`text-lg font-medium transition-all duration-300 ${
                    activeSection === section
                      ? 'text-teal-600 scale-110'
                      : 'text-gray-600 hover:text-teal-500 hover:scale-105'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-20">
        <section id="about" ref={sectionRefs.about} className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <Image
                src={abc}
                alt="Jargina Chohan"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-gray-800 animate-fade-in">Jargina Chohan</h1>
            <p className="text-2xl text-teal-600 mb-6 animate-fade-in-delay-1">MBA in HR | Web Developer | Lifelong Learner</p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-delay-2">
              Passionate about leveraging my diverse skill set in HR and web development to drive organizational growth and innovation. Committed to continuous learning and applying cutting-edge technologies to solve real-world problems.
            </p>
          </div>
        </section>

        <section id="skills" ref={sectionRefs.skills} className="bg-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Skills & Expertise</h2>
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
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="bg-gradient-to-br from-teal-50 to-rose-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="text-4xl mb-4 block animate-bounce-slow">{skill.icon}</span>
                  <h3 className="text-lg font-medium text-gray-800">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" ref={sectionRefs.projects} className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Projects & Experience</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-semibold mb-4 text-teal-600">Current Work Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  Currently, I am working in a Government School, where I apply my HR knowledge and continuously develop my web development skills to enhance educational processes and systems. This role allows me to bridge the gap between traditional education and modern technology, creating innovative solutions for both staff and students.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-semibold mb-4 text-teal-600">Ongoing Certification</h3>
                <p className="text-gray-600 leading-relaxed">
                  Artificial Intelligence, Web 3.0 & Metaverse: An intensive program from Governor House Karachi, focusing on cutting-edge technologies that are shaping the future of the digital landscape. This certification is enhancing my technical skills and providing me with insights into emerging trends that will revolutionize various industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" ref={sectionRefs.contact} className="bg-gradient-to-br from-teal-900 to-gray-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 animate-fade-in">Get in Touch</h2>
            <p className="text-xl mb-8 animate-fade-in-delay-1">I am always open to new opportunities and collaborations. Feel free to reach out!</p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 animate-fade-in-delay-2">
              <a href="mailto:jargina.chohan7@gmail.com" className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:-translate-y-1">
                Email Me
              </a>
              <p className="text-gray-300">Phone: 0336-2xxxxx</p>
            </div>
            <div className="mt-12 flex justify-center space-x-8 animate-fade-in-delay-3">
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
                  className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label={`Visit Jargina's ${social.name} profile`}
                >
                  <span className="text-3xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Jargina Chohan. All rights reserved.</p>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-delay-1 {
          animation: fadeIn 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-3 {
          animation: fadeIn 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(5%); }
        }
      `}</style>
    </div>
  )
}