
import { Linkedin, Twitter, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Cyril Msani",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Visionary leader driving the organization's strategic direction and growth.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "cyril@organization.com"
      }
    },
    {
      name: "Sibusiso Mlondi Shozi",
      role: "IT Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Technology expert ensuring robust IT infrastructure and innovative digital solutions.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sibusiso@organization.com"
      }
    },
    {
      name: "Khosi Majola",
      role: "Humanitarian",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Passionate advocate for social impact and community development initiatives.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "khosi@organization.com"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of experts brings together years of experience, 
            creativity, and passion to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                
                <div className="flex justify-center space-x-3">
                  <a 
                    href={member.social.linkedin} 
                    className="w-8 h-8 bg-gray-100 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
                  >
                    <Linkedin className="w-4 h-4 text-gray-600 group-hover:text-white" />
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="w-8 h-8 bg-gray-100 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors duration-300 group"
                  >
                    <Twitter className="w-4 h-4 text-gray-600 group-hover:text-white" />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`} 
                    className="w-8 h-8 bg-gray-100 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
                  >
                    <Mail className="w-4 h-4 text-gray-600 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
