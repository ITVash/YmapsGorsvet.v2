import { opora as oporas } from "../../api"

const actions = {
	addOpora: (items) => ({
		type: "ADD_OPORA",
		payload: items,
	}),
	getOpora: (items) => ({
		type: "GET_OPORA",
		payload: items,
	}),
	getUppOpora: (items) => ({
		type: "UPP_OPORA",
		payload: items,
	}),
	getOporaID: (id) => ({
		type: "GET_OPORA_ID",
		payload: id,
	}),
	addInfo: (items) => ({
		type: "GET_INFO",
		payload: items,
	}),
	infoCoup: (id) => (dispatch, getState) => {
		const { coup } = getState()
		const { items } = coup
		items.map((item) => {
			if (item.id === id) {
				const upp = { ...item, coupTitle: item.title, funcCoup: item.func }
				dispatch(actions.addInfo(upp))
			}
			return items
		})
	},
	fetchAddOpora: (oporaData) => (dispatch) => {
		oporas.addOpora(oporaData).then(({ data }) => {
			dispatch(actions.addOpora(data))
		})
	},
	fetchOpora: () => (dispatch) => {
		oporas.getAll().then(({ data }) => {
			dispatch(actions.getOpora(data))
		})
	},
	fetchUppOpora: (oporaData) => (dispatch, getState) => {
		const { opora } = getState()
		const { currentID } = opora
		oporas
			.uppOpora(currentID, oporaData)
			.then(({ data }) => {
				dispatch(actions.getUppOpora(data))
			})
			.catch((err) => {
				console.error(
					`Ошибка при запросе обновления данных на сервере. Ошибка: ${err}`,
				)
			})
	},
}
export default actions
