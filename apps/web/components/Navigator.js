import Link from 'next/link';
import { useRouter } from 'next/router';
import FeatherIcon from 'feather-icons-react';

export const Navigator = ({ children, signOut, user }) => {
	const router = useRouter();
	const menuItems = [
		{
			href: '/',
			title: 'Homepage',
			icon: 'home',
		},
		{
			href: '/expo/dashboard',
			title: 'Expo Dashboard',
			icon: 'bar-chart',
		},
		{
			href: '/expo/form',
			title: 'Expo Form',
			icon: 'check-square',
		},
		{
			href: '/stand/dashboard',
			title: 'Stand Dashboard',
			icon: 'pie-chart',
		},
		{
			href: '/stand/form',
			title: 'Stand Form',
			icon: 'check-circle',
		},
	];

	return (
		<div className='min-h-screen flex flex-col'>
			<header className='bg-black sticky top-0 h-14 flex items-center font-semibold uppercase'>
				<div className='flex flex-1 justify-between'>
				USER: {user}
				</div>
					<div className='flex flex-1 justify-end'>
				{user &&
					<li className='m-2'>
						<button onClick={signOut}
							className='inline-flex relative items-center p-3 text-sm font-medium text-center text-white bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'>
							<div className='flex flex-1 justify-between margin-left'>
								<FeatherIcon icon='log-out'/>
							</div>
						</button>
					</li>
				}
				</div>
			</header>
			<div className='flex flex-col md:flex-row flex-1' >
				<aside className='bg-black-500 w-full md:w-60 '>
					<nav>
						<ul>
							{menuItems.map(({ href, title, icon }) => (
								<li className='m-2' key={title}>
									<Link href={href}
										className={`flex p-2 bg-black-200 rounded hover:bg-indigo-400 cursor-pointer ${router.asPath === href && 'bg-indigo-600 text-white'
											}`}
									>
										<div className='flex flex-1 justify-between'>
											<span className='text-md'>{title}</span>
											<FeatherIcon icon={icon} />
										</div>
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</aside>
				<main className='flex-1'>{children}</main>
			</div>
		</div>
	);
}