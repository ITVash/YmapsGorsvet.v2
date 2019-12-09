import React from 'react';
import classNames from 'classnames';
import { Input } from 'antd';

import './style.scss';

const TitleBox = ({
	className,
	title,
	area,
	edit,
	column,
	base,
	editBase,
	coup,
	access,
}) => {
	return (
		<div className={classNames(`${className}__title`)}>
			{edit ? (
				<>
					<label htmlFor=''>
						{className === "info-box" ? "Название шкафа" : "Название опоры"}
					</label>
					<Input
						value={title[0]}
						onChange={e => editBase({ ...base, [column[0]]: e.target.value })}
						style={{ width: "90%" }}
					/>
					<span>
						{className === "info-opora" && (
							<select
								name='areasID'
								className='opt'
								value={title[3]}
								onChange={e =>
									editBase({ ...base, [column[2]]: e.target.value })
								}>
								<option value='0'>Шкаф Управления</option>
								{coup.map(item => (
									<option key={item.id} value={item.id}>
										{item.title}
									</option>
								))}
							</select>
						)}
						<select
							name='areasID'
							className='opt'
							value={title[1]}
							onChange={e =>
								editBase({ ...base, [column[1]]: e.target.value })
							}>
							<option value='0'>Район расположения</option>
							<option value='1'>Ворошиловский район</option>
							<option value='2'>Киевский район</option>
							<option value='3'>Калининский район</option>
							<option value='4'>Куйбышевский район</option>
							<option value='5'>Ленинский район</option>
							<option value='6'>Кировский район</option>
							<option value='7'>Петровский район</option>
							<option value='8'>Буденовский район</option>
							<option value='9'>Пролетарский райое</option>
						</select>
					</span>
				</>
			) : (
				<>
					<h3>{title[0]}</h3>
					<span>
						{className === "info-box" ? (
							area
						) : (
							<>
								<span className='link-coup'>{title[2] && title[2]}</span>
								&nbsp;&nbsp;
								{area}
							</>
						)}
					</span>
				</>
			)}
		</div>
	);
};

export default TitleBox;
