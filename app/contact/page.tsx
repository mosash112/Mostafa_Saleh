import SendEmailForm from "@/components/forms/sendEmailForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 animate-fade-up">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Form */}
        <div className="w-full order-2 lg:order-1">
          <Card className="glass-card rounded-3xl overflow-hidden border-none shadow-2xl">
            <CardHeader className="bg-primary/10 pb-8 text-center lg:text-left">
              <CardTitle className="text-3xl font-outfit font-bold">Get in Touch</CardTitle>
              <CardDescription className="text-foreground/70 text-lg">
                Have a project in mind? Send me a message and I&apos;ll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8 px-2 lg:px-6">
              <SendEmailForm />
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Direct Info */}
        <div className="flex flex-col gap-8 order-1 lg:order-2 lg:pt-10">
          <div className="space-y-2 text-center lg:text-left">
            <h1 className="text-5xl font-outfit font-extrabold tracking-tight pb-3">
              {"Let's build something "}
              <span className="text-primary italic">extraordinary</span>
              {" together."}
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed">
              {"I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."}
            </p>
          </div>

          <div className="grid gap-6">
            <div className="glass-card p-4 md:p-6 rounded-2xl flex items-center gap-4 md:gap-6 hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30 shrink-0">
                <Phone className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div>
                <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-primary mb-1">Call Me</p>
                <p className="text-lg md:text-xl font-medium">+20 100 051 8165</p>
              </div>
            </div>

            <div className="glass-card p-4 md:p-6 rounded-2xl flex items-center gap-4 md:gap-6 hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30 shrink-0">
                <Mail className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div>
                <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-primary mb-1">Email Me</p>
                <p className="text-lg md:text-xl font-medium break-all">mashalex2000@gmail.com</p>
              </div>
            </div>

            <div className="glass-card p-4 md:p-6 rounded-2xl flex items-center gap-4 md:gap-6 hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30 shrink-0">
                <MapPin className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div>
                <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-primary mb-1">Location</p>
                <p className="text-lg md:text-xl font-medium">Alexandria, Egypt</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}