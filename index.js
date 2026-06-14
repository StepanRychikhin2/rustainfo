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
	sendMessage('Bot online 😎')
})

client.sendRequest(() => {
	client.getMapMarkers((data) => {
		console.log(data)
	})
})

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.on('line', (input) => {
	if (input === '/heli') {
		// console.log(getMapMarkers())
		// sendMessage(input)
	}
})

client.connect()
