import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Trophy, Star } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Personal Training",
      duration: "1-on-1 Sessions",
      students: "50+",
      rating: 4.9,
      price: "₹2,000/session",
      description: "Customized workout plans and nutrition guidance tailored to your specific goals.",
      features: ["Personalized workout plans", "Nutrition guidance", "Progress tracking", "24/7 support"]
    },
    {
      id: 2,
      title: "Group Fitness",
      duration: "60 min sessions",
      students: "200+",
      rating: 4.8,
      price: "₹800/session",
      description: "High-energy group workouts that build strength, endurance, and community.",
      features: ["Group motivation", "Varied workouts", "Social fitness", "Cost effective"]
    },
    {
      id: 3,
      title: "Online Coaching",
      duration: "Flexible timing",
      students: "300+",
      rating: 4.9,
      price: "₹1,200/month",
      description: "Remote fitness coaching with video calls, custom plans, and continuous support.",
      features: ["Video consultations", "Custom meal plans", "Workout videos", "Progress monitoring"]
    }
  ];

  return (
    <section id="courses" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-200/20 to-amber-200/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of fitness programs designed to help you achieve your goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-full hover:bg-white/25 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.rating)
                              ? 'text-amber-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                  </div>
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                    {course.price}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-amber-600 transition-colors">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-5 h-5 mr-3 text-amber-600" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="w-5 h-5 mr-3 text-amber-600" />
                    <span>{course.students} students trained</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Trophy className="w-5 h-5 mr-3 text-amber-600" />
                    <span>Proven results</span>
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;