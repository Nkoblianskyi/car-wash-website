export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-16rem)] py-16 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-accent">Privacy Policy</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">Your privacy is important to us.</p>
        </div>
        <div className="bg-card text-card-foreground p-8 rounded-lg border border-accent shadow-lg space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            This Privacy Policy describes how HyperSwap collects, uses, and discloses your personal information when you
            visit or make a purchase from our website.
          </p>

          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Information We Collect</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            When you visit the Site, we collect certain information about your device, your interaction with the Site,
            and information necessary to process your purchases. We may also collect additional information if you
            contact us for customer support. In this Privacy Policy, we refer to any information that can uniquely
            identify an individual (including the information below) as “Personal Information”. See the list below for
            more information about what Personal Information we collect and why.
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed text-muted-foreground space-y-2 pl-4">
            <li>
              <strong>Device information:</strong>
              <ul className="list-circle list-inside pl-6">
                <li>
                  Examples of Personal Information collected: version of web browser, IP address, time zone, cookie
                  information, what sites or products you view, search terms, and how you interact with the Site.
                </li>
                <li>
                  Purpose of collection: to load the Site accurately for you, and to perform analytics on Site usage to
                  optimize our Site.
                </li>
                <li>
                  Source of collection: Collected automatically when you access our Site using cookies, log files, web
                  beacons, tags, or pixels.
                </li>
              </ul>
            </li>
            <li>
              <strong>Order information:</strong>
              <ul className="list-circle list-inside pl-6">
                <li>
                  Examples of Personal Information collected: name, billing address, shipping address, payment
                  information (including credit card numbers), email address, and phone number.
                </li>
                <li>
                  Purpose of collection: to provide products or services to you to fulfill our contract, to process your
                  payment information, arrange for shipping, and provide you with invoices and/or order confirmations,
                  communicate with you, screen our orders for potential risk or fraud, and when in line with the
                  preferences you have shared with us, provide you with information or advertising relating to our
                  products or services.
                </li>
                <li>Source of collection: collected from you.</li>
              </ul>
            </li>
            <li>
              <strong>Customer support information:</strong>
              <ul className="list-circle list-inside pl-6">
                <li>Examples of Personal Information collected: name, email, message content.</li>
                <li>Purpose of collection: to provide customer support.</li>
                <li>Source of collection: collected from you.</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Sharing Personal Information</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We share your Personal Information with service providers to help us provide our services and fulfill our
            contracts with you, as described above. For example:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed text-muted-foreground space-y-2 pl-4">
            <li>
              We may share your Personal Information to comply with applicable laws and regulations, to respond to a
              subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our
              rights.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Your Rights</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            If you are a resident of the EEA or UK, you have the right to access the Personal Information we hold about
            you, to port it to a new service, and to ask that your Personal Information be corrected, updated, or
            erased. If you would like to exercise this right, please contact us through the contact information below.
          </p>

          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Changes</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We may update this Privacy Policy from time to time in order to reflect, for example, changes to our
            practices or for other operational, legal, or regulatory reasons.
          </p>

          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Contact</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            For more information about our privacy practices, if you have questions, or if you would like to make a
            complaint, please contact us by e-mail at info@hyperswap.hr or by mail using the details provided below:
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            HyperSwap
            <br />
            Ulica Ivana Gundulića 29
            <br />
            20000 Dubrovnik, Croatia
          </p>
          <p className="text-sm text-muted-foreground mt-8">Last updated: August 11, 2025</p>
        </div>
      </div>
    </div>
  )
}
