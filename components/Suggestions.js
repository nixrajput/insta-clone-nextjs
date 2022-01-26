import { suggestions } from './fakeData';

function Suggestions() {
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">
          Suggestions for you
        </h3>
        <button className="text-gray-600 font-semibold">
          See All
        </button>
      </div>

      {
        suggestions.map(profile => (
          <div key={profile.id}
            className='flex items-center justify-between mt-3'>

            <img src={profile.avatar} alt=""
              className='w-10 h-10 rounded-full border p-[2px] object-cover'
            />

            <div className='flex-1 ml-4'>
              <h2 className='font-semibold text-sm'>{profile.username}</h2>
              <h3 className='text-xs text-gray-400'>New to Insta 2.0</h3>
            </div>

            <button className='text-blue-400 text-xs font-bold'>Follow</button>

          </div>
        ))
      }

    </div>
  )
}

export default Suggestions;
