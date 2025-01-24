import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  
}

interface TimelineProps {
  experiences: Experience[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-700"></div>

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className={`flex items-center ${
              index % 2 === 0 ? 'flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="w-1/2 px-8">
              <motion.div
                className={`bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${
                  index % 2 === 0 ? 'ml-8' : 'mr-8'
                }`}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
                <h4 className="text-lg text-blue-400 mb-2">{experience.company}</h4>
                <div className="flex items-center text-gray-400 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{experience.period}</span>
                </div>
                <p className="text-gray-300" style={{ whiteSpace: 'pre-wrap' }}>{experience.description}</p>
              </motion.div>
            </div>
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-800"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;