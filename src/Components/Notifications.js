import React from 'react'

export default function Notifications() {
  return (
    <main className='py-5 px-3'>
      <div className='flex items-center justify-between'>
        <div className='flex items-start gap-3'>
          <span className='font-extrabold text-veryDarkBlue text-2xl capitalize'>notifications</span>
          <span className='bg-blue text-white font-bold px-4 py-1 rounded-md'>3</span>
        </div>
        <a href="/" className='font-bold text-sm text-grayishBlue'>Mark all as read</a>
      </div>
    </main>
  )
}
