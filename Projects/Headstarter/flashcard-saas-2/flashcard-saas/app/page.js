import getStripe from "@/utilis/get_stripe";
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <>


      <div className='text-center m-8'>
        <p className='text-[36px] font-semibold'>Welcome, to Ai-Powered flashcard</p>
        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
        <button className='mt-3 px-3 py-2 rounded-[10px] bg-blue-600 text-white'>Get Started </button>
      </div>

      <div className='mx-6 my-4 space-y-5'>
        <p className='text-[24px]'>Features</p>
        <div className='flex gap-5'>
          <div className='border rounded-[12px] p-5'>
            <p className='text-lg'>Easy Text Input</p>
            <p>orem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
          <div className='border rounded-[12px] p-5'>
            <p className='text-lg'>Smart AI flash Card</p>
            <p>orem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
          <div className='border rounded-[12px] p-5'>
            <p className='text-lg'>QAN with the AI</p>
            <p>orem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
        </div>
      </div>

      <div className='mx-6 my-4 space-y-5'>
        <p className='text-[24px]'>Pricing</p>
        <div className='flex gap-5'>
          <div className='border rounded-[12px] p-5 text-center w-full'>
            <p className='text-[26px] font-medium'>Basic</p>
            <p>Free</p>
            <p>Get a limit of 20 questions per day</p>
            <button className='mt-3 px-3 py-2 rounded-[10px] bg-blue-600 text-white'>Choose Basic</button>

          </div>
          <div className='border rounded-[12px] p-5 text-center w-full'>
            <p className='text-[26px] font-medium'>Recomended</p>
            <p className='font-light'>$ 10 / month</p>
            <p>Unlimited FlashCards and Storage with Support</p>
            <button className='mt-3 px-3 py-2 rounded-[10px] bg-blue-600 text-white'>Choose Basic</button>

          </div>
          <div className='border rounded-[12px] p-5 text-center w-full'>
            <p className='text-[26px] font-medium'>Premium</p>
            <p>$ 20 / month</p>
            <p>Unlimited FlashCards and Storage with Support</p>
            <button className='mt-3 px-3 py-2 rounded-[10px] bg-blue-600 text-white'>Choose Basic</button>
          </div>
        </div>
      </div>
    </>
  );
}
