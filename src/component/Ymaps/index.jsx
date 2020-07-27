import React from "react"
import { YMaps, Map, Placemark, Clusterer } from "react-yandex-maps"
import { useSelector, useDispatch } from "react-redux"
//import { InfoOpora } from '../../component';

import { InfoBox } from "../../container"
import { coupActions, oporaActions, svetActions } from "../../redux/actions"
import "./style.scss"
const mapData = {
	center: [48.015875, 37.801341],
	zoom: 12,
}
const Ymaps = (props) => {
	const { coups, oporas, svets, access, info } = useSelector(
		({ coup, opora, svet, auth }) => ({
			coups: coup.items,
			oporas: opora.items,
			info: opora.info,
			svets: svet.items,
			access: auth.items.access,
		}),
	)
	const [coup, setCoup] = React.useState(null)
	const [opora, setOpora] = React.useState(null)
	const dispatch = useDispatch()
	const func = (val) => {
		if (val === true || val === 1) {
			return 1
		} else if (val === false || val === 0) return 0
	}
	return (
		<YMaps>
			<Map defaultState={mapData} width='100%' height='100vh'>
				<Clusterer
					options={{
						preset: "islands#invertedVioletClusterIcons",
						groupByCoordinates: false,
						clusterDisableClickZoom: true,
						clusterHideIconOnBalloonOpen: false,
						geoObjectHideIconOnBalloonOpen: false,
					}}
				>
					{coups.map((item) => (
						<Placemark
							key={item.id}
							geometry={[item.lat, item.lng]}
							onClick={() => {
								setCoup(item)
								dispatch(coupActions.getCurrentID(item.id))
								const Info = document.querySelector(".info-box")
								Info.classList.add("open")
							}}
							modules={["geoObject.addon.hint"]}
							properties={{
								hintContent: `${item.title}`,
							}}
							options={{
								iconLayout: "default#image",
								iconImageHref: `./img/${item.areaID}_control_${func(
									item.func,
								)}.png`,
								iconImageSize: [20, 20],
								iconImageOffset: [-10, -10],
							}}
						/>
					))}
				</Clusterer>
				<Clusterer
					options={{
						preset: "islands#invertedVioletClusterIcons",
						groupByCoordinates: false,
						clusterDisableClickZoom: true,
						clusterHideIconOnBalloonOpen: false,
						geoObjectHideIconOnBalloonOpen: false,
					}}
				>
					{oporas.map((item) => (
						<Placemark
							key={item.id}
							geometry={[item.lat, item.lng]}
							onClick={() => {
								setOpora(item)
								dispatch(oporaActions.getOporaID(item.id))
								dispatch(oporaActions.infoCoup(item.coupID))
								dispatch(svetActions.fetchSvet(item.id))
								const InfoOpora = document.querySelector(".info-opora")
								InfoOpora.classList.add("open")
							}}
							modules={["geoObject.addon.hint"]}
							properties={{
								hintContent: `${item.title}`,
							}}
							options={{
								iconLayout: "default#image",
								iconImageHref:
									info.funcCoup === 1 || true
										? `./img/${item.areaID}_opora_${func(item.func)}.png`
										: `./img/${item.areaID}_opora_0.png`,
								iconImageSize: [10, 10],
								iconImageOffset: [-5, -5],
							}}
						/>
					))}
				</Clusterer>
				{coup && (
					<InfoBox
						className='info-box'
						items={coup}
						editItems={setCoup}
						uppData={coupActions.fetchUppCoup}
						edit={access >= 5}
						access={access}
					/>
				)}
				{opora && (
					<InfoBox
						className='info-opora'
						items={opora}
						editItems={setOpora}
						uppData={oporaActions.fetchUppOpora}
						svets={svets}
						info={info}
						onSelectCoup={coupActions.getCurrentID}
						fetchUppSvet={svetActions.fetchUppSvet}
						fetchAddSvet={svetActions.fetchAddSvet}
						deleteSvet={svetActions.deleteSvet}
						edit={access >= 5}
						access={access}
					/>
				)}
			</Map>
		</YMaps>
	)
}

export default Ymaps
