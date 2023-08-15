import Head from 'next/head';
import Image from 'next/image';
import type { ReactNode } from 'react';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';

interface ImageData {
  src: string;
  alt: string;
}

function ImageWithText({ src, alt }: ImageData) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Image src={src} alt={alt} width={64} height={64} />
      <div>{alt}</div>
    </div>
  );
}

function ImageGrid({ images }: { images: ImageData[] }) {
  return (
    <div className='flex w-full flex-row items-center justify-center gap-12'>
      {images.map((imageData, index) => (
        <ImageWithText key={index} {...imageData} />
      ))}
    </div>
  );
}

function Separator({ children, id }: { children: ReactNode; id: string }) {
  return (
    <div
      id={id}
      className="
        relative
        flex
        items-center
        justify-center
        py-8
        text-4xl
        text-white
        before:absolute
        before:bottom-6
        before:left-0
        before:right-0
        before:h-[1px]
        before:w-full
        before:bg-white
        before:content-['']
        after:absolute
        after:left-0
        after:right-0
        after:top-6
        after:h-[1px]
        after:w-full
        after:bg-white
        after:content-['']
      "
      style={{
        background: `linear-gradient(86deg, #011936 0%, #590C6F 100%)`,
      }}
    >
      {children}
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
          <a href='#about'>About</a>
        </div>

        <div className='flex items-center justify-between text-sm font-bold'>
          <a href='#the-team'>The Team</a>
        </div>

        <div className='flex items-center justify-between text-sm font-bold'>
          <a href='#expertise'>Expertise</a>
        </div>
      </nav>

      <section className='bg-[#FDF8FF] py-24'>
        <div className='flex w-full justify-center text-3xl'>Welcome to</div>
        <div className='mt-12 flex w-full justify-center text-9xl font-bold'>
          Next corteX
        </div>
        <div className='flex flex-row items-center justify-center'>
          <Image
            src='/images/tree.jpeg'
            alt='NextCortex logo'
            width={768}
            height={768}
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
            before:bg-blue-500
            before:content-['']
            after:absolute
            after:left-[calc(50%-1px)]
            after:top-0
            after:z-[2]
            after:h-[98%]
            after:w-[2px]
            after:bg-blue-500
            after:content-['']
          "
          >
            <div className='w-full'>
              <div
                className="
                relative
                w-full
                py-4
                before:absolute
                before:left-[30%]
                before:top-[calc(50%-4px)]
                before:z-[2]
                before:h-[8px]
                before:w-[8px]
                before:rounded
                before:bg-blue-500
                before:content-['']
                after:absolute
                after:left-0
                after:top-[calc(50%-1px)]
                after:z-[2]
                after:h-[2px]
                after:w-[30%]
                after:bg-blue-500
                after:content-['']
              "
              >
                Our goal is simple
              </div>
              <div>to leverage technology to create a better future!</div>
            </div>

            <div
              className="
              relative
              w-full
              pr-8
              text-justify
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

          <div className='text-2xl font-bold'>We value to be</div>

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
        <div className='relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col items-center justify-center py-12 text-center'>
          <Logo className='w-16' />
          <h1 className='mt-4'>Next.js + Tailwind CSS + TypeScript Starter</h1>
          <p className='mt-2 text-sm text-gray-800'>
            A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
            Import, Seo, Link component, pre-configured with Husky{' '}
          </p>

          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By Theodorus Clarence
          </footer>
        </div>
      </section>
    </main>
  );
}
