import { Client } from 'pg';

const pgClient = new Client("postgresql://todo-app_owner:cZjtSlKeF15N@ep-cool-boat-a1o5ifpo.ap-southeast-1.aws.neon.tech/todo-app?sslmode=require");

// const pgClient = new Client({
//     user: "todo-app_owner",
//     password: "cZjtSlKeF15N",
//     port: 5432,
//     host:"ep-cool-boat-a1o5ifpo.ap-southeast-1.aws.neon.tech",
//     database:"neondb",
//     ssl: true
// })


async function main() {
    await pgClient.connect();

    const response = await pgClient.query("select * from users")
    console.log(response.rows);


    
}

main();