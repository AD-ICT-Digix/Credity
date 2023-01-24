import Link from 'next/link';

export const Table = ({
	data,
	headerLabels,
	renderRow
}) => {
	return (
		<div className='relative shadow-md'>
			<table className='w-full text-sm text-left text-black'>
				<thead className='text-md text-black bg-gray-50'>
					<tr>
						{headerLabels.map((label, index) => (
							<th key={`header::${index}`} scope='col' className='py-4 px-6'>
								{label}
							</th>
						))}
					</tr>
				</thead>

				{data.map((rowData, i) => {
					const { link, cellContent } = renderRow(rowData)

					return (
						<tbody key={`row::${i}}`}>
							<tr className='bg-white border-b hover:bg-mint-100 '>
								{cellContent.map((content, index) => {
									if (typeof content === 'string' || typeof content === 'number') {
										return (
											<td
												key={`row::${i}::${index}`}
												className='py-4 px-6 whitespace-nowrap'
											>
												{link ? <Link href={link}>
													{content}
												</Link> : <>{content}</>}
											</td>
										)
									}
									else {
										return (
											<td
												key={`row::${i}::${index}`}
												className='py-4 px-6 whitespace-nowrap'
											>
												{content}
											</td>
										)
									}
								})}
							</tr>
						</tbody>
					)
				})}
			</table>
		</div>
	);
};