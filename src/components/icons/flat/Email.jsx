import sizeList from '../sizeList'

const Email = ({ size = 'md' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`w-${sizeList[size]} h-${sizeList[size]}`}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z' />
      <path d='M3 7l9 6l9 -6' />
    </svg>
  )
}

export default Email