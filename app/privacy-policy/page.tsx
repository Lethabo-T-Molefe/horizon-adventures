import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="Privacy Policy"
        subtitle="Your privacy is important to us. Learn how we collect, use, and protect your information."
        backgroundImage="/dramatic-south-african-mountain-landscape-panorama.jpg"
      />

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Horizon Adventures ("we", "our", or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website and use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Personal Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Register for an account or make a booking</li>
                      <li>Contact us through our contact forms</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Participate in surveys or promotions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Automatically Collected Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We automatically collect certain information when you visit our website, including:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>IP address and browser type</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Device information and operating system</li>
                      <li>Referring website addresses</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Process and manage your bookings and reservations</li>
                  <li>Communicate with you about your bookings and our services</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Analyze website usage and trends</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store 
                  certain information. You can control cookie preferences through your browser settings or our 
                  cookie consent banner. For more information, please see our Cookie Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Data Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Service providers who assist us in operating our website and conducting our business</li>
                  <li>Business partners for joint marketing efforts (with your consent)</li>
                  <li>Legal authorities when required by law or to protect our rights</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Your Rights (GDPR/CCPA)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Right to Rectification:</strong> Correct inaccurate personal data</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                  <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                  <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
                  <li><strong>Right to Opt-Out:</strong> Opt-out of sale of personal information (CCPA)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, please contact us at{" "}
                  <a href="mailto:Horizonadventuresza@gmail.com" className="text-primary hover:underline">
                    Horizonadventuresza@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. However, no 
                  method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes 
                  outlined in this Privacy Policy, unless a longer retention period is required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect 
                  personal information from children. If you believe we have collected information from a child, 
                  please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by 
                  posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-muted-foreground">
                    <strong>Horizon Adventures</strong><br />
                    Email:{" "}
                    <a href="mailto:Horizonadventuresza@gmail.com" className="text-primary hover:underline">
                      Horizonadventuresza@gmail.com
                    </a>
                    <br />
                    Phone:{" "}
                    <a href="tel:+27604381561" className="text-primary hover:underline">
                      +27 60 438 1561
                    </a>
                    <br />
                    Location: Pretoria, Gauteng, South Africa
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm text-muted-foreground">
                  Last Updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
