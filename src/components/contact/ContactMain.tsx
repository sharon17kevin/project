import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function ContactMain() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-[90vw] mx-auto px-4 py-8 font-darkerGrotesque">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-2">Contact Us</h1>
        <p className="text-gray-500">Get in touch with our team</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className=" md:border-r-2 border-black p-8">
          <h2 className="text-2xl font-semibold text-black mb-6">Get in Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="border-2 border-black p-3 rounded-full">
                <Mail className="text-black w-3 h-3" />
              </div>
              <div>
                <h3 className="font-medium text-black">Email</h3>
                <p className="text-gray-500">contact@imageeditor.com</p>
                <p className="text-gray-500">support@imageeditor.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="border-2 border-black p-3 rounded-full">
                <Phone className="text-black w-3 h-3" />
              </div>
              <div>
                <h3 className="font-medium text-black">Phone</h3>
                <p className="text-gray-500">+1 (555) 123-4567</p>
                <p className="text-gray-500">+1 (555) 987-6543</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="border-2 border-black p-3 rounded-full">
                <MapPin className="text-black w-3 h-3" />
              </div>
              <div>
                <h3 className="font-medium text-black">Address</h3>
                <p className="text-gray-500">
                  123 Image Editor Street<br />
                  San Francisco, CA 94105<br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                Email <span className='text-red-400'>* required</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-black mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMain;