#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use async_once::AsyncOnce;
use sea_orm::{ConnectionTrait, Database, DatabaseBackend, DatabaseConnection, DbErr, QueryResult, Statement};

#[macro_use]
extern crate lazy_static;

#[macro_use]
extern crate dotenv_codegen;


pub struct Connections {
    pub conn: DatabaseConnection
}

lazy_static! {
    static ref DATABASE_CLIENT: AsyncOnce<DatabaseConnection> = {
        AsyncOnce::new(async {
            let username = dotenv!("DATABASE_USERNAME");
            let database_name = dotenv!("DATABASE_NAME");
             Database::connect(
                 format!("postgres://{}:@localhost/{}", 
                         username, database_name)).await.unwrap()
        })
    };
}

async fn test() -> Option<QueryResult>{
    let db = DATABASE_CLIENT.get().await;
    let kip = 
    db.query_one(Statement::from_string(
        DatabaseBackend::Postgres,
        "select * from public.users".to_owned(),
    ))
    .await;
    kip.unwrap()
}

#[tokio::main]
async fn main() {
    let _db = DATABASE_CLIENT.get().await;
    let result = test().await.unwrap();
    println!("{:?}", result.try_get::<i32>("id", "").unwrap());


  //tauri::Builder::default()
   // .invoke_handler(tauri::generate_handler![my_costum_command])
    //.run(tauri::generate_context!())
    //.expect("error while running tauri application");
}
