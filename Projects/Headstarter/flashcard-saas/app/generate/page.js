'use client'
import { useUser } from '@clerk/nextjs'
import { collection, getDoc, writeBatch, doc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Generate = () => {
    const { isLoaded, isSignedIn, user } = useUser()
    const [flashcard, setFlashcard] = useState([])
    const [flipped, setFlipped] = useState({})
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [open, setOpen] = useState(false)
    const router = useRouter

    const handleSubmit = async () => {
        try {
            const response = await fetch('api/generate', {
                method: 'POST',
                body: text,
            })
            const data = await response.json()
            setFlashcard(data)
        } catch (error) {
            console.error('Error generating flashcards:', error)
        }
    }

    const handleCardClick = (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const saveFlashcard = async () => {
        if (!name) {
            alert('Please enter a name')
            return
        }
        const batch = writeBatch(db)
        const userDocRef = doc(collection(db, 'users'), user.id)
        const docSnap = await getDoc(userDocRef)

        if (docSnap.exists()) {
            const flashcards = docSnap.data().flashcard || []
            if (flashcards.find((f) => f.name === name)) {
                alert('Flashcard with the same name already exists')
                return
            } else {
                flashcards.push({ name })
                batch.set(userDocRef, { flashcard: flashcards }, { merge: true })
            }
        } else {
            batch.set(userDocRef, { flashcard: [{ name }] })
        }

        const colRef = collection(userDocRef, name)
        flashcard.forEach(ele => {
            const cardDocRef = doc(colRef)
            batch.set(cardDocRef, ele)
        })

        await batch.commit()
        handleClose()
        router.push('/flashcards')
    }

    return (
        <div className='flex justify-center w-full '>
            <div className='w-1/2 min-w-[300px]'>
                <p className='text-[22px] font-semibold'>Generate Flashcard</p>
                <div className='space-x-3 mt-3 items-center '>
                    <label htmlFor='inputText'>Enter Text:</label>
                    <textarea className=' px-2 py-2 rounded-[10px] border w-full h-[200px]' name='inputText' type='text' onChange={(e) => setText(e.target.value)}></textarea>
                    <div className="flex justify-center items-center">
                        <button className='w-1/2 p-3 bg-blue-500 text-white rounded-md' onClick={handleSubmit}>Generate</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Generate
