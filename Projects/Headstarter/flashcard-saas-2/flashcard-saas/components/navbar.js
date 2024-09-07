import React from 'react'
import Head from "next/head";
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const NavBar = () => {
    return (
        <>
            <Head>
                <title>Flash Card</title>
                <meta name="description" content="Create FlashCard from your text" />
            </Head>

            <nav className='flex  px-8 py-3 justify-between bg-[#8f5f28] text-white'>
                <p className='text-[20px]'>AI-FlaskCard</p>
                <div>
                    <SignedOut className=''>
                        <Link href='/sign-in'> Login </Link>
                        <Link href='/sign-up'> Sign Up </Link>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </nav>
        </>
    )
}

export default NavBar