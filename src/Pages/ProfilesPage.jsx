import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfilesPage() {
const profiles = [1, 2, 3, 4, 5]

  return (
    <div>
      {profiles.map((profile) => (
        <div key={profile}>
          <Link key={profile} to={`/profile/${profile}`}>
            Profile {profile}
          </Link>
        </div>
      ))}
      
    </div>
  )
}
