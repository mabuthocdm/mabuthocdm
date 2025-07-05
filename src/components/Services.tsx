
import { Code, Palette, BarChart3, Rocket, Shield, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices for optimal performance.",
      features: ["React & Next.js", "Full-stack Solutions", "API Integration", "Performance Optimization"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive and engaging digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and visualization tools.",
      features: ["Business Intelligence", "Custom Dashboards", "Data Visualization", "Reporting"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Rocket,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation strategies to accelerate your business growth.",
      features: ["Strategic Planning", "Market Analysis", "Growth Hacking", "Innovation Consulting"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security audits and implementation.",
      features: ["Security Audits", "Compliance", "Risk Assessment", "Security Training"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Headphones,
      title: "Support & Maintenance",
      description: "Ongoing support and maintenance to keep your systems running smoothly and efficiently.",
      features: ["24/7 Monitoring", "Regular Updates", "Bug Fixes", "Performance Optimization"],
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive solutions designed to meet your unique business needs 
            and drive sustainable growth in today's digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Don't see what you're looking for? We offer custom solutions tailored to your specific needs.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4">
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
