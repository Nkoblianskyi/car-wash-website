export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-16rem)] py-16 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-accent">Cookie Policy</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">Understanding how we use cookies.</p>
        </div>
        <div className="bg-card text-card-foreground p-8 rounded-lg border border-accent shadow-lg space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            This Cookie Policy explains what cookies are, how HyperSwap uses them, and your choices regarding their use.
          </p>

          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">What are Cookies?</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Cookies are small pieces of data stored on your device (computer or mobile device) when you visit a website.
            They are widely used to make websites work more efficiently, as well as to provide reporting information and
            assist with personalization.
          </p>

          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">How We Use Cookies</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">We use cookies for several reasons:</p>
          <ul className="list-disc list-inside text-lg leading-relaxed text-muted-foreground space-y-2 pl-4">
            <li>
              <strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services
              available through our website and to enable you to use some of its features, such as accessing secure
              areas.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> These cookies collect information that is used either in aggregate
              form to help us understand how our website is being used or how effective our marketing campaigns are, or
              to help us customize our website for you.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you make when
              you use our website, such as remembering your login details or language preferences. The purpose of these
              cookies is to provide you with a more personal experience and to avoid you having to re-enter your
              preferences every time you visit our website.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Your Choices Regarding Cookies</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences
            by clicking on the appropriate opt-out links provided in the cookie banner or by setting your browser to
            refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or
            refuse cookies, please note that some parts of this website may become inaccessible or not function
            properly.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Most web browsers allow some control of most cookies through the browser settings. To find out more about
            cookies, including how to see what cookies have been set and how to manage and delete them, visit{" "}
            <a
              href="https://www.allaboutcookies.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-accent hover:text-accent/80"
            >
              www.allaboutcookies.org
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Changes to Our Cookie Policy</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
            Cookie Policy on this page. You are advised to review this Cookie Policy periodically for any changes.
          </p>

          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Contact Us</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            If you have any questions about our use of cookies, please contact us at info@hyperswap.hr.
          </p>
          <p className="text-sm text-muted-foreground mt-8">Last updated: August 11, 2025</p>
        </div>
      </div>
    </div>
  )
}
