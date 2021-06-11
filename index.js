import { Client, Resource } from "@botmock/client";
import { FileWriter } from '@botmock/export';
import {env} from './env.js'

// see http://help.botmock.com/en/articles/2334581-developer-api on how to setup Developer Token


// create an instance of Botmock Client
const client = new Client();

(async () => {
  let board = null;
  try {
    if(!env.INCLUDE_JUMP_BLOCKS) 
    {
      board = await client.withToken(BOTMOCK_TOKEN).getBoard(env.BOTMOCK_TEAM_ID, env.BOTMOCK_PROJECT_ID, env.BOTMOCK_BOARD_ID);
    } else {
      board = await client.withToken(env.BOTMOCK_TOKEN).createBuildProject(env.BOTMOCK_TEAM_ID, env.BOTMOCK_PROJECT_ID)
    }
  } catch (error) {
    console.log(error)
  }
  const data = {
  	'./': [
  	{'filename': 'output.json', 'data': board}
  	]
  }  
  const writeResult = await (new FileWriter({ directoryRoot: "./output" })).writeAllResourcesToFiles({ data });
})();
