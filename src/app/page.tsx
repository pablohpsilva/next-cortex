import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

interface ImageData {
  src: string;
  alt: string;
}

function ImageWithText({ src, alt }: ImageData) {
  return (
    <div className='flex flex-col items-center justify-center gap-2 w-full md:w-[300px]'>
      <div className='text-2xl font-light'>{alt}</div>
      <Image src={src} alt={alt} width={92} height={92} />
    </div>
  );
}

function ImageGrid({ images }: { images: ImageData[] }) {
  return (
    <div className='flex w-full flex-col md:flex-row items-center justify-center gap-4 mb-12'>
      {images.map((imageData, index) => (
        <ImageWithText key={index} {...imageData} />
      ))}
    </div>
  );
}

function Separator({
  children,
  id,
  className = '',
}: {
  children: ReactNode;
  id: string;
  className?: string;
}) {
  return (
    <div
      id={id}
      className={`relative flex items-center justify-center py-8 text-4xl text-white w-full font-light ${className}`}
      style={{
        background: `linear-gradient(86deg, #011936 0%, #590C6F 100%)`,
      }}
    >
      <hr
        className="
        after:content-['']
        after:absolute
        after:left-0
        after:right-0
        after:top-6
        after:h-[1px]
        after:w-full
        after:bg-white
      "
      />
      <hr
        className="
        after:content-['']
        after:absolute
        after:left-0
        after:right-0
        after:top-3
        after:h-[1px]
        after:w-[50%]
        after:bg-white
        before:content-['']
        before:absolute
        before:left-[calc(50%-3px)]
        before:top-[10px]
        before:z-[2]
        before:h-[6px]
        before:w-[6px]
        before:rounded
        before:bg-white
      "
      />
      {children}
      <hr
        className="
        after:content-['']
        after:absolute
        after:left-0
        after:right-0
        after:bottom-6
        after:h-[1px]
        after:w-full
        after:bg-white
      "
      />
      <hr
        className="
        after:content-['']
        after:absolute
        after:right-0
        after:right-0
        after:bottom-3
        after:h-[1px]
        after:w-[50%]
        after:bg-white
        before:content-['']
        before:absolute
        before:left-[calc(50%-3px)]
        before:bottom-[10px]
        before:z-[2]
        before:h-[6px]
        before:w-[6px]
        before:rounded
        before:bg-white
      "
      />
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>
          NextCortex - leverage technology to create a better future!
        </title>
      </Head>
      <nav className='sticky top-0 z-10 flex h-20 flex-row justify-center gap-12 bg-white py-8'>
        <div className='mr-8 flex items-center justify-between gap-4 text-sm font-bold'>
          <Image
            src='/images/logo.png'
            alt='NextCortex logo'
            width={60}
            height={60}
          />
          <span>
            corte<span className='font-xl'>X</span>
          </span>
        </div>

        <div className='flex items-center justify-between text-sm font-bold'>
          <Link href='/#about'>About</Link>
        </div>

        {/* <div className='flex items-center justify-between text-sm font-bold'>
          <Link href='#the-team'>The Team</Link>
        </div> */}

        <div className='flex items-center justify-between text-sm font-bold'>
          <Link href='/#expertise'>Expertise</Link>
        </div>
      </nav>

      <section className='bg-[#FDF8FF] py-24'>
        <div className='flex w-full justify-center text-3xl text-[#590C6F]'>
          Welcome to
        </div>
        <div className='mt-12 flex w-full justify-center text-9xl font-bold text-[#590C6F]'>
          Next corteX
        </div>
        <div className='flex flex-row items-center justify-center'>
          <Image
            src='/images/tree.jpeg'
            alt='Tree'
            width={768}
            height={768}
            className='rounded-full'
          />
        </div>
        <div className='flex w-full justify-center text-3xl'>
          here we create the future
        </div>
      </section>

      <section className='bg-[#FDF8FF]'>
        <Separator id='#about'>About</Separator>
        <div className='relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col items-center justify-start pb-12 text-center'>
          <div
            className="
            relative
            flex
            min-h-[700px]
            flex-row
            items-center
            justify-center
            gap-20
            before:absolute
            before:left-[calc(50%-4px)]
            before:top-[98%]
            before:z-[2]
            before:h-[8px]
            before:w-[8px]
            before:rounded
            before:bg-[#590C6F]
            before:content-['']
            after:absolute
            after:left-[calc(50%-1px)]
            after:top-0
            after:z-[2]
            after:h-[98%]
            after:w-[2px]
            after:bg-[#590C6F]
            after:content-['']
          "
          >
            <div className='w-full flex justify-center flex-col items-center'>
              <div
                className="
                relative
                w-full
                py-4
                text-[#590C6F]
                text-2xl
                font-bold
                before:absolute
                before:left-[30%]
                before:top-[calc(50%-4px)]
                before:z-[2]
                before:h-[8px]
                before:w-[8px]
                before:rounded
                before:bg-[#590C6F]
                before:content-['']
                after:absolute
                after:left-0
                after:top-[calc(50%-1px)]
                after:z-[2]
                after:h-[2px]
                after:w-[30%]
                after:bg-[#590C6F]
                after:content-['']
              "
              >
                Our goal is simple
              </div>
              <div className='text-3xl font-light text-[#011936] max-w-[500px] text-center'>
                to leverage technology to create a better future!
              </div>
            </div>

            <div
              className="
              relative
              w-full
              pr-8
              text-justify
              text-2xl
              font-normal
              after:absolute
              after:w-[2px]
              after:content-['']
            "
            >
              We are an emergent cutting-edge company at the forefront of the
              digital revolution, specializing in Web3 and AI consultancy. We
              empower businesses to harness the limitless potential of emerging
              technologies and unlock unprecedented growth opportunities. As
              industry experts, we combine deep expertise in Web3 technologies,
              including blockchain, decentralized applications, and smart
              contracts, with our profound understanding of artificial
              intelligence. By synergizing these transformative forces, we help
              our clients navigate the complex digital landscape, enabling them
              to stay ahead of the curve and achieve sustainable success.
            </div>
          </div>

          <div className='text-2xl font-bold text-[#590C6F]'>
            We value to be
          </div>

          <div className='py-12'>
            <ImageGrid
              images={[
                { src: '/images/entrepreneurial.png', alt: 'Entrepreneurial' },
                { src: '/images/data-driven.png', alt: 'Data Driven' },
                { src: '/images/innovative.png', alt: 'Innovative' },
              ]}
            />
            <ImageGrid
              images={[
                { src: '/images/focused.png', alt: 'Focused' },
                { src: '/images/together.png', alt: 'Together' },
                { src: '/images/grateful.png', alt: 'Grateful' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className='bg-[#FDF8FF]'>
        <Separator id='#expertise'>Expertise</Separator>
        <div
          className="
            relative
            flex
            min-h-[700px]
            flex-row
            items-center
            justify-center
            gap-20
            after:absolute
            after:left-[calc(50%+2px)]
            after:top-0
            after:z-[2]
            after:h-[98%]
            after:w-[2px]
            after:bg-[#590C6F]
            after:content-['']
            before:absolute
            before:left-[calc(50%-2px)]
            before:top-0
            before:z-[2]
            before:h-[98%]
            before:w-[2px]
            before:bg-[#590C6F]
            before:content-['']
            "
        >
          <div className='w-full flex justify-center flex-col text-center gap-20 items-center'>
            <div className='text-center max-w-[450px]'>
              <h3 className='mb-4 font-light text-3xl'>Smart Contract Audit</h3>
              <p className='text-[#590C6F] text-2xl font-light'>
                If you need to ensure the quality of your Smart contracts rely
                on us to inspect them for you!
              </p>
            </div>

            <div className='text-center max-w-[450px]'>
              <h3 className='mb-4 font-light text-3xl'>
                Taylor made projects, including Web3 and A.I. integration
              </h3>
              <p className='text-[#590C6F] text-2xl font-light'>
                We dive deep into your business to understand it and propose the
                highest value projects for your company!
              </p>
            </div>
          </div>

          <div className='w-full flex justify-center flex-col items-center'>
            <h3 className='text-3xl font-light'>To know more</h3>
            <Link href='#' className='w-full flex justify-center'>
              <Separator className='max-w-[340px]' id='contact-us'>
                Contact Us
              </Separator>
            </Link>
          </div>
        </div>
      </section>

      <section className='bg-[#FDF8FF] flex justify-center'>
        <div className='my-12 flex flex-row gap-8'>
          <Link href='/'>
            <Image
              src='/images/twitter.png'
              height={50}
              width={50}
              alt='twitter'
            />
          </Link>
          <Link href='/'>
            <Image
              src='/images/telegram.png'
              height={50}
              width={50}
              alt='telegram'
            />
          </Link>
          <Link href='/'>
            <Image
              src='/images/instagram.png'
              height={50}
              width={50}
              alt='instagram'
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
