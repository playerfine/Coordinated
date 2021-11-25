#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use async_once::AsyncOnce;
use sea_orm::{Database, DatabaseConnection};

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

#[tokio::main]
async fn main() {
    println!("{:?}", DATABASE_CLIENT.get().await);
  //tauri::Builder::default()
   // .invoke_handler(tauri::generate_handler![my_costum_command])
    //.run(tauri::generate_context!())
    //.expect("error while running tauri application");
}
