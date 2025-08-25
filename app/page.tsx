"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  Target,
  MessageCircle,
  ArrowRight,
  Globe,
  Lightbulb,
  GraduationCap,
  Code,
  Zap,
} from "lucide-react"

export default function IUCEERITLandingPage() {
  const [currentAchievement, setCurrentAchievement] = useState(0)
  const [chatbotOpen, setChatbotOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const achievements = [
    {
      id: 1,
      title: "Best Student Chapter Award 2024",
      image: "/community-impact-award-ceremony.png",
      description:
        "Recognized by IUCEE for outstanding contribution to engineering education and student development initiatives.",
    },
    {
      id: 2,
      title: "Innovation Excellence Prize",
      image: "/green-innovation-technology-display.png",
      description:
        "Awarded for developing cutting-edge engineering solutions and promoting innovation in technical education.",
    },
    {
      id: 3,
      title: "Leadership Development Recognition",
      image: "/youth-leadership-conference-stage.png",
      description: "Honored for empowering engineering students and fostering next-generation technical leadership.",
    },
  ]

  const timelineEvents = [
    {
      year: "2020",
      title: "IUCEE-RIT Chapter Founded",
      description: "Established to promote engineering education excellence",
    },
    {
      year: "2021",
      title: "First Technical Workshop",
      description: "Launched hands-on engineering skill development programs",
    },
    {
      year: "2022",
      title: "Industry Partnership Program",
      description: "Collaborated with 20+ tech companies for student exposure",
    },
    { year: "2023", title: "National Recognition", description: "Received IUCEE's Outstanding Chapter Award" },
    { year: "2024", title: "500+ Active Members", description: "Reached milestone of 500 engineering students" },
  ]

  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Faculty Advisor",
      image: "/professional-man-program-manager.png",
      bio: "Professor of Computer Science with 15+ years in engineering education and research.",
    },
    {
      name: "Priya Sharma",
      role: "Student President",
      image: "/professional-woman-executive-director.png",
      bio: "Final year Computer Science student passionate about technical innovation and leadership.",
    },
    {
      name: "Arjun Patel",
      role: "Technical Lead",
      image: "/professional-man-program-manager.png",
      bio: "Electronics Engineering student specializing in IoT and embedded systems development.",
    },
    {
      name: "Sneha Reddy",
      role: "Events Coordinator",
      image: "/professional-woman-communications-lead.png",
      bio: "Mechanical Engineering student focused on organizing technical events and workshops.",
    },
    {
      name: "Vikram Singh",
      role: "Industry Relations",
      image: "/professional-man-program-manager.png",
      bio: "Information Technology student building bridges between academia and industry.",
    },
    {
      name: "Ananya Gupta",
      role: "Research Coordinator",
      image: "/professional-woman-communications-lead.png",
      bio: "Biomedical Engineering student leading research initiatives and publications.",
    },
  ]

  const sdgGoals = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Quality Education",
      description: "Advancing engineering education",
    },
    { icon: <Code className="h-8 w-8" />, title: "Innovation", description: "Fostering technological innovation" },
    { icon: <Zap className="h-8 w-8" />, title: "Clean Energy", description: "Sustainable technology solutions" },
    { icon: <Globe className="h-8 w-8" />, title: "Industry Growth", description: "Building industry partnerships" },
  ]

  const upcomingEvents = [
    {
      title: "Technical Symposium 2024",
      date: "March 15, 2024",
      description: "Annual technical conference featuring industry experts and student presentations",
    },
    {
      title: "Coding Bootcamp",
      date: "March 22, 2024",
      description: "Intensive programming workshop for skill development and placement preparation",
    },
    {
      title: "Industry Connect Summit",
      date: "April 5, 2024",
      description: "Networking event connecting students with leading technology companies",
    },
  ]

  const galleryImages = [
    { src: "/environmental-event-.png", title: "Technical Workshop", description: "Hands-on learning session" },
    { src: "/community-impact-award-ceremony.png", title: "Award Ceremony", description: "Recognition event" },
    {
      src: "/green-innovation-technology-display.png",
      title: "Innovation Showcase",
      description: "Student projects display",
    },
    {
      src: "/youth-leadership-conference-stage.png",
      title: "Leadership Conference",
      description: "Student leadership development",
    },
    { src: "/environmental-event-.png", title: "Industry Visit", description: "Corporate exposure program" },
    {
      src: "/community-impact-award-ceremony.png",
      title: "Research Presentation",
      description: "Academic research showcase",
    },
  ]

  const nextAchievement = () => {
    setCurrentAchievement((prev) => (prev + 1) % achievements.length)
  }

  const prevAchievement = () => {
    setCurrentAchievement((prev) => (prev - 1 + achievements.length) % achievements.length)
  }

  const nextGalleryImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevGalleryImage = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">IUCEE-RIT</div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#achievements" className="text-foreground hover:text-primary transition-colors">
              Achievements
            </a>
            <a href="#events" className="text-foreground hover:text-primary transition-colors">
              Events
            </a>
            <a href="#join" className="text-foreground hover:text-primary transition-colors">
              Join Us
            </a>
          </div>
          <Button>Get Involved</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Empowering Engineering Excellence
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join IUCEE-RIT, where innovation meets education. We're building the next generation of engineering
              leaders through cutting-edge programs, industry partnerships, and collaborative learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Join Our Chapter <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Gallery */}
      <section id="achievements" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="relative max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative">
                <img
                  src={achievements[currentAchievement].image || "/placeholder.svg"}
                  alt={achievements[currentAchievement].title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80"
                  onClick={prevAchievement}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80"
                  onClick={nextAchievement}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">{achievements[currentAchievement].title}</h3>
                <p className="text-muted-foreground">{achievements[currentAchievement].description}</p>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-4 space-x-2">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentAchievement ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentAchievement(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <Card className={`w-5/12 ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{event.year}</Badge>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us - Scrollable Team */}
      <section id="about" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="relative max-w-7xl mx-auto">
            <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory">
              {teamMembers.map((member, index) => (
                <Card key={index} className="min-w-[280px] flex-shrink-0 text-center snap-center">
                  <CardHeader>
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Scroll indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SDG Goals */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Focus Areas</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {sdgGoals.map((goal, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 group-hover:text-secondary transition-colors">{goal.icon}</div>
                  <h3 className="font-bold mb-2">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What is the Club About */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">What is IUCEE-RIT About?</h2>
          <Tabs defaultValue="mission" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="impact">Impact</TabsTrigger>
            </TabsList>
            <TabsContent value="mission" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    IUCEE-RIT is dedicated to transforming engineering education through innovative teaching
                    methodologies, industry collaboration, and student-centered learning. We bridge the gap between
                    academic knowledge and industry requirements, preparing students for successful engineering careers.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="activities" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Our Activities</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Technical Workshops</h4>
                        <p className="text-muted-foreground">
                          Hands-on sessions on cutting-edge technologies and engineering practices
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Industry Partnerships</h4>
                        <p className="text-muted-foreground">
                          Collaborations with leading companies for internships, projects, and placements
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Research Initiatives</h4>
                        <p className="text-muted-foreground">
                          Student-led research projects and publications in engineering domains
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="impact" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">Students Trained</span>
                        <span className="text-primary font-bold">2,000+</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">Industry Partners</span>
                        <span className="text-primary font-bold">50+</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">Technical Events</span>
                        <span className="text-primary font-bold">100+</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-none">
            <CardContent className="p-12">
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-foreground">
                "To be the leading student chapter that transforms engineering education, fostering innovation, industry
                readiness, and lifelong learning among future engineers."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm font-semibold">{event.date}</span>
                  </div>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery - Immersive Layout */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Past Events Gallery</h2>
          <div className="max-w-6xl mx-auto">
            {/* Main featured image */}
            <div className="relative mb-8">
              <Card className="overflow-hidden">
                <div className="relative h-96 md:h-[500px]">
                  <img
                    src={galleryImages[currentGalleryIndex].src || "/placeholder.svg"}
                    alt={galleryImages[currentGalleryIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">{galleryImages[currentGalleryIndex].title}</h3>
                    <p className="text-lg opacity-90">{galleryImages[currentGalleryIndex].description}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
                    onClick={prevGalleryImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
                    onClick={nextGalleryImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Thumbnail grid */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {galleryImages.map((image, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden cursor-pointer transition-all hover:shadow-lg ${
                    index === currentGalleryIndex ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setCurrentGalleryIndex(index)}
                >
                  <img src={image.src || "/placeholder.svg"} alt={image.title} className="w-full h-24 object-cover" />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section id="join" className="py-16 px-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Shape Your Engineering Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join IUCEE-RIT and be part of a community that's revolutionizing engineering education. Connect with
            industry leaders, develop cutting-edge skills, and build your professional network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Users className="mr-2 h-5 w-5" />
              Become a Member
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Attend Events
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">IUCEE-RIT</h3>
              <p className="opacity-90">
                Empowering engineering excellence through innovative education, industry partnerships, and student
                development.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </a>
                <a href="#achievements" className="block opacity-90 hover:opacity-100 transition-opacity">
                  Achievements
                </a>
                <a href="#events" className="block opacity-90 hover:opacity-100 transition-opacity">
                  Events
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get Involved</h4>
              <div className="space-y-2">
                <a href="#join" className="block opacity-90 hover:opacity-100 transition-opacity">
                  Join Us
                </a>
                <a href="#" className="block opacity-90 hover:opacity-100 transition-opacity">
                  Volunteer
                </a>
                <a href="#" className="block opacity-90 hover:opacity-100 transition-opacity">
                  Partner With Us
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 opacity-90">
                <p>iucee@rit.edu</p>
                <p>+1 (585) 475-2411</p>
                <p>Rochester Institute of Technology</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-primary-foreground/20" />
          <div className="text-center opacity-90">
            <p>&copy; 2024 IUCEE-RIT Chapter. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg chatbot-pulse"
          onClick={() => setChatbotOpen(!chatbotOpen)}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        {chatbotOpen && (
          <Card className="absolute bottom-16 right-0 w-80 shadow-xl">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">IUCEE-RIT Assistant</CardTitle>
              <CardDescription>How can I help you today?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                Learn about our programs
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                How to join IUCEE-RIT
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                Upcoming technical events
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                Industry partnerships
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
