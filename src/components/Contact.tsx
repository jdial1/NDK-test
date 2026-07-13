import { contactDetails } from '../data';

export default function Contact() {
  return (
    <section className="pt-10 md:pt-14 pb-24 md:pb-32">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 space-y-8">
        <h2 className="font-sans text-[22px] md:text-[28px] font-medium tracking-tight text-black">
          Contact
        </h2>
        <div className="font-sans text-[14px] md:text-[15px] leading-[1.7] text-black space-y-2">
          <p>
            e:{' '}
            <a
              href={`mailto:${contactDetails.email}`}
              className="underline underline-offset-[3px]"
            >
              {contactDetails.email}
            </a>
          </p>
          <p>
            <a
              href={contactDetails.harwoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-[3px]"
            >
              Harwood Museum of Art
            </a>
          </p>
          <p>
            <a
              href={contactDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-[3px]"
            >
              LinkedIn
            </a>
          </p>
          <p className="text-[#666]">Taos, New Mexico</p>
        </div>
      </div>
    </section>
  );
}
