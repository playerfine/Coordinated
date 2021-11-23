#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod slaap;

#[tauri::command]
fn my_costum_command() {
    slaap::slaap();
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![my_costum_command])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
