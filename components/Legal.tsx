import Link from "next/link";
import type { ReactNode } from "react";
import { firm } from "@/lib/site";

export const updated = "October 12, 2026";
type Block = { h: string; p: (string | ReactNode)[] };

const contactLines = (
  <>
    {firm.legalName}<br />
    {firm.street}, {firm.city}, {firm.state} {firm.zip}<br />
    <a href={firm.phoneHref} className="link">{firm.phone}</a><br />
    <a href={`mailto:${firm.email}`} className="link break-all">{firm.email}</a>
  </>
);

export const docs: Record<"privacy" | "terms" | "accessibility", { title: string; lede: string; blocks: Block[] }> = {
  privacy: {
    title: "Privacy Policy",
    lede: `How ${firm.legalName} handles information collected through this website.`,
    blocks: [
      { h: "Who we are", p: [`This website is operated by ${firm.legalName} ("Loftus", "we", "us"), a heavy civil construction company based in ${firm.city}, Pennsylvania. This policy explains what information we collect through the site, how we use it and the choices you have.`] },
      { h: "Information you give us", p: ["When you use the bid request or contact form, call us or email us, you may give us your name, company or agency, phone number, email address, project details and any documents or messages you choose to send. Please do not send sensitive personal information such as Social Security numbers or financial account details through the site."] },
      { h: "Information collected automatically", p: ["Like most websites, our hosting provider and the site itself may record standard technical information when you visit, such as your IP address, browser type, device type, pages viewed, referring page and the date and time of your visit. The site may use cookies or similar technologies that are needed for it to work and to understand general site usage. You can set your browser to refuse cookies, though some features may not work as intended."] },
      { h: "How we use information", p: ["We use the information we collect to respond to inquiries and bid requests, evaluate and prepare proposals, communicate with you about projects, consider job applicants, operate, secure and improve the website, and meet our legal, regulatory and contractual obligations."] },
      { h: "How we share information", p: ["We do not sell your personal information. We may share information with service providers who help us run the website and our business, such as hosting and email providers, who may use it only to provide services to us. We may also share information with project owners, agencies or partners when needed to respond to your request, when required by law or legal process, to protect our rights, property or safety or that of others, or in connection with a merger, acquisition or sale of all or part of our business."] },
      { h: "Retention and security", p: ["We keep information for as long as needed for the purposes described in this policy, including to meet legal, accounting and record keeping requirements. We use reasonable administrative, technical and physical safeguards to protect information, but no method of transmission or storage is completely secure."] },
      { h: "Your choices", p: ["You may ask us to access, correct or delete personal information you have given us, or to stop contacting you, by using the contact details below. Depending on where you live, you may have additional rights under applicable law. We will respond to requests as required by that law."] },
      { h: "Children", p: ["This website is intended for business and public agency audiences and is not directed to children under 13. We do not knowingly collect personal information from children."] },
      { h: "Links to other sites", p: ["The site may link to websites operated by others, such as public agencies or map services. We are not responsible for the content or privacy practices of those sites."] },
      { h: "Changes to this policy", p: ["We may update this policy from time to time. The date at the top of this page shows when it was last changed."] },
      { h: "Contact", p: [contactLines] },
    ],
  },
  terms: {
    title: "Terms of Use",
    lede: "The terms that apply when you visit and use this website.",
    blocks: [
      { h: "Acceptance of these terms", p: [`This website is operated by ${firm.legalName}. By using the site you agree to these Terms of Use. If you do not agree, please do not use the site.`] },
      { h: "Information only", p: ["The site provides general information about Loftus, our capabilities and our past work. Project descriptions, photographs, dates and contract amounts are provided for information only, may be approximate and may change without notice. Nothing on the site is an offer, bid, proposal, quotation or contract, and nothing on the site is engineering, legal or other professional advice."] },
      { h: "Bid requests and inquiries", p: ["Submitting a form, email or other message through the site does not create a contract, a bid or any obligation for either party. Any work is governed only by a separate written agreement signed by an authorized representative of Loftus. By sending us information, you confirm that you have the right to share it and that it is accurate to the best of your knowledge."] },
      { h: "Acceptable use", p: ["You agree not to use the site for any unlawful purpose, to interfere with or disrupt the site or its security, to attempt to gain unauthorized access to any system or data, or to send material that is false, harmful or infringes the rights of others."] },
      { h: "Intellectual property", p: [`The content of this site, including text, photographs, graphics and logos, is owned by or licensed to ${firm.legalName} and is protected by copyright, trademark and other laws. You may view and print pages for your own informational use. You may not copy, modify, distribute or use the content for any other purpose without our written permission.`] },
      { h: "Links to other sites", p: ["Links to third party websites are provided for convenience. We do not control and are not responsible for those sites, their content or their practices."] },
      { h: "Disclaimer", p: ["The site and its content are provided \"as is\" and \"as available\" without warranties of any kind, express or implied, including warranties of accuracy, merchantability, fitness for a particular purpose and non-infringement. We do not warrant that the site will be uninterrupted, secure or free of errors."] },
      { h: "Limitation of liability", p: [`To the fullest extent permitted by law, ${firm.legalName} and its officers, employees and agents will not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of data, profits or business, arising from or related to your use of the site.`] },
      { h: "Governing law", p: ["These terms are governed by the laws of the Commonwealth of Pennsylvania, without regard to its conflict of law rules. Any dispute relating to the site will be brought in the state or federal courts located in Pennsylvania."] },
      { h: "Changes to these terms", p: ["We may update these terms from time to time. The date at the top of this page shows when they were last changed. Continued use of the site after a change means you accept the updated terms."] },
      { h: "Contact", p: [contactLines] },
    ],
  },
  accessibility: {
    title: "Accessibility",
    lede: `${firm.legalName} wants this website to be usable by everyone, including people with disabilities.`,
    blocks: [
      { h: "Our commitment", p: ["We aim for this website to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. We review the site as it changes and work to fix problems we find."] },
      { h: "What we do", p: ["The site is built with semantic page structure, text alternatives for meaningful images, visible keyboard focus, sufficient color contrast, text that can be resized, and layouts that adapt to phones, tablets and desktops. Motion effects are reduced when your device asks for reduced motion."] },
      { h: "Known limitations", p: ["Some content, such as older project photographs, documents provided by third parties or links to other websites, may not fully meet these standards. If you need information from the site in a different format, we will work with you to provide it."] },
      { h: "Feedback and assistance", p: ["If you have trouble using any part of this website, or have suggestions for improvement, please contact us. Tell us the page and the problem you found, and we will work to address it.", contactLines] },
      { h: "Review", p: ["This statement will be reviewed and updated as the site changes."] },
    ],
  },
};

export default function Legal({ doc }: { doc: keyof typeof docs }) {
  const d = docs[doc];
  return (
    <>
      <section className="page-head">
        <div className="wrap page-head-grid">
          <h1 className="display page-title legal-title" data-reveal>{d.title}</h1>
          <div data-reveal>
            <p className="lede page-lede">{d.lede}</p>
            <p className="muted mt-4 text-[15px]">Last updated {updated}</p>
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="wrap legal">
          {d.blocks.map((b) => (
            <div key={b.h} className="legal-block">
              <h2 className="h3">{b.h}</h2>
              <div className="legal-body">{b.p.map((x, i) => <p key={i}>{x}</p>)}</div>
            </div>
          ))}
          <nav className="legal-nav" aria-label="Legal">
            {(["privacy", "terms", "accessibility"] as const).filter((k) => k !== doc).map((k) => (
              <Link key={k} href={`/${k}`} className="link">{docs[k].title}</Link>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
}
