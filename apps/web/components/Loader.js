import Lottie from 'lottie-react'
import loadingAnimation from '../assets/animations/loading.json'

export const Loader = ({
	label = 'Laden...'
}) => {
	return (
		<div className='p-4 flex flex-col items-center justify-center'>
			<Lottie
				animationData={loadingAnimation}
				loop={true}
				className='w-[32px] h-[32px]'
			/>
			<p className='mt-2 text-center text-mint-500 text-[.75rem] tracking-widest uppercase font-medium'>{label}</p>
		</div>
	)
}