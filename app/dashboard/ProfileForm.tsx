'use client'

export function ProfileForm({ user }: any) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image'),
    }

    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    await res.json()
  }

  return (
    <div className="">
      {/* <h2 className="text-xl mt-2">Edit your profile</h2> */}
      <form onSubmit={updateUser} className="">
        <label htmlFor="name" className="block mt-2 text-lg">
          Name
        </label>
        <input
          type="text"
          name="name"
          defaultValue={user?.name ?? ''}
          className="block mb-2 border border-gray-300 rounded-md p-1 text-gray-600"
        />
        <label htmlFor="bio" className="block text-lg">
          Bio
        </label>
        <textarea
          name="bio"
          cols={30}
          rows={10}
          defaultValue={user?.bio ?? ''}
          className="block border border-gray-300 rounded-md p-1 mb-2 text-gray-600"
        ></textarea>
        <label htmlFor="age" className="mr-2 mb-2 text-lg">
          Age:
        </label>
        <input
          type="text"
          name="age"
          defaultValue={user?.age ?? 0}
          className="mb-2 text-gray-600"
        />
        <label htmlFor="image" className="block text-lg">
          Profile Image URL
        </label>
        <input
          type="text"
          name="image"
          defaultValue={user?.image ?? ''}
          className="border border-gray-300 w-1/2 p-1 rounded-md text-gray-600 mb-2"
        />
        <button
          type="submit"
          className="block mt-2 bg-blue-600 rounded-md py-2 text-white px-3 hover:bg-blue-300"
        >
          Save
        </button>
      </form>
    </div>
  )
}
