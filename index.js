import RustPlus from '@liamcottle/rustplus.js'
import readline from 'readline'

const client = new RustPlus(
	'57.128.211.32',
	28082,
	'76561199387477916',
	'-1444855719',
)

function sendMessage(text) {
	client.sendRequest(
		{
			sendTeamMessage: {
				message: text,
			},
		},
		console.log,
	)
}

client.on('connected', () => {
	console.log('Connected!')
	// client.getMapMarkers((data) => {
	// 	console.log(data)
	// })
	// client.getMapMarkers()
	// client.sendRequest(
	// 	{
	// 		getMapMarkers: {},
	// 	},
	// 	(message) => {
	// 		console.log(message)
	// 	},
	// )
	// client.getMapMarkers()
	// client.sendRequest(
	// 	{
	// 		// amountInStock: "5",
	// 		getTime: {},
	// 	},
	// 	(message) => {
	// 		console.log(message)
	// 	},
	// )
	client.sendRequest(
		{
			// amountInStock: "5",
			getInfo: {},
		},
		(message) => {
			console.log(message)
		},
	)
	
	// client.getTime(())
	sendMessage('Bot online 😎')
})

client.connect()
