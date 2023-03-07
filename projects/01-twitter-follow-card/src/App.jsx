import './App.css'
import { TwitterFollowCard } from './assets/components/TwitterFollowCard'
import { USERS } from './assets/services/users'

function App () {
  return (
    <div className='App'>
      {
        USERS.map(({ id, name, userName, isFollowing }) => (
          <TwitterFollowCard
            key={id}
            name={name}
            userName={userName}
            isFollowing={isFollowing}
          />
        ))
      }
    </div>
  )
}

export default App
