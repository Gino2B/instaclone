function Story({ img, username }) {
  return (
    <div>
      <img
        className="p-{1.5px} h-14 w-14 transform cursor-pointer rounded-full border-2 border-red-500 object-contain transition duration-200 ease-out hover:scale-110"
        src={img}
        alt={`${img}'s Profile Picture`}
      />
      <p className="w-14 truncate text-center text-xs">{username}</p>
    </div>
  )
}

export default Story
