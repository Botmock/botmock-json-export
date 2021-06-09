import { Client, Resource } from "@botmock/client";
import { FileWriter } from '@botmock/export';

// see http://help.botmock.com/en/articles/2334581-developer-api on how to setup Developer Token
const BOTMOCK_TOKEN = '';
const PROJECT_ID = '';
const BOARD_ID = '';
const TEAM_ID = '';


// create an instance of Botmock Client
const client = new Client();

(async () => {
  const board = await client.withToken(BOTMOCK_TOKEN).getBoard(TEAM_ID, PROJECT_ID, BOARD_ID);
  const data = {
  	'./': [
  	{'filename': 'output.json', 'data': board}
  	]
  }  
  const writeResult = await (new FileWriter({ directoryRoot: "./output" })).writeAllResourcesToFiles({ data });
})();
