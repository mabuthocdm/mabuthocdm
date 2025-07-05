
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  const teamMembers = [
    {
      name: "Cyril Msani",
      role: "Chief Executive Officer",
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
      bio: "Passionate advocate for social impact and community development initiatives.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "khosi@organization.com"
      }
    }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

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
                <Avatar className="w-32 h-32 mx-auto ring-4 ring-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    {getInitials(member.name)}
                  </AvatarFallback>
                </Avatar>
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
