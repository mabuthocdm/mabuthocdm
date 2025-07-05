
import { Target, Users, Lightbulb, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "We're committed to delivering solutions that make a real impact on your business success."
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Our team works closely with clients to understand their unique needs and challenges."
    },
    {
      icon: Lightbulb,
      title: "Innovative",
      description: "We stay ahead of industry trends to provide cutting-edge solutions and strategies."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Quality and excellence are at the core of everything we do, ensuring exceptional results."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our Organization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to transform how businesses operate in the digital age, 
            we've grown into a trusted partner for organizations seeking innovation and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
              alt="Team collaboration" 
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Building Tomorrow's Solutions Today
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over a decade of combined experience, our team brings together diverse expertise 
              in technology, strategy, and innovation. We believe in the power of collaboration 
              and the importance of understanding each client's unique journey.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our approach combines cutting-edge technology with human-centered design, 
              ensuring that every solution we deliver not only meets technical requirements 
              but also creates meaningful experiences for end users.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
