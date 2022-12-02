import { LoaderInline } from './LoaderInline'

export const Button = ({loading, children, ...props}) => {
	return (
		<button
			{...props}
			type='button'
			className='
				text-white
				font-semibold
				disabled:bg-indigo-300
				bg-indigo-500
				:hover:bg-indigo-600
				focus:ring-4
				focus:ring-blue-300
				rounded-full
				h-12
				px-16
				focus:outline-none
				flex
				items-center
				justify-center
			'
		>{loading ? <LoaderInline/> : children}</button>
	)
}