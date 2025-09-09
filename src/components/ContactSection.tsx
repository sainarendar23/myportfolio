"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Calendar, User, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "smsainarendar23@gmail.com",
    href: "mailto:smsainarendar23@gmail.com"
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+91 7010308369", 
    href: "tel:+917010308369"
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "India",
    href: "#"
  }
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast("Message sent successfully! I'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleGetAppointment = () => {
    toast("Appointment booking system opened")
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge 
            variant="secondary" 
            className="bg-primary/20 text-primary border-primary/30 font-medium px-4 py-2 text-sm w-fit mb-4"
          >
            Get In Touch
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-foreground">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a project in mind or just want to chat about possibilities, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.label}
                  className="glass-effect rounded-xl p-4 hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {info.label}
                      </div>
                      <a 
                        href={info.href}
                        className="text-foreground font-semibold hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Appointment CTA */}
            <div className="glass-effect rounded-2xl p-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center space-y-4">
                <div className="p-4 bg-primary/20 rounded-full w-fit mx-auto">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-semibold text-foreground mb-2">
                    Get Appointment
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Schedule a call to discuss your project requirements and timeline.
                  </p>
                  <Button 
                    onClick={handleGetAppointment}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover-lift"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="glass-effect rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    Send Message
                  </h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="glass-effect border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="glass-effect border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="glass-effect border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, ideas, or questions..."
                      rows={6}
                      required
                      className="glass-effect border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium group hover-lift"
                  >
                    <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: "0.8s" }}>
          <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-display font-bold mb-4">
              Ready to Transform Your Ideas into Reality?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether you need a stunning website, a mobile app, or a complete digital transformation, 
              I'm here to help you achieve your goals with cutting-edge design and development solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={handleGetAppointment}
                className="px-8 py-3 text-base font-medium group bg-primary text-primary-foreground hover:bg-primary/90 hover-lift"
              >
                Schedule Consultation
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open("mailto:dharanidharans175@gmail.com", "_blank")}
                className="px-8 py-3 text-base font-medium group border-primary/30 text-foreground hover:bg-primary/10 hover-lift"
              >
                Email Directly
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}