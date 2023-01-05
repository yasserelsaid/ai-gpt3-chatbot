import { Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'
import Image from 'next/image'

function Home() {
  return (
    <Page className='flex flex-col gap-12 px-6'>
      <section className='flex flex-col gap-6'>
        <div className='flex gap-6 items-center'>
          <Text variant='h1'>Introducing ChadGPT</Text>
          <Image src='/favicon.png' width={70} height={70} alt='gigachad' />
        </div>
        <Text className='text-zinc-600'>
          He's like ChatGPT, except he's an absolute CHAD!
        </Text>
      </section>
      <section className='flex flex-col gap-3'>
        {/* <Text variant='h2'>AI Chat Bot:</Text> */}
        <div className='lg:w-2/3'>
          <Chat />
        </div>
      </section>
      <h4>
        Made by{' '}
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.linkedin.com/in/yasserelsaid/'
          className=' text-lightblue'
        >
          Yasser
        </a>
        ,
        <a
          target='_blank'
          rel='noreferrer'
          href='https://twitter.com/yasser_elsaid_'
          className=' text-lightblue'
        >
          {' '}
          Twitter
        </a>
      </h4>
      <h4>
        Check out my other projects:
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.essaypal.ai'
          className=' text-lightblue'
        >
          {' '}
          EssayPal.ai
        </a>
        ,
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.ratemycourses.io'
          className=' text-lightblue'
        >
          {' '}
          RateMyCourses.io
        </a>
      </h4>
    </Page>
  )
}

// Home.Layout = Layout;

export default Home
