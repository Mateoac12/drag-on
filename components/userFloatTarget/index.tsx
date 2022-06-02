import { IGitHubProfile } from "../../types/users"

interface Props {
  user: IGitHubProfile
  horizontal?: 'left' | 'right'
  vertical?: 'top' | 'bottom'
}

const UserFloatTarget = ({ user, horizontal = "left", vertical = "top" }: Props) => {
  const [h, v] = [horizontal === 'left' ? 'left-4' : 'right-4', vertical === 'top' ? 'top-4' : 'bottom-4']

  return <article className={`absolute p-4 rounded-2xl bg-white/80 flex gap-4 items-center ${h} ${v}`}>
    <div>
      <h3 className="text-lg">{user.name}</h3>
      <p className="text-xs text-slate-600">{user.email}</p>
    </div>
    <img src={user.image} alt={user.name} className="w-12 h-12 rounded-full" />
  </article>
}

export default UserFloatTarget