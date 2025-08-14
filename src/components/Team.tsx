import React from 'react';
import { Instagram, MessageSquare, Mail, Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Soumya Mahato',
      role: 'Vibe Coder',
      image: 'https://ik.imagekit.io/soumya3301/4.png?updatedAt=1750741699812',
      skills: [
        { name: 'Vibe Coding', color: 'emerald' },
        { name: 'AI and ML', color: 'blue' },
        { name: 'Vibe Design', color: 'purple' }
      ],
      social: {
        instagram: 'https://www.instagram.com/soumya.attention/',
        linkedin: 'https://www.linkedin.com/in/imsoumya423/',
        twitter: 'https://x.com/soumyattention'
      }
    },
    {
      id: 2,
      name: 'Yusra Fawad',
      role: 'Creative Head',
      image: 'https://ik.imagekit.io/soumya3301/5.png?updatedAt=1750741699602',
      skills: [
        { name: 'Visual Design', color: 'pink' },
        { name: 'Creative Photography', color: 'orange' },
        { name: 'Vibe Coding', color: 'emerald' }
      ],
      social: {
        instagram: 'https://www.instagram.com/yusrattention/',
        linkedin: 'https://www.linkedin.com/in/yusrafawad/',
        twitter: 'https://x.com/yusrattention'
      }
    }
  ];

  const getSkillColors = (color: string) => {
    const colorMap = {
      emerald: {
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(5, 150, 105, 0.18) 50%, rgba(16, 185, 129, 0.12) 100%)',
        border: 'rgba(16, 185, 129, 0.3)',
        text: 'rgba(6, 78, 59, 0.9)',
        shadow: '0 4px 15px rgba(16, 185, 129, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        glow: 'rgba(16, 185, 129, 0.2)'
      },
      blue: {
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(37, 99, 235, 0.18) 50%, rgba(59, 130, 246, 0.12) 100%)',
        border: 'rgba(59, 130, 246, 0.3)',
        text: 'rgba(30, 58, 138, 0.9)',
        shadow: '0 4px 15px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        glow: 'rgba(59, 130, 246, 0.2)'
      },
      purple: {
        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.12) 0%, rgba(126, 34, 206, 0.18) 50%, rgba(147, 51, 234, 0.12) 100%)',
        border: 'rgba(147, 51, 234, 0.3)',
        text: 'rgba(76, 29, 149, 0.9)',
        shadow: '0 4px 15px rgba(147, 51, 234, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        glow: 'rgba(147, 51, 234, 0.2)'
      },
      pink: {
        background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.12) 0%, rgba(219, 39, 119, 0.18) 50%, rgba(236, 72, 153, 0.12) 100%)',
        border: 'rgba(236, 72, 153, 0.3)',
        text: 'rgba(131, 24, 67, 0.9)',
        shadow: '0 4px 15px rgba(236, 72, 153, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        glow: 'rgba(236, 72, 153, 0.2)'
      },
      orange: {
        background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.12) 0%, rgba(234, 88, 12, 0.18) 50%, rgba(249, 115, 22, 0.12) 100%)',
        border: 'rgba(249, 115, 22, 0.3)',
        text: 'rgba(154, 52, 18, 0.9)',
        shadow: '0 4px 15px rgba(249, 115, 22, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        glow: 'rgba(249, 115, 22, 0.2)'
      }
    };
    
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return Instagram;
      case 'linkedin':
        return Linkedin;
      case 'twitter':
        return Twitter;
      default:
        return Twitter;
    }
  };

  const getSocialColor = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return 'hover:from-pink-500 hover:to-purple-600 hover:shadow-pink-500/25 hover:text-white';
      case 'linkedin':
        return 'hover:from-blue-600 hover:to-blue-700 hover:shadow-blue-600/25 hover:text-white';
      case 'twitter':
        return 'hover:from-blue-400 hover:to-blue-500 hover:shadow-blue-400/25 hover:text-white';
      default:
        return 'hover:from-gray-500 hover:to-gray-600 hover:shadow-gray-500/25 hover:text-white';
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50/20 to-yellow-50/20"></div>
      <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-amber-200/10 to-yellow-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-yellow-200/10 to-amber-300/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
            Meet Our Team
          </h2>
          <p className="text-lg sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            The creative minds and technical experts behind Jewelry AI's revolutionary photography platform.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="group relative"
            >
              {/* Glassmorphic Card */}
              <div 
                className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-yellow-500/5 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none"></div>

                <div className="relative p-6 sm:p-8">
                  {/* Profile Image */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div 
                        className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/30"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Floating indicator */}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-white/50">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-base sm:text-lg text-amber-600 font-semibold mb-4">
                      {member.role}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {member.skills.map((skill, index) => {
                        const colors = getSkillColors(skill.color);
                        return (
                        <span 
                          key={index}
                          className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                          style={{
                            background: colors.background,
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            border: `1px solid ${colors.border}`,
                            color: colors.text,
                            boxShadow: colors.shadow
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = `${colors.shadow}, 0 0 20px ${colors.glow}`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = colors.shadow;
                          }}
                        >
                          {skill.name}
                        </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="flex justify-center space-x-3">
                    {Object.entries(member.social).map(([platform, link]) => {
                      const IconComponent = getSocialIcon(platform);
                      const colorClasses = getSocialColor(platform);
                      
                      return (
                        <a
                          key={platform}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group/social w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg touch-manipulation hover:border-transparent ${colorClasses}`}
                          style={{
                            background: 'rgba(255, 255, 255, 0.15)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.25)'
                          }}
                        >
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 transition-colors duration-200" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-yellow-400/10 rounded-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div 
            className="inline-block rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Want to Work With Us?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              We're always looking for talented individuals to join our mission of revolutionizing jewelry photography with AI.
            </p>
            <a 
              href="#"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl touch-manipulation min-h-[48px] text-base sm:text-base"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;