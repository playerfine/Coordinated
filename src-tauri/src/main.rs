#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use async_once::AsyncOnce;
use sea_orm::{ConnectionTrait, Database, DatabaseBackend, DatabaseConnection, DbErr, ExecResult, QueryResult, Statement};

#[macro_use]
extern crate lazy_static;

pub struct Connections {
    pub conn: DatabaseConnection
}

lazy_static! {
    static ref DATABASE_CLIENT: AsyncOnce<DatabaseConnection> = {
        AsyncOnce::new(async {
             Database::connect("postgres://lonsqlapis:@localhost/coordinoted").await.unwrap()
        })
    };
}

async fn test() -> Result<Option<QueryResult>, DbErr>{
    let db = DATABASE_CLIENT.get().await;
    return db
    .query_one(Statement::from_string(
        DatabaseBackend::Postgres,
        "select * from information_schema.tables".to_owned(),
    ))
    .await
}

#[tokio::main]
async fn main() {
    let db = DATABASE_CLIENT.get().await;
    println!("{:#?}", test().await);

  //tauri::Builder::default()
   // .invoke_handler(tauri::generate_handler![my_costum_command])
    //.run(tauri::generate_context!())
    //.expect("error while running tauri application");
}
